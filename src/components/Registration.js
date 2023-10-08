import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const USER_REGEX = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/;

export default function Registration() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/register', {
        user,
        pwd,
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <section className="login-container">
      <p ref={errRef} className={errMsg ? "error" : "hidden"}>
        {errMsg}
      </p>
      <h2 className="login">Register</h2>
      <form onSubmit={handleSubmit}>
        <label className="input" htmlFor="user">
          Username:
        </label>
        <input
          type="text"
          id="user"
          value={user}
          autoComplete="off"
          ref={userRef}
          onChange={(e) => setUser(e.target.value)}
          required
          aria-aria-describedby="uidnote"
        />
        <p
          id="uidnote"
          className={
             user && !validName ? "instructions" : "offscreen"
          }
        >
          4 to 24 characters. <br />
          Letters, numbers, hyphens, <br /> underscores, and spaces allowed.
        </p>

        <label className="input" htmlFor="pwd">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          required
          aria-aria-describedby="pwdnote"
        />
        <p
          id="pwdnote"
          className={!validPwd ? "instructions" : "offscreen"}
        >
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

//   return (
//     <div className="login-container">
//       <h2 className="login">Register</h2>

//         <div>
//           <h3>Registration Successful</h3>
//         </div>
//           <form onSubmit={handleRegistration}>
//           <div>
//             <label className="input">Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="input"
//             />
//           </div>
//           <div>
//             <label className="input">Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="input"
//             />
//           </div>
//           <div>
//             <button className="sign-up" type="submit">
//               Register
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// 
