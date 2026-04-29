import React from 'react';
import './aboutus.css'; 

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>About Car Rental</h1>
        <p className="intro">
          At Car Rental, we believe in making your journey safe, convenient, and luxurious.
          Whether you're traveling for business or leisure, we provide premium and affordable vehicles tailored to your needs.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>🚗 Wide Vehicle Selection</h3>
            <p>
              From compact sedans to spacious SUVs and electric vehicles, we offer a wide range of well-maintained cars to suit every style and purpose.
            </p>
          </div>

          <div className="about-card">
            <h3>🕒 24/7 Customer Support</h3>
            <p>
              Our dedicated team is always ready to assist you — anytime, anywhere. We prioritize customer satisfaction and quick service.
            </p>
          </div>

          <div className="about-card">
            <h3>💸 Affordable & Transparent</h3>
            <p>
              No hidden charges, no surprises. Enjoy transparent pricing, flexible rental plans, and exclusive offers on long-term bookings.
            </p>
          </div>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To deliver hassle-free and enjoyable car rental experiences with quality vehicles and excellent customer service across every city we serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
