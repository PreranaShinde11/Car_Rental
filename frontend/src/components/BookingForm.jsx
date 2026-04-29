import React, { useState } from 'react';
import './BookingForm.css';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupDate: '',
    returnDate: '',
    selectedCar: '',
    location: ''
  });

  const today = new Date().toISOString().split('T')[0];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:5000/api/bookings", formData);
      alert("Booking confirmed! The owner has been notified.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        pickupDate: '',
        returnDate: '',
        selectedCar: '',
        location: ''
      });
    } catch (error) {
      console.error(error);
      alert("Error submitting booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="booking-form-section">
      <div className="booking-box">
        <h2>Book a Car</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />

          <div className="form-row">
            <input type="date" name="pickupDate" min={today} value={formData.pickupDate} onChange={handleChange} required />
            <input type="date" name="returnDate" min={formData.pickupDate || today} value={formData.returnDate} onChange={handleChange} required />
          </div>

          <select name="location" value={formData.location} onChange={handleChange} required>
            <option value="">Pickup Location</option>
            <option value="airport">Airport Terminal</option>
            <option value="downtown">Downtown Office</option>
            <option value="hotel">Hotel Delivery</option>
            <option value="custom">Custom Location</option>
          </select>

          <select name="selectedCar" value={formData.selectedCar} onChange={handleChange} required>
            <option value="">Select Car</option>
            <option value="audi">Audi A6 (₹7,000/day)</option>
            <option value="bmw">BMW X5 (₹9,000/day)</option>
            <option value="tesla">Tesla Model 3 (₹8,500/day)</option>
            <option value="mercedes">Mercedes C-Class (₹8,000/day)</option>
            <option value="range">Range Rover Evoque (₹12,000/day)</option>
          </select>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Booking...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
