

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../App';


function Homepage() {
  const navigate=useNavigate();
  const { orderlist ,productslist} = useContext(ShopContext);
  console.log(orderlist);

  return (
    <>
    <div className='flex flex-col md:flex-row flex-wrap justify-evenly items-center mt-56 ml-5  max-md:mt-32 '>
      
      <div className='bg-gray-700 text-white h-40 w-52 mb-3 md:mb-0 md:mr-3  text-center '>
        <h1 className='font-bold text-center mt-8'>
        Total number of Products</h1>
        <h2 className='text-2xl'>{productslist.length}</h2>
        <button className='text-blue-600 font-bold' onClick={()=>navigate('/products')}>View products</button>
        </div>
      <div className='bg-gray-700 text-white h-40 w-52 mb-3 md:mb-0 md:mr-3  text-center'>
        <h1 className='font-bold text-center mt-8'>Total number of orders</h1>
        <h2 className='text-2xl '>{orderlist.length}</h2>
        <button className='text-blue-600 font-bold'onClick={()=>navigate('/userlist')}>View order</button>
        </div>
    </div>
    </>
  );
}

export default Homepage;