import React, { useContext } from 'react';
    import { Formik } from 'formik';
    import * as Yup from 'yup';
    import { Link, useNavigate } from 'react-router-dom';
    import axios from 'axios'
import { ShopContext } from '../../App';

    
    
    
    const validationSchema = Yup.object({
      
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
      
    });

    function Login() {
      const navigate = useNavigate()
      const {setLogged,isLogged}=useContext(ShopContext)
      return(
        <>
        
        <div className='bg-cover  bg-center mt-16 max-h-screen flex items-center justify-center' >
          <div className=' rounded-lg shadow-md p-6 max-w-md w-full border bg-gray-200'>
    
         
          <Formik
            initialValues={{  email: '', password: '' }}
            
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              axios.get(`http://localhost:8000/users`)
              .then(res=>{console.log(res.data)
                const findata=res.data.find(item=>item.email===values.email&&item.password===values.password)
                const findata1=res.data.find(item=>item.email===values.email&&item.password!==values.password)
                if(findata&&values.email==='admin123@gmail.com'&&values.password==='admin123')
                {
                  alert('login successfulll');
                  localStorage.setItem("id",findata.id)
                  navigate('/admin')
                }
                else if(findata){
                  alert('login successfulll');
                  localStorage.setItem("id",findata.id)
                  navigate('/')
                }
                else if(findata1)
                  alert('passwrod incorrect')
                
                else{
                  alert('email id not registered')
                  navigate('/Sign')
                }
              })
              .catch(error=>console.log(error))
              setSubmitting(false);
              setLogged(true)
              console.log(isLogged);
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
                  <label htmlFor="password">Password</label>
                  <input
                  placeholder='Password'
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    
                    onBlur={handleBlur}
                    value={values.password}
                    className="w-full  px-3 py-2 border border-black rounded-md focus:outline-none focus:ring focus:border-blue-500 mb-2 mt-2"
    
                  />
                  {touched.password && errors.password && <div style={{color:'red'}}>{errors.password}</div>}
                </div>
    
                
    
                
                <div>
                <button
                  className="w-full bg-green-600 text-black p-2.5 rounded mt-2 mb-4 hover:bg-slate-900  hover:text-white font-medium"
                  type="submit"
                  
                >
                  Login
                </button>
                </div>
                <Link to= '/Sign'>
                <button
                  className="w-full bg-green-600 text-black p-2.5 rounded mt-2 mb-4 hover:bg-slate-900  hover:text-white font-medium"
                  type="submit"
                  
                >
                  Sign up
                </button>
                </Link>
                
                <Link to= '/Forgotlogin'>
                <span
                  className=" text-blue-600 p-2.5  mt-2 mb-4  font-medium"
                  type="submit"
                  
                >
                  Forgot password
                </span>
                </Link>
                
              </form>
            )}
          </Formik>
          </div>
        </div>
        </>
      );
    }
    
    export default Login;






























































































