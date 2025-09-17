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
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
        <div className="h-48 overflow-hidden flex items-center justify-center p-4 bg-gray-50">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 h-14 overflow-hidden">
            {product.title}
          </h3>
          <div className="mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
