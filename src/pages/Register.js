import React from "react";

function Register() {
  return (
    <div style={styles.container}>
      <h2>Register</h2>

      <input type="text" placeholder="First Name" style={styles.input} />
      <input type="text" placeholder="Last Name" style={styles.input} />
      <input type="email" placeholder="Email" style={styles.input} />
      <input type="password" placeholder="Password" style={styles.input} />
      <input type="text" placeholder="Contact" style={styles.input} />
      <textarea placeholder="Address" style={styles.input}></textarea>

      <button style={styles.button}>Register</button>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Register;