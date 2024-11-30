import React from 'react'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Fruits from './pages/Fruits'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Verify from './pages/Verify'

const App = () => {
  return (
    <main className='overflow-hidden text-[#404040] bg-primary'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOreder" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </main>
  )
}

export default App