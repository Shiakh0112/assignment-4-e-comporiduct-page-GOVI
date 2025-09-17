import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";
import Alert from "./components/Alert";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [showCartModal, setShowCartModal] = useState(false);

  const handleCartClick = () => {
    setShowCartModal(true);
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar onCartClick={handleCartClick} />
          <Alert />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

          <CartModal isOpen={showCartModal} onClose={handleCloseCartModal} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
