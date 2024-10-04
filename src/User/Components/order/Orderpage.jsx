






import React, { useContext ,useState} from 'react';

import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../../App';

const Orderpage = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate=useNavigate()
    const {user}=useContext(ShopContext)
    const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
        setSelectedUser(null);
        navigate('/home')
    };
   
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-3/4 overflow-x-auto h-3/4">
        <h2 className="text-2xl mb-4">User Details</h2>
        
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <h3 className="text-xl mt-4 mb-2">order Items</h3>
        
        {user.order && user.order.length > 0 && (
          <>
           
            
            {user.order.map((item, index) => (
              <div key={index} className="mb-2 border border-gray-400 p-3">
                <p><strong>Name:</strong> {item.paymentaddress.name}</p>
                <p><strong>Address:</strong> {item.paymentaddress.address},{item.paymentaddress.pincode}</p>
                
                <p><strong>Phone:</strong>₹{(item.paymentaddress.phone)}</p>
                {item.cart.map((items)=>(
                  <div>
                <p><strong>Product:</strong>₹{(items.name)}</p>
                <p><strong>product id:</strong>₹{(items.id)}</p>
                <p><strong>Quantity:</strong>₹{(items.Qty)}</p>
                <p><strong>product price:</strong>₹{(items.price)}</p>
                </div>
                

                ))}
                
              </div>
              
            ))}
            {/* {user.order.cart.map((item)=>console.log(item.data))} */}
            
        
          </>
        )}
         <button 
          onClick={()=>navigate('/')}
          className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Orderpage;
