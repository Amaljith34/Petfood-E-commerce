import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../../App';
const Petselect= () => {
  const [datas, setDatas] = useState([]);
  const [category, setCategory] = useState('All');
  const { addtocart } = useContext(ShopContext); // Destructure addtocart from ShopContext

  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(res => setDatas(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredData = category === 'All' 
    ? datas 
    : datas.filter(item => item.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="p-4 ">
      <div className="mb-4">
        <label htmlFor="category" className="mr-2">Filter by category:</label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="All">All</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Fish">Fish</option>
          <option value="Bird">Bird</option>
        </select>
      </div>
      <ul className="list-disc pl-5">
        {filteredData.map((item) => (
          <li key={item.id} className="mb-4 p-5 border rounded shadow-lg">
            <h3 className="font-bold">{item.name}</h3>
            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mb-2" />
            <p>{item.description}</p>
            <p className="text-black font-bold p-5">₹{item.price}</p>
            <button
              className="w-36 bg-green-500 text-white py-2 px-4 rounded"
              onClick={() => addtocart(item)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Petselect;