import React from 'react';

/**
 * CartModal Component
 * Modal dialog that displays cart items with remove functionality
 * 
 * @param {boolean} isOpen - Controls modal visibility
 * @param {function} onClose - Callback function to close modal
 * @param {array} cartItems - Array of products in the cart
 * @param {function} onRemoveFromCart - Callback function to remove item from cart
 */
const CartModal = ({ isOpen, onClose, cartItems, onRemoveFromCart }) => {
  // Don't render if modal is not open
  if (!isOpen) return null;

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <p className="text-blue-100 text-sm mt-1">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-6">
            {cartItems.length === 0 ? (
              /* Empty Cart Message */
              <div className="text-center py-12">
                <svg
                  className="w-24 h-24 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500">
                  Add some products to get started!
                </p>
              </div>
            ) : (
              /* Cart Items List */
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Category: {item.category}
                      </p>
                      <p className="text-lg font-bold text-blue-600">
                        ${item.price}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <div className="flex items-center">
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 flex items-center gap-2 h-fit"
                      >
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-700">
                  Total:
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;
