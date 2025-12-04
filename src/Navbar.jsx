import React from 'react';

/**
 * Navbar Component
 * Displays the application header with cart button and cart items count
 * 
 * @param {number} cartCount - Number of items in the cart
 * @param {function} onCartClick - Callback function when cart button is clicked
 */
const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold tracking-wide">
              🛍️ Fake Store
            </h1>
          </div>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Cart
            </span>
            {/* Cart Count Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
