import React from "react";
import { useCart } from "../context/CartContext";

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, cartItemCount } = useCart();

  if (!isOpen) return null;

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItemCount === 0 ? (
            <div className="text-center py-8">
              <svg
                className="w-16 h-16 mx-auto text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <p className="mt-4 text-gray-600">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center border-b pb-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItemCount > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold">${calculateTotal()}</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
