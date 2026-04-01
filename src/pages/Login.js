import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // 🟣 ADMIN LIST
    const admins = [
      { username: "Srivarshini", password: "1234" },
      { username: "Sandeep", password: "1234" }
    ];

    // 🔐 ADMIN LOGIN
    if (role === "admin") {
      const isAdmin = admins.find(
        (admin) =>
          admin.username.toLowerCase() === email.trim().toLowerCase() &&
          admin.password === password
      );

      if (isAdmin) {
        localStorage.setItem("role", "admin");

        alert("Admin login successful 👨‍💼");

        navigate("/");
        window.location.reload();
        return;
      } else {
        alert("Invalid admin credentials ❌");
        return;
      }
    }

    // 👤 USER LOGIN
    if (!email || !password) {
      alert("Fill all fields ❌");
      return;
    }

    const userData = {
      email: email,
      name: email.split("@")[0]
    };

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("role", "user");

    alert("User login successful ✅");

    navigate("/");
    window.location.reload();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "120px" }}>
      <h2>Login 🔐</h2>

      {/* USERNAME / EMAIL */}
      <input
        type="text"
        placeholder={role === "admin" ? "Enter Username" : "Enter Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: "10px", margin: "10px", width: "250px" }}
      />

      {/* PASSWORD */}
      <div>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "250px" }}
        />

        <br />

        <button
          onClick={() => setShowPassword(!showPassword)}
          style={{
            padding: "5px 10px",
            marginBottom: "10px",
            cursor: "pointer"
          }}
        >
          {showPassword ? "Hide Password 🙈" : "Show Password 👁"}
        </button>
      </div>

      {/* ROLE */}
      <br />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <br />

      {/* LOGIN BUTTON */}
      <button className="btn-orange" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;