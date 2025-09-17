import React, { createContext, useState, useContext } from "react";

// Create the Cart Context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Add item to cart
  const addToCart = (product) => {
    // Check if product is already in cart
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      setAlertMessage("Item already added to the cart");
      setShowAlert(true);
      // Hide alert after 3 seconds
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    setCart([...cart, product]);
    setAlertMessage("Item added to cart");
    setShowAlert(true);
    // Hide alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Cart item count
  const cartItemCount = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartItemCount,
        showAlert,
        alertMessage,
        setShowAlert,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
