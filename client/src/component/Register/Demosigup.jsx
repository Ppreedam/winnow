import React, { useState } from "react";
import styles from "./Demosigup.module.css";
import CollapsibleExample from "../Navbar/Navbar";
import bear from "./bull.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import LoginNavbar from "../Login/LoginNavbar";
import { ClockLoader } from "react-spinners";

function Demosigup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  // const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Email validation function using regular expression
  const isValidEmail = (email) => {
    // Regular expression for basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // form function
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Check if the password meets the minimum length requirement
      if (password.length < 8) {
        setLoading(false);
        toast.error("Password must be at least 8 characters long.");
        return;
      }
      // Mobile number validation
      if (phone.length !== 10) {
        toast.error("Invalid Mobile Number");
        setLoading(false);
        return; // Exit the function early if validation fails
      }
      // Email validation
      if (!isValidEmail(email)) {
        toast.error("Please enter a valid email address.");
        setLoading(false);
        return; // Exit the function early if email validation fails
      }

      const res = await axios.post(
        "http://156.67.221.116:8000/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          // address,
          // answer,
        }
      );
      if (res && res.data.success) {
        setLoading(false);
        toast.success(res.data && res.data.message);
        navigate("/user/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <LoginNavbar />
      <img className={styles.bear} src={bear} />
      <div className={styles.signup_container}>
        <form onSubmit={handleSubmit}>
          <h2 className={styles.signup_title}>Create Account</h2>
          <div className={styles.input_container}>
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className={styles.input_container}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
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
              value={password}
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              // id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className={styles.create_account_button}>
            Create Account
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

export default Demosigup;
