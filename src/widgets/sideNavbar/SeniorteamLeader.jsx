import { NavLink } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { IoIosBookmark } from "react-icons/io";
import { GiTeamIdea } from "react-icons/gi";
import { IoIosList } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";

const SeniorteamLeaders = ({ sidenavType = "light" }) => {
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
        <NavLink to="/dashboard/senior-all-mapped-student">
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
                All mapped active student
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
              <GiTeamIdea />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                create team leader
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/seniorForActiveStudent">
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
                map student
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/senior-mapped-student">
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
                mapped student
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/teamMember">
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
        <NavLink to="/dashboard/seniorActiveMember">
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
        <NavLink to="/dashboard/seniorInActiveMember">
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
        <NavLink to="/dashboard/mypassbook">
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
      <li>
        <NavLink to="/dashboard/senior-leader-lists">
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
              <IoIosList />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                team leader list
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
    </>
  );
};

export default SeniorteamLeaders;
