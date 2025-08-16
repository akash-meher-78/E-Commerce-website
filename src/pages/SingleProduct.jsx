import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../assets/Loading4.webm";
import Breadcrums from '../components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext';

const SingleProduct = () => {
  const params = useParams();
  const [SingleProduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`);
      const product = res.data.product;
      setSingleProduct(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    window.scrollTo(0, 0);
  }, []);

  if (!SingleProduct) {
    return (
      <div className="flex items-center justify-center h-screen">
        <video muted autoPlay loop>
          <source src={Loading} type="video/webm" />
        </video>
      </div>
    );
  }

  const OriginalPrice = Math.round(
    SingleProduct.price + (SingleProduct.price * SingleProduct.discount) / 100
  );

  // handle quantity
  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) setQuantity(value);
  };

  const handleAddToCart = () => {
    addToCart({ ...SingleProduct, quantity });
  };

  return (
    <div className="px-4 pb-4 md:px-0">
      <Breadcrums title={SingleProduct.title} />

      <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* product image */}
        <div className="w-full">
          <img
            src={SingleProduct.image}
            alt={SingleProduct.title}
            className="rounded-2xl w-full object-cover"
          />
        </div>

        {/* product details */}
        <div className="flex flex-col gap-6">
          <h1 className="md:text-3xl text-xl font-bold text-gray-800">
            {SingleProduct.title}
          </h1>

          <div className="text-gray-700">
            {SingleProduct.brand?.toUpperCase()} /
            {SingleProduct.category?.toUpperCase()} /
            {SingleProduct.model}
          </div>

          <p className="text-xl text-red-500 font-bold">
            ${SingleProduct.price}{" "}
            <span className="line-through text-gray-700">${OriginalPrice}</span>{" "}
            <span className="bg-red-500 text-white px-4 py-2 rounded-full">
              {SingleProduct.discount}% off
            </span>
          </p>

          <p className="text-gray-600">{SingleProduct.description}</p>

          {/* quantity selector */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">Quantity:</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* add to cart button */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              <IoCartOutline className="w-6 h-6" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
