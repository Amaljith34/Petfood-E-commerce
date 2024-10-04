


import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { FaCheckCircle } from 'react-icons/fa'
import { ShopContext } from '../../../App';

const validationSchema = Yup.object({
  accNumber: Yup.string().required('Account number is required')
  .matches(/^[0-9]+$/, "Must be only digits")
  .min(15, 'Must be exactly 15 digits')
  .max(15, 'Must be exactly 15 digits')
  .required('Required'),
  price: Yup.string().required('Price is required'),
  securityCode: Yup.string().required('Security code is required')
  .matches(/^[0-9]+$/, "Must be only digits")
  .min(6, 'Must be exactly 6 digits')
  .max(6, 'Must be exactly 6 digits')
  .required('Required'),
});

const Payment = () => {
  const navigate = useNavigate();
  const { cart, paymentaddress ,removecart} = useContext(ShopContext);
  const [payment, setPayment] = useState([]);
  const [order, setOrder] = useState([]);
  const [isModalOpen,setIsModalOpen]=useState(false)
  
  
  const total = cart.reduce((acc, item) => acc + item.price * item.Qty, 0);
  const id = localStorage.getItem('id');

  useEffect(() => {
    axios.get(`http://localhost:8000/users/${id}`)
      .then(res => setOrder(res.data.order))
      .catch(err => console.error(err));
  }, [id]);

  useEffect(() => {
    console.log(payment);
  }, [payment]);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-md shadow-lg">
      <Formik
        initialValues={{paymentaddress: paymentaddress, accNumber: '', price: total,   cart:cart }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          setPayment(values);
    const neworder=[...order,values]
    
          axios.patch(`http://localhost:8000/users/${id}`, { order: neworder ,cart:[]})
          
            .then(() => console.log('Order updated'))
            .catch(err => console.error(err));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h2 className='text-2xl font-bold mb-6 text-center'>Payment</h2>

            <div className="mb-4">
              <label className='mb-2 block' htmlFor="accNumber">ACC NUMBER:</label>
              <Field
                placeholder='ACC NUMBER'
                type="text"
                id="accNumber"
                name="accNumber"
                className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
              <ErrorMessage name="accNumber" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label className='mb-2 block' htmlFor="price">PRICE:</label>
              <Field
                value={total}
                type="text"
                id="price"
                name="price"
                className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
              <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label className='mb-2 block' htmlFor="securityCode">Security Code:</label>
              <Field
                placeholder='Security Code'
                type="password"
                id="securityCode"
                name="securityCode"
                className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
              <ErrorMessage name="securityCode" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              className="w-full bg-green-600 text-white p-2.5 rounded mt-4 hover:bg-slate-900 font-medium"
              type="submit"
              disabled={isSubmitting}
              onClick={()=>setIsModalOpen(true)}
            >
              Submit
            </button>
            <Link to='/cartpage'>
              <button
                className="w-full bg-red-600 text-white p-2.5 rounded mt-4 hover:bg-slate-900 font-bold"
                type="button"
              >
                Cancel
              </button>
            </Link>
          </Form>
        )}
      </Formik>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FaCheckCircle className="text-green-500 text-6xl mb-4 ml-28" />
            <h2 className="text-2xl font-bold mb-4">Order Successful!</h2>
            <p>Your order has been placed successfully!.</p>
            <button
              onClick={() => {
                setIsModalOpen(false);
                navigate('/');
                
              }}
              className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
