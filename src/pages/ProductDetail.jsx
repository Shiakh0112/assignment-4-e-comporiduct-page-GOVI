import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductById } from "../services/api";
import { useCart } from "../context/CartContext";
import LoadingSpinner from "../components/LoadingSpinner";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch product details. Please try again later.");
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div
          className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Not Found!</strong>
          <span className="block sm:inline"> Product not found.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Products
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-50">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 object-contain"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <div className="mb-4">
              <span className="text-xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex items-center mt-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(product.rating.rate)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">
                  ({product.rating.count} reviews)
                </span>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Description
              </h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Category
              </h2>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {product.category}
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300 w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
