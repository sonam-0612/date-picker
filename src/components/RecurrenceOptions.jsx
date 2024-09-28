import React, { useState } from 'react';

const RecurrenceOptions = ({ onRecurrenceChange }) => {
    const [frequency, setFrequency] = useState(1);
    const [recurrence, setRecurrence] = useState(""); // Local state for recurrence pattern

    const options = [
        { value: "", label: "Select Recurrence" },
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
        { value: "monthly", label: "Monthly" },
        { value: "yearly", label: "Yearly" },
    ];

    const handleRecurrenceChange = (e) => {
        const pattern = e.target.value;
        setRecurrence(pattern);
        if (onRecurrenceChange) {
            onRecurrenceChange(pattern, frequency); // Call the parent function to update recurrence
        }
    };

    return (
        <div className="mb-4">
            <label className="block mb-2">Recurrence Pattern:</label>
            <select
                value={recurrence}
                onChange={handleRecurrenceChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label className="block mt-2">Frequency (e.g., every X):</label>
            <input
                type="number"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                min="1"
                className="w-full p-2 border border-gray-300 rounded-md mt-1"
            />
        </div>
    );
};

export default RecurrenceOptions;
