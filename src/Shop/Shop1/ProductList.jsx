 import React, { useEffect, useState} from 'react'
import CartPage from './CartPage'
import axios from 'axios'

const ProductList = () => {
    const [datas,setdatas]=useState([])
    
useEffect(()=>{
    axios.get('http://localhost:8000/products')
    .then(res=>setdatas(res.data))
},[])


  return (
    
    <div>
       <CartPage data={datas}/>
    </div>
  )
}

export default ProductList




