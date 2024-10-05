

// // import React, { useContext, useState } from 'react';
// // import { Link, Outlet,useNavigate } from 'react-router-dom';
// // import { FaTimes, FaShoppingCart } from 'react-icons/fa';
// // import { CiMenuBurger } from 'react-icons/ci';
// // import { IoIosContact } from "react-icons/io";
// // import { ShopContext } from '../../App';


// // const Navbar = () => {
// //   const [click, setClick] = useState(false);
// //   const {isLogged,setLogged,size,user}=useContext(ShopContext)
// //   const handleClick = () => setClick(!click);
// //   const [dropdownVisible, setDropdownVisible] = useState(false);
// //   const navigate=useNavigate()
// //   const toggleDropdown = () => {
// //     setDropdownVisible(!dropdownVisible);
// //   };
 
// //   return (
// //     <div className=' top-0 z-50'>
// //       <nav className='bg-gray-200 py-4 md:pt-7 '>
// //         <div className='flex justify-between items-center px-4  '>
// //           <div className='flex items-center md:ml-10'>
// //           <div className='relative'>
// //       <div className='flex flex-col items-center cursor-pointer' onClick={toggleDropdown}>
// //         <IoIosContact className='text-' size='40px' />
// //         <span className='text-black font-bold'>{isLogged ? user.name : 'Sign in'}</span>
// //       </div>
// //       {dropdownVisible && (
// //         <div className='absolute  mt-2 w-60 bg-black shadow-lg rounded-md z-10 text-white'>
// //           <div className='px-4 py-2 text-sm '>{user.name}</div>
// //           <div className='px-4 py-2 text-sm '>{user.email}</div>
// //           <Link to='/order'>
// //           <button 
// //           className='w-full px-4 py-2 text-sm text-left text-green-500'
// //           >
// //             Orders
// //           </button>
// //           </Link>
// //           <Link to='/Login'>
// //           <button
// //             onClick={()=>setLogged(localStorage.clear())}
// //             className='w-full px-4 py-2 text-sm text-left text-red-600 '
// //           >
// //             {isLogged ? 'Logout' : 'Sign in'}
// //           </button>
// //           </Link>
          
// //         </div>
// //       )}
      
      
      
      
// //     </div> 
// //     <h2 className='text-3xl font-bold text-green-600  md:ml-0 md:px-10 lg:px-24 lg:ml-36'>𝓟𝓔𝓣𝓢𝓕𝓞𝓞𝓓</h2>
// //           </div>
// //           <div className='md:hidden'>
// //             <Link to='/cartpage'>
// //               <button className='flex flex-col md:flex-row items-center hover:text-blue-600 py-3 px-3'>
// //               <span style={{display:size>0?'inline':'none'}} className='absolute text-white  h-5 w-3 bg-red-500 rounded font-bold text-sm ml-10 '>{size}</span>
// //                 <FaShoppingCart size='20px' />
// //                 <span className='ml-2 font-bold'>𝗖𝗮𝗿𝘁</span>
// //               </button>
// //             </Link>
// //           </div>
// //           <div className='hidden md:flex flex-1 justify-center items-center lg:ml-96 '>
// //             <ul className='flex gap-8 text-[18px]'>
// //               <Link to='/'><li className='hover:text-green-600 transition border-b-2 border-gray-400 hover:border-green-600 cursor-pointer'>𝐇𝐨𝐦𝐞</li></Link>
// //               <Link to='/pets'><li className='hover:text-green-600 transition border-b-2 border-gray-400 hover:border-green-600 cursor-pointer'>𝗠𝘆𝗣𝗲𝘁𝘀</li></Link>
              
// //               <Link to='/shop'><li className='hover:text-green-600 transition border-b-2 border-gray-400 hover:border-green-600 cursor-pointer'>𝗦𝗵𝗼𝗽</li></Link>
// //               <Link to='/Baseproduct'><li className='hover:text-green-600 transition border-b-2 border-gray-400 hover:border-green-600 cursor-pointer'>𝗦𝘂𝗽𝗽𝗼𝗿𝘁</li></Link>
// //             </ul>
            
// //             <div className='ml-4 flex items-center'>
// //               <Link to='/cartpage' >
              
// //                 <button className='flex flex-col items-center hover:text-blue-600 py-3 px-3'>
// //                 <span style={{display:size>0?'inline':'none'}} className='absolute text-white  h-5 w-3 bg-red-500 rounded font-bold text-sm ml-10 '>{size}</span>
// //                   <FaShoppingCart size='20px' />
// //                   <span className='ml-2'>Cart</span>
// //                 </button>
// //               </Link>
              
              
              
              
// //             </div>
// //           </div>
// //           <button className='block md:hidden' onClick={handleClick}>
// //             {click ? <FaTimes className='text-black' size='25px' /> : <CiMenuBurger className='text-black' size='30px' />}
// //           </button>
// //         </div>
// //         {click && (
// //           <div className='md:hidden z-50 absolute w-full left-0 right-0 bg-slate-400 backdrop-blur-md bg-opacity-30 transition'>
// //             <ul className='text-center text-xl mt-8'>
// //               <Link to='/'><li className='my-4 py-4 border-b border-green-200 text-black hover:bg-green-200 transition'onClick={handleClick}>Home</li></Link>
// //               <Link to='/pets'><li className='my-4 py-4 border-b border-green-200 text-black hover:bg-green-200 transition 'onClick={handleClick}>Mypets</li></Link>
              
// //               <Link to='/shop'><li className='my-4 py-4 border-b border-green-200 text-black hover:bg-green-200 transition'onClick={handleClick}>Shop</li></Link>
// //               <Link to='/Baseproduct'><li className='my-4 py-4 border-b border-green-200 text-black hover:bg-green-200 transition'onClick={handleClick}>Support</li></Link>
              
// //             </ul>
// //           </div>
// //         )}
// //       </nav>
// //       <main>
// //         <Outlet/>
// //       </main>
// //     </div>

// //   );
// // };

// // export default Navbar;




// import React, { useContext, useState, useRef, useEffect } from "react";
// import { FiMenu, FiShoppingCart } from "react-icons/fi";
// import { CgProfile } from "react-icons/cg";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import { Mycontext } from "./context";
// import axios from "axios";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//   const [userEmail, setUserEmail] = useState('');
//   const dropdownRef = useRef(null);

//   // context  
//   const { size, isLogged, setIsLogged } = useContext(Mycontext);
//   const navigate = useNavigate();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // Handle dropdown visibility
//   const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

//   // Handle logout and show dropdown
//   const handleLogout = () => {
//     const id = localStorage.getItem('id'); // Retrieve email from localStorage
//     axios.get(`http://localhost:8000/user/${id}`)
//     .then(res=>setUserEmail(res.data.email))
//     toggleDropdown(); 
//   };

//   // Handle logout confirmation
//   const confirmLogout = () => {
//     localStorage.clear();
//     setIsLogged(false);
//     setIsDropdownVisible(false); // Hide the dropdown
//     navigate("/signup"); // Redirect to signup page
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownVisible(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="font-sans">
//       <nav className="bg-gray-300 shadow-md">
//         <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//           <Link to="/" className="flex items-center">
//             <img
//               src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/logo_1.svg?v=1709198253"
//               loading="lazy"
//               alt="logo"
//               className="w-32 sm:w-40 md:w-48 lg:w-56 pl-10"
//             />
//           </Link>

//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/cart">
//               <button className="relative flex items-center justify-center text-black p-2 rounded-full">
//                 <FiShoppingCart className="text-2xl" />
//                 <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{size}</span>
//               </button>
//             </Link>

//             {isLogged ? (
//               <div className="relative">
//                 <button
//                   className="bg-gray-400 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
//                   onClick={handleLogout}
//                 >
//                   <CgProfile className="text-2xl" />
//                 </button>
//                 {/* Dropdown */}
//                 {isDropdownVisible && (
//                   <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
//                     <div className="px-4 py-2 text-sm text-gray-700">
//                       <p>Your email:{userEmail}</p>
//                     </div>
//                     <div className="flex justify-end px-4 py-2 border-t border-gray-300">
//                       <button
//                         className="px-4 py-2 bg-gray-300 rounded mr-2"
//                         onClick={() => setIsDropdownVisible(false)}
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         className="px-4 py-2 bg-red-500 text-white rounded"
//                         onClick={confirmLogout}
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link to="/signup">
//                 <button className="bg-gray-400 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
//                   Login
//                 </button>
//               </Link>
//             )}
//           </div>

//           <div className="flex items-center space-x-4 md:hidden">
//             <Link to="/cart">
//               <button className="relative flex items-center justify-center bg-red-800 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
//                 <FiShoppingCart className="text-2xl" />
//                 <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{size}</span>
//               </button>
//             </Link>
//             <FiMenu className="text-2xl text-gray-600" onClick={toggleMenu} />
//           </div>
//         </div>
//       </nav>

//       <nav className="bg-custom-red text-white">
//         <div className="container mx-auto px-4">
//           <ul className="hidden md:flex justify-center space-x-8">
//             <li>
//               <Link to="/" className="block py-3 px-3 hover:bg-red-600 rounded-3xl transition duration-300">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/products" className="block py-3 px-3 hover:bg-red-600 transition duration-300 rounded-3xl">
//                 Shop
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="block py-3 px-3 hover:bg-red-600 transition duration-300 rounded-3xl">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/category" className="block py-3 px-3 hover:bg-red-600 transition duration-300 rounded-3xl">
//                 Category
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <div className={`md:hidden bg-red-800 ${isMenuOpen ? "block" : "hidden"}`}>
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex flex-col space-y-2">
//             <Link to="/" className="text-white hover:bg-red-900 py-2 px-4 rounded transition duration-300">Home</Link>
//             <Link to="/products" className="text-white hover:bg-red-900 py-2 px-4 rounded transition duration-300">Products</Link>
//             <Link to="/about" className="text-white hover:bg-red-900 py-2 px-4 rounded transition duration-300">About Us</Link>

//             {isLogged ? (
//               <button
//                 className="text-white hover:bg-red-900 py-2 px-4 rounded transition duration-300"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link to="/signup">
//                 <button className="bg-gray-400 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-colors">
//                   <CgProfile className="text-2xl" />
//                 </button>
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>

//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default Navbar;



import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';
import { CiMenuBurger } from 'react-icons/ci';
import { IoIosContact } from "react-icons/io";
import axios from 'axios';
import { ShopContext } from '../../../App';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { isLogged, setLogged, size, user } = useContext(ShopContext);
  const [userEmail, setUserEmail] = useState('');

  // Toggling the dropdown visibility
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  // Handle logout and fetch user email
  const handleLogout = () => {
    const id = localStorage.getItem('id');
    axios.get(`http://localhost:8000/user/${id}`)
      .then(res => setUserEmail(res.data.email));
    toggleDropdown();
  };

  // Confirm logout and clear local storage
  const confirmLogout = () => {
    localStorage.clear();
    setLogged(false);
    setDropdownVisible(false);
    navigate("/login");
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handleClick = () => setClick(!click);

  return (
    <div className="font-sans">
      <nav className=" shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          
          <div className='block md:hidden '>
          {isLogged ? (
              <div className="relative">
                <button className="bg-gray-400 text-white p-2 rounded-full hover:text-red-600 transition-colors" onClick={handleLogout}>
                  <IoIosContact className="text-2xl" />
                </button>
                {dropdownVisible && (
                  <div ref={dropdownRef} className="absolute  mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
                    <div className="px-4 py-2 text-sm text-gray-700">
                      <p>{user.name}</p>
                      <p>{userEmail}</p>
          <Link to='/orders'>
          <button 
          className='w-full px-4 py-2 text-sm text-left  bg-green-500 rounded-lg mt-4 font-bold'
          >
           View orders
          </button>
          </Link>
                    </div>
                    <div className="flex justify-end px-4 py-2 border-t border-gray-300">
                      <button className="px-4 py-2 bg-gray-300 rounded mr-2" onClick={() => setDropdownVisible(false)}>
                        Cancel
                      </button>
                      <button className="px-4 py-2 bg-green-500  rounded" onClick={confirmLogout}>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/Sign">
                <button className="bg-gray-400  p-2 rounded-full hover:text-red-600 transition-colors">
                  Sign in
                </button>
              </Link>
            )}
          </div>
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/logo_1.svg?v=1709198253"
              loading="lazy"
              alt="logo"
              className="w-32 sm:w-40 md:w-48 lg:w-56 pl-10"
            />
          </Link>
          

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <button className="relative flex items-center justify-center text-black p-2 rounded-full">
                <FaShoppingCart className="text-2xl" />
                <span className={`absolute -top-1 -right-1 bg-red-600  text-xs rounded-full w-4 h-4 flex items-center justify-center ${size > 0 ? 'inline' : 'hidden'}`}>
                  {size}
                </span>
              </button>
            </Link>
            

            {isLogged ? (
              <div className="relative">
                <button className="bg-gray-400 text-white p-2 rounded-full hover:bg-red-600 transition-colors" onClick={handleLogout}>
                  <IoIosContact className="text-2xl" />
                </button>
                {dropdownVisible && (
                  <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
                    <div className="px-4 py-2 text-sm text-gray-700">
                      <p>{user.name}</p>
                      <p>{userEmail}</p>
                      <Link to='/orders'>
          <button 
          className='w-full px-4 py-2 text-sm text-left text-white bg-red-500 rounded-lg mt-4'
          >
           View orders
          </button>
          </Link>
                    </div>
                    <div className="flex justify-end px-4 py-2 border-t border-gray-300">
                      <button className="px-4 py-2 bg-gray-300 rounded mr-2" onClick={() => setDropdownVisible(false)}>
                        Cancel
                      </button>
                      <button className="px-4 py-2 bg-green-500  rounded" onClick={confirmLogout}>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/Sign">
                <button className="bg-gray-400 text-white p-2 rounded-full hover:text-red-600 transition-colors">
                  Sign in
                </button>
              </Link>
            )}
          </div>

          <button className="block md:hidden" onClick={handleClick}>
            {click ? <FaTimes className="text-black" size="25px" /> : <CiMenuBurger className="text-black" size="30px" />}
          </button>
        </div>
      </nav>
      
      <nav className="bg-gray-300 font-bold">
         <div className="container mx-auto px-4">
           <ul className="hidden md:flex justify-center space-x-8">
             <li>
               <Link to="/" className="block py-3 px-3 hover:text-red-600 rounded-xl transition duration-300">
                 Home
               </Link>
             </li>
             <li>
               <Link to="/product" className="block py-3 px-3 hover:text-red-600 rounded-xl transition duration-300 ">
                 Shop
               </Link>
             </li>
             
             <li>
               <Link to="/Categoryhome" className="block py-3 px-3 hover:text-red-600 rounded-xl transition duration-300 ">
                 Category
               </Link>
             </li>
             <li>
               <Link to="/about" className="block py-3 px-3 hover:text-red-600 rounded-xl transition duration-300 ">
                 About Us
               </Link>
             </li>
           </ul>
         </div>
       </nav>

      <div className={`absolute top-16 right-0  w-2/4 bg-white md:hidden z-50 ${click ? 'block' : 'hidden'}`}>
        <div className=" mx-auto px-4 py-4 " >
          <ul className="space-y-4 mt-4 p-4">
            <Link to="/"><li className=" text-black hover:text-orange-600 font-bold p-2" onClick={handleClick}>Home</li></Link>
            <Link to="/product"><li className=" text-black hover:text-orange-600 font-bold p-2" onClick={handleClick}>Shop</li></Link>
            <Link to="/categoryhome"><li className=" text-black hover:text-orange-600 font-bold p-2" onClick={handleClick}>Category</li></Link>
            <Link to="/about"><li className=" text-black hover:text-orange-600 font-bold p-2" onClick={handleClick}>About Us</li></Link>

          </ul>
        </div>
      </div>

{/* <div className="absolute top-16 right-0  w-1/3 bg-white md:hidden z-50">
            <ul className="space-y-4 mt-4 p-4">
              <li className="text-black hover:text-orange-600" onClick={handleItemClick}>
                <Link to="/">Home</Link>
              </li>
              <li className="text-black hover:text-orange-600" onClick={handleItemClick}>
                <Link to="shop">Shop</Link>
              </li>
              <li className="text-black hover:text-orange-600" onClick={handleItemClick}>
                <Link to="shop">About Us</Link>
              </li>
              {/* <li
                className="text-black hover:text-orange-600"
                onClick={() => {
                  handleItemClick();
                  setIsLogged(false);
                  localStorage.clear();
                }}
              >
                <Link to="login">{isLogged ? 'Logout' : 'Login'}</Link>
              </li> */}
            {/* </ul>
          </div> */} 

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
