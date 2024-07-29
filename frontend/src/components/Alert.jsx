/* eslint-disable react/prop-types */
import React from 'react';

const Alert = ({ message, onClose }) => {
    return (
        message && (
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-4 rounded-md shadow-lg z-50 animate-slide-down">
                <div className="flex justify-between items-center">
                    <span>{message}</span>
                    <button onClick={onClose} className="ml-4 text-lg font-bold">&times;</button>
                </div>
            </div>
        )
    );
};

export default Alert;
