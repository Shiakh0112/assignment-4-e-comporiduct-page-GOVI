import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:shadow-purple-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 h-full flex flex-col border border-gray-100">
        <div className="relative h-52 overflow-hidden flex items-center justify-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50">
          <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-violet-700 text-xs font-bold px-3 py-1 rounded-full border border-violet-100 capitalize shadow-sm">
            {product.category}
          </span>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-sm font-semibold text-gray-800 mb-3 line-clamp-2 leading-snug">
            {product.title}
          </h3>
          <div className="mt-auto flex justify-between items-center">
            <span className="text-xl font-extrabold text-violet-700">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md shadow-violet-200"
            >
              + Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
