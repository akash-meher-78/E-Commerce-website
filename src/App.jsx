import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [localtions, setloactions] = useState()

  const location  = async() =>{
    navigator.geolocation.getCurrentPosition(async pos => {
      const {latitude, longitude} = pos.coords
      console.log(latitude, longitude);

      const url =  `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`

      try {
        const location = await axios.get(url)
        const exacrLocation = location.data.address
        setloactions(exacrLocation)
        
      } catch (error) {
        console.log(error);
      }
    })
  }

  useEffect(() =>{
    location()
  }, [])

  return (
    <BrowserRouter>
    <Navbar localtions={localtions}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
