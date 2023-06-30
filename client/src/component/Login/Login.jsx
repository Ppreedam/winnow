import React, { useState } from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Login.module.css";
import axios from "axios";
import { useAuth } from "../Context/Auth";
import CollapsibleExample from "../Navbar/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      const res = await axios.post("https://winnow-backend-api.onrender.com/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        // console.log(res.data.user.role);
        setLoading(false)
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
        setLoading(false)
        toast.error(res.data.message);
      }
    } catch (error) {
      // console.log(error);
      setLoading(false)
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <CollapsibleExample />
      <section className={styles.section}>
        <div className={styles.form_data}>
          <div className={styles.form_heading}>
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are glad you are back. Please login.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <h4 className="title">LOGIN FORM</h4>

            <div className="mb-3">
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
            <div className="mb-3">
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
            {/* <div className="mb-3">
              <div
                type="button"
                className="btn forgot-btn"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password
              </div>
            </div> */}
            <div style={{ textDecoration: "underLine", color: "teal" }}>
              <Link to="/user/gorget-password">
                <p>Forget Password ?</p>
              </Link>
            </div>

            <button type="submit" className="btn btn-primary">
              LOGIN
            </button>
            <div>
              {
                loading ? <div className={styles.spinnerbox}><h4>Please wait......</h4> <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="barspinner" /> </div> : ""
              }
            </div>
          </form>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Login;
