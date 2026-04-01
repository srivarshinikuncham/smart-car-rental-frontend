import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookingDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state;

  if (!booking) {
    return <h2 style={{ textAlign: "center" }}>No booking found ❌</h2>;
  }

  return (
    <div style={styles.container}>
      <h2>Booking Details ✅</h2>

      {/* 🚗 CAR INFO */}
      <div style={styles.card}>
        <h3>Car Information 🚗</h3>
        <p><b>Name:</b> {booking.name}</p>
        <p><b>Price:</b> ₹{booking.price} / day</p>
        <p><b>Date:</b> {booking.date}</p>
      </div>

      {/* 👤 CUSTOMER INFO */}
      <div style={styles.card}>
        <h3>Customer Information 👤</h3>
        <p><b>Name:</b> {booking.customerName}</p>
        <p><b>Email:</b> {booking.email}</p>
      </div>

      {/* 💳 PAYMENT INFO */}
      <div style={styles.card}>
        <h3>Payment Information 💳</h3>
        <p><b>Payment Mode:</b> Online</p>
        <p><b>Status:</b> Successful ✅</p>
      </div>

      {/* 📦 BOOKING STATUS */}
      <div style={styles.card}>
        <h3>Booking Status 📦</h3>
        <p><b>Status:</b> {booking.status || "Pending"}</p>
      </div>

      <button style={styles.button} onClick={() => navigate("/")}>
        Go to Home 🏠
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px"
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    margin: "15px auto",
    width: "60%",
    borderRadius: "10px"
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default BookingDetails;