import React, { useEffect } from 'react';

const OrderPlacedPage = ({ clearCart }) => {
    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh] py-12">
            <i className="fas fa-check-circle text-green-500 text-8xl mb-6"></i>
            <h1 className="text-3xl font-bold">Order Placed Successfully!</h1>
            <p className="text-gray-600 mt-2">We've sent you an email with the order details.</p>
        </div>
    );
};

export default OrderPlacedPage;