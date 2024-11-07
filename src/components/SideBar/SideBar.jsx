import AdminNav from "../../widgets/sideNavbar/Admin";
import Controller from "../../widgets/sideNavbar/Controller";
import Councilor from "../../widgets/sideNavbar/Councilor";
import ManagerNav from "../../widgets/sideNavbar/Manager";
import SeniorteamLeaders from "../../widgets/sideNavbar/SeniorteamLeader";
import StudentNav from "../../widgets/sideNavbar/StudentNav";
import Teacher from "../../widgets/sideNavbar/Teacher";
import TeamLeader from "../../widgets/sideNavbar/TeamLeader";
const SideBar = ({ isSideBarOpen }) => {
  const role = localStorage.getItem("role");


  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-[#01121F] border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${
        isSideBarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div
        className="h-full px-3 pb-4 overflow-y-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <ul className="space-y-2 font-medium mt-5 md:mt-0">
          {/* Render navigation based on role */}
          {role === "Admin" && <AdminNav />}
          {role === "Manager" && <ManagerNav />}
          {role === "Controller" && <Controller />}
          {role === "Councilor" && <Councilor />}
          {role === "Senior Team Leader" && <SeniorteamLeaders />}
          {role === "Team Leader" && <TeamLeader />}
          {role === "Teacher" && <Teacher />}
          {role === "Student" &&  <StudentNav />}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
