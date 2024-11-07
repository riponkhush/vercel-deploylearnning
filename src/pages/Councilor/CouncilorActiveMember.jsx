import { CardHeader, Spinner, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody, Avatar, Chip } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";

const CouncilorActiveMember = () => {
  const [inactiveStudents, setInactiveStudents] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/councilor-active-student`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setInactiveStudents(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <Card>
        <CardHeader className="mb-8 md:p-2 p-3 bg-[#01121F]">
          <div className="flex justify-between items-center">
            <Typography variant="h6" color="white">
              In Active Student List
            </Typography>
            <div id="input" className="relative outline-none">
              <input
                type="text"
                id="floating_outlined"
                className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                placeholder="Search name or email ......"
              />
              <div className="absolute top-3 text-sm right-3">
                <FaSearch />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
      
      {/* Check if there are no inactive students */}
      {inactiveStudents.length === 0 ? (
        <div className="text-center text-xl font-semibold text-gray-600">
          You have no students
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
          {inactiveStudents.map((item) => (
            <div
              key={item._id}
              className="relative flex flex-col bg-white rounded-3xl shadow-lg"
            >
              <div className="p-3">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                  <div className="flex items-center justify-between">
                    <h2 className="text-md font-medium tracking-tighter text-gray-600">
                      {item.name}
                    </h2>
                    <h2 className="text-xs font-medium tracking-tighter text-gray-600">
                      {item.email}
                    </h2>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs font-bold tracking-tight text-black">
                      Refer Id : {item.refer_code}
                    </p>
                    <p className="text-xs font-bold tracking-tight text-black">
                      Referer Id : {item.refererCode}
                    </p>
                    <p className="text-xs font-bold tracking-tight text-black">
                      Country : {item.country}
                    </p>
                    <p className="text-xs font-bold tracking-tight text-black">
                      Language : {item.language}
                    </p>
                    <p className="text-xs font-bold tracking-tight text-black">
                      Mapping Counselor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CouncilorActiveMember;
