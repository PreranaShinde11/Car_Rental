import React, { useState, useEffect } from 'react';
import './Home.css';

const services = [
  { title: 'Premium Fleet', description: 'Choose from luxury, economy, and SUVs.' },
  { title: '24/7 Support', description: 'Round-the-clock assistance guaranteed.' },
  { title: 'Full Insurance', description: 'Drive stress-free with total coverage.' }
];

const testimonials = [
  { name: 'Riya Sharma', comment: 'Excellent cars and prompt service. Loved it!' },
  { name: 'Arjun Patel', comment: 'Smooth experience and amazing support.' },
  { name: 'Priya Nair', comment: 'Clean vehicles and easy booking process!' }
];

const Home = () => {
  const [stats, setStats] = useState({ customers: 0, cars: 0, years: 0 });

  useEffect(() => {
    let count = 0;
    const target = { customers: 50000, cars: 1000, years: 10 };
    const interval = setInterval(() => {
      count++;
      setStats({
        customers: Math.min(Math.floor((target.customers * count) / 100), target.customers),
        cars: Math.min(Math.floor((target.cars * count) / 100), target.cars),
        years: Math.min(Math.floor((target.years * count) / 100), target.years),
      });
      if (count >= 100) clearInterval(interval);
    }, 15);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h4>Effortless & Premium</h4>
              <h1>Car Rental Experience</h1>
              <p>Book your ride in seconds. Drive with class, comfort, and confidence.</p>
              <div className="hero-buttons">
                <button className="primary-btn">Get Started</button>
              </div>
            </div>
            <div className="hero-image">
              
             
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h2>{stats.customers.toLocaleString()}+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card">
              <h2>{stats.cars}+</h2>
              <p>Premium Cars</p>
            </div>
            <div className="stat-card">
              <h2>{stats.years}+</h2>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="service-cards">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Customers Say</h2>
          <div className="testimonial-cards">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p>"{t.comment}"</p>
                <h4>- {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;