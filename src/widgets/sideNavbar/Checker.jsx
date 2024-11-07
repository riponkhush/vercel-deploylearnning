import { NavLink } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";

import { CgProfile } from "react-icons/cg";
const Checker = ({ sidenavType = "light" }) => {
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
        <NavLink to="/dashboard/allHomeworks">
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
                All Homeworks
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
    </>
  );
};

export default Checker;
