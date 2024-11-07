
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
const Header = ({ toggleSidebar }) => {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
    toast.success("Logged out successfully");
  };

  const [isUserData, setIsUserData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/get-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setIsUserData(res.data.userData);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);



  return (
    <div className="fixed top-0 z-50 w-full bg-[#01121F] text-white dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:ring-gray-600"
              onClick={toggleSidebar}
            >
              <HiOutlineMenuAlt2 className="text-2xl text-white" />
            </button>
            <Link className="flex ms-2 md:me-24">
              <MdSpaceDashboard className="h-8 me-3 hidden md:block text-xl text-indigo-500" />
              <span className="self-center text-xl flex gap-2 items-center font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                DaxBod
                <p className="px-4 rounded-full text-xs font-semibold border-2">
                  {isUserData.role}
                </p>
              </span>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <p className="flex flex-col gap-1 text-xs font-semibold capitalize text-green-600">
            {isUserData.status}
            </p>
            <div className="flex items-center justify-center">
              <div className="relative group">
                <button onClick={logout} className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <span className="relative z-10 block px-6 rounded-xl bg-gray-950">
                    <div className="relative z-10 flex items-center">
                      <span className="transition-all text-xs duration-500 group-hover:translate-x-1">
                      Log out
                      </span>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
