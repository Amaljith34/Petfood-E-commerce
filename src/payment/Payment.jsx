import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  accNumber: Yup.string().required('Account number is required'),
  price: Yup.string().required('Price is required'),
  securityCode: Yup.string().required('Security code is required'),
});

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-md shadow-lg">
      <Formik
        initialValues={{ accNumber: '', price: '', securityCode: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          navigate('./donepage')
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
                placeholder='Price'
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
    </div>
  );
}

export default Payment;
