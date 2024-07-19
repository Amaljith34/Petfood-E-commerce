import React from 'react';

function Order({ isOpen, onClose, user }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center ">
      <div className="bg-white rounded p-4 w-11/12">
        <div className="flex flex-col justify-between items-center pb-3">
          <h2 className="text-xl font-bold">Order Details for {user.name}</h2>
        </div>
        <div className='mt-10'>
        <p className="font-bold">Order Name: <span className="text-red-500 font-normal">{user.name}</span></p>
        <p className="font-bold">Order id: <span className="text-red-500 font-normal">{user.id}</span></p>
        <p className="font-bold">Order Email: <span className="text-red-500 font-normal">{user.email}</span></p>
        </div>
        {user.order.length===0?<h1 className='font-bold flex justify-center mt-8 text-3xl'>No order</h1>:
        <div className="border-gray-800 mb-4 max-h-60 overflow-y-auto">
          {user.order.map((item, orderIndex) => (
            <div  className="border-b border-gray-300 p-2">
                <p className="font-bold">Product Address: <span className="text-blue-500 font-normal">{item.paymentaddress.address},{item.paymentaddress.pincode}</span></p>
              <p className="font-bold">Phone No: <span className="text-blue-500 font-normal">{item.paymentaddress.phone}</span></p>
              <p className="font-bold">Landmark: <span className="text-blue-500 font-normal">{item.paymentaddress.landmark}</span></p>
              <p className="font-bold underline">
                Ordered items:
                {item.cart.map((cartitem, cartIndex) => (
                  <span key={cartIndex} className="text-blue-500 font-normal"><br />{cartIndex + 1}. {cartitem.id},Qty:{cartitem.Qty}</span>
                ))}
              </p>
              <p className="font-bold">Total Price: <span className="text-blue-500 font-normal">{item.price}</span></p>
            </div>
          ))}
        </div>
        }

        <div className="flex justify-end pt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
