import React, { useState } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import MiniCalendar from './MiniCalendar';
import DateRangePicker from './DateRangePicker';
import Navbar from './Navbar';  
import Footer from './Footer';  

const DatePicker = () => {
    const [recurrence, setRecurrence] = useState({ pattern: null, frequency: 1 });
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [darkMode, setDarkMode] = useState(true); // Initialize dark mode

    const handleRecurrenceChange = (pattern, frequency) => {
        setRecurrence({ pattern, frequency });
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`flex flex-col justify-between min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-yellow-100 via-pink-50 to-blue-100'}`}>
            {/* Header (Navbar) */}
            <Navbar toggleTheme={toggleTheme} darkMode={darkMode} /> {/* Pass toggle and darkMode to Navbar */}

            {/* Main Content */}
            <div className={`flex-grow flex flex-col items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-500`}>
                <div className={`max-w-md w-full mx-auto p-6 rounded-xl shadow-2xl ${darkMode ? 'bg-gray-600' : 'bg-white'} transition-all duration-500`}>
                    <h1 className="text-3xl font-bold text-center text-white -500 mb-2">
                        Recurring Date Picker
                    </h1>
                    
                    {/* Date Range Picker */}
                    <DateRangePicker setStartDate={setStartDate} setEndDate={setEndDate} />

                    {/* Recurrence Options */}
                    <RecurrenceOptions onRecurrenceChange={handleRecurrenceChange} />

                    {/* Mini Calendar */}
                    <MiniCalendar recurrence={recurrence} startDate={startDate} endDate={endDate} />

                    {/* Submit Button */}
                    <button 
                        className="mt-4 w-full px-4 py-2 bg-indigo-800 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 focus:ring focus:ring-indigo-300 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => alert('Dates Submitted!')}>
                        Submit Dates
                    </button>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default DatePicker;
