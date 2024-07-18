

import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';
import { CiMenuBurger } from 'react-icons/ci';
import { IoIosContact } from "react-icons/io";
import { ShopContext } from '../../App';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const {isLogged,setLogged,size}=useContext(ShopContext)
  const handleClick = () => setClick(!click);

  return (
    <div className=' top-0 z-50'>
      <nav className='bg-gray-400 py-4 md:py-7 '>
        <div className='flex justify-between items-center px-4 md:ml-44 '>
          <div className='flex items-center'>
            <Link to='/Login' className='flex flex-col items-center md:hidden 'onClick={()=>setLogged(localStorage.clear())}>
              <IoIosContact className='text-black' size='40px' />
              <span className='text-black ml-2'> {isLogged?'Log out':'𝗦𝗶𝗴𝗻 in'}</span>
            </Link>
            <h2 className='text-3xl font-bold text-green-600 ml-4 md:ml-0'>𝓟𝓔𝓣𝓢𝓕𝓞𝓞𝓓</h2>
          </div>
          <div className='md:hidden'>
            <Link to='/cartpage'>
              <button className='flex flex-col md:flex-row items-center hover:text-blue-600 py-3 px-3'>
              <span style={{display:size>0?'inline':'none'}} className='absolute text-white  h-5 w-3 bg-red-500 rounded font-bold text-sm ml-10 '>{size}</span>
                <FaShoppingCart size='20px' />
                <span className='ml-2'>𝗖𝗮𝗿𝘁</span>
              </button>
            </Link>
          </div>
          <div className='hidden md:flex flex-1 justify-center items-center ml-36'>
            <ul className='flex gap-8 text-[18px]'>
              <Link to='/'><li className='hover:text-green-600 transition border-b-2 border-gray-400 hover:border-green-600 cursor-pointer'>𝐇𝐨𝐦𝐞</li></Link>
              <Link to='/pets'><li className='hover:text-green-600 transition border-b-2 border-gray-400 hover:border-green-600 cursor-pointer'>𝗠𝘆𝗣𝗲𝘁𝘀</li></Link>
              
              <Link to='/shop'><li className='hover:text-green-600 transition border-b-2 border-gray-400 hover:border-green-600 cursor-pointer'>𝗦𝗵𝗼𝗽</li></Link>
              <Link to='/Baseproduct'><li className='hover:text-green-600 transition border-b-2 border-gray-400 hover:border-green-600 cursor-pointer'>𝗦𝘂𝗽𝗽𝗼𝗿𝘁</li></Link>
            </ul>
            
            <div className='ml-10 flex items-center'>
              <Link to='/cartpage' >
              
                <button className='flex flex-col items-center hover:text-blue-600 py-3 px-3'>
                <span style={{display:size>0?'inline':'none'}} className='absolute text-white  h-5 w-3 bg-red-500 rounded font-bold text-sm ml-10 '>{size}</span>
                  <FaShoppingCart size='20px' />
                  <span className='ml-2'>Cart</span>
                </button>
              </Link>
              
              <Link to='/login'  className='ml-2' onClick={()=>setLogged(localStorage.clear())}>
                <button className='text-black bg-white py-1 px-3 hover:bg-blue-500'>{isLogged?'Logout':'Login'}</button>
              </Link>
              
              
            </div>
          </div>
          <button className='block md:hidden' onClick={handleClick}>
            {click ? <FaTimes className='text-black' size='25px' /> : <CiMenuBurger className='text-black' size='30px' />}
          </button>
        </div>
        {click && (
          <div className='md:hidden z-50 absolute w-full left-0 right-0 bg-slate-400 backdrop-blur-md bg-opacity-30 transition'>
            <ul className='text-center text-xl mt-8'>
              <Link to='/'><li className='my-4 py-4 border-b border-green-200 text-black hover:bg-green-200 transition'onClick={handleClick}>Home</li></Link>
              <Link to='/pets'><li className='my-4 py-4 border-b border-green-200 text-black hover:bg-green-200 transition 'onClick={handleClick}>Mypets</li></Link>
              
              <Link to='/shop'><li className='my-4 py-4 border-b border-green-200 text-black hover:bg-green-200 transition'onClick={handleClick}>Shop</li></Link>
              <Link to='/Baseproduct'><li className='my-4 py-4 border-b border-green-200 text-black hover:bg-green-200 transition'onClick={handleClick}>Support</li></Link>
              
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

export default Navbar;


