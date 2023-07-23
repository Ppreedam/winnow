import React, { useState } from 'react';
import "./Wallet.css"
import axios from 'axios';
const WalletPop = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [walletamount, setWalletamount] = useState('');
  const [reason, setReason] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any desired actions with the email and amount values
    // e.g., send them to a server, update state, etc.
    axios.post("/api/v1/auth/wallet",{
      email,walletamount,reason
    }).then((res)=>{
      console.log(res)
    })
    console.log('Email:', email);
    console.log('Amount:', typeof(walletamount));
    console.log(reason)
    
    onClose();
  };

  // const getOrders = async () => {
  //   try {
  //     const { data } = await axios.get("/api/v1/auth/all-orders");
  //     setOrders(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="popup">
      <div className="popup-content">
      <button className="close-button" onClick={onClose}>X</button>
        <h2>Enter Email and Amount</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder=" Enter the Add Amount"
            value={walletamount}
            onChange={(e) => setWalletamount(e.target.value)}
            required
          />
           <input
            type="string"
            placeholder=" Enter the Reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default WalletPop;
