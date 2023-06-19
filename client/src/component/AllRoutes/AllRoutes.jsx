import React from "react";
import style from "./AllRoutes.module.css"
import Sidebar from "../Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Category from "../../Pages/Category/Category";
import Users from "../../Pages/Users/Users";
import CreateProducts from "../../Pages/CreateProducts/CreateProducts";
import AllProducts from "../../Pages/AllProducts/AllProducts";

const AllRoutes = () => {
  return (
    <div className={style.AppGlass}>
      <Sidebar />
      <Routes >
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/user" element={<Users/>} />
        <Route exact path = "/category" element={<Category/>} />
        <Route exact path = "/createproduct" element={<CreateProducts/>} />
        <Route exact path = "/allproducts" element={<AllProducts/>} />
      </Routes>
      
    </div>
  );
};

export default AllRoutes;
