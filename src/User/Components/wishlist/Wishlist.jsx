import React, { useContext } from 'react';
import { ShopContext } from '../../../App';


const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(ShopContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Your Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between">
            <img
              className="w-full h-64 object-contain mt-8"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <h5 className="text-gray-700">Category: {item.category}</h5>
              <p className="text-gray-900 text-lg font-bold">₹{item.price}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button
                className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-md"
                onClick={() => removeFromWishlist(item)}
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
