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
function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      < Topbar />  
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
      <Footer />
      </BrowserRouter>        
   
    </>
  )
}

export default App
