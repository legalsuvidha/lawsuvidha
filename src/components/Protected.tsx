import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = true; 
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // If not authenticated, don't render children
  if (!isAuthenticated) return null;

  return children;
}

export default ProtectedRoute;
