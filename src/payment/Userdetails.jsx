import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ShopContext } from '../App';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  landmark: Yup.string().required('Landmark is required'),
  pincode: Yup.string().required('Pincode is required'),
  phone: Yup.string().required('Phone number is required'),
});

const Userdetails = () => {
  const navigate = useNavigate();
  const { cart, Updateqty, removecart, setcart } = useContext(ShopContext);

  return (

    <div>
      <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-md shadow-lg">
        <Formik
          initialValues={{ name: '', address: '', landmark: '', pincode: '', phone: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            navigate('/payment');
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <h2 className="text-2xl font-bold mb-6 text-center">Address</h2>
                                                    
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">Name:</label>
                <Field
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              
              <div className="mb-4">
                <label className="block mb-2" htmlFor="address">Address:</label>
                <Field
                  placeholder="Address"
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
                <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              
              <div className="mb-4">
                <label className="block mb-2" htmlFor="landmark">Landmark:</label>
                <Field
                  placeholder="Landmark"
                  type="text"
                  id="landmark"
                  name="landmark"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
                <ErrorMessage name="landmark" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              
              <div className="mb-4">
                <label className="block mb-2" htmlFor="pincode">Pincode:</label>
                <Field
                  placeholder="Pincode"
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
                <ErrorMessage name="pincode" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              
              <div className="mb-4">
                <label className="block mb-2" htmlFor="phone">Phone:</label>
                <Field
                  placeholder="Phone"
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
              </div >
              <div className='flex justify-between'>
              <button className='w-28 bg-red-600 text-white p-2.5 rounded mt-4 hover:bg-slate-900 font-bold' onClick={()=>navigate('/cartpage')}>
                cancel
              </button>
              <button
                className="w-52  bg-green-700 text-white p-2.5 rounded mt-4 hover:bg-slate-900 font-bold"
                type="submit"
                disabled={isSubmitting}
              >
                Continue
              </button>
              
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Userdetails;
