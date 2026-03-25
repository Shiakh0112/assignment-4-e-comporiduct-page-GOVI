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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 flex flex-col">
          <Navbar onCartClick={handleCartClick} />
          <Alert />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 text-white mt-16">
            <div className="container mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Brand */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🛍️</span>
                    <span className="text-xl font-extrabold tracking-wide">ShopVibe</span>
                  </div>
                  <p className="text-purple-300 text-sm leading-relaxed">
                    Your one-stop destination for the best products at unbeatable prices.
                  </p>
                  <div className="flex gap-3 mt-5">
                    {["f", "t", "in"].map((s) => (
                      <a key={s} href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-sm font-bold transition-colors">
                        {s}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="font-bold text-lg mb-4 text-purple-200">Quick Links</h3>
                  <ul className="space-y-2">
                    {["Home", "Products", "About Us", "Contact"].map((link) => (
                      <li key={link}>
                        <a href="#" className="text-purple-300 hover:text-white text-sm transition-colors hover:underline underline-offset-4">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="font-bold text-lg mb-4 text-purple-200">Contact Us</h3>
                  <ul className="space-y-3 text-sm text-purple-300">
                    <li className="flex items-center gap-2">
                      <span>📧</span> support@shopvibe.com
                    </li>
                    <li className="flex items-center gap-2">
                      <span>📞</span> +1 (800) 123-4567
                    </li>
                    <li className="flex items-center gap-2">
                      <span>📍</span> 123 Market St, NY 10001
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-purple-400">
                <p>&copy; {new Date().getFullYear()} ShopVibe. All rights reserved.</p>
                <div className="flex gap-5">
                  {["Privacy Policy", "Terms of Service"].map((t) => (
                    <a key={t} href="#" className="hover:text-white transition-colors">{t}</a>
                  ))}
                </div>
              </div>
            </div>
          </footer>

          <CartModal isOpen={showCartModal} onClose={handleCloseCartModal} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
