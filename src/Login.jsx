import React, { useState } from "react";
import Dashboard from "./Dashboard";
import "./LoginSignUp.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useLocalStorage from "./Hooks/UselocalStorage";
function Login() {
  const [email, setemail] = useLocalStorage("email", ""); //destructuring function always return a value
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const gotodashboard = (e) => {
    e.preventDefault();
    //redirect to login
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      email === storedUser.email &&
      password === storedUser.password
    ) {
      localStorage.setItem("islogedIn", true);
      navigate("/Dashboard"); //return chidren when value is found
    } else {
      e.preventDefault();
      seterror("Invalid Email or Password");
    }
  };
  return (
    <div className="main">
      <div className="heading">Welcome to our FrontAce</div>
      <form className="login-form" onSubmit={gotodashboard}>
        <h1 className="login-heading">
          Log in to Continue Your Learning Journey
        </h1>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            value={email}
            required
            autoComplete="current-password"
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
            autoComplete="current-password"
            placeholder="enter your password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <p className="error-message" style={{ color: "darkred" }}>
          {error}
        </p>
        <Link to="/forgotPassword">forgotPassword?</Link>
        <button type="submit" className="continue">
          Continue
        </button>
      </form>
    </div>
  );
}
export default Login;
