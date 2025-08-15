import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider.jsx';
import ProductCard from '../components/ProductCard.jsx';

const HomePage = () => {
    const [clothing, setClothing] = useState([]);
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product');
                const data = await response.json();
                setClothing(data.filter(item => !item.isAccessory));
                setAccessories(data.filter(item => item.isAccessory));
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <Slider />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-2xl font-bold tracking-wider capitalize mb-8">Clothing for Men and Women</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {clothing.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <h1 className="text-2xl font-bold tracking-wider capitalize mt-16 mb-8">Accessories for Men and Women</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {accessories.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;