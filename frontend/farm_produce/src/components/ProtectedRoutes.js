import { Navigate, Outlet } from "react-router-dom";
import React from "react";
 //protected routes to regulate sign in.
const ProtectedRoutes = ({ loggedin }) => {
  return loggedin ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
