import React from "react";
import style from "./AllProducts.module.css";
import Sidebar from "../Sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";

const AllProducts = () => {
  return (
    <div className={style.App}>
      <div className={style.AppGlass}>
        <Sidebar />

        <div className={style.MainDash}>
          <h1>AllProducts</h1>
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default AllProducts;
