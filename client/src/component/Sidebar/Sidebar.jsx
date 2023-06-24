import React from "react";
import style from "./Sidebar.module.css";
import Logo from "../../Images/logo.png";
import { NavLink } from "react-router-dom";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
import { useState } from "react";

const Sidebar = () => {
  const [selected,setSelected] = useState(0)
  return (
    <div className={style.sidebar}>
      {/* logo */}
      <div className={style.logo}>
        <img src={Logo} alt="" />
        <span>
          Wi<span>nn</span>ow
        </span>
      </div>

      {/* Menu */}
      <div className={style.menu}>
        <NavLink to="/admin/dashboard" className={selected === 0 ? `${style.menuItem} ${style.active}` : style.menuItem} onClick={()=>{setSelected(0)}}>
          <UilEstate />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin/user" className={selected === 1 ? `${style.menuItem} ${style.active}` : style.menuItem} onClick={()=>{setSelected(1)}}>
          <UilUsersAlt />
          <span>Users</span>
        </NavLink>
        <NavLink to="/admin/category" className={selected === 2 ? `${style.menuItem} ${style.active}` : style.menuItem} onClick={()=>{setSelected(2)}}>
          <UilClipboardAlt />
          <span>Category</span>
        </NavLink>
        <NavLink to="/admin/createproduct" className={selected === 3 ? `${style.menuItem} ${style.active}` : style.menuItem} onClick={()=>{setSelected(3)}}>
          <UilPackage />
          <span>Create Product</span>
        </NavLink>
        <NavLink to="/admin/allproducts" className={selected === 4 ? `${style.menuItem} ${style.active}` : style.menuItem} onClick={()=>{setSelected(4)}}>
          <UilChart />
          <span>Products</span>
        </NavLink>
        <div className={style.menuItem}>
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
