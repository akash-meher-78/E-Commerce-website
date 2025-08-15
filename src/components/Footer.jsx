import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="font-bold uppercase mb-4">Online Store</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">Men Clothing</a></li>
                            <li><a href="#" className="hover:text-white">Women Clothing</a></li>
                            <li><a href="#" className="hover:text-white">Men Accessories</a></li>
                            <li><a href="#" className="hover:text-white">Women Accessories</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold uppercase mb-4">Helpful Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold uppercase mb-4">Partners</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">Zara</a></li>
                            <li><a href="#" className="hover:text-white">Pantaloons</a></li>
                            <li><a href="#" className="hover:text-white">Levis</a></li>
                            <li><a href="#" className="hover:text-white">UCB</a></li>
                            <li><a href="#" className="hover:text-white">+ Many More</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold uppercase mb-4">Address</h3>
                        <address className="text-sm text-gray-400 not-italic">
                            Building 101<br />
                            Central Avenue<br />
                            LA - 902722<br />
                            United States
                        </address>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;