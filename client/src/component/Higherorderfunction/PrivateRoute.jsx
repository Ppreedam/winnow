import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext} from "../Context/Auth";


function PrivateRoute({ children }) {
  // fix code here
  const [auth,setAuth] = useContext(AuthContext);
console.log(auth)
  if (!auth.token) {
    return <Navigate to="/user/login" />;
  }

  return children;
}

export default PrivateRoute;