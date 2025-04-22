import { React } from 'react'
import './App.css'
import Topbar from './components/topbar/Topbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import {BrowserRouter, Routes, Route, Outlet}  from "react-router-dom";
import Login from './components/login/Login'
import Product from './components/product/Product'
import Register from './components/register/Register'
import ScrollToTop from './components/scrolltop/ScrollToTop'
import Products from './components/products/Products'
import UserAuth from './components/context/UserAuth'
import Cart from './components/cart/Cart'
import CartContext from './components/context/CartContext'
import Checkout from './components/checkout/Checkout'
import CheckoutContext from './components/context/CheckoutContext'
import ConfirmOrderContext from './components/context/ConfirmOrderContext'
import Congratulations from './components/congratulations/Congratulations'
import Invoice from './components/invoice/Invoice'
function App() {
  return (
    <>
    <UserAuth>
    <ConfirmOrderContext>
    <CheckoutContext>
      <CartContext>          
                <BrowserRouter>
                  <ScrollToTop />
                  
                  < Topbar />  
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/product/:id" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/congratulations" element={<Congratulations />} />
                        <Route path="/invoice" element={<Invoice />} />
                    </Routes>
                  <Footer />
                </BrowserRouter> 
      </CartContext>  
      </CheckoutContext> 
      </ConfirmOrderContext>    
      </UserAuth>
    </>
  )
}

export default App
