import React, { useContext, useState } from 'react';
import { ShopContext } from '../../App';

const Foodcart = ({ data }) => {
  const { addtocart } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState('');

  
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      
    <div className=' flex justify-center'>
      <input
        type="text"
        placeholder="Search..."
        className="w-1/2 md: border border-gray-400 rounded-md px-4 py-2 mb-6  "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
<h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-48 sm:mb-0">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border-4 border-gray-400">
            <img
              className="w-full h-64 object-contain mt-8"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-gray-900 text-lg font-bold">₹{item.price}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button
                className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                onClick={() => addtocart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foodcart;
