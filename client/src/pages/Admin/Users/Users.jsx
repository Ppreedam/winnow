import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import style from "./Users.module.css";
import Sidebar from "../Sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";
import WalletPopDeduct from "../Wallet/WalletPopDeduct";
import WalletPop from "../Wallet/WalletPop";
import Practice from "../Editbutton/Practice";
const Users = () => {
  const [userdata, setUserdata] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showDeductPopup, setShowDeductPopup] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [profiledata, setProfiledata] = useState([])
  console.log(showPopup);
  const getallusers = async () => {
    try {
      const { data } = await axios.get(
        "hhttp://localhost:8000/api/v1/auth/all-users"
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

  const closePopup = () => {
    setShowPopup(false);
  };
  const openDeductPopup = () => {
    setShowDeductPopup(true);
  };

  const closeDeductPopup = () => {
    setShowDeductPopup(false);
  };
  const openEditPopup = () => {
    setIsPopupOpen(true);
  };

  const closeEditPopup = () => {
    setIsPopupOpen(false);
  };

  // const closePopup = () => {
  //   setShowPopup(false);
  // };
  const handleProfileData = (e) => {
    setProfiledata(e)
  }
  console.log("edit data", profiledata)

  const handleDelete = (id) => {
    axios
      .delete(`https://winnow-backend-api.onrender.com/api/v1/auth//deleteUser/${id}`)
      .then((res) => {
        toast.success(" User Profile deleted Successfully");
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  };


  const handlechangerole = async (res, role) => {
    const { name, email, password, address, phone } = res
    console.log(name, email, password, address, phone)
    let userRole = (role === 0) ? "user" : "admin";
    try {
      const { data } = await axios.put("http://localhost:8000/api/v1/auth/adminprofile", {
        role,
        name,
        email,
        password,
        address,
        phone
      });

      if (data?.errro) {
        toast.error(data?.error);
      } else {
        console.log(`${name} role is ${userRole}`)
        toast.success(`${name} role is ${userRole}`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const filteredData = userdata.filter(res => res.role === 0);

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
              {/* <div>
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
              </div> */}
              <div style={{ display: "flex" }}>
                <div>
                  <button onClick={openPopup} style={{ height: "40px", padding: "5px", borderRadius: "10px", backgroundColor: "gray", color: "white" }}> Add Money</button>
                  {showPopup && <WalletPop onClose={closePopup} />}
                </div>

                <div>
                  <button onClick={openDeductPopup} style={{ height: "40px", padding: "5px", borderRadius: "10px", backgroundColor: "gray", color: "white", marginLeft: "20px" }}> Deduct Money</button>
                  {showDeductPopup && <WalletPopDeduct onClose={closeDeductPopup} />}
                </div>
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
                    <th scope="col">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((res, i) => {
                    return (
                      <tr key={i + 1} >
                        <td>{i + 1}</td>
                        <td>{res.name}</td>
                        <td>{res.email}</td>
                        <td>{res.phone}</td>
                        <td>order</td>
                        <td>{res.walletamount}</td>
                        <td>
                          <button
                            onClick={() => {
                              handleProfileData(res);
                              openEditPopup();
                            }}
                          >
                            Edit
                          </button>
                          {isPopupOpen && <Practice onClose={closeEditPopup} profiledata={profiledata} />}
                        </td>
                        <td>
                          <button onClick={() => handleDelete(res._id)}>
                            Delete
                          </button>
                        </td>
                        <td>
                          <select onChange={(e) => {
                            handlechangerole(res, e.target.value)
                          }}>
                            <option value={0} selected={res.role === 0}>User</option>
                            <option value={1} selected={res.role === 1}>Admin</option>
                          </select>
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
