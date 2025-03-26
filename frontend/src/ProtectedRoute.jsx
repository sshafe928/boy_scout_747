import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminLoggedIn');
  return isAuthenticated ? children : <Navigate to="/yiVHQSLPA5z4bWJ" replace />;
};

export default ProtectedRoute;
