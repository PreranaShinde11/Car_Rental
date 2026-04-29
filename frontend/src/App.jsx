import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import CarList from './components/CarList';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import About from './components/aboutus';
import AuthForm from './components/AuthForm';
import CarDetails from './components/CarDetails';   

export const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/booking/:id" element={<BookingForm />} />
        <Route path="/booking" element={<BookingForm />} />

        <Route path="/auth" element={<AuthForm />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
