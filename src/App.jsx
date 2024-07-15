import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Login from './Homepage/login/Login';
import Sign from './Homepage/signup/Sign';
import Forgotlogin from './Homepage/login/Forgotlogin';
import Navbar from './Homepage/navbar/Navbar';
import Pets from './assets/Animals/Pets';
import ProductList from './Shop/Shop1/ProductList';
import Home from './Homepage/Home/Home';
import Baseproducts from './Products/Baseproducts'
import Dog from './assets/Animals/Dog'




import { createContext } from 'react';
import Foodcart from './Shop/Shop1/Foodcart';
import Cart from './Shop/Shop1/Cart';
import Basemobail from './Products/Basemobail';
import axios from 'axios';
import Payment from './payment/Payment';
export const ShopContext = createContext()
function App() {
  const [cart, setcart] = useState([])
  const [isLogged, setLogged] = useState(false)
  let id=localStorage.getItem('id')
    
      const addtocart = (elem) => {
        let isPresent = false
        let index = -1
        cart.forEach((item, ind)=>{
          if(item.id==elem.id){
            isPresent=true
            index = ind
          }
        })

          if(isPresent){
            const newCart = cart
            console.log(newCart)
            newCart[index] = {...newCart[index], Qty:newCart[index].Qty + 1}
            console.log(newCart)
            setcart(newCart)
            alert("successfully added to cart")
            axios.patch(`http://localhost:8000/users/${id}`,{cart:newCart})
            .then(res=>console.log('done'))
            .catch(error=>console.log('error'))
          }
          
          else{
            const newcart=[...cart, elem]
            setcart([...cart, elem])
            alert("successfully added to cart")
            axios.patch(`http://localhost:8000/users/${id}`,{cart:newcart})
            .then(res=>console.log('done'))
            .catch(error=>console.log('error'))

          }
      }
      const removecart = (item)=>{
        const remove=(cart.filter(elem=>{
          return elem.id!=item.id
        }))
        setcart(remove)
        axios.patch(`http://localhost:8000/users/${id}`,{cart:remove})

      }

      const Updateqty=(product,num)=>{
      if(product.Qty ===1 && num===-1)return
        
       const  newqty=cart.map((item)=>
        item.id===product.id?{...item,Qty:item.Qty+num}:item
       );
       console.log(newqty.Qty);
      setcart(newqty)
      console.log(cart);
      axios.patch(`http://localhost:8000/users/${id}`,{cart:newqty})
      .then(res=>console.log('done'))
      .catch(error=>console.log('error'))
      
    }
    useState(()=>{

    })
      let size = cart.length
  return (
    <BrowserRouter>
      <ShopContext.Provider value={{ cart, addtocart,removecart,size,Updateqty,setcart,setLogged,isLogged}}>
        
        <Routes>
          <Route path='/' element={<Navbar/>}>
          <Route path='/' element={<Home />}/>
            
            <Route path='/pets'element={<Pets/>}/>
            <Route path='/cartpage'element={<Cart/>}/>
            <Route path='/shop'element={<ProductList/>}/>
            <Route path='/list'element={<Foodcart/>}/>
            <Route path='/Baseproduct'element={<Baseproducts/>}/>
            <Route path='/Basemobail' element={<Basemobail/>}/>
            <Route path='/dog'element={<Dog/>}/>
            <Route path='/payment'element={<Payment/>}/>
           
           </Route>
           <Route path='/login' element={<Login />} />
            <Route path='/sign' element={<Sign />} />
            <Route path='forgotlogin' element={<Forgotlogin />} />
            </Routes>
    </ShopContext.Provider>
  </BrowserRouter>
  );
}

export default App;
