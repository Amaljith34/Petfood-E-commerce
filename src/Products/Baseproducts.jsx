import React from 'react'

const Baseproducts = () => {
  return (
    <div className='relative  bg-hero-pattern bg-contain'>
                <button className='font-bold text-black size-12 text-4xl p-8 sm:mb-16 ml-10'>Products</button>
                
                  <div className='grid grid-cols-2  gap-5  ml-10 '>
                    <div className='flex flex-col  '>
                      <h3 className='mb-4 text-2xl text-green-400'>DOG FOOD</h3>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Royal Canin</a>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Pedigree</a>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Hills Science Diet</a>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Farmina N&D</a>
                    </div>
                    <div className='flex flex-col'>
                      <h3 className='mb-4 text-2xl text-green-400'>CAT FOOD</h3>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>BRUNO'S WILD ESSENTIALS</a>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Kennel Kitchen</a>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Hypoallergenic Gourmet</a>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Orijen Biologically Appropriate Nutrition</a>
                    </div>
                    <div className='flex flex-col'>
                      <h3 className='mb-4 text-2xl text-green-400'>FISH FOOD</h3>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Hikari Bio-Pure</a>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>San Francisco</a>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Hikari Betta</a>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>New Life Spectrum</a>
                    </div>
                    <div className='flex flex-col'>
                      <h3 className='mb-4 text-2xl text-green-400'>BIRD FOOD</h3>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Hulled Sunflower Seeds</a>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Black Oil Sunflower Seeds</a>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Peanuts hearts</a>
                      <a href='' className='py-2 hover:underline hover:text-blue-600'>Cracked Corn</a>
                    </div>
                  </div>
                
              </div>
  )
}

export default Baseproducts




