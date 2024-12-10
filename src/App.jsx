
import './App.css'

import {  Routes, Route } from 'react-router-dom';
import Navbar from './comonents/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './comonents/Footer';
import Women from './pages/Women'

function App() {
  

  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/women' element={<Women />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
   
    </>
  )
}

export default App
