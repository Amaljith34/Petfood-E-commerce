
import React from 'react';
import Footer from '../Homepage/Footer';

const Baseproducts = () => {
  return (
    <>
    <div className="container mx-auto p-4 sm:p-8 font-sans">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-4 text-custom-red">Thank You For Visiting Pet Food Expert</h1>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
          Like you, we understand how difficult buying the right pet food can be. With so many options available, choosing the food that’s right for your pet can be difficult without reassurance.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-custom-red">Our Mission</h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
          Our mission is to provide pet owners with trustworthy information and high-quality products to ensure their pets receive the best nutrition possible.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-custom-red">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-gray-700 mb-4">
          <li>Wide selection of premium pet foods</li>
          <li>Expert advice from experienced pet owners</li>
          <li>Commitment to quality and customer satisfaction</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <img 
          src="https://t3.ftcdn.net/jpg/04/81/32/08/240_F_481320874_0ySypkY4mZYl4jEmCOGXMbPgVhocmw2t.jpg" 
          alt="Happy pet" 
          className="rounded-lg shadow-lg w-full h-auto object-cover sm:w-full sm:h-auto md:w-full md:h-auto" 
        />
      </div>
    </div>
     <Footer></Footer>
     </>
  );
}         

export default Baseproducts;
