import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Backdrop, CircularProgress } from '@mui/material';
import Appointment from './pages/Appointment';
import Header from './components/Header'; 
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function Home() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const goToAppointment = () => {
    navigate('/appointment');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="app">
      <Header handleOpen={handleOpen} /> 

      <section className="hero">
        <div className="hero-content">
          <h1>Compassionate Care for Your<br />Furry Family</h1>
          <p>
            From grooming and wellness to boarding <br />
            and adoptions we offer everything your pet needs <br />
            under one roof.
          </p>
          <button className="book-now" onClick={goToAppointment}>Book Now</button>
        </div>
        <div className="hero-image" />
      </section>

      <section className="values">
        {[
          { icon: '❤️', title: 'Compassion First', text: 'We believe that every pet deserves to be treated like family...' },
          { icon: '💖', title: 'Wellness at Core', text: 'We take a holistic approach to pet care...' },
          { icon: '🤝', title: 'Respect & Integrity', text: 'Trust is everything. We build lasting bonds...' },
          { icon: '🌎', title: 'Community', text: 'We’re part of a vibrant, connected network...' }
        ].map((val, idx) => (
          <div className="value-box" key={idx}>
            <i>{val.icon}</i>
            <h3>{val.title}</h3>
            <p>{val.text}</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <h2><span className="brand-bold">Fetch</span>&<span className="brand-light">Fur</span></h2>
          <p>by FazCo</p>
        </div>
        <div className="footer-info">
          <p>Nuable St. Bonafide, Kal City, 4000 Cebu</p>
          <p>📞 1234-456-7890 | 📱 123-456-7890</p>
          <div className="social-icons">🌐 📘 🐦 📸</div>
        </div>
        <div className="footer-links">
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
          <a href="#">HELP</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">FAQS</a>
        </div>
        <p className="copyright">
          Copyright © 2025 Fetch & Fur
        </p>
      </footer>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

// -----------------------------
// Main App Component with Routing
// -----------------------------
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/login" element={<Login />} />         
      <Route path="/signup" element={<SignUp />} />       
</Routes>

    </Router>
  );
}

export default App;
