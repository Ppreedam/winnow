import { useNavigate } from "react-router-dom";

const LogoutUser = () => {
  const navigate = useNavigate();

  const logoutuser = async () => {
    let token = localStorage.getItem("auth");

    localStorage.removeItem("auth");

    navigate("/");
  };
  return <div onClick={logoutuser}>Logout</div>;
};

export default LogoutUser;
