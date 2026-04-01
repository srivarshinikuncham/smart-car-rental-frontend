import React, { useEffect, useState } from "react";

function History() {
  const [bookings, setBookings] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const user = JSON.parse(localStorage.getItem("user"));
    const userRole = localStorage.getItem("role");

    setRole(userRole);

    if (userRole === "admin") {
      setBookings(allBookings); // admin → all
    } else {
      const filtered = allBookings.filter(
        (b) => b.email === user?.email
      );
      setBookings(filtered); // user → only own
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>
        {role === "admin" ? "All Bookings 👨‍💼" : "My Bookings 📦"}
      </h2>

      <div className="grid">
        {bookings.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            No bookings found ❌
          </p>
        ) : (
          bookings.map((b, index) => (
            <div key={index} className="card-dark">
              <h3>{b.name}</h3>
              <p>₹{b.price}</p>
              <p>Date: {b.date}</p>
              <p>Name: {b.customerName}</p>
              <p>Email: {b.email}</p>
              <p>Status: {b.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default History;