import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = ({ onAddToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        if (id) {
            fetch(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`)
                .then(response => response.json())
                .then(data => {
                    setProduct(data);
                    setMainImage(data.preview);
                })
                .catch(error => console.error('Failed to fetch product details:', error));
        }
    }, [id]);

    if (!product) {
        return <h2 className="text-center text-2xl py-20">Loading...</h2>;
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Image Section */}
                <div>
                    <img src={mainImage} alt={product.name} className="w-full rounded-lg shadow-lg" />
                    <div className="flex space-x-4 mt-4">
                        {product.photos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo}
                                alt={`Preview ${index}`}
                                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${mainImage === photo ? 'border-teal-500' : 'border-transparent'}`}
                                onClick={() => setMainImage(photo)}
                            />
                        ))}
                    </div>
                </div>

                {/* Details Section */}
                <div>
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    <h4 className="text-xl text-gray-600 font-semibold mt-2">{product.brand}</h4>
                    <h3 className="text-2xl font-bold text-teal-600 mt-4">Rs {product.price}</h3>
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold">Description</h3>
                        <p className="text-gray-700 mt-2">{product.description}</p>
                    </div>
                    <div className="mt-8">
                        <button 
                            onClick={() => onAddToCart(product)}
                            className="bg-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-600 transition-colors duration-300"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;