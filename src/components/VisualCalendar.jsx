import React from 'react';
import { eachDayOfInterval, format } from 'date-fns';

const VisualCalendar = ({ startDate, endDate, recurrence }) => {
    const generateSelectedDates = () => {
        const selectedDates = [];
        if (!recurrence.pattern || !startDate || !endDate) return selectedDates;

        let currentDate = new Date(startDate);
        const interval = recurrence.pattern === "daily" ? 1 :
                         recurrence.pattern === "weekly" ? 7 :
                         recurrence.pattern === "monthly" ? 30 :
                         recurrence.pattern === "yearly" ? 365 : 0;

        const effectiveInterval = interval * recurrence.frequency;

        while (currentDate <= endDate) {
            selectedDates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + effectiveInterval);
        }
        return selectedDates;
    };

    const selectedDates = generateSelectedDates();
    const startMonth = startDate ? new Date(startDate).getMonth() : new Date().getMonth();
    const startYear = startDate ? new Date(startDate).getFullYear() : new Date().getFullYear();
    const daysInMonth = new Date(startYear, startMonth + 1, 0).getDate();

    return (
        <div className="mt-6 max-w-xs mx-auto">
            <h2 className="text-md font-semibold text-white">Visual Calendar:</h2>
            <div className="grid grid-cols-7 gap-2 mt-2">
                {[...Array(daysInMonth).keys()].map(day => {
                    const currentDate = new Date(startYear, startMonth, day + 1);
                    const isSelected = selectedDates.some(date => date.toDateString() === currentDate.toDateString());

                    return (
                        <div key={day} className={`p-2 border rounded-md ${isSelected ? 'bg-indigo-500 text-white' : 'bg-gray-300'} text-sm text-center`}>
                            {format(currentDate, 'd')}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default VisualCalendar;
