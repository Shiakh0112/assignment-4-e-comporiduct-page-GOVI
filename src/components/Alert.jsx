import React from "react";
import { useCart } from "../context/CartContext";

const Alert = () => {
  const { showAlert, alertMessage, setShowAlert } = useCart();

  if (!showAlert) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded shadow-md max-w-md">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-bold">Notification</p>
            <p>{alertMessage}</p>
          </div>
          <button
            onClick={() => setShowAlert(false)}
            className="text-yellow-700 hover:text-yellow-900"
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
