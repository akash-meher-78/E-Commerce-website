import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import axios from "axios";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import CategoryProduct from "./pages/CategoryProduct";
import { useCart } from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [location, setLocation] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);
  const { cartItem, setCartItem } = useCart();

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

      try {
        const response = await axios.get(url);
        const exactLocation = response.data;
        setLocation(exactLocation);
        setOpenDropdown(false);
        console.log(exactLocation);
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/category/:category" element={<CategoryProduct />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart location={location} getLocation={getLocation} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
