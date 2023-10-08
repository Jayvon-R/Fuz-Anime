import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [validName, setValidName] = useState(false);
  const [passwordReg, setPasswordReg] = useState("");
  const [validpassword, setValidpassword] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const register = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", {
      user: usernameReg, 
      password: passwordReg
    }) .then((response) => {
      console.log(response);
      setSuccess(true);
    })
  }

  return (
    <section className="login-container">
      <h2 className="login">Register</h2>
      <form onSubmit={(event) => register(event)}>       
       <label className="input" htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={usernameReg}
          autoComplete="off"
          onChange={(e) => setUsernameReg(e.target.value)}
          required
        />
        <p
          id="uidnote"
          className={usernameReg && !validName ? "instructions" : "offscreen"}
        >
          4 to 24 characters. <br />
          Letters, numbers, hyphens, <br /> underscores, and spaces allowed.
        </p>

        <label className="input" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={passwordReg}
          onChange={(e) => setPasswordReg(e.target.value)}
          required
        />
        <p id="passwordnote" className={!validpassword ? "instructions" : "offscreen"}>
          8 to 24 characters. <br />
          Must include at least one uppercase letter, <br /> a number, and a
          special character. <br />
          Allowed special characters: <br /> ! @ # $ % ^ & * ( ) _ + - = {} [ ]
          : ; " ' ? , . / | \ ~ `
        </p>

        <button className="sign-up" type="submit">
          Register
        </button>
        <p>
          Already Registered? <a href="/login">Login</a>
        </p>
      </form>
    </section>
  );
}
