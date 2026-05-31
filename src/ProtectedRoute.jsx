import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const islogedIn = localStorage.getItem("islogedIn");
  if (!islogedIn) {
    return <Navigate to={"/Login"} />;
  }
  return children;
};

export default ProtectedRoute;
