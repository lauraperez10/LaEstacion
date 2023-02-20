import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRouteUser = ({ children }) => {
  const { session } = useContext(UserContext);

  if (session) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRouteUser;
