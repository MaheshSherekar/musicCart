import { useState } from 'react'
import './App.css'
import Topbar from './components/topbar/Topbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import {BrowserRouter, Routes, Route, Outlet}  from "react-router-dom";
import Login from './components/login/Login'
import Product from './components/product/Product'
function App() {
  
  return (
    <>
      <BrowserRouter>
      < Topbar />  
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
      <Footer />
      </BrowserRouter>        
   
    </>
  )
}

export default App
