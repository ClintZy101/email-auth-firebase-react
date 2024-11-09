// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/useEmailAuth";


function ProtectedRoute({ children }) {
  const { user, loading } = useAuthStore();

  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/signin" />;
}

export default ProtectedRoute;
