import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './page/home/Home';
import Order from './page/order/Order';
import Cart from './page/cart/Cart';
import DashBoard from './page/admin/dashboard/DashBoard';
import NoPage from './page/nopage/Nopage';
import MyState from './context/data/myState';
import Login from './page/registration/Login';
import Signup from './page/registration/Signup';
import ProductInfo from './page/productInfo/ProductInfo';
import AddProduct from './page/admin/page/Addproduct';
import UpdateProduct from './page/admin/page/UpdateProduct';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './page/allproducts/AllProducts';

const App = () => {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/allproducts' element={<Allproducts/>}></Route>
        <Route path='/order' element={
          <ProtectedRoutes>
            <Order/>
          </ProtectedRoutes>
        }></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/dashboard' element={
          <ProtectedRoutesForAdmin>
            <DashBoard/>
          </ProtectedRoutesForAdmin>
        }></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/productInfo/:id' element={<ProductInfo/>}></Route>
        <Route path='/AddProduct' element={
          <ProtectedRoutesForAdmin>
            <AddProduct/>
          </ProtectedRoutesForAdmin>
        }></Route>
        <Route path='/*' element={<NoPage/>}></Route>
        <Route path='/UpdateProduct' element={
          <ProtectedRoutesForAdmin>
            <UpdateProduct/>
          </ProtectedRoutesForAdmin>
        }></Route>
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
  )
}

//user
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

//admin
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'ashutosh7912@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export default App