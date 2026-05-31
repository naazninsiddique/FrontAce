import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimg from "./assets/login.png";
function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const gotologin = (e) => {
    e.preventDefault();
    //redirect to login
    const userData = {
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("sign up successful");
    navigate("/Login");
  };

  return (
    <div className="main">
      <div className="heading">Welcome to our FrontAce</div>
      <form className="login-form" onSubmit={gotologin}>
        <h1 className="login-heading">Sign up with email</h1>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            value={email}
            required
            placeholder="enter your email"
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          password
          <input
            id="password"
            type="password"
            value={password}
            required
            placeholder="enter your password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <button type="submit" className="continue">
          Continue
        </button>
      </form>
    </div>
  );
}
export default Signup;
