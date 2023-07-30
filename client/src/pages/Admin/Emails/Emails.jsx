import React, { useEffect, useState } from "react";
import style from "./Emails.module.css";
import Sidebar from "../Sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";
import axios from "axios";

const Emails = () => {
  const [email, setEmail] = useState([]); // Initialize email as an empty array

  //get all email Ids
  const getAllEmail = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/email/get-email"
      );
      const data = response.data; // Make sure you access the response data correctly
      setEmail(data); // Assuming email data is directly available in 'data' and it's an array
    } catch (error) {
      // Handle error if necessary
      console.log(error);
      // toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllEmail();
  }, []);

  return (
    <div className={style.App}>
      <div className={style.AppGlass}>
        <Sidebar />
        <div className={style.MainDash}>
          <h1>Email Ids</h1>
          <table>
            <tbody>
              {email.map((item) => (
                <tr key={item._id}>
                  {/* Use appropriate property to display email data */}
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default Emails;
