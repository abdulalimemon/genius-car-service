import React from 'react';
import { Navigate, useLocation } from 'react-router';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return children;
};

export default RequireAuth;