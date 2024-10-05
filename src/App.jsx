import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { createContext } from "react";
import axios from "axios";
import Category from "./User/Components/category/category";
import Cart from "./User/Components/Cartpage/Cart";
import Product from "./User/Components/Products/products";
import Categoryhome from "./User/Components/category/categoryhome";
import Orderpage from "./User/Components/order/Orderpage";
import Footer from "./User/Components/footer/Footer";
import Payment from "./User/Components/payment/Payment";
import Userdetails from "./User/Components/payment/Userdetails";
import Login from "./BaseComponents/login/Login";
import Sign from "./BaseComponents/signup/Sign";
import Forgot from "./BaseComponents/login/Forgotlogin";
import Navbar from "./User/Components/navbar/Navbar";
import Home from "./User/Components/Home/Home";
import About from "./User/Components/About/about";
import Adminnavbar from "./Admin/Adminnavbar/Adminnavbar";
import Homepage from "./Admin/Home/Homepage";
import Userlist from "./Admin/User/Userlist";
import Products from "./Admin/productslist/Product";

export const ShopContext = createContext();
function App() {
  const [cart, setcart] = useState([]);
  const [user, setuser] = useState([]);
  const [fetchorder, setfechorder] = useState([]);
  const [users, setUsers] = useState([]);
  const [order, setorder] = useState([]);
  const [isLogged, setLogged] = useState(false);
  const [paymentaddress, setpaymentaddress] = useState([]);
  const [orderlist, setOrderlist] = useState([]);
  const [productslist, setProductslist] = useState([]);
  let id = localStorage.getItem("id");

  useEffect(() => {
    if (id) {
      setLogged(true);
    }
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${id}`)
      .then((res) => setuser(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        const mapdorder = res.data.filter((item) => item.order.length > 0);

        setOrderlist(mapdorder);
      })
      .catch((error) => console.log("error"));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => {
        setProductslist(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${id}`)
      .then((res) => setcart(res.data.cart));
    // console.log(cart);
  }, []);
  const addtocart = (elem) => {
    let isPresent = false;
    let index = -1;
    cart.forEach((item, ind) => {
      if (item.id == elem.id) {
        isPresent = true;
        index = ind;
      }
    });

    if (isPresent) {
      const newCart = cart;
      console.log(newCart);
      newCart[index] = { ...newCart[index], Qty: newCart[index].Qty + 1 };
      console.log(newCart);
      setcart(newCart);

      axios
        .patch(`http://localhost:8000/users/${id}`, { cart: newCart })
        .then((res) => console.log("done"))
        .catch((error) => console.log("error"));
    } else {
      const newcart = [...cart, elem];
      setcart([...cart, elem]);

      axios
        .patch(`http://localhost:8000/users/${id}`, { cart: newcart })
        .then((res) => console.log("done"))
        .catch((error) => console.log("error"));
    }
  };
  const removecart = (item) => {
    const remove = cart.filter((elem) => {
      return elem.id != item.id;
    });
    setcart(remove);
    axios.patch(`http://localhost:8000/users/${id}`, { cart: remove });
  };

  const Updateqty = (product, num) => {
    if (product.Qty === 1 && num === -1) return;

    const newqty = cart.map((item) =>
      item.id === product.id ? { ...item, Qty: item.Qty + num } : item
    );
    console.log(newqty.Qty);
    setcart(newqty);

    axios
      .patch(`http://localhost:8000/users/${id}`, { cart: newqty })
      .then((res) => console.log("done"))
      .catch((error) => console.log("error"));
  };

  const continoue = (elem) => {
    let isPresent = false;
    let index = -1;
    order.forEach((item, ind) => {
      if (item.id == elem.id) {
        isPresent = true;
        index = ind;
      }
    });

    if (isPresent) {
      const neworder = order;
      console.log(neworder);
      neworder[index] = { ...neworder[index], Qty: neworder[index].Qty + 1 };
      console.log(neworder);
      setorder(neworder);
      alert("successfully added to order");
      axios
        .patch(`http://localhost:8000/users/${id}`, { order: neworder })
        .then((res) => console.log("done"))
        .catch((error) => console.log("error"));
    } else {
      const neworder = [...order, elem];
      setorder([...order, elem]);
      alert("successfully added to order");
      axios
        .patch(`http://localhost:8000/users/${id}`, { order: neworder })
        .then((res) => console.log("done"))
        .catch((error) => console.log("error"));
    }
  };

  let size = cart.length;
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <ShopContext.Provider
          value={{
            cart,
            addtocart,
            removecart,
            size,
            Updateqty,
            setcart,
            setLogged,
            isLogged,
            continoue,
            order,
            setorder,
            setpaymentaddress,
            paymentaddress,
            user,
            productslist,
            orderlist,
          }}
        >
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/product" element={<Product />} />

              <Route path="/category" element={<Category />} />
              <Route path="/categoryhome" element={<Categoryhome />} />

              <Route path="/orders" element={<Orderpage />} />
              <Route path="/about" element={<About />} />
              <Route path="/footer" element={<Footer />}></Route>
            </Route>

            <Route path="/payment" element={<Payment />} />
            <Route path="/userdetails" element={<Userdetails />} />

            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="forgot" element={<Forgot />} />

            <Route path="/" element={<Adminnavbar />}>
              <Route path="/admin" element={<Homepage />} />
              <Route path="/userlist" element={<Userlist />} />
              <Route path="/products" element={<Products />} />
              {/* <Route path='/total' element={<T}/> */}
              {/* <Route path='/orderlist' element={<}/> */}
            </Route>
          </Routes>
        </ShopContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
