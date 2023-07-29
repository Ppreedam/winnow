import React, { useEffect, useState } from "react";
import styles from "./Demoligin.module.css";
import CollapsibleExample from "../Navbar/Navbar";
import bear from "./bull.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Auth";
import LoginNavbar from "./LoginNavbar";
import { ClockLoader } from "react-spinners";

function Demoligin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(email, password);
  // console.log(auth);

  const getallusers = async () => {
    try {
      const { data } = await axios.get(
        "http://156.67.221.116:8000/api/v1/auth/all-users"
      );
      // console.log(data)
      // setUserdata(data);
    } catch (error) {
      // console.log(error);
    }
  };

  // form function
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://156.67.221.116:8000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      // console.log("response from login page:",res)
      if (res && res.data.success) {
        // console.log(res.data.user.role);
        setLoading(false);
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        if (res.data.user.role === 1) {
          navigate("/admin/dashboard");
        } else {
          navigate(location.state || "/");
        }
      } else {
        // console.log("error");
        setLoading(false);
        toast.error(res.data.message);
      }
    } catch (error) {
      // console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };
  useEffect(()=>{
    getallusers()
  })

  return (
    <>
      <LoginNavbar />
      <img className={styles.bear} src={bear} />
      <div className={styles.login_container}>
        <form onSubmit={handleSubmit}>
          <h2 className={styles.login_title}>Login</h2>
          <div className={styles.input_container}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button type="submit" className={styles.login_button}>
            Login
          </button>
          <div>
            {loading ? (
              <div className={styles.spinnerbox}>
                <h4>Please wait......</h4>
                <ClockLoader color="#36d7b7" />
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Demoligin;
