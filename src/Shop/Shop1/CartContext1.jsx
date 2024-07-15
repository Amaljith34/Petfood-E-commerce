
import React, { createContext } from 'react'

export const Petcontext=createContext()

const CartContext1 = ({children}) => {
    
  return (
    <>
      <Petcontext.Provider value={{ cart, addtocart,removecart,size,Updateqty}}>
        {children}
       </Petcontext.Provider>
       {warning && <div>item already added to your cart</div>}
    </>
  )
}

export default CartContext1