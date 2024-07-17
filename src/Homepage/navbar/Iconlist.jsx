import React from 'react'

const Iconlist = () => {
    
  return (
    <div className="h-24 w-64 bg-gray-500 text-white">
      <div className="p-4 text-lg font-bold border-b border-gray-700">
        
      </div>
      <ul className="p-4 space-y-4">
        <li>
          <Link to="/" className="block p-2 rounded hover:bg-gray-700">
            Home
          </Link>
        </li> 
        <li>
          <Link to="/user-list" className="block p-2 rounded hover:bg-gray-700">
            User List
          </Link>
        </li>
        <li>
          <Link to="/products" className="block p-2 rounded hover:bg-gray-700">
            Products
          </Link>
        </li>
        <li>
          <Link to="/logout" className="block p-2 rounded hover:bg-gray-700">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Iconlist