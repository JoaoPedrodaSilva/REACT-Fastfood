import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// importing pages
import Home from "./pages/Home.js"
import Plates from "./pages/Plates.js"
import Reviews from './pages/Reviews.js'
import About from "./pages/About.js"
import Contact from './pages/Contact.js'
import Details from "./pages/Details.js"
import Error from "./pages/Error.js"

//importing components
import Navbar from './components/Navbar.js'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='plates' element={<Plates />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />          
          <Route path='details/:id' element={<Details />} />
          <Route path='*' element={<Error />} /> 
        </Routes>           
      </BrowserRouter>
  )
}

export default App
