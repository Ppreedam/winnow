import React from "react";
import style from "./Account.module.css";
import CollapsibleExample from "../Navbar/Navbar";

const Account = () => {
  return (
    <div className={style.mainbox}>
      <div style={{ width: "100%", paddingTop: "150px" }}>
        <CollapsibleExample />
      </div>
      <div className={style.secondbox}>
        <div className={style.sidebar}>
          <ul>
            <a href="">
              <li>OverView</li>
            </a>
            <br />
            <br />
            <a href="">
              <li>Kyc</li>
            </a>
            <br />
            <br />
            <a href="">
              <li>Bank</li>
            </a>
            <br />
            <br />
            <a href="">
              <li>Support</li>
            </a>
            <br />
            <br />
            <a href="">
              <li>Weather Manager</li>
            </a>
            <br />
            <br />
            <a href="">
              <li>Setting</li>
            </a>
          </ul>
        </div>
        <div className={style.general_details_box}>
          <p>General Details</p>

          <hr />
          <p className={style.lines}>
            <span className={style.name}>Name</span>{" "}
            <span className={style.name_input_box}>
              <input type="text" placeholder="Enter Your Name" />
            </span>{" "}
            <span className={style.button_box}>
              <button>Update</button>
            </span>
          </p>
          <hr />
          <p>
            <span className={style.name}>Email</span>{" "}
            <span className={style.email_input_box}>
              <input type="text" placeholder="Enter Your Email" />
            </span>{" "}
          </p>
          <hr />
          <p>
            <span className={style.name}>Phone</span>{" "}
            <span className={style.phone_input_box}>
              <input type="text" placeholder="Enter Phone Number" />
            </span>{" "}
          </p>
          <hr />
          <p>
            <span className={style.name}>Occupation</span>{" "}
            <span className={style.occupation_input_box}>
              <select name="" id="">
                <option value="">Student</option>
                <option value="">Business Man</option>
                <option value="">Self Employed</option>
              </select>
            </span>{" "}
          </p>
          <hr />
          <p>
            <span className={style.name}>DIN Number</span>{" "}
            <span className={style.din_input_box}>
              <input type="text" placeholder="Enter DIN Number" />
            </span>{" "}
          </p>
          <hr />
          <p>
            <span className={style.name}>Nominee Name</span>{" "}
            <span className={style.nominee_input_box}>
              <input type="text" placeholder="Enter Nominee Name" />
            </span>{" "}
          </p>
          <hr />
          <button className={style.create_account_btn}>Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
