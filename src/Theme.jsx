import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Theme.css";

const Theme = () => {
  const [DarkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (DarkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [DarkMode]);
  return (
    <div>
      <button
        className="theme-btn"
        onClick={() => setDarkMode(!DarkMode)}
        style={{ fontSize: "20px", cursor: "pointer" }}
      >
        {DarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
    //if not true darkmode then faSun
  );
};

export default Theme;
