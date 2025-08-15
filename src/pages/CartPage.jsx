import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cartItems }) => {
    const navigate = useNavigate();
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

    const groupedCart = cartItems.reduce((acc, item) => {
        acc[item.id] = acc[item.id] || { ...item, quantity: 0 };
        acc[item.id].quantity++;
        return acc;
    }, {});

    const cartEntries = Object.values(groupedCart);

    const handlePlaceOrder = () => {
        navigate('/order-placed');
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            <h3 className="text-lg mb-8">Total Items: {cartItems.length}</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {cartEntries.length > 0 ? (
                        cartEntries.map(item => (
                            <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                                <img src={item.preview} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                                <div className="ml-6 flex-grow">
                                    <h3 className="font-semibold">{item.name} × {item.quantity}</h3>
                                    <h4 className="text-gray-600">Amount: Rs {item.price * item.quantity}</h4>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}
                </div>

                {/* Total Amount */}
                {cartEntries.length > 0 && (
                    <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                        <h2 className="text-2xl font-bold mb-4">Total Amount</h2>
                        <h4 className="text-xl mb-6">Amount: Rs {totalAmount}</h4>
                        <button 
                            onClick={handlePlaceOrder}
                            className="w-full bg-teal-500 text-white font-bold py-3 rounded-lg hover:bg-teal-600 transition-colors"
                        >
                            Place Order
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;