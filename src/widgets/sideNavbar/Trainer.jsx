import { NavLink } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { IoIosBookmark } from "react-icons/io";
import { GiTeamIdea } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
const Trainer = ({ sidenavType = "light" }) => {
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
        <NavLink to="/dashboard/trainerTeamMem">
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
              <GiTeamIdea />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                team member
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/trainerMappingStudent">
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
              <GiTeamIdea />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                trainer student
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/trainerActiveMember">
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
              <GiTeamIdea />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                active member
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/trainerInactiveMem">
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
              <GiTeamIdea />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                in active member
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/trainerReferMember">
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
              <GiTeamIdea />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                reference member
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/employee-passbook">
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
              <IoIosBookmark />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                passbook
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
    </>
  );
};

export default Trainer;
