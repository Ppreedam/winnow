import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import style from "./Users.module.css";
import Sidebar from "../Sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";

const Users = () => {
  const [userdata, setUserdata] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  console.log(showPopup);
  const getallusers = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/auth/all-users"
      );
      setUserdata(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userdata);
  useEffect(() => {
    getallusers();
  }, []);
  const openPopup = () => {
    setShowPopup(true);
  };

  // const closePopup = () => {
  //   setShowPopup(false);
  // };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/v1/auth//deleteUser/${id}`)
      .then((res) => {
        toast.success(" User Profile deleted Successfully");
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };
  return (
    <div className={style.App}>
      <div className={style.AppGlass}>
        <Sidebar />
        <div className={style.MainDash}>
          <div className="col-md-9">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginRight: "20px",
              }}
            >
              <h1>All Users</h1>
              <div>
                <button
                  onClick={openPopup}
                  style={{
                    height: "40px",
                    padding: "5px",
                    borderRadius: "10px",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  {" "}
                  Add Money
                </button>
              </div>
            </div>

            <div className="border shadow">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Orders</th>
                    <th scope="col">Wallet</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userdata.map((res, i) => {
                    return (
                      <tr key={i + 1}>
                        <td>{i + 1}</td>
                        <td>{res.name}</td>
                        <td>{res.email}</td>
                        <td>{res.phone}</td>
                        <td>order</td>
                        <td>{res.walletamount}</td>
                        <td>
                          <button>Edit</button>
                        </td>
                        <td>
                          <button onClick={() => handleDelete(res._id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default Users;
