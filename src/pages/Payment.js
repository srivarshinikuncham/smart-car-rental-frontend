import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state;

  console.log("RECEIVED BOOKING 👉", booking);

  const handlePayment = () => {
    if (!booking) {
      alert("Booking data missing ❌");
      return;
    }

    const updatedBooking = {
      ...booking,
      status: "Confirmed"
    };

    const existing =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const updatedList = [...existing, updatedBooking];

    localStorage.setItem("bookings", JSON.stringify(updatedList));

    console.log("SAVED BOOKINGS 👉", updatedList);

    alert("Payment successful 💳");

    navigate("/booking-details", { state: updatedBooking });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Payment Page 💳</h2>

      <button className="btn-orange" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}

export default Payment;