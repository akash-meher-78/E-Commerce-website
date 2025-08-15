import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Link to={`/product/${product.id}`}>
                <img src={product.preview} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold truncate">{product.name}</h3>
                    <h4 className="text-gray-500 text-sm mt-1">{product.brand}</h4>
                    <h2 className="text-teal-600 font-bold mt-2">Rs {product.price}</h2>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;