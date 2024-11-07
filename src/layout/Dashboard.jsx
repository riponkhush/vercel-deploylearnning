import { useState } from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const userRole = localStorage.getItem("role");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSideBarOpen);
  };
  return (
    <div>
      <div className="">
        <Header toggleSidebar={toggleSidebar}></Header>
        <SideBar isSideBarOpen={isSideBarOpen} userRole={userRole} ></SideBar>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
