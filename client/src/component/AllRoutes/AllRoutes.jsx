import React from "react";
import style from "./AllRoutes.module.css";
import { Route, Routes } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";

import Winow from "../HomemainPage/Winow";
import Register from "../Register/Register";
import Login from "../Login/Login";
// import Dashboard from "../../pages/Admin/Dashboard/Dashboard"
// import Users from "../../pages/Admin/Users/Users"
// import Category from "../../pages/Admin/Category/Category"
// import CreateProducts from "../../pages/Admin/CreateProducts/CreateProducts"
// import AllProducts from "../../pages/Admin/AllProducts/AllProducts"

import AdminRoute from "../Routes/AdminRoute";
import Dashboard from "../../pages/Admin/Dashboard/Dashboard";
import Comingsoon from "../ComingSoon/Comingsoon";

import InvestNow from "../HomemainPage/InvestNow";
import PrivateRoute from "../Routes/Private";

import ForgotPasssword from "../Login/ForgetPassword";

const AllRoutes = () => {
  return (
    <div>
      {/* <Sidebar />
      <Routes >
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/user" element={<Users/>} />
        <Route exact path = "/category" element={<Category/>} />
        <Route exact path = "/createproduct" element={<CreateProducts/>} />
        <Route exact path = "/allproducts" element={<AllProducts/>} />
      </Routes> */}
      <Routes>
        <Route exact path="/" element={<Winow />} />  
        <Route exact path="/user/login" element={<Login/>} />
        <Route exact path="/user/register" element={<Register/>} />
        <Route exact path ="/user/gorget-password" element={<ForgotPasssword/>} />
        <Route exact path ="/dashboard" element={<Dashboard/>} />
        <Route exact path="/comingsoon" element={<Comingsoon/>}/>
        <Route exact path="/investnow" element={
          <PrivateRoute>
            <InvestNow />
          </PrivateRoute>} />

      </Routes>
    </div>
  );
};
// className={style.AppGlass}

export default AllRoutes;
