import { NavLink } from "react-router-dom";
import { MdAddAPhoto } from "react-icons/md";
import { Button, Typography } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

const StudentNav = ({ sidenavType = "light" }) => {
    return (
        <>
        <li>
          <NavLink to="/dashboard/home">
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
                  home
                </Typography>
              </Button>
            )}
          </NavLink>
        </li>
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
          <NavLink to="/dashboard/liveClass">
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
                  Live Class
                </Typography>
              </Button>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/studentAllCourse">
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
                  All Course
                </Typography>
              </Button>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/studentHomwork">
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
                  My Homeworks
                </Typography>
              </Button>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/withdraw">
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
                  Withdrawals
                </Typography>
              </Button>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/myPassbook">
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
                  My Passbook
                </Typography>
              </Button>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/affliateMarketing">
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
                  Affiliate Marketing
                </Typography>
              </Button>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/studentReference">
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
                  Reference
                </Typography>
              </Button>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/upLoadImage">
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
                <MdAddAPhoto />
                <Typography
                  color="inherit"
                  className="font-medium text-sm capitalize"
                >
                  Upload Image
                </Typography>
              </Button>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/photoGallary">
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
                <TfiGallery />
                <Typography
                  color="inherit"
                  className="font-medium text-sm capitalize"
                >
                  Photo Gallery
                </Typography>
              </Button>
            )}
          </NavLink>
        </li>
      </>
    );
};

export default StudentNav;