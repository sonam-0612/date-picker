
import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; 

const Home = () => {
    const [darkMode, setDarkMode] = useState(true); // By default, dark mode is enabled

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100 text-gray-900'} transition-all duration-500`}>
            <header className="w-full p-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold"></h1>
                <button
                    onClick={toggleTheme}
                    className="flex items-center px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition duration-300"
                >
                    {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                    <span className="ml-2">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
            </header>
            
            {/* Main Section */}
            <main className="flex flex-col items-center w-full mt-10">
                <section className="text-center max-w-2xl">
                    <h2 className="text-5xl font-bold mb-4">Welcome to the Date Picker App!</h2>
                    <p className="text-lg mb-6">
                        Easily manage and select dates with customizable recurrence options. Stay organized and never miss an important event again.
                    </p>
                    <a href="/date-picker" className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                        Get Started
                    </a>
                </section>
            </main>
        </div>
    );
};

export default Home;
