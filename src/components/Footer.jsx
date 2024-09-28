import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white text-center py-2">
            <p>&copy; 2024 Date Picker App. All rights reserved.</p>
            <ul className="flex justify-center space-x-6 mt-2">
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
