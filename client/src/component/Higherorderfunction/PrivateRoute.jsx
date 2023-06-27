import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth";

function PrivateRoute({ children }) {
  const [auth, setAuth] = useContext(AuthContext);
  console.log("working time");

  if (!auth.token) {
    return <Navigate to="/user/login" />;
  }

  return children;
}

export default PrivateRoute;
