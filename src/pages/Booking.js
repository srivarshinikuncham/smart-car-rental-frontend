import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();

  const car = location.state;
  const [selectedDate, setSelectedDate] = useState("");

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select a date ❌");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    const bookingData = {
      name: car.name,
      price: car.price,
      date: selectedDate,
      customerName: user?.name || "Guest",
      email: user?.email || "guest@gmail.com",
      status: "Pending"
    };

    console.log("BOOKING DATA 👉", bookingData);

    navigate("/payment", { state: bookingData });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Book {car.name} 🚗</h2>

      <p>Price: ₹{car.price} / day</p>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{ padding: "10px", margin: "20px", borderRadius: "10px" }}
      />

      <br />

      <button className="btn-orange" onClick={handleBooking}>
        Proceed to Payment 💳
      </button>
    </div>
  );
}

export default Booking;