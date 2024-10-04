import React from 'react';
import { Outlet } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-black p-8 pb-30 bottom-0 border border-gray-200 ml-4 ">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between ">
        <div className="mb-6 md:mb-0">
          <div className="mb-4">
            <img width="106" height="34" src="https://tse4.mm.bing.net/th?id=OIP.N9qFQw2POT_edGbiwn9L3AHaE8&pid=Api&P=0&h=180" alt="Logo" />
          </div>
          <p>Kerala,India</p>
          <p>9876543210</p>
          <p>petfood@gmail.com</p>
          <div className='m-4 flex gap-4'>
            <img width="20" height="24" src="https://tse1.mm.bing.net/th?id=OIP.izOOxDyHFwihHcQcKIExmQHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" alt="" />
            <img width="20" height="24" src="https://tse3.mm.bing.net/th?id=OIP.4ytMnGvESMQducqERO-B6wHaHa&pid=Api&P=0&h=180" alt="" />
            <img width="20" height="24" src="https://tse4.mm.bing.net/th?id=OIP.biG9UdrkNGTbvX1YvOvY4AHaHa&pid=Api&P=0&h=180" alt="" />

          </div>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="font-semibold italic text-lg text-blue-900 mb-2">Customer Service</h4>
          <ul>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Help & FAQs</a></li>
            <li><a href="#" className="hover:underline">Payment Method</a></li>
            <li><a href="#" className="hover:underline">Delivery Information</a></li>
            <li><a href="#" className="hover:underline">Track Your Order</a></li>
            <li><a href="#" className="hover:underline">Return & Exchanges</a></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="font-semibold italic text-lg text-blue-900 mb-2">Categories</h4>
          <ul>
            <li><a href="#" className="hover:underline">Dogs</a></li>
            <li><a href="#" className="hover:underline">Cat</a></li>
            <li><a href="#" className="hover:underline">Bird</a></li>
            <li><a href="#" className="hover:underline">Fish</a></li>
            
          </ul>
        </div>

        <div>
          <h4 className="font-semibold italic text-lg text-blue-900 mb-2">Our Company</h4>
          <ul>
            <li><a href="#" className="hover:underline ">Corporate Information</a></li>
            <li><a href="#" className="hover:underline ">Privacy & Cookies Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Promo & Terms</a></li>
          </ul>
        </div>


      </div>
      <hr className='mt-10' />
      
      <div className='p-8 text-center'>
        Copyright © 2024 PetFood Store | Powered by Pet Store
      </div>
      <main>
        <Outlet/>
      </main>
    </footer>
    
  );
};

export default Footer;