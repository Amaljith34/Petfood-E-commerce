import React, { useContext } from "react";
import toast from "react-hot-toast";
import { ShopContext } from "../../../App";

function ProductDetails({ isOpen, modalclose, item }) {
  const { addtocart } = useContext(ShopContext);

  if (!isOpen || !item) return null;

  const title = item.name ? item.name : "No title available";

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={modalclose}
    >
      <div className="bg-white w-full max-w-3xl mx-4 md:mx-auto rounded-lg overflow-hidden flex shadow-lg">
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover"
            src={item.image}
            alt={title}
          />
        </div>

        <div className="w-1/2 p-6 flex flex-col justify-between">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">
              {title[0]?.toUpperCase()}{title.slice(1)}
            </h2>
            <p className="text-lg text-gray-700 mb-4">${item.price}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>

          <div className="flex justify-between mt-auto">
            <div className="px-6 pt-4 pb-2 ">
              <button
                className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md bottom-0"
                onClick={() => { addtocart(item); toast.success('Add To Cart'); }}
              >
                Add to Cart
              </button>
            </div>
            <div className="px-6 pt-4 pb-2 ">
            <button
              className="bg-red-500 text-white  px-4 pt-2 pb-2 rounded-md bottom-0 hover:bg-red-700"
              onClick={modalclose}
            >
              Close
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
