import React from "react";
import { useCart } from "../context/CartContext";

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, cartItemCount } = useCart();

  if (!isOpen) return null;

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col border border-purple-100">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-violet-600 to-indigo-600 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>🛒</span> Your Cart
            {cartItemCount > 0 && (
              <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">{cartItemCount} items</span>
            )}
          </h2>
          <button onClick={onClose} className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItemCount === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-gray-500 font-medium">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-1">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl bg-purple-50 border border-purple-100">
                  <div className="w-14 h-14 flex-shrink-0 bg-white rounded-lg p-1 shadow-sm">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-gray-800 truncate">{item.title}</h3>
                    <p className="text-violet-600 font-bold text-sm">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItemCount > 0 && (
          <div className="p-4 border-t border-purple-100 bg-gray-50">
            <div className="flex justify-between mb-3">
              <span className="font-semibold text-gray-700">Total:</span>
              <span className="font-extrabold text-violet-700 text-lg">${calculateTotal()}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-violet-200">
              Checkout →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
