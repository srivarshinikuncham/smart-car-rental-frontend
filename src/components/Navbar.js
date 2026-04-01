import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(localStorage.getItem("role"));

  // 🔄 Update when page reloads or changes
  useEffect(() => {
    const interval = setInterval(() => {
      setRole(localStorage.getItem("role"));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // 🚪 LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.clear();
    alert("Logged out successfully 👋");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav style={styles.nav}>
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        🚗 Car Rental
      </h2>

      <div style={styles.buttons}>
        <button className="btn-orange" onClick={() => navigate("/")}>
          Home
        </button>

        <button className="btn-orange" onClick={() => navigate("/cars")}>
          Cars
        </button>

        <button className="btn-orange" onClick={() => navigate("/history")}>
          History
        </button>

        {/* 👤 NOT LOGGED IN */}
        {!role && (
          <>
            <button className="btn-orange" onClick={() => navigate("/login")}>
              Login
            </button>

            <button className="btn-orange" onClick={() => navigate("/register")}>
              Register
            </button>
          </>
        )}

        {/* 🔐 LOGGED IN */}
        {role && (
          <button className="btn-orange" onClick={handleLogout}>
            Logout
          </button>
        )}

        {/* 👨‍💼 ADMIN */}
        {role === "admin" && (
          <button className="btn-orange" onClick={() => navigate("/admin")}>
            Admin
          </button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#111",
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttons: {
    display: "flex",
    gap: "10px"
  }
};

export default Navbar;