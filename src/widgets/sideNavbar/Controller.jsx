import { CiViewList } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { Button, Typography } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
const Controller = ({ sidenavType = "light" }) => {

  return (
    <>
      <li>
        <NavLink to="/dashboard/profile">
          {({ isActive }) => (
            <Button
              variant={isActive ? "gradient" : "text"}
              color={
                isActive
                  ? "blue"
                  : sidenavType === "dark"
                  ? "white"
                  : "blue-gray"
              }
              className="flex items-center gap-4 px-4 capitalize"
              fullWidth
            >
              <CgProfile />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                Profile
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/adminCreateUser">
          {({ isActive }) => (
            <Button
              variant={isActive ? "gradient" : "text"}
              color={
                isActive
                  ? "blue"
                  : sidenavType === "dark"
                  ? "white"
                  : "blue-gray"
              }
              className="flex items-center gap-4 px-4 capitalize"
              fullWidth
            >
              <FaHome />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                create Councilor
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/activeStudentForController">
          {({ isActive }) => (
            <Button
              variant={isActive ? "gradient" : "text"}
              color={
                isActive
                  ? "blue"
                  : sidenavType === "dark"
                  ? "white"
                  : "blue-gray"
              }
              className="flex items-center gap-4 px-4 capitalize"
              fullWidth
            >
              <CiViewList />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                active Student
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/controle-inactive-list">
          {({ isActive }) => (
            <Button
              variant={isActive ? "gradient" : "text"}
              color={
                isActive
                  ? "blue"
                  : sidenavType === "dark"
                  ? "white"
                  : "blue-gray"
              }
              className="flex items-center gap-4 px-4 capitalize"
              fullWidth
            >
              <CiViewList />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                in active Student
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/councilorMappingStudent">
          {({ isActive }) => (
            <Button
              variant={isActive ? "gradient" : "text"}
              color={
                isActive
                  ? "blue"
                  : sidenavType === "dark"
                  ? "white"
                  : "blue-gray"
              }
              className="flex items-center gap-4 px-4 capitalize"
              fullWidth
            >
              <CiViewList />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
               in active student map
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/councilorMappingSyestem">
          {({ isActive }) => (
            <Button
              variant={isActive ? "gradient" : "text"}
              color={
                isActive
                  ? "blue"
                  : sidenavType === "dark"
                  ? "white"
                  : "blue-gray"
              }
              className="flex items-center gap-4 px-4 capitalize"
              fullWidth
            >
              <CiViewList />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                councilor mapping
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mapped-councilor">
          {({ isActive }) => (
            <Button
              variant={isActive ? "gradient" : "text"}
              color={
                isActive
                  ? "blue"
                  : sidenavType === "dark"
                  ? "white"
                  : "blue-gray"
              }
              className="flex items-center gap-4 px-4 capitalize"
              fullWidth
            >
              <CiViewList />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
               mapped councilor
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mappingStudent">
          {({ isActive }) => (
            <Button
              variant={isActive ? "gradient" : "text"}
              color={
                isActive
                  ? "blue"
                  : sidenavType === "dark"
                  ? "white"
                  : "blue-gray"
              }
              className="flex items-center gap-4 px-4 capitalize"
              fullWidth
            >
              <CiViewList />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                mapping student
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/notMappingStudent">
          {({ isActive }) => (
            <Button
              variant={isActive ? "gradient" : "text"}
              color={
                isActive
                  ? "blue"
                  : sidenavType === "dark"
                  ? "white"
                  : "blue-gray"
              }
              className="flex items-center gap-4 px-4 capitalize"
              fullWidth
            >
              <CiViewList />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                not mapping student
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/councilor-list">
          {({ isActive }) => (
            <Button
              variant={isActive ? "gradient" : "text"}
              color={
                isActive
                  ? "blue"
                  : sidenavType === "dark"
                  ? "white"
                  : "blue-gray"
              }
              className="flex items-center gap-4 px-4 capitalize"
              fullWidth
            >
              <CiViewList />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                Councilor List
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/sms-done-with-student">
          {({ isActive }) => (
            <Button
              variant={isActive ? "gradient" : "text"}
              color={
                isActive
                  ? "blue"
                  : sidenavType === "dark"
                  ? "white"
                  : "blue-gray"
              }
              className="flex items-center gap-4 px-4 capitalize"
              fullWidth
            >
              <CiViewList />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                sms done student
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
    </>
  );
};

export default Controller;
