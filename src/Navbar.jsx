import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Theme from "./Theme.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="heading" style={{ display: "flex", gap: "8rem" }}>
          <div>
            <Theme />
          </div>
          <h1>FrontAce</h1>
        </div>
        <div className="humburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>
        <ul className={`childnavbar ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              SignUp
            </Link>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
