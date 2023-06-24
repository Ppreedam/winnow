import React from "react";
import style from "./Dashboard.module.css";
import BasicTable from "../../../component/Table/Table";
import Cards from "../../../component/Cards/Cards";
import Sidebar from "../../../component/Sidebar/Sidebar";
const Dashboard = () => {
  return (
    <div className={style.MainDash}>
    <Sidebar />
      <div>
        <h1>Admin Dashboard</h1>
        {/* <Cards /> */}
        <BasicTable />
      </div>
    </div>
  );
};

export default Dashboard;
