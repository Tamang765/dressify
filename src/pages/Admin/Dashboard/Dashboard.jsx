import React from "react";
import SidebarPage from "../Sidebar/Sidebar";
import "./Dashboard.scss";
import DashboardSection from "./DashboardSection/DashboardSection";
import { useState } from "react";
import ApexCharts from "apexcharts";
import Charts from "./Chart/Charts";
const Dashboard = () => {

  return (
    <div className="dashboard w-100 d-flex  position-relative">
      <div
        className="sidebar-section"
      >
        <DashboardSection />
        <Charts />
        
      </div>

    </div>
  );
};

export default Dashboard;
