import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Find Your Perfect Car 🚗</h1>

      <button
        className="btn-orange"
        onClick={() => navigate("/cars")}
      >
        Book a Car Now
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px"
  }
};

export default Home;