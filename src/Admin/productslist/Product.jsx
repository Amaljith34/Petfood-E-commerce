// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Productmodal from './Productmodal';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   useEffect(() => {
//     axios.get("http://localhost:8000/products")
//       .then((res) => {
//         setProducts(res.data);
        
//       })
//       .catch(error => {
//         console.log(error);
        
//       });
//   }, []);

//   const ProductData = products.filter(item =>
//          item.name.toLowerCase().includes(searchTerm.toLowerCase())
//        );
//        const handleRowClick = (user) => {
//         setSelectedUser(user);
//         setIsModalOpen(true);
//       };
    
//       const handleCloseModal = () => {
//         setIsModalOpen(false);
//         setSelectedUser(null);
//       };
  

//   return (
//     <div>
//     <div className='text-black font-bold text-3xl flex justify-center p-4'><h1>Product</h1></div>
//       <div className=' flex justify-center p-5'>
//        <input
//          type="text"
//          placeholder="Search..."
//          className="w-1/2 md: border border-gray-400 rounded-md px-4 py-2 mb-6  "
//          value={searchTerm}
//          onChange={(e) => setSearchTerm(e.target.value)}
//        />
//        </div>
//        <div className='ml-5'>
//           <button className='rounded-lg  p-2 bg-blue-600 text-white w-36 md:w-60'onClick={() => handleRowClick(item)}>Add product</button>
          
//      </div>
       
//        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {ProductData.map((item) => (
//         <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border-4 border-gray-400">
//           <img
//             className="w-full h-64 object-contain mt-8"
//             src={item.image}
//             alt={item.name}
//           />
//           <div className="p-4">
//             <h3 className="text-xl font-bold mb-2">{item.name}</h3>
//             <p className="text-gray-700">{item.description}</p>
//             <p className="text-gray-900 text-lg font-bold">₹{item.price}</p>
//           </div>
//           <div className='flex p-5 '>
//           <div className="px-6  pb-2 ">
//             <button
//               className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" 
//             >
//               ubdate
//             </button>
//             </div>
//             <div className='md:ml-36 sm:ml-80 ml-16'>
//             <button
//               className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 mr-44  rounded-md"
//             >
//               detete
//             </button>
//           </div>
//           </div>
//         </div>
        
//       ))}
//       {selectedUser && (
//         <Productmodal 
//           isOpen={isModalOpen} 
//           onClose={handleCloseModal} 
//           value={selectedUser} 
//         />
//       )}
//     </div>
//     </div>
//   );
// }

// export default Product;



// import React, { useContext, useState } from 'react';
// import { ShopContext } from '../../App';

// const Foodcart = ({ data }) => {
//   const { addtocart } = useContext(ShopContext);
//   const [searchTerm, setSearchTerm] = useState('');

  
//   const filteredData = data.filter(item =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4 py-8">
      
//     <div className=' flex justify-center'>
//       <input
//         type="text"
//         placeholder="Search..."
//         className="w-1/2 md: border border-gray-400 rounded-md px-4 py-2 mb-6  "
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       </div>
// <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-48 sm:mb-0">
//         {filteredData.map((item) => (
//           <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border-4 border-gray-400">
//             <img
//               className="w-full h-64 object-contain mt-8"
//               src={item.image}
//               alt={item.name}
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-bold mb-2">{item.name}</h3>
//               <p className="text-gray-700">{item.description}</p>
//               <p className="text-gray-900 text-lg font-bold">₹{item.price}</p>
//             </div>
//             <div className="px-6 pt-4 pb-2">
//               <button
//                 className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
//                 onClick={() => addtocart(item)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Foodcart;
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Productmodal from './Productmodal';

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);

//   useEffect(() => {
//     axios.get("http://localhost:8000/products")
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   const ProductData = products.filter(item =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleRowClick = (user) => {
//     setSelectedUser(user);
//     setIsEditMode(true);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedUser(null);
//     setIsEditMode(false);
//   };

//   const handleAddProduct = () => {
//     setIsEditMode(false);
//     setIsModalOpen(true);
//   };
//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8000/products/${id}`)
//       .then(() => {
//         setProducts(products.filter(product => product.id !== id));
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <div className='text-black font-bold text-3xl flex justify-center p-4'><h1>Product</h1></div>
//       <div className='flex justify-center p-5'>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-1/2 md:border border-gray-400 rounded-md px-4 py-2 mb-6"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <div className='ml-5'>
//         <button
//           className='rounded-lg p-2 bg-blue-600 text-white w-36 md:w-60'
//           onClick={handleAddProduct}
//         >
//           Add product
//         </button>
//       </div>

//       <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {ProductData.map((item) => (
//           <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border-4 border-gray-400">
//             <img
//               className="w-full h-64 object-contain mt-8"
//               src={item.image}
//               alt={item.name}
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-bold mb-2">{item.name}</h3>
//               <p className="text-gray-700">{item.description}</p>
//               <p className="text-gray-900 text-lg font-bold">₹{item.price}</p>
//             </div>
//             <div className='flex p-5'>
//               <div className="px-6 pb-2">
//                 <button
//                   className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
//                   onClick={() => handleRowClick(item)}
//                 >
//                   Update
//                 </button>
//               </div>
//               <div className='md:ml-36 sm:ml-80 ml-16'>
//                 <button
//                   className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
//                   onClick={() => handleDelete(item.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//         {isModalOpen && (
//           <Productmodal 
//             isOpen={isModalOpen} 
//             onClose={handleCloseModal} 
//             value={selectedUser} 
//             isEditMode={isEditMode}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Product;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Productmodal from './Productmodal';

const Product = () => {
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
    <div>
      <div className='text-black font-bold text-3xl flex justify-center p-4'><h1>Product</h1></div>
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

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

export default Product;
