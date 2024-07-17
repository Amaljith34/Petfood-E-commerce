import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:8000/products")
      .then((res) => {
        setProducts(res.data);
        
      })
      .catch(error => {
        console.log(error);
        
      });
  }, []);

  

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((item) => (
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
          <div className='flex p-5 '>
          <div className="px-6  pb-2 ">
            <button
              className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" 
            >
              ubdate
            </button>
            </div>
            <div className='md:ml-36 sm:ml-80 ml-16'>
            <button
              className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 mr-44  rounded-md"
            >
              detete
            </button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
