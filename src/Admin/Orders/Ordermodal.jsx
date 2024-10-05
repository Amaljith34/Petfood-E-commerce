import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Ordermodal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
      <FaCheckCircle className="text-green-500 text-6xl mb-4 ml-28" />
             <h2 className="text-2xl font-bold mb-4">Order Successful!</h2>
             <p>Your order has been placed successfully.</p>
             <button
              onClick={() => {
                 setIsModalOpen(false);
                 navigate('/'); 
               }}
               className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
             >
               Close
             </button>
           </div>
         </div>

  );
};

export default Ordermodal;


