import React from 'react';

const DateRangePicker = ({ setStartDate, setEndDate }) => {
    return (
        <div className="mb-4">
            <label className="block mb-3">Start Date:</label>
            <input
                type="date"
                onChange={(e) => setStartDate(new Date(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <label className="block mb-3">End Date (optional):</label>
            <input
                type="date"
                onChange={(e) => setEndDate(new Date(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
    );
};

export default DateRangePicker;

