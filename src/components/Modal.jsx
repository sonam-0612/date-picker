import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
