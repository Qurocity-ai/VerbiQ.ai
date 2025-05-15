// components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // ✅ Check if logged in
  if (!token) {
    return <Navigate to="/candidatelogin" />;
  }

  // ✅ Check if user has correct role
  if (requiredRole && role?.toLowerCase() !== requiredRole.toLowerCase()) {
    return <Navigate to="/candidatelogin" />;
  }

  return children;
};

export default PrivateRoute;
