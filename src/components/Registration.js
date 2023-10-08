import React, { useState } from "react";
import axios from "axios";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/register", {
        email,
        password,
      });

    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login">Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegistration}>
        <div>
          <label className="input">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <label className="input">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <div>
          <button className="sign-up" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};
