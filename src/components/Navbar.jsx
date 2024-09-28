import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';  // Import calendar icon

const Navbar = () => {
    return (
        <nav className="bg-blue-300 text-white p-4 fixed w-full top-0 shadow-lg z-10">
            <div className="container mx-auto flex justify-between items-center">
                {/* Add calendar icon and text "Date Picker App" in the navbar */}
                <Link to="/" className="flex items-center">
                    <FaCalendarAlt className="mr-2 w-8 h-8" />  {/* Calendar icon */}
                    <span className="text-xl font-bold">Date Picker App</span>  {/* Date Picker App text */}
                </Link>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/date-picker" className="hover:underline">Date Picker</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
