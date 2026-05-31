import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import theme from "./Theme.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Layout from "./Layout";
import ForgotPassword from "./ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="forgotPassword" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
