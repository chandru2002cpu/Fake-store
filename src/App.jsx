import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import CartModal from './CartModal';

/**
 * Main App Component
 * Manages application state for products, cart, and modal visibility
 * Fetches products from Fake Store API and handles cart operations
 */
function App() {
  // State management
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Fetch categories from Fake Store API on component mount
   */
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  /**
   * Fetch products from Fake Store API
   * Uses different endpoints based on category selection
   */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url = 'https://fakestoreapi.com/products';
        
        // Use category-specific endpoint if a category is selected
        if (selectedCategory !== 'all') {
          url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
        }
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data = await response.json();
        setAllProducts(data);
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  /**
   * Apply sorting when sortBy changes
   */
  useEffect(() => {
    const sortProducts = () => {
      let sorted = [...allProducts];
      
      switch (sortBy) {
        case 'price-low':
          sorted.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          sorted.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          sorted.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'name-desc':
          sorted.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case 'rating':
          sorted.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
          break;
        default:
          // Keep original order
          break;
      }
      
      setProducts(sorted);
    };

    sortProducts();
  }, [sortBy, allProducts]);

  /**
   * Add product to cart
   * Shows alert if product is already in cart
   * 
   * @param {object} product - Product to add to cart
   */
  const handleAddToCart = (product) => {
    // Check if product is already in cart
    const isAlreadyInCart = cart.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      // Show alert if item already exists
      alert('Item already added to the cart');
    } else {
      // Add product to cart
      setCart([...cart, product]);
    }
  };

  /**
   * Remove product from cart
   * 
   * @param {number} productId - ID of product to remove
   */
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  /**
   * Toggle cart modal visibility
   */
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  /**
   * Check if a product is in the cart
   * 
   * @param {number} productId - Product ID to check
   * @returns {boolean} - True if product is in cart
   */
  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar Component */}
      <Navbar cartCount={cart.length} onCartClick={toggleModal} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Discover Amazing Products
          </h2>
          <p className="text-gray-600">
            Browse our collection and add your favorites to the cart
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing <span className="font-semibold">{products.length}</span> product{products.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                isInCart={isProductInCart(product.id)}
              />
            ))}
          </div>
        )}

        {/* No Products Message */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No products available</p>
          </div>
        )}
      </main>

      {/* Cart Modal */}
      <CartModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        cartItems={cart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

export default App;
