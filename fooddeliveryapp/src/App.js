import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Cart from './component/Cart';
import Contact from './component/Contact';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import AddtoCart from './component/AddtoCart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Shop from './component/Shop';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/home' element={<Home/>}/> */}
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/foods' element={<Shop/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/addtocart' element={<AddtoCart/>}/>
    </Routes>
    <Footer/>
    {/* <React.Fragment>
      Welcome to my channel;
      </React.Fragment> */}
    </BrowserRouter>

  );
}

export default App;
