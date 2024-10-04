import React from 'react';
    import { Formik } from 'formik';
    import * as Yup from 'yup';
 
    const validationSchema = Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      
      
    });

    function Forgot() {
      return(
        <>
        
        <div className='bg-cover  bg-center min-h-screen flex items-center justify-center' >
          <div className=' rounded-lg shadow-md p-6 max-w-md w-full border bg-gray-200'>
    
         
          <Formik
            initialValues={{  email: ''}}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
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
                <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
    
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                  placeholder='Email'
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="w-full px-3 py-2  border border-black rounded-md focus:outline-none focus:ring focus:border-blue-500 mb-2 mt-2"
    
                  />
                  {touched.email && errors.email && <div style={{color:'red'}}>{errors.email}</div>}
                </div>
                
                <div>
                <button
                  className="w-full bg-green-600 text-black p-2.5 rounded mt-2 mb-4 hover:bg-slate-900  hover:text-white font-medium"
                  type="submit"
                  disabled={isSubmitting}
                  
                >
                  Countiniue
                </button>
                </div>
              </form>
            )}
          </Formik>
          </div>
        </div>
        </>
      );
    }
    
    export default Forgot;


























































































































































