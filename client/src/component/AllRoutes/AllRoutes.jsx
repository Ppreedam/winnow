import React from "react";
import { Route, Routes } from "react-router-dom";
import Winow from "../HomemainPage/Winow";
import Dashboard from "../../pages/Admin/Dashboard/Dashboard";
import Users from "../../pages/Admin/Users/Users";
import Category from "../../pages/Admin/Category/Category";
import CreateProducts from "../../pages/Admin/CreateProducts/CreateProducts";
import AllProducts from "../../pages/Admin/AllProducts/AllProducts";
import Comingsoon from "../ComingSoon/Comingsoon";
import EditProfile from "../EditProfile/EditProfile";
import Portfolio from "../Portfoio/Portfolio";
import Wallet from "../MyWallet/Wallet";
import Account from "../Account/Account";
import InvestNow from "../HomemainPage/InvestNow";
import PrivateRoute from "../Higherorderfunction/PrivateRoute";
import ForgotPasssword from "../Login/ForgetPassword";
import CreateProducts2 from "../../pages/Admin/CreateProducts/CreateProducts2";
import ProductDescription from "../ProductDescriptionPage/ProductDescription";
import Demoligin from "../Login/Demoligin";
import Demosigup from "../Register/Demosigup";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Winow />} />
        <Route exact path="/user/login" element={<Demoligin />} />
        <Route exact path="/user/register" element={<Demosigup />} />
        <Route
          exact
          path="/user/gorget-password"
          element={<ForgotPasssword />}
        />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/comingsoon" element={<Comingsoon />} />
        <Route exact path="/comingsoon" element={<Comingsoon />} />
        <Route exact path="/editprofile" element={<EditProfile />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/mywallet" element={<Wallet />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/formproduct" element={<CreateProducts />} />
        <Route
          exact
          path="/productDesc/:slug"
          element={<ProductDescription />}
        />
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
              <CreateProducts2 />
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

export default AllRoutes;
