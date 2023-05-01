import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, Delivery, Contact, Foodmenu, Events, Pickup, Navbar, Services} from './components'
import { Blog, Features, Footer, Header, Possibility, WhatMotherland } from './containers'
import './App.css'
const App = () => {

  return ( 
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/foodmenu' element={<Foodmenu />} /> 
        <Route path='/events' element={<Events />} />
        <Route path='/pickup' element={<Pickup />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    </>
  )
};


export default App