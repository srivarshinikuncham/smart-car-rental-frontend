import React from "react";
import { useNavigate } from "react-router-dom";

function Cars() {
  const navigate = useNavigate();

  const cars = [
    {
      name: "Alto",
      price: 1000,
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Maruti_Alto_800.JPG"
    },
    {
      name: "Swift",
      price: 1200,
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/2018_Suzuki_Swift_SZ5_Boosterjet_SHVS_1.0.jpg"
    },
    {
      name: "i20",
      price: 1400,
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Hyundai_i20_%282020%29_IMG_3861.jpg"
    },
    {
      name: "Baleno",
      price: 1600,
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/2016_Suzuki_Baleno_SZ5_Boosterjet_1.0.jpg"
    },
    {
      name: "Creta",
      price: 2000,
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Hyundai_Creta_2020.jpg"
    },
    {
      name: "Innova",
      price: 2500,
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Toyota_Innova_Crysta.jpg"
    },
    {
      name: "Fortuner",
      price: 3000,
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Toyota_Fortuner_%28AN160%29.jpg"
    },
    {
      name: "BMW",
      price: 5000,
      image: "https://upload.wikimedia.org/wikipedia/commons/1/16/2019_BMW_3-Series.jpg"
    },
    {
      name: "Audi",
      price: 5500,
      image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi_A4_B9.jpg"
    },
    {
      name: "Mercedes",
      price: 6000,
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Mercedes-Benz_C-Class_W206_IMG_6664.jpg"
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Available Cars 🚗</h2>

      <div className="grid">
        {cars.map((car, index) => (
          <div key={index} className="card-dark">
            <img src={car.image} alt={car.name} className="car-img" />

            <h3>{car.name}</h3>
            <p>₹{car.price} / day</p>

            <button
              className="btn-orange"
              onClick={() => navigate("/booking", { state: car })}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;