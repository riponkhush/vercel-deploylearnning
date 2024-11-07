import {
  CardHeader,
  Typography,
  Spinner,
  Card,
} from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const SmsDoneStudent = () => {
  const [inactiveStudents, setInactiveStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [hoveredRefererCode, setHoveredRefererCode] = useState(null);
  const [hoveredStudentId, setHoveredStudentId] = useState(null); // New state for hovered student
  const [councilorInfo, setCouncilorInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoading(true);

    // Fetch inactive students
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/students-with-sms-done`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setInactiveStudents(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });

    axios
      .get(`${import.meta.env.VITE_local_host}/auth/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserInfo(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });

    axios
      .get(`${import.meta.env.VITE_local_host}/auth/councilor-info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCouncilorInfo(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching councilor info:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleMouseEnter = (refererCode) => {
    setHoveredRefererCode(refererCode);
  };

  const handleMouseLeave = () => {
    setHoveredRefererCode(null);
  };

  const handleStudentMouseEnter = (studentId) => {
    setHoveredStudentId(studentId);
  };

  const handleStudentMouseLeave = () => {
    setHoveredStudentId(null);
  };

  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <Card>
        <CardHeader className="mb-8 p-2 bg-[#01121F]">
          <div className="flex justify-between items-center">
            <Typography variant="h6" color="white">
              Inactive Students
            </Typography>
            <div id="input" className="relative outline-none">
              <input
                type="text"
                id="floating_outlined"
                className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                placeholder="Search name id ......"
              />
              <div className="absolute top-3 text-sm right-3">
                <FaSearch />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
      <div className="px-0 pt-0 pb-2">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <Spinner color="blue" size="xl" className="h-12 w-12" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
            {inactiveStudents.map((item) => {
              const tooltipData = userInfo.find(
                (user) => user.refererCode === item.refererCode
              );

              // Find the councilor data based on studentId
              const councilorData =
                councilorInfo?.inactiveStudencouncilorMappingtHistory?.find(
                  (councilor) => councilor.studentId === item._id
                );
              return (
                <div
                  key={item._id}
                  className="relative flex flex-col bg-white rounded-3xl shadow-lg"
                >
                  <div className="p-2">
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
                        <p className="text-xs font-light tracking-tight text-black">
                          Refer Id : {item.refer_code}
                        </p>
                        <p
                          className="cursor-pointer items-center justify-center w-full px-6 text-center text-white duration-400 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                          onMouseEnter={() =>
                            handleMouseEnter(item.refererCode)
                          }
                          onMouseLeave={handleMouseLeave}
                        >
                          Referer Id : {item.refererCode}
                        </p>
                        <p className="text-xs font-light tracking-tight text-black">
                          Country : {item.country}
                        </p>
                        <p className="text-xs font-light tracking-tight text-black">
                          Language : {item.language}
                        </p>
                        <p
                          className="cursor-pointer items-center justify-center w-full px-6 text-center text-white duration-400 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                          onMouseEnter={() => handleStudentMouseEnter(item._id)}
                          onMouseLeave={handleStudentMouseLeave}
                        >
                          Mapping Counselor
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tooltip display for Referer Code */}
                  {hoveredRefererCode === item.refererCode && tooltipData && (
                    <div className="absolute top-12 left-1/2 transform w-48 mt-2 p-4 bg-white border border-gray-200 rounded shadow-lg text-black z-50">
                      <p className="text-xs">
                        <strong>Name:</strong> {tooltipData.name}
                      </p>
                      <p className="text-xs">
                        <strong>Email:</strong> {tooltipData.email}
                      </p>
                      <p className="text-xs">
                        <strong>Phone:</strong> {tooltipData.whatsappNo}
                      </p>
                      <p className="text-xs">
                        <strong>Refer Id:</strong> {tooltipData.refer_code}
                      </p>
                    </div>
                  )}

                  {/* Tooltip display for Mapping Counselor */}
                  {hoveredStudentId === item._id && councilorData && (
                    <div className="absolute top-16 left-1/2 transform w-48 mt-2 p-4 bg-white border border-gray-200 rounded shadow-lg text-black z-50">
                      <p className="text-xs">
                        <strong>Student Type:</strong>{" "}
                        {councilorData.studentType}
                      </p>
                      <p className="text-xs">
                        <strong>Mapped At:</strong>{" "}
                        {new Date(councilorData.mappedAt).toLocaleString()}
                      </p>
                      <p className="text-xs">
                        <strong>Mapper ID:</strong> {councilorData.mapperId}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SmsDoneStudent;
