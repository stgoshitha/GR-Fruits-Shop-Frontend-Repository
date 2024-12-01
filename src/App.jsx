import React, { useRef } from 'react'
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
import Footer from './components/Footer'
import Register from './pages/Register'

const App = () => {

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className='overflow-hidden text-[#404040] bg-primary'>
      <Header />
      <Routes>
        <Route path="/" element={<Home 
          heroRef={heroRef}
          aboutRef={aboutRef}
          featuresRef={featuresRef}
          scrollToSection={scrollToSection}
        />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOreder" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToFeatures={() => scrollToSection(featuresRef)}
      />
    </main>
  )
}

export default App