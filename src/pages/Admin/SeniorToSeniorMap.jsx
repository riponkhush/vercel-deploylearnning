import { CardHeader, Typography, Spinner } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import Checkbox from "@mui/material/Checkbox";
import { Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SeniorToSeniorMap = () => {
    const [seniorLeaders, setSeniorLeaders] = useState([]);
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [selectedLeader, setSelectedLeader] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
          .get(`${import.meta.env.VITE_local_host}/auth/seniorTeamLeader`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setSeniorLeaders(res.data.data);
          })
          .catch((error) => {
            console.error("Error fetching seniorLeaders:", error);
          });
      }, []);
    
      const handleStudentSelect = (councilorId) => {
        setSelectedStudents((prev) =>
          prev.includes(councilorId)
            ? prev.filter((id) => id !== councilorId)
            : [...prev, councilorId]
        );
      };
    
      const handleMapping = async () => {
        if (!selectedLeader) {
          toast.error("Please select a councilor to map.");
          return;
        }
        setLoading(true);
        const token = localStorage.getItem("token");
        try {
          await axios.post(
            `${import.meta.env.VITE_local_host}/auth/assign-senior-leader`,
            {
                selectedSeniorLeaderId: selectedLeader,
                assignSeniorLeaderIds: selectedStudents,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          toast.success("senior leader mapped to senior.");
          setSelectedStudents([]);
          setSelectedLeader(null);
        } catch (error) {
          console.error("Error mapping seniorLeaders:", error);
      
          // Check if the response indicates already mapped seniorLeaders
          if (error.response && error.response.status === 400 && error.response.data.message === "All selected senior leader are already mapped") {
            toast.info("Selected seniorLeaders are already mapped.");
          } else {
            toast.error("An error occurred while mapping seniorLeaders.");
          }
        } finally {
          setLoading(false);
        }
      };


    return (
        <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
        <Card>
          <CardHeader className="mb-8 md:p-2 p-3 bg-[#01121F]">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                Senior Team leader to Senior Leader
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
  
          <div className="flex justify-between items-center py-3 px-5">
            <div className="md:w-72">
              <Select label="Mapping to senior leader" onChange={(e) => setSelectedLeader(e)}>
                {seniorLeaders.map((item) => (
                  <Option key={item._id} value={item._id} className="text-black">
                    {item.name}
                  </Option>
                ))}
              </Select>
            </div>
            <button
              onClick={handleMapping}
              type="submit"
              className="flex items-center gap-2 p-2 bg-[#01121F] text-xs text-white rounded"
            >
              Assign to Leader {loading && <Spinner color="blue" />}
            </button>
          </div>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "author",
                    "whatsapp",
                    "refer id",
                    "language",
                    "country",
                    "role",
                    "date",
                  ].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seniorLeaders.map((user) => (
                  <tr key={user._id}>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {user.name}
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            {user.email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {user.whatsappNo}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {user.refer_code}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {user.language}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {user.country}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {user.role}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                      {new Date(user.createdAt).toLocaleDateString()}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Checkbox
                        size="small"
                        onChange={() => handleStudentSelect(user._id)}
                        checked={selectedStudents.includes(user._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    );
};

export default SeniorToSeniorMap;