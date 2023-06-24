
import { useNavigate } from 'react-router-dom';


const LogoutUser = () => {
    
    const navigate = useNavigate();

  const logoutuser = async () => {
    let token = localStorage.getItem("usersdatatoken");
    
      localStorage.removeItem("usersdatatoken");
      
      navigate("/")
    
  }
  return (
    <div onClick={logoutuser}>
        Logout
    </div>
  )
}

export default LogoutUser