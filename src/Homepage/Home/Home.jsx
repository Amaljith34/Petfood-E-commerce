import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-hero-pattern h-screen bg-cover  flex flex-col justify-center ">
        <h1 className='font-bold text-center text-6xl md:-ml-24 sm:mt-60'>HIGH QUALLITY <br></br>
        <span className='md:text-7xl' >PET FOOD</span>
        </h1>
        <Link to='/shop'>
        <div className=' bottom-0 left-0 right-0 p-2 flex items-end justify-end  mb-52 md:-ml-10 shadow-md'>
          <button className='w-32 bg-green-400 h-10 rounded-3xl bottom-0'>SHOWMORE...</button>
        </div>
        </Link>
    </div>
  )
}

export default Home