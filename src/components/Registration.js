import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
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

      // If registration is successful, you can handle the response here.
      // Typically, you would store the authentication token and redirect to a logged-in page.
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegistration}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
