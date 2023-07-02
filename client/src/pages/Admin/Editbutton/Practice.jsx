import React, { useEffect, useState } from 'react'
import "./Edit.css"
import { toast } from 'react-hot-toast';
import axios from 'axios';
const Practice = ({onClose,profiledata}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
      const { email, name, phone, address } = profiledata;
      setName(name);
      setPhone(phone);
      setEmail(email);
      setAddress(address);
    }, [profiledata]);
  console.log(name,phone,email,address)
    const handleSubmit = async (e) => {
   
      e.preventDefault();
      try {
        const { data } = await axios.put("http://localhost:8000/api/v1/auth/adminprofile", {
          name,
          email,
          password,
          phone,
          address,
        });

        if (data?.errro) {
          toast.error(data?.error);
        } else {
          
          toast.success("Profile Updated Successfully");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  return (
    <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={onClose}>
              X
            </button>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Name"
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                  disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  id="phone"
                  placeholder="Enter Your Phone"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                  id="address"
                  placeholder="Enter Your Address"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                UPDATE
              </button>
            </form>
          </div>
        </div>
  )
}

export default Practice