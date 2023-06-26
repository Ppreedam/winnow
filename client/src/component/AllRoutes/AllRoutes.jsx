import React from "react";
// import style from "./AllRoutes.module.css";
import { Route, Routes } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";

import Winow from "../HomemainPage/Winow";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Dashboard from "../../pages/Admin/Dashboard/Dashboard";
import Users from "../../pages/Admin/Users/Users";
import Category from "../../pages/Admin/Category/Category";
import CreateProducts from "../../pages/Admin/CreateProducts/CreateProducts";
import AllProducts from "../../pages/Admin/AllProducts/AllProducts";

// import PrivateRoute from "../Routes/Private";

// import AdminRoute from "../Routes/AdminRoute";
import Comingsoon from "../ComingSoon/Comingsoon";
import EditProfile from "../EditProfile/EditProfile";
import Portfolio from "../Portfoio/Portfolio";
import Wallet from "../MyWallet/Wallet";
import Account from "../Account/Account";

import InvestNow from "../HomemainPage/InvestNow";
import PrivateRoute from "../Higherorderfunction/PrivateRoute";

import ForgotPasssword from "../Login/ForgetPassword";
// import AdminRoutes from "../../pages/Admin/AdminRoutes/AdminRoutes";

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
        <Route exact path="/user/login" element={<Login />} />
        <Route exact path="/user/register" element={<Register />} />
        <Route exact path="/comingsoon" element={<Comingsoon />} />
        <Route exact path="/editprofile" element={<EditProfile />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/mywallet" element={<Wallet />} />
        <Route exact path="/account" element={<Account />} />
        {/* <Route exact path="/admin" element={<AdminRoutes />} /> */}
        <Route
          exact
          path="/user/gorget-password"
          element={<ForgotPasssword />}
        />
        <Route
          exact
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/user"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/category"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/createproduct"
          element={
            <PrivateRoute>
              <CreateProducts />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/admin/allproducts"
          element={
            <PrivateRoute>
              <AllProducts />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/investnow"
          element={
            <PrivateRoute>
              <InvestNow />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
// className={style.AppGlass}

export default AllRoutes;
