import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './CartContext';

import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />

      </Container>
    </CartProvider>
    
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;