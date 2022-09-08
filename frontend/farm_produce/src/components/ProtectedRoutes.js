import { Navigate, Outlet } from "react-router-dom";
import React from "react";


const ProtectedRoutes = ({loggedin}) => {

  return loggedin? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;