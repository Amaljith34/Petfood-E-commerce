import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../App';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cart() {
  const[count,setcount]=useState(1)
  const { cart ,Updateqty,removecart,setcart} = useContext(ShopContext)
  let id=localStorage.getItem('id')
  // console.log(cart);
  useEffect(()=>{
    axios.get(`http://localhost:8000/users/${id}`)
    .then(res=>setcart(res.data.cart))
    .catch(error=>console.log(error))
  },[])

  return (
    <>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div
            key={index}
            className=" flex justify-center flex-wrap mt-24 ml-4 mb-32 border-black "
          >
            <div className="w-full sm:w-1/2">
              <div className="w-full sm: bg-slate-100 shadow-md rounded-lg overflow-hidden h-full flex flex-col justify-between">
                <img
                  className=" w-full md:w-full h-40 object-contain mt-2"
                  src={item.image}
                  alt=""
                />
                <div className="p-2">
                  <div className="font-bold">{item.name}</div>
                  <div className="">{item.description}</div>
                  <div className="text-black text-2xl font-bold">Price:
                    {item.price * item.Qty} Rs
                  </div>
                  
                </div>
                <div className="flex justify-end p-2">
                  <button
                    className="bg-gray-400  text-dark p-2 rounded hover:bg-blue-500 hover:text-black "
                    onClick={() => Updateqty(item, -1)}
                  >
                    -
                  </button>
                  <span className="m-1">Qty:{item.Qty}</span>
                  <button
                    className="bg-gray-400  text-dark p-2 rounded hover:bg-blue-500 hover:text-black  mr-5"
                    onClick={() => Updateqty(item, 1)}
                  >
                    +
                  </button>

                  <button
                    className="bg-red-700 text-white p-2 rounded hover:bg-blue-500 hover:text-black "
                    onClick={() => removecart(item)}
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-red-500 text-2xl text-center mt-56">cart is Empty</p>
      )}

      <div className="fixed bottom-0 left-0 right-0 p-2 flex items-center justify-center bg-white shadow-md">
        <span className="mr-2 text-2xl font-bold">
          Total Price :
          {cart.reduce((acc, item) => acc + item.Qty * item.price, 0)}
        </span>
        <Link to='/payment'>
        <button
          className="bg-green-500 text-black p-2 rounded hover:bg-blue-500 hover:text-black ml-10"
          onClick={() => {}}
        >
          Buy Now
        </button>
        </Link>
      </div>
    </>
  )
}

export default Cart