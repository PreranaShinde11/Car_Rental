import React from 'react';
import { useNavigate } from 'react-router-dom';   // ✅ import navigation hook
import './CarList.css';

import image from '../assets/audi.jpg';
import image2 from '../assets/BMW X5.jpg';

const cars = [
  {
    id: 1,
    name: 'Audi A6',
    price: '7,000',
    category: 'sedan',
    img: image,
    features: ['Automatic', 'GPS', 'AC'],
    description: 'Premium sedan perfect for business trips and comfortable city driving.',
  },
  {
    id: 2,
    name: 'BMW X5',
    price: '9,000',
    category: 'suv',
    img: image2,
    features: ['4WD', 'Leather'],
    description: 'Luxury SUV with advanced features and exceptional comfort.',
  },
  {
    id: 3,
    name: 'Tesla Model 3',
    price: '8,500',
    category: 'electric',
    img: image,
    features: ['Electric', 'Autopilot'],
    description: 'Revolutionary electric vehicle with cutting-edge technology.',
  },
  {
    id: 4,
    name: 'Mercedes C-Class',
    price: '8,000',
    category: 'sedan',
    img: image2,
    features: ['Luxury', 'GPS'],
    description: 'Executive sedan combining elegance with performance.',
  },
  {
    id: 5,
    name: 'Range Rover Evoque',
    price: '12,000',
    category: 'suv',
    img: image2,
    features: ['4WD', 'Sport'],
    description: 'Ultimate luxury SUV for the most discerning travelers.',
  },
  {
    id: 6,
    name: 'Toyota Camry Hybrid',
    price: '6,500',
    category: 'hybrid',
    img: image2,
    features: ['Hybrid', 'Eco', 'GPS'],
    description: 'Eco-friendly hybrid with excellent fuel economy and comfort features.',
  },
  {
  id: 7,
  name: 'Honda Accord',
  price: '6,800',
  category: 'sedan',
  img: image2,
  features: ['Automatic', 'Eco Mode', 'Bluetooth'],
  description: 'Reliable sedan with great fuel efficiency and advanced comfort features.',
},
{
  id: 8,
  name: 'Ford Mustang',
  price: '15,000',
  category: 'sports',
  img: image,
  features: ['V8 Engine', 'Convertible', 'Premium Sound'],
  description: 'Iconic sports car delivering thrilling performance and a stylish ride.',
},
];

const CarList = () => {
  const navigate = useNavigate(); // ✅ setup navigation

  return (
    <section className="car-list-section">
      <div className="car-list-header">
        <h2>Available Cars for Rent</h2>
        <p>Explore our top-quality, premium and economy vehicles for your next ride.</p>
      </div>

      <div className="car-list-grid">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>
            <div className="car-image">
              {car.img ? (
                <img src={car.img} alt={car.name} />
              ) : (
                <div className="image-placeholder">Image</div>
              )}
            </div>

            <h3 className="car-name">{car.name}</h3>

            <div className="car-features">
              {car.features.map((feature, idx) => (
                <span key={idx} className="feature">{feature}</span>
              ))}
            </div>

            <p className="car-price">₹{car.price} <span>/day</span></p>
            <p className="car-desc">{car.description}</p>

            <div className="car-buttons">
              {/* ✅ navigate to booking later if needed */}
              <button className="book-btn" onClick={() => navigate(`/booking/${car.id}`)}>
                Book Now
              </button>

              {/* ✅ navigate to car details page */}
              <button className="details-btn" onClick={() => navigate(`/car/${car.id}`)}>
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarList;
