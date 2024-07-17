// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Usermodal from '../Adminhome/modal/Usermodal';

// const Userlist = () => {
//   const [list, setList] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

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


//   const handleDelete = (userId) => {
//     axios.delete(`http://localhost:8000/users/${userId}`)
//       .then(response => {
//         setList(list.filter(user => user.id !== userId));
//       })
//       .catch(error => console.log(error));
//   };
  
//   return (
//     <div className="p-4 md:w-16">
      
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
//           {list.map((item) => (

//             <tr 
//               key={item.id} 
              
//               className="border-b cursor-pointer hover:bg-gray-100 text-center border-gray-400"
//             >
//               <td className="py-2 px-4 text-black">{item.id}</td>
//               <td className="py-2 px-4 text-black">{item.name}</td>
//               <td className="py-2 px-4 text-black">{item.email}</td>
              
//               <td className="py-2 px-4">
//               <button className="bg-green-400 text-black p-2 rounded-lg font-bold  px-3 "> 
//                   ViewOrder
//                 </button>
//                 </td>
//                 <td className="py-2 px-4">
                
//                 <button 
//                   className=" bg-yellow-400 p-2 rounded-lg font-bold px-5" 
                  
//                   onClick={() => handleRowClick(item)}
//                 >ViewCart
//                 </button>
//               </td>
//                 <td className="py-2 px-4">
//                 <button className="bg-red-500 text-black p-2 rounded-lg font-bold px-6" onClick={()=>handleDelete(item.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
        
//           ))}
//         </tbody>
//       </table>
//       {selectedUser && (
//         <Usermodal 
//           isOpen={isModalOpen} 
//           onClose={handleCloseModal} 
//           user={selectedUser} 
//         />
//       )}
//     </div>
//   );
// };

// export default Userlist;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Usermodal from '../Adminhome/modal/Usermodal';


const Userlist = () => {
  const [list, setList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/users')
      .then(res => setList(res.data))
      .catch(error => console.log(error));
  }, []);

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:8000/users/${userId}`)
      .then(response => {
        setList(list.filter(user => user.id !== userId));
      })
      .catch(error => console.log(error));
  };
  
  return (
    <div className="p-4 w-full overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="border-b border-black bg-gray-400">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Orders</th>
            <th className="py-2 px-4">Cart</th>
            <th className="py-2 px-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr 
              key={item.id} 
              className="border-b cursor-pointer hover:bg-gray-100 text-center border-gray-400"
            >
              <td className="py-2 px-4 text-black">{item.id}</td>
              <td className="py-2 px-4 text-black">{item.name}</td>
              <td className="py-2 px-4 text-black">{item.email}</td>
              <td className="py-2 px-4">
                <button className="bg-green-400 text-black p-2 rounded-lg font-bold">
                  ViewOrder
                </button>
              </td>
              <td className="py-2 px-4">
                <button 
                  className="bg-yellow-400 p-2 rounded-lg font-bold" 
                  onClick={() => handleRowClick(item)}
                >
                  ViewCart
                </button>
              </td>
              <td className="py-2 px-4">
                <button 
                  className="bg-red-500 text-black p-2 rounded-lg font-bold" 
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <Usermodal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          user={selectedUser} 
        />
      )}
    </div>
  );
};

export default Userlist;
