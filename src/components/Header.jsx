import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
    return (
        <header className="bg-white shadow-md fixed w-full z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="text-2xl sm:text-3xl font-bold">
                        <Link to="/">Shoplify</Link>
                    </div>
                    <nav className="hidden md:flex space-x-8 font-bold">
                        <Link to="/" className="hover:text-teal-600">CLOTHING</Link>
                        <Link to="/" className="hover:text-teal-600">ACCESSORIES</Link>
                    </nav>
                    <div className="hidden md:block relative">
                        <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="text"
                            placeholder="Search for Clothing and Accessories"
                            className="bg-gray-100 rounded-md py-2 pl-10 pr-4 w-80 focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/cart" className="relative">
                            <ShoppingCart/>
                            <div className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartCount}
                            </div>
                        </Link>
                        <a href="#">
                            <i className="fas fa-user-circle text-3xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;