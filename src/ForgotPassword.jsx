import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleReset = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser.email === email) {
      storedUser.password = newPassword;
      localStorage.setItem("user", JSON.stringify(storedUser));
      setMessage("password updated");
      navigate("/login");
    } else {
      setMessage("Email not found");
    }
  };

  return (
    <>
      <div className="parentContainer">
        <div className="container">
          <h1 style={{ textAlign: "center", fontSize: "40px" }}>
            Reset Password
          </h1>
          <form className="resetform" onSubmit={handleReset} action="">
            <input
              type="text"
              placeholder="enter email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="newPassword"
              value={newPassword}
              required
              onChange={(e) => setnewPassword(e.target.value)}
            />
            <button className="btn" type="submit">
              Reset Password
            </button>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
