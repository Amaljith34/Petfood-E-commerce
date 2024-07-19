import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../App';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Homepage/Footer';

function Cart() {
  const [count, setCount] = useState(1);
  const { cart, Updateqty, removecart, setcart } = useContext(ShopContext);
  const navigate = useNavigate();
  let id = localStorage.getItem('id');

  useEffect(() => {
    axios.get(`http://localhost:8000/users/${id}`)
      .then(res => setcart(res.data.cart))
      .catch(error => console.log(error));
  }, []);

  const handleBuyNow = () => {
    if (cart.length > 0) {
      navigate('/userdetails');
    }
  };

  return (
    <>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-center flex-wrap mt-24 ml-4 mb-32 border-black"
          >
            <div className="w-full sm:w-1/2">
              <div className="w-full sm:bg-slate-100 shadow-md rounded-lg overflow-hidden h-full flex flex-col justify-between">
                <img
                  className="w-full md:w-full h-40 object-contain mt-2"
                  src={item.image}
                  alt=""
                />
                <div className="p-2">
                  <div className="font-bold">{item.name}</div>
                  <div className="">{item.description}</div>
                  <div className="font-bold">Price: {item.price}</div>
                  <div className="text-black text-2xl font-bold">Total Price:
                    {item.price * item.Qty}
                  </div>
                </div>
                <div className="flex justify-end p-2">
                  <button
                    className="bg-gray-400 text-dark p-2 rounded hover:bg-blue-500 hover:text-black"
                    onClick={() => Updateqty(item, -1)}
                  >
                    -
                  </button>
                  <span className="m-1">Qty:{item.Qty}</span>
                  <button
                    className="bg-gray-400 text-dark p-2 rounded hover:bg-blue-500 hover:text-black mr-5"
                    onClick={() => Updateqty(item, 1)}
                  >
                    +
                  </button>

                  <button
                    className="bg-red-700 text-white p-2 rounded hover:bg-blue-500 hover:text-black"
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
        <p className="text-red-500 text-2xl text-center mt-56">Cart is Empty</p>
      )}

      <div className="fixed bottom-0 left-0 right-0 mb-5 p-2 flex items-center justify-center bg-black shadow-md text-white">
        <span className="mr-2 text-2xl font-bold">
          Total Price: {cart.reduce((acc, item) => acc + item.Qty * item.price, 0)}
        </span>
        <button
          className={`bg-green-600 text-white p-2 rounded hover:bg-blue-500 font-bold hover:text-black ml-10 ${cart.length === 0 && 'opacity-50 cursor-not-allowed'}`}
          onClick={handleBuyNow}
          disabled={cart.length === 0}
        >
          Buy Now
        </button>
      </div>
      <Footer/>
    </>
  );
}

export default Cart;
