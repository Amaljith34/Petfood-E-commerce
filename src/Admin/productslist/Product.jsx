
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Productmodal from './Productmodal';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const fetchProducts = () => {
    axios.get("http://localhost:8000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const ProductData = products.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
   
  );

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setIsEditMode(false);
  };

  const handleAddProduct = () => {
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/products/${id}`)
      .then(() => {
        fetchProducts();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className=''>
      <div className='text-black font-bold text-3xl flex justify-center p-4 '><h1>Product</h1></div>
      <div className='flex justify-center p-5'>
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 border border-gray-400 rounded-md px-4 py-2 mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='ml-5'>
        <button
          className='rounded-lg p-2 bg-blue-600 text-white w-36 md:w-60'
          onClick={handleAddProduct}
        >
          Add product
        </button>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {ProductData.map((item) => (
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
            <div className='flex bottom-0 justify-center'>
              <div className="px-6 pb-2">
                <button
                  className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={() => handleRowClick(item)}
                >
                  Update
                </button>
              </div>
              <div className='bottom-0'>
                <button
                  className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        {isModalOpen && (
          <Productmodal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
            value={selectedUser} 
            isEditMode={isEditMode}
            refreshProducts={fetchProducts}
          />
        )}
      </div>
    </div>
  );
}

export default Products;
