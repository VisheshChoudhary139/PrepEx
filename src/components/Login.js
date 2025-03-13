import React, { useState } from "react";
import axios from "axios";

const Login = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email: formData.email,
        password: formData.password,
      });

      alert("Login successful!");
      console.log("User Data:", response.data); // You can store this in state or context
      onNavigate("home"); // Navigate to home page after successful login
    } catch (error) {
      console.error("Login failed:", error.response?.data || "Error");
      setError(error.response?.data || "Invalid credentials");
    }
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h3 style={{ color: "#DF7F13" }}>Login</h3>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>
              Login
            </button>
          </form>
          <p
            style={{ marginTop: "10px", cursor: "pointer", color: "#DF7F13" }}
            onClick={() => onNavigate("signup")}
          >
            Don't have an account? Sign up
          </p>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 60px)",
  backgroundColor: "#f8f9fa",
};

const cardStyle = {
  width: "300px",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "white",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  border: "2px solid #DF7F13",
};

const inputStyle = {
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  width: "100%",
};

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#DF7F13",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  width: "100%",
};

export default Login;
