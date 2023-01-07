import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Event from './components/Event';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
     
    <div className="App">
      <BrowserRouter>
        <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contactus" element={<ContactUs />} />
                </Routes>
            </main>
        <Footer/>
      </BrowserRouter>
    </div>
  </>
  )
}

export default App