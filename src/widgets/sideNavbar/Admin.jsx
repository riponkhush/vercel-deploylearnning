import { NavLink } from "react-router-dom";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Button, Typography } from "@material-tailwind/react";
import { MdAssignmentAdd } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { IoPersonAdd, IoBagAddSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AdminNav = ({ sidenavType = "light" }) => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
  const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);
  const [isDropdownOpen7, setIsDropdownOpen7] = useState(false);
  const [isDropdownOpen8, setIsDropdownOpen8] = useState(false); // New state for dropdown 8

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false); // Close dropdown 8 if open
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsDropdownOpen1(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false); // Close dropdown 8 if open
  };

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false); // Close dropdown 8 if open
  };

  const toggleDropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false); // Close dropdown 8 if open
  };

  const toggleDropdown5 = () => {
    setIsDropdownOpen5(!isDropdownOpen5);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false); // Close dropdown 8 if open
  };

  const toggleDropdown6 = () => {
    setIsDropdownOpen6(!isDropdownOpen6);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false); // Close dropdown 8 if open
  };

  const toggleDropdown7 = () => {
    setIsDropdownOpen7(!isDropdownOpen7);
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen8(false); // Close dropdown 8 if open
  };

  const toggleDropdown8 = () => {
    setIsDropdownOpen8(!isDropdownOpen8); // New dropdown toggle
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
  };

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
        <NavLink to="/dashboard/user-bonus-system">
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
              <IoPersonAdd />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                bonus system
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
              <IoPersonAdd />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                create user
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/adminAllUserlist">
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
              <IoPersonAdd />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
               All user
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
      <li className="relative">
        <Button
          variant="text"
          color={sidenavType === "dark" ? "white" : "blue-gray"}
          className="flex items-center gap-4 px-4 capitalize"
          onClick={toggleDropdown2}
          fullWidth
        >
          <MdOutlineAttachMoney />
          <Typography
            color="inherit"
            className="font-medium text-sm capitalize"
          >
            student
          </Typography>
          {isDropdownOpen2 ? <FiChevronUp /> : <FiChevronDown />}
        </Button>
        {isDropdownOpen2 && (
          <ul className="absolute left-0 w-full bg-[#011627] dark:bg-gray-700 shadow-lg z-10">
                        <li>
              <NavLink to="/dashboard/allStudent">
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
                      all student
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/activeUser">
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
              <NavLink to="/dashboard/inActiveUser">
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
              <NavLink to="/dashboard/admin-active-student-mapping">
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
                      active student mapping
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/one-student-map">
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
                      one student map
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/pendingStudent">
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
                      pending student
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/not-pending-Student">
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
                      not pending student
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
          </ul>
        )}
      </li>
      <li className="relative">
        <Button
          variant="text"
          color={sidenavType === "dark" ? "white" : "blue-gray"}
          className="flex items-center gap-4 px-4 capitalize"
          onClick={toggleDropdown3}
          fullWidth
        >
          <MdOutlineAttachMoney />
          <Typography
            color="inherit"
            className="font-medium text-sm capitalize"
          >
            product
          </Typography>
          {isDropdownOpen3 ? <FiChevronUp /> : <FiChevronDown />}
        </Button>
        {isDropdownOpen3 && (
          <ul className="absolute left-0 w-full bg-[#011627] dark:bg-gray-700 shadow-lg z-10">
            <li>
              <NavLink to="/dashboard/addProduct">
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
                    <IoBagAddSharp />
                    <Typography
                      color="inherit"
                      className="font-medium text-sm capitalize"
                    >
                      add product
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/productList">
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
                      product List
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
          </ul>
        )}
      </li>
      <li className="relative">
        <Button
          variant="text"
          color={sidenavType === "dark" ? "white" : "blue-gray"}
          className="flex items-center gap-4 px-4 capitalize"
          onClick={toggleDropdown4}
          fullWidth
        >
          <MdOutlineAttachMoney />
          <Typography
            color="inherit"
            className="font-medium text-sm capitalize"
          >
            notice
          </Typography>
          {isDropdownOpen4 ? <FiChevronUp /> : <FiChevronDown />}
        </Button>
        {isDropdownOpen4 && (
          <ul className="absolute left-0 w-full bg-[#011627] dark:bg-gray-700 shadow-lg z-10">
            <li>
              <NavLink to="/dashboard/addnotice">
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
                    <MdAssignmentAdd />
                    <Typography
                      color="inherit"
                      className="font-medium text-sm capitalize"
                    >
                      add notice
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/noticeList">
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
                      notice list
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
          </ul>
        )}
      </li>
      <li className="relative">
        <Button
          variant="text"
          color={sidenavType === "dark" ? "white" : "blue-gray"}
          className="flex items-center gap-4 px-4 capitalize"
          onClick={toggleDropdown5}
          fullWidth
        >
          <MdOutlineAttachMoney />
          <Typography
            color="inherit"
            className="font-medium text-sm capitalize"
          >
            author
          </Typography>
          {isDropdownOpen5 ? <FiChevronUp /> : <FiChevronDown />}
        </Button>
        {isDropdownOpen5 && (
          <ul className="absolute left-0 w-full bg-[#011627] dark:bg-gray-700 shadow-lg z-10">
            <li>
              <NavLink to="/dashboard/addAuthInfo">
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
                      add author info
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/authInfoList">
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
                      author info list
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
          </ul>
        )}
      </li>
      <li className="relative">
        <Button
          variant="text"
          color={sidenavType === "dark" ? "white" : "blue-gray"}
          className="flex items-center gap-4 px-4 capitalize"
          onClick={toggleDropdown6}
          fullWidth
        >
          <MdOutlineAttachMoney />
          <Typography
            color="inherit"
            className="font-medium text-sm capitalize"
          >
            course
          </Typography>
          {isDropdownOpen6 ? <FiChevronUp /> : <FiChevronDown />}
        </Button>
        {isDropdownOpen6 && (
          <ul className="absolute left-0 w-full bg-[#011627] dark:bg-gray-700 shadow-lg z-10">
            <li>
              <NavLink to="/dashboard/addCourse">
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
                      add course
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addminAllCourses">
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
                      all course
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
          </ul>
        )}
      </li>
      <li className="relative">
        <Button
          variant="text"
          color={sidenavType === "dark" ? "white" : "blue-gray"}
          className="flex items-center gap-4 px-4 capitalize"
          onClick={toggleDropdown7}
          fullWidth
        >
          <MdOutlineAttachMoney />
          <Typography
            color="inherit"
            className="font-medium text-sm capitalize"
          >
            homeworks
          </Typography>
          {isDropdownOpen7 ? <FiChevronUp /> : <FiChevronDown />}
        </Button>
        {isDropdownOpen7 && (
          <ul className="absolute left-0 w-full bg-[#011627] dark:bg-gray-700 shadow-lg z-10">
            <li>
              <NavLink to="/dashboard/addHomework">
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
                      add homeworks
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/adminHomeworkList">
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
                      homework list
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
          </ul>
        )}
      </li>
      <li className="relative">
        <Button
          variant="text"
          color={sidenavType === "dark" ? "white" : "blue-gray"}
          className="flex items-center gap-4 px-4 capitalize"
          onClick={toggleDropdown8}
          fullWidth
        >
          <MdOutlineAttachMoney />
          <Typography
            color="inherit"
            className="font-medium text-sm capitalize"
          >
            sub admin
          </Typography>
          {isDropdownOpen8 ? <FiChevronUp /> : <FiChevronDown />}
        </Button>
        {isDropdownOpen8 && (
          <ul className="absolute left-0 w-full bg-[#011627] dark:bg-gray-700 shadow-lg z-10">
            <li>
              <NavLink to="/dashboard/managerList">
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
                      Manager List
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/councilorList">
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
              <NavLink to="/dashboard/controllerList">
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
                      Controller List
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/seniorTeamLeaderList">
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
                      Senior Team Leader List
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/teamLeaderList">
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
                      Team Leader List
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/teacherList">
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
                      Teacher List
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/checkerList">
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
                      Checker List
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/accounterList">
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
                      Accounter List
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
          </ul>
        )}
      </li>

      <li>
        <NavLink to="/dashboard/account">
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
              <MdOutlineAttachMoney />
              <Typography
                color="inherit"
                className="font-medium text-sm capitalize"
              >
                account
              </Typography>
            </Button>
          )}
        </NavLink>
      </li>
    </>
  );
};

export default AdminNav;
