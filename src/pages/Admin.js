import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // 🔐 PROTECT ADMIN
  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      alert("Access denied ❌");
      navigate("/login");
    }
  }, [navigate]);

  // 📦 LOAD BOOKINGS
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    console.log("ALL BOOKINGS 👉", data);
    setBookings(data);
  }, []);

  // 🔍 SEARCH
  const filteredBookings = bookings.filter((b) => {
    if (!search) return true;

    const text = search.toLowerCase();

    return (
      (b.customerName || "").toLowerCase().includes(text) ||
      (b.email || "").toLowerCase().includes(text) ||
      (b.date || "").toLowerCase().includes(text)
    );
  });

  const updateStatus = (index, status) => {
    const updated = [...bookings];
    updated[index].status = status;

    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Admin Dashboard 👨‍💼</h2>

      <input
        type="text"
        placeholder="Search name / email / date"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "12px",
          width: "300px",
          margin: "20px auto",
          display: "block",
          borderRadius: "10px"
        }}
      />

      <div className="grid">
        {filteredBookings.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            No bookings found ❌
          </p>
        ) : (
          filteredBookings.map((b, index) => (
            <div key={index} className="card-dark">
              <h3>{b.name}</h3>
              <p><b>User:</b> {b.customerName}</p>
              <p><b>Email:</b> {b.email}</p>
              <p><b>Date:</b> {b.date}</p>
              <p><b>Status:</b> {b.status}</p>

              <button
                className="btn-orange"
                onClick={() => updateStatus(index, "Approved")}
              >
                Approve
              </button>

              <button
                className="btn-orange"
                onClick={() => updateStatus(index, "Rejected")}
              >
                Reject
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;