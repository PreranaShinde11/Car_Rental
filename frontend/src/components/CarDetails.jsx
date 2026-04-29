// src/components/CarDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cars } from "../data/carsData";
import "./CarDetails.css";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return <p>Car not found!</p>;
  }

  return (
    <div className="car-details">
      <button onClick={() => navigate(-1)} className="back-btn">⬅ Back</button>

      <h2>{car.name}</h2>
      <img src={car.img} alt={car.name} className="details-image" />

      <p><strong>Price:</strong> ₹{car.price}/day</p>
      <p><strong>Category:</strong> {car.category}</p>
      <p><strong>Fuel Type:</strong> {car.fuel}</p>
      <p><strong>Seats:</strong> {car.seats}</p>
      <p><strong>Transmission:</strong> {car.transmission}</p>
      <p><strong>Features:</strong> {car.features.join(", ")}</p>
      <p><strong>Description:</strong> {car.description}</p>
    </div>
  );
};

export default CarDetails;
