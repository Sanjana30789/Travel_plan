import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import TravelForm from './Components/iternary'
import Home from './Components/Home'
import AboutUs from './Components/About'

function App() {

  return (
    // <>
    // <div>
    //   <Navbar />
    //   <Footer />
    // </div>
    // </>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/itinerary" element={<TravelForm />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    
  )
}

export default App
