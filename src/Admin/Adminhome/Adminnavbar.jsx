

import React, { useContext, useState } from 'react';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';
import { CiMenuBurger } from 'react-icons/ci';
import { IoIosContact } from "react-icons/io";
import { ShopContext } from '../../App';

const  Adminnavbar= () => {
  const [click, setClick] = useState(false);
  const {isLogged,setLogged,cart}=useContext(ShopContext)
  const handleClick = () => setClick(!click);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate=useNavigate()


  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    localStorage.clear();
  
    setDropdownVisible(false);
    navigate('/Login')
  };

  
  
  const userName = "Admin"; // Replace with actual user name
  const userEmail = "admin123@gmail.com";
  // {cart.map((item, index) => (
    
  // ))}
  

  return (
    
    <div className=' top-0 z-50'>
     
      <nav className='bg-gray-400 py-4 md:py-7 '>
        <div className='flex justify-between items-center px-4  '>
          
          <div className='flex items-center '>
        <div className='relative'>
      <div className='flex flex-col items-center cursor-pointer' onClick={toggleDropdown}>
        <IoIosContact className='text-black' size='40px' />
        <span className='text-black'>Admin</span>
      </div>
      {dropdownVisible && (
        <div className='absolute top-full mt-2 w-48 bg-black shadow-lg rounded-md z-10 text-white'>
          <div className='px-4 py-2 text-sm '>{userName}</div>
          <div className='px-4 py-2 text-sm '>{userEmail}</div>
          <button
            onClick={handleLogout}
            className='w-full px-4 py-2 text-sm text-left text-red-600 '
          >
            Logout
          </button>
          
        </div>
      )}
    </div> 
      <h2 className='text-3xl font-bold text-green-600   ml-12  '>𝓟𝓔𝓣𝓢𝓕𝓞𝓞𝓓</h2>
      </div>

          
          
          
          <div className='hidden md:flex flex-1 justify-center items-center '>
            <ul className='flex gap-8 text-[18px] ml-96'>
              <Link to='/admin'><li className='hover:text-green-600 transition border-b-2 border-gray-400 hover:border-green-600 cursor-pointer'>𝐇𝐨𝐦𝐞</li></Link>
              <Link to='/userlist'><li className='hover:text-green-600 transition border-b-2 border-gray-400 hover:border-green-600 cursor-pointer'>𝗨𝘀𝗲𝗿-𝗟𝗶𝘀𝘁</li></Link>
              <Link to='/products'><li className='hover:text-green-600 transition border-b-2 border-gray-400 hover:border-green-600 cursor-pointer'>𝗣𝗿𝗼𝗱𝘂𝗰𝘁𝘀</li></Link>
              <Link to='/Login'><li className='hover:text-green-600 transition border-b-2 border-gray-400 hover:border-green-600 cursor-pointer'><span > 𝗟𝗼𝗴𝗼𝘂𝘁</span></li></Link>
            </ul>
            
            
          </div>
          <button className='block md:hidden' onClick={handleClick}>
            {click ? <FaTimes className='text-black' size='25px' /> : <CiMenuBurger className='text-black' size='30px' />}
          </button>
        </div>
        {click && (
          <div className="md:hidden h-screen w-60  bg-gray-500 text-white mt-7">
          <div className="p-4 text-lg font-bold border-b border-gray-700">
            Admin
          </div>
          <ul className="p-4 space-y-4">
            <li>
              <Link to="/admin" className="block p-2 rounded hover:bg-gray-700"onClick={handleClick}>
                Home
              </Link>
            </li> 
            <li>
              <Link to="/userlist" className="block p-2 rounded hover:bg-gray-700"onClick={handleClick}>
                User List
              </Link>
            </li>
            <li>
              <Link to="/products" className="block p-2 rounded hover:bg-gray-700"onClick={handleClick}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/Login" className="block p-2 rounded hover:bg-gray-700" onClick={()=>setLogged(localStorage.clear())}>
              <span > 𝗟𝗼𝗴𝗼𝘂𝘁</span>
              </Link>
            </li>
          </ul>
        </div>
        )}
      </nav>
      <main>
        <Outlet/>
      </main>
    </div>

  );
};

export default Adminnavbar;

