import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = ({ onCartClick }) => {
  const { cartItemCount } = useCart();

  return (
    <nav className="sticky top-0 z-40 bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 shadow-lg shadow-purple-900/40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🛍️</span>
          <span className="text-xl font-extrabold text-white tracking-wide group-hover:text-purple-300 transition-colors">
            ShopVibe
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-purple-200 hover:text-white font-medium transition-colors hover:underline underline-offset-4"
          >
            Home
          </Link>
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm font-semibold">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-pink-500 rounded-full shadow">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
