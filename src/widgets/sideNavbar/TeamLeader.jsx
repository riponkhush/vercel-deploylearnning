import { NavLink } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosBookmark } from "react-icons/io";
const TeamLeader = ({ sidenavType = "light" }) => {
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
        <NavLink to="/dashboard/teamLeaderMember">
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
                team member
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/teamLeaderActiveStudent">
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
                active student list
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
                Create Teacher
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/team-leader-trainer-list">
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
                teacher list
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/teamleaderMaptoTrainer">
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
                leader to trainer map
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
              <FaHome />
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
              <FaHome />
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
        <NavLink to="/dashboard/memberLeadData">
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
                member lead data
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
    </>
  );
};

export default TeamLeader;
