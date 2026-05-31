import React, { useState } from "react";
import dashboard from "./Dashboard.json";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import Questionitem from "./Questionitem";
import useLocalStorage from "./Hooks/UselocalStorage";

const Dashboard = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("islogedIn");
    alert("log out");
    navigate("/Login");
  };
  const [question, setquestion] = useLocalStorage("questions", dashboard);
  const togglestatus = (id) => {
    const updatestatus = question.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setquestion(updatestatus);
  };
  const completedcount = question.filter((item) => item.completed).length;
  const pendingcount = question.length - completedcount;
  // progress bar
  const progressPercentage = (completedcount / question.length) * 100;
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Dashboard</h1>
      <div>
        <div className="progress-container">
          <div
            className="progressBar"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="progressText">
          {Math.round(progressPercentage)}% Completed
        </p>
        {question.map((item, index) => {
          return (
            <Questionitem
              key={item.id}
              item={item}
              togglestatus={togglestatus}
            />
          );
        })}
        <div className="result">
          <h2>completed: {completedcount}</h2>
          <h2>pending: {pendingcount}</h2>
        </div>
      </div>

      <button className="logout" style={{ margin: 10 }} onClick={handlelogout}>
        logout
      </button>
    </div>
  );
};

export default Dashboard;
