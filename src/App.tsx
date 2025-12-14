import './App.css'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import Shop from './pages/Shop'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drunk-city" element={<Home />} />
        <Route path="/drunk-city/shop" element={<Shop />} />
        <Route path="/drunk-city/about" element={<About />} />
      </Routes>
      
       
    </>
  )
}

export default App
