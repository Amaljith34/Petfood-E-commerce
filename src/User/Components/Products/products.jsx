// import React, { useContext,useEffect, useState } from 'react';
// import { ShopContext } from '../../../App';
// import Footer from '../footer/Footer';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import ProductDetails from './ProductDetails';



// const Product = () => {
//   const { addtocart } = useContext(ShopContext);
//   const [searchTerm, setSearchTerm] = useState('');

//   const [datas,setdatas]=useState([])
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);



//   useEffect(()=>{
//       axios.get('http://localhost:8000/products')
//       .then(res=>setdatas(res.data))
//   },[])
  
//   const filteredData = datas.filter(item =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const modalopen = (item) => {
//     setSelectedItem(item);
//     setIsModalOpen(true);
//   };

//   const modalclose = () => {
//     setIsModalOpen(false);
//     setSelectedItem(null);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
      
//     <div className=' flex justify-center '>
//       <input
//         type="text"
//         placeholder="Search..."
//         className="w-1/2 md: border border-gray-400 rounded-md px-4 py-2 mb-6  "
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       </div>
// <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-48 sm:mb-0 ">
//         {filteredData.map((item) => (
//           <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between hover:scale-x-105 hover:scale-105 hover:duration-150"    >
//             <img
//               className="w-full h-64 object-contain mt-8"
//               src={item.image}
//               alt={item.name}
//               onClick={() => modalopen(item)}
//             />
//             <div className="p-4"onClick={() => modalopen(item)} >
//               <h3 className="text-xl font-bold mb-2">{item.name}</h3>
//               <h5 className="text-gray-700">Category:{item.category}</h5>
//               <p className="text-gray-900 text-lg font-bold">₹{item.price}</p>
//             </div>
//             <div className="px-6 pt-4 pb-2 ">
//               <button
//                 className="bg-green-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md bottom-0"
//                 onClick={() =>{ addtocart(item);toast.success('Add To Cart')}}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <ProductDetails isOpen={isModalOpen} modalclose={modalclose} item={selectedItem} />
//       <Footer/>
//     </div>
//   );
// };

// export default Product;


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../../App';
import Footer from '../footer/Footer';
import axios from 'axios';
import toast from 'react-hot-toast';
import ProductDetails from './ProductDetails';

const Product = () => {
  const { addtocart, addToWishlist } = useContext(ShopContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [datas, setDatas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(res => setDatas(res.data));
  }, []);

  const filteredData = datas.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const modalopen = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const modalclose = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className='flex justify-center'>
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 border border-gray-400 rounded-md px-4 py-2 mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-48 sm:mb-0">
        {filteredData.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between hover:scale-105 hover:duration-150">
            <img
              className="w-full h-64 object-contain mt-8"
              src={item.image}
              alt={item.name}
              onClick={() => modalopen(item)}
            />
            <div className="p-4" onClick={() => modalopen(item)}>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <h5 className="text-gray-700">Category: {item.category}</h5>
              <p className="text-gray-900 text-lg font-bold">₹{item.price}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
              <button
                className="bg-green-500 hover:bg-blue-400 text-white px-4 py-2 rounded-md"
                onClick={() => { addtocart(item); toast.success('Added to Cart'); }}
              >
                Add to Cart
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-400 text-white px-4 py-2 rounded-md"
                onClick={() => { addToWishlist(item); }}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
      <ProductDetails isOpen={isModalOpen} modalclose={modalclose} item={selectedItem} />
      <Footer />
    </div>
  );
};

export default Product;
