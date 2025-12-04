import React from 'react';

/**
 * ProductCard Component
 * Displays individual product information with add to cart functionality
 * 
 * @param {object} product - Product data object containing id, title, price, image, etc.
 * @param {function} onAddToCart - Callback function when add to cart button is clicked
 * @param {boolean} isInCart - Boolean indicating if product is already in cart
 */
const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      {/* Product Image */}
      <div className="relative h-64 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
        {/* Category Badge */}
        <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < Math.floor(product.rating?.rate || 0)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            ({product.rating?.count || 0})
          </span>
        </div>

        {/* Price */}
        <div className="mb-4 mt-auto">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
            isInCart
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
          }`}
          disabled={isInCart}
        >
          {isInCart ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Added to Cart
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to Cart
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
