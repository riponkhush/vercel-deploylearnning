import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const InActiveUser = () => {
  const [inactiveStudents, setInactiveStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [hoveredReferer, setHoveredReferer] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/inactiveStudent`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setInactiveStudents(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching inactive students:", error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/all-students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setStudents(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching all students:", error);
      });
  }, []);

  const handleActive = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${import.meta.env.VITE_local_host}/auth/users/active/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : error.message;
      toast.error(`Failed to activate user: ${message}`);
    }
  };

  const getRefererInfo = (refererCode) => {
    return students.find((student) => student.refer_code === refererCode);
  };

  return (
    <div>
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
                  placeholder="Search name or ID..."
                />
                <div className="absolute top-3 text-sm right-3">
                  <FaSearch />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className=" px-0 pt-0 pb-2">     
          {/* overflow-x-scroll                              */}
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["author", "refer id", "status", "councilor", "whatsapp no.", "referer", "sms", "action"].map((el) => (
                    <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                      <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {inactiveStudents.map((item) => (
                  <tr key={item._id} className="">
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-4">
                        <Typography variant="small" color="blue-gray" className="font-semibold">
                          {item.name}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {item.email}
                        </Typography>
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {item.refer_code}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {item.status}
                      </Typography>
                    </td>
                    <td className="py-8">
                      <Typography className="text-xs font-semibold text-blue-gray-600 cursor-pointer">
                        Councilor
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {item.whatsappNo}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <div
                        className="relative cursor-pointer"
                        onMouseEnter={() => setHoveredReferer(getRefererInfo(item.refererCode))}
                        onMouseLeave={() => setHoveredReferer(null)}
                      >
                        <Typography className="text-xs font-bold text-blue-gray-500">
                          {item.refererCode}
                        </Typography>
                        {hoveredReferer && hoveredReferer.refer_code === item.refererCode && (
                          <div className="absolute z-50 bg-white border border-gray-200 rounded shadow-lg p-2 text-xs w-64 space-y-4">
                            <p><strong>Name:</strong> {hoveredReferer.name}</p>
                            <p><strong>Email:</strong> {hoveredReferer.email}</p>
                            <p><strong>Whatsapp:</strong> {hoveredReferer.whatsappNo}</p>
                            <p><strong>Refer Id:</strong> {hoveredReferer.refer_code}</p>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {item.smsDone ? "Yes" : "No"}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600 flex items-center gap-3">
                        <button onClick={() => handleActive(item._id)} className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg text-sm px-5 text-center">
                          Activate
                        </button>
                        <button className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg text-sm px-5 text-center">
                          Delete
                        </button>
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default InActiveUser;
