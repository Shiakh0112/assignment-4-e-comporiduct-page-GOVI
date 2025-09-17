import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = ({ onCartClick }) => {
  const { cartItemCount } = useCart();

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Fake Store
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <button
            onClick={onCartClick}
            className="relative p-2 text-white hover:text-gray-300 focus:outline-none"
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
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
