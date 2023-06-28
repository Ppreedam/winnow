import React from "react";
import Cards from "../../../component/Cards/Cards";
// import BasicTable from "../../../component/Table/Table";
import style from "./Dashboard.module.css";
import Sidebar from "../Sidebar/Sidebar";
import RightSide from "../RightSide/RightSide";
const Dashboard = () => {
  return (
    <div className={style.App}>
      <div className={style.AppGlass}>
        <Sidebar />
        <div className={style.MainDash}>
          <h1>Dashboard</h1>
          {/* <Cards /> */}
          {/* <BasicTable /> */}
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default Dashboard;
