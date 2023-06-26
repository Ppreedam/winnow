import React from "react";
// import Cards from "../../Components/Cards/Cards";
// import BasicTable from "../../Components/Table/Table";
import style from "./Dashboard.module.css";
import Sidebar from "../Sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";
const Dashboard = () => {
  return (
    <div className={style.AppGlass}>
      <Sidebar />
      <div className={style.MainDash}>
        <h1>Dashboard</h1>
        {/* <Cards /> */}
        {/* <BasicTable /> */}
      </div>
      <RightSide />
    </div>
  );
};

export default Dashboard;
