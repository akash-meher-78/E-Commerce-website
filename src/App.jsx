import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';
import CartPage from './pages/CartPage.jsx';
import OrderPlacedPage from './pages/OrderPlacedPage.jsx';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <Router>
            <div className="font-lato">
                <Header cartCount={cart.length} />
                <main className="pt-20">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/product/:id" element={<ProductDetailsPage onAddToCart={addToCart} />} />
                        <Route path="/cart" element={<CartPage cartItems={cart} />} />
                        <Route path="/order-placed" element={<OrderPlacedPage clearCart={clearCart} />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;