

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';
import { CiMenuBurger } from 'react-icons/ci';
import { IoIosContact } from "react-icons/io";
import axios from 'axios';
import { ShopContext } from '../../App';


const Adminnavbar = () => {
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
      <nav className="bg-gray-300 shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          
          <div className='block md:hidden '>
          {isLogged ? (
              <div className="relative">
                <button className="bg-gray-400 text-white p-2 rounded-full hover:bg-green-600 transition-colors" onClick={handleLogout}>
                  <IoIosContact className="text-2xl" />
                </button>
                {dropdownVisible && (
                  <div ref={dropdownRef} className="absolute  mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg z-50">
                    <div className="px-4 py-2 text-sm text-gray-700">
                      <p>{user.name}</p>
                      <p>{userEmail}</p>
          
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
                <button className="bg-gray-400  p-2 rounded-full hover:bg-green-600 transition-colors">
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
                <button className="bg-gray-400 text-white p-2 rounded-full hover:bg-green-600 transition-colors">
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
      
      <nav className="bg-green-500 font-bold">
         <div className="container mx-auto px-4">
           <ul className="hidden md:flex justify-center space-x-8">
             <li>
               <Link to="/admin" className="block py-3 px-3 hover:bg-green-600 rounded-xl transition duration-300">
                 Home
               </Link>
             </li>
             <li>
               <Link to="/products" className="block py-3 px-3 hover:bg-green-600 rounded-xl transition duration-300 ">
                 Products
               </Link>
             </li>
             
             <li>
               <Link to="/userlist" className="block py-3 px-3 hover:bg-green-600 rounded-xl transition duration-300 ">
               Userlist
               </Link>
             </li>
             <li>
               <Link to="/orderlist" className="block py-3 px-3 hover:bg-green-600 rounded-xl transition duration-300 ">
                 Orders
               </Link>
             </li>
             <li>
               <Link to="/total" className="block py-3 px-3 hover:bg-green-600 rounded-xl transition duration-300 ">
                 total
               </Link>
             </li>

           </ul>
         </div>
       </nav>

      <div className={`absolute top-16 right-0  w-2/4 bg-white md:hidden z-50  ${click ? 'block' : 'hidden'}`}>
        <div className=" mx-auto px-4 py-4 " >
          <ul className="space-y-4 mt-4 p-4">
            <Link to="/admin"><li className=" space-y-4 mt-4 " onClick={handleClick}>Home</li></Link>
            <Link to="/products"><li className=" space-y-4 mt-4 " onClick={handleClick}>Shop</li></Link>
            <Link to="/userlist"><li className=" space-y-4 mt-4 " onClick={handleClick}>Userlist</li></Link>
            <Link to="/orderlist"><li className=" space-y-4 mt-4 " onClick={handleClick}>Orders</li></Link>
            <Link to="/total"><li className=" space-y-4 mt-4 " onClick={handleClick}>Total</li></Link>

          </ul>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Adminnavbar;


