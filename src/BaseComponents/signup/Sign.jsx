
    import React, { useState } from 'react';
    import { Formik } from 'formik';
    import * as Yup from 'yup';
    import { Link, useNavigate } from 'react-router-dom';
  
    import axios from 'axios'
    
    
    
    const validationSchema = Yup.object({
      name: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    });

    function Sign() {
      const[regvalidation,setvalidation]=useState(false)
      const navigate=useNavigate();
      return(
        <>
       
        <div className='bg-cover  bg-center  max-h-screen mt-12 flex items-center justify-center overflow-auto' >
          <div className=' rounded-lg shadow-md p-6 max-w-md w-full border '>
      
         
          <Formik
            initialValues={{ name: '', email: '', password: '', confirmPassword: '', cart:[] ,order:[]}}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              axios.get('http://localhost:8000/users')
              .then((res)=>{
                const finddata=res.data.find((item=>item.email===values.email));
                
                if(finddata){setvalidation(true)
                  navigate(('/Login'))
                }
              })
            .catch((error)=>{

            })
              axios.post('http://localhost:8000/users',values)
              .then(()=>{alert('successfull');setTimeout(()=>navigate('/Login'))})
              .catch(error=>console.log(error))
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                 <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
                <div>
                  <label className='mb-2 mt-2' htmlFor="name"></label>
                  <input
                  placeholder='Name'
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className=" w-full px-3 py-2 mb-2 mt-2 border border-gray rounded-md focus:outline-none focus:ring focus:border-blue-500 "
                  />
                  {touched.name && errors.name && <div style={{color:'red'}}>{errors.name}</div>}
                </div>
    
                <div>
                  <label htmlFor="email"></label>
                  <input
                  placeholder='Email'
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="w-full px-3 py-2  border border-gray rounded-md focus:outline-none focus:ring focus:border-blue-500 mb-2 mt-2"
    
                  />
                  {touched.email && errors.email && <div style={{color:'red'}}>{errors.email}</div>}
                </div>
    
                <div>
                  <label htmlFor="password"></label>
                  <input
                  placeholder='Password'
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    
                    onBlur={handleBlur}
                    value={values.password}
                    className="w-full  px-3 py-2 border border-gray rounded-md focus:outline-none focus:ring focus:border-blue-500 mb-2 mt-2"
    
                  />
                  {touched.password && errors.password && <div style={{color:'red'}}>{errors.password}</div>}
                </div>
    
                <div>
                  <label htmlFor="confirmPassword"></label>
                  <input
                  placeholder='Confirm Password'
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    className="w-full px-3 py-2 border border-gray rounded-md focus:outline-none focus:ring focus:border-blue-500  mb-2 mt-2"
    
                  />
                  {touched.confirmPassword && errors.confirmPassword && <div style={{color:'red'}}>{errors.confirmPassword}</div>}
                </div>
    
                <button
                  className="w-full bg-green-600 text-black text-s p-2.5 rounded mt-14 hover:bg-slate-900 hover:text-white font-medium"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button><h6 className='ml-5 text-blue-800 mt-6 mb-3'>Already have an account?</h6>
                <Link to= '/Login'>
                <button
                  className="w-full bg-green-600 text-black p-2.5 rounded mt-2 mb-4 hover:bg-slate-900  hover:text-white font-medium"
                  type="submit"
                  
                >
                  Login
                </button>
                </Link>
                
              </form>
            )}
          </Formik>
          </div>
        </div>
        </>
      );
    }
    
    export default Sign;


        












































