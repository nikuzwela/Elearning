import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const userRole = localStorage.getItem('userRole'); // Assuming you store the user's role in local storage

  if (!userRole) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (userRole !== 'admin') {
    return <Navigate to="/Dashboard" replace />;
  }
  <ProtectedRoute>
    <Dash />
  </ProtectedRoute>;
  <ProtectedRoute>
    <DashBoard />
  </ProtectedRoute>;
  return children;
};

export default ProtectedRoute;
