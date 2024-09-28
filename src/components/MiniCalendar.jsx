import React from 'react';


const MiniCalendar = ({ recurrence, startDate, endDate }) => {
    const generateDates = () => {
        const dates = [];
        if (!recurrence.pattern) return dates; // Return empty if no pattern

        let currentDate = new Date(startDate);
        const interval = recurrence.pattern === "daily" ? 1 :
                         recurrence.pattern === "weekly" ? 7 :
                         recurrence.pattern === "monthly" ? 30 :
                         recurrence.pattern === "yearly" ? 365 : 0;

        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + interval);
        }
        return dates;
    };

    const dates = generateDates();

    return (
        <div className="mt-5">
            <h2 className="text-lg font-semibold">Selected Dates:</h2>
            <ul className="list-disc pl-5 mt-2">
                {dates.length > 0 ? dates.map((date, index) => (
                    <li key={index} className="text-gray-700">{date.toLocaleDateString()}</li>
                )) : <li className="text-white -700">No dates selected.</li>}
            </ul>
        </div>
    );
};

export default MiniCalendar;
