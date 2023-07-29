import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

const LogoutUser = () => {
  const navigate = useNavigate();

  const logoutuser = async () => {
    let token = localStorage.getItem("auth");

    localStorage.removeItem("auth");

    toast.success("Logged Out Successfully");
    navigate("/");
  };
  return <div onClick={logoutuser}>Logout
  <ToastContainer/></div>;
};

export default LogoutUser;
