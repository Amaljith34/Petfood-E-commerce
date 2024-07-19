import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

function Home() {
  return (
    <div>
    <div className="  bg-cover  flex max-md:flex-col   justify-center mt-10 ">
      <div className='flex flex-col md:justify-center lg:-mt-10 lg:mb-20'>
        <h1 className='font-bold text-center text-5xl   justify-center  '>HIGHQUALITY <br></br>
        <span className='md:text-6xl' >PET FOOD</span>
        </h1>
        </div>
        

        <Link to='/shop'>
        <div className=' bottom-0 left-0  p-2 lg:ml-10 flex flex-col items-end justify-center  mb-52 md:-ml-10 shadow-md '>
        <img src="https://cdn.shopify.com/s/files/1/0565/8021/0861/articles/img-2-5-1700550229210.jpg?v=1700550614" alt="" className='lg:p-3  lg:w-1/2 max-md:rounded-full rounded-3xl' />
          <button className=' w-32 bg-green-400 h-10 rounded-3xl bottom-0 mt-6 '>SHOPNOW</button>
        </div>
        </Link>
        
    </div>
    <Footer/>
    </div>
  )
}

export default Home