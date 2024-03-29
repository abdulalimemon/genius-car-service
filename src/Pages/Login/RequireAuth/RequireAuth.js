import React from 'react';
import { Navigate, useLocation } from 'react-router';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';


const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  
  if (loading) {
    return <Loading></Loading>;
  }
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;