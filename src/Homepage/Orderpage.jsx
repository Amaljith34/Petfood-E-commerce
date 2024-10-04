
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Usermodal from '../Adminhome/modal/Usermodal';
// import Order from '../Admin/Adminhome/Order';


// const Orderpage = () => {
//   const [list, setList] = useState([]);
//   const [usersearch, setUserSearch] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:8000/users')
//       .then(res => setList(res.data))
//       .catch(error => console.log(error));
//   }, []);

//   const handleRowClick = (user) => {
//     setSelectedUser(user);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedUser(null);
//   };
//   const handleOrderClick = (user) => {
//     setSelectedUser(user);
//     setIsOrderModalOpen(true);
//   };
//   const handleCloseOrderModal = () => {
//     setIsOrderModalOpen(false);
//     setSelectedUser(null);
// };

//   const handleDelete = (userId) => {
//     axios.delete(`http://localhost:8000/users/${userId}`)
//       .then(response => {
//         setList(list.filter(user => user.id !== userId));
//       })
//       .catch(error => console.log(error));
//   };
  
//   const UserData = list.filter(item =>
//         item.name.toLowerCase().includes(usersearch.toLowerCase())||
//         item.id.toLowerCase().includes(usersearch.toLowerCase())||
//         item.emai.toLowerCase().includes(usersearch.toLowerCase())
//     );



//   return (
//     <div>
//       <div className='text-black font-bold text-3xl flex justify-center p-4'><h1>User Details</h1></div>
//       <div className=' flex justify-center p-5'>
//     <input
//            type="text"
//            placeholder="Search..."
//            className="w-1/2 md: border border-gray-400 rounded-md px-4 py-2 mb-6"
//            value={usersearch}
//            onChange={(e) => setUserSearch(e.target.value)}
//          />
//     </div>
    
//     <div className="p-4 w-full overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead>
//           <tr className="border-b border-black bg-gray-400">
//             <th className="py-2 px-4">ID</th>
//             <th className="py-2 px-4">Name</th>
//             <th className="py-2 px-4">Email</th>
//             <th className="py-2 px-4">Orders</th>
//             <th className="py-2 px-4">Cart</th>
//             <th className="py-2 px-4">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {UserData.map((item) => (
//             <tr 
//               key={item.id} 
//               className="border-b cursor-pointer hover:bg-gray-100 text-center border-gray-400"
//             >
//               <td className="py-2 px-4 text-black">{item.id}</td>
//               <td className="py-2 px-4 text-black">{item.name}</td>
//               <td className="py-2 px-4 text-black">{item.email}</td>
//               <td className="py-2 px-4">
//                 <button className="bg-green-400 text-black p-2 rounded-lg font-bold"
//                  onClick={() => handleRowClick(item)}
//                  >
//                   ViewOrder
//                 </button>
//               </td>
//               <td className="py-2 px-4">
//                 <button 
//                   className="bg-yellow-400 p-2 rounded-lg font-bold" 
//                   onClick={() => handleOrderClick(item)}
//                 >
//                   ViewCart
//                 </button>
//               </td>
//               <td className="py-2 px-4">
//                 <button 
//                   className="bg-red-500 text-black p-2 rounded-lg font-bold" 
//                   onClick={() => handleDelete(item.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedUser && (
//         <Order
//           isOpen={isModalOpen} 
//           onClose={handleCloseModal} 
//           user={selectedUser} 
//         />
//       )}
//       {selectedUser && (
//         <Usermodal 
//           isOpen={isOrderModalOpen} 
//           onClose={handleCloseOrderModal} 
//           user={selectedUser} 
//         />
//       )}
//     </div>
//     </div>
//   );
// };

// export default Orderpage;





// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Usermodal from '../Admin/Adminhome/modal/Usermodal'
// import Order from '../Admin/Adminhome/Order';
// import { useContext } from 'react';
// import { ShopContext } from '../App';


// const Orderpage = () => {
//   const [list, setList] = useState([]);
//   const [usersearch, setUserSearch] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
//    const id=localStorage.getItem('id')
//    const {user}=useContext(ShopContext)
//   useEffect(() => {
//     axios.get(`http://localhost:8000/users/${id}`)
//       .then(res => setList(res.data))
//       .catch(error => console.log(error));
//   }, []);

//   const handleRowClick = (user) => {
//     setSelectedUser(user);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedUser(null);
//   };
//   const handleOrderClick = (user) => {
//     setSelectedUser(user);
//     setIsOrderModalOpen(true);
//   };
//   const handleCloseOrderModal = () => {
//     setIsOrderModalOpen(false);
//     setSelectedUser(null);
// };

// const handleDelete = (userId) => {
//   axios.patch(`http://localhost:8000/users/${userId}`, { order: []  },alert('sucess'))
  
  
//     .then(response => {
//       setList(list.map(user =>
//         user.id === userId ? { ...user, order: [] }
        
//         : user
//       ));
//     })
//     .catch(error => console.log(error));
// };
  
//   const UserData = list.map((item) =>
//         item.name.toLowerCase().includes(usersearch.toLowerCase())||
//         item.id.toLowerCase().includes(usersearch.toLowerCase())||
//         item.emai.toLowerCase().includes(usersearch.toLowerCase())
//     );


//     console.log(list.id)
//   return (
//     <div>
//       <div className='text-black font-bold text-3xl flex justify-center p-4'><h1>User Details</h1></div>
//       <div className=' flex justify-center p-5'>
//     <input
//            type="text"
//            placeholder="Search..."
//            className="w-1/2 md: border border-gray-400 rounded-md px-4 py-2 mb-6"
//            value={usersearch}
//            onChange={(e) => setUserSearch(e.target.value)}
//          />
//     </div>
//     {user.id!==id?'no order':
//     <div className="p-4 w-full overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead>
//           <tr className="border-b border-black bg-gray-400">
//             <th className="py-2 px-4">ID</th>
            
//             <th className="py-2 px-4">Orders</th>
            
//             <th className="py-2 px-4">Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {UserData.map((item) => (
//             <tr 
//               key={item.id} 
//               className="border-b cursor-pointer hover:bg-gray-100 text-center border-gray-400"
//             >
//               <td className="py-2 px-4 text-black">{item.id}</td>
              
//               <td className="py-2 px-4">
//                 <button className="bg-green-400 text-black p-2 rounded-lg font-bold"
//                  onClick={() => handleRowClick(item)}
//                  >
//                   ViewOrder
//                 </button>
//               </td>
              
//               <td className="py-2 px-4">
//                 <button 
//                   className="bg-red-500 text-black p-2 rounded-lg font-bold" 
//                   onClick={() => handleDelete(item.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedUser && (
//         <Order
//           isOpen={isModalOpen} 
//           onClose={handleCloseModal} 
//           user={selectedUser} 
//         />
//       )}
      
      
//     </div>
//     }
//     </div>
//   );
// };

// export default Orderpage;






import React, { useContext ,useState} from 'react';
import { ShopContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Orderpage = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate=useNavigate()
    const {user}=useContext(ShopContext)
    const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
        setSelectedUser(null);
        navigate('/home')
    };
   
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-3/4 overflow-x-auto h-3/4">
        <h2 className="text-2xl mb-4">User Details</h2>
        
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <h3 className="text-xl mt-4 mb-2">order Items</h3>
        
        {user.order && user.order.length > 0 && (
          <>
           
            
            {user.order.map((item, index) => (
              <div key={index} className="mb-2 border border-gray-400 p-3">
                <p><strong>Name:</strong> {item.paymentaddress.name}</p>
                <p><strong>Address:</strong> {item.paymentaddress.address},{item.paymentaddress.pincode}</p>
                
                <p><strong>Phone:</strong>₹{(item.paymentaddress.phone)}</p>
                {item.cart.map((items)=>(
                  <div>
                <p><strong>Product:</strong>₹{(items.name)}</p>
                <p><strong>product id:</strong>₹{(items.id)}</p>
                <p><strong>Quantity:</strong>₹{(items.Qty)}</p>
                <p><strong>product price:</strong>₹{(items.price)}</p>
                </div>
                

                ))}
                
              </div>
              
            ))}
            {/* {user.order.cart.map((item)=>console.log(item.data))} */}
            
        
          </>
        )}
         <button 
          onClick={()=>navigate('/')}
          className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Orderpage;
