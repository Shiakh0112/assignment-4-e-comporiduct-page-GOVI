import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
