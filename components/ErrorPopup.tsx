'use client';

import { useEffect } from 'react';
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa';

interface ErrorPopupProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ErrorPopup({ message, isOpen, onClose }: ErrorPopupProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto-close after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <FaExclamationTriangle className="text-3xl text-red-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary-950 mb-2">Enrollment Error</h3>
            <p className="text-gray-700">{message}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-primary-950 text-white py-2 rounded-lg font-semibold hover:bg-primary-900 transition-colors"
        >
          OK
        </button>
      </div>
    </div>
  );
}

