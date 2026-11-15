import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Plans from './pages/Plans';
import Trainers from './pages/Trainers';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Join from './pages/Join';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
