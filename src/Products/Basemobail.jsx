import React from 'react'

const Basemobail = () => {
  return (
    
    <div className=' bg-hero-pattern'>
                <button className='my-4 py-4 border-b border-green-200 text-green-400 hover:text-green-950 '>Products</button>
                <div className=' flex-col absolute left-0 top-0 p-10 w-full bg-white z-20 text-black duration-300'>
                  <div className='grid grid-cols-2  gap-10'>
                    <div className='flex flex-col text-3xl '>
                      <h3 className='mb-4 text-5xl text-green-400'>DOG FOOD</h3>
                      <a href='' className='hover:underline hover:text-green-400'>Royal Canin</a>
                      <a href='' className='hover:underline hover:text-green-400'>Pedigree</a>
                      <a href='' className='hover:underline hover:text-green-400'>Hills Science Diet</a>
                      <a href='' className='hover:underline hover:text-green-400'>Farmina N&D</a>
                    </div>
                    <div className='flex flex-col text-3xl'>
                      <h3 className='mb-4 text-5xl text-green-400'>FISH FOOD</h3>
                      <a href='' className='hover:underline hover:text-green-400'>Hikari Bio-Pure</a>
                      <a href='' className='hover:underline hover:text-green-400'>San Francisco</a>
                      <a href='' className='hover:underline hover:text-green-400'>Hikari Betta</a>
                      <a href='' className='hover:underline hover:text-green-400'>New Life Spectrum</a>
                    </div>
                    <div className='flex flex-col text-3xl'>
                      <h3 className='mb-4 text-5xl text-green-400'>CAT FOOD</h3>
                      <a href='' className='hover:underline hover:text-green-400'>BRUNO'S WILD ESSENTIALS</a>
                      <a href='' className='hover:underline hover:text-green-400'>Kennel Kitchen</a>
                      <a href='' className='hover:underline hover:text-green-400'>Hypoallergenic Gourmet</a>
                      <a href='' className='hover:underline hover:text-green-400'>Orijen Biologically Appropriate Nutrition</a>
                    </div>
                    
                    <div className='flex flex-col text-3xl'>
                      <h3 className='mb-4 text-5xl text-green-400'>BIRD FOOD</h3>
                      <a href='' className='hover:underline hover:text-green-400'>Hulled Sunflower Seeds</a>
                      <a href='' className='hover:underline hover:text-green-400'>Black Oil Sunflower Seeds</a>
                      <a href='' className='hover:underline hover:text-green-400'>Peanuts hearts</a>
                      <a href='' className='hover:underline hover:text-green-400'>Cracked Corn</a>

                    </div>
                    
                  </div>
                </div>
              </div>

  )
}

export default Basemobail