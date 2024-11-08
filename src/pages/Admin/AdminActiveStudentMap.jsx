import { CardHeader, Typography, Spinner } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";
import { MdDeleteOutline } from "react-icons/md";

const AdminActiveStudentMap = () => {
  const [seniorTeamLeaders, setSeniorTeamLeaders] = useState([]);
  const [activeStudents, setActiveStudents] = useState([]);
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
        setSeniorTeamLeaders(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching active students:", error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/activeStudent`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setActiveStudents(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching active students:", error);
      });
  }, []);

  const handleStudentSelect = (studentId) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleMapping = async () => {
    if (!selectedLeader || selectedStudents.length === 0) {
      return alert(
        "Please select both a Senior Team Leader and at least one student."
      );
    }
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `${import.meta.env.VITE_local_host}/auth/activeStudentMapping`,
        {
          seniorTeamLeaderId: selectedLeader,
          studentIds: selectedStudents,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Students mapped to the Senior Leader.");
      setSelectedStudents([]); // Clear selected students after mapping
    } catch (error) {
      console.error("Error mapping students:", error);
      toast.error("An error occurred while mapping students.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <Card>
        <CardHeader className="mb-8 md:p-6 p-3 bg-[#01121F]">
          <div className="flex justify-between items-center">
            <Typography variant="h6" color="white">
              Active Student Mapping
            </Typography>
            <div id="input" className="relative outline-none">
              <input
                type="text"
                id="floating_outlined"
                className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200"
                placeholder="Search name or email..."
              />
              <div className="absolute top-3 text-sm right-3">
                <FaSearch />
              </div>
            </div>
          </div>
        </CardHeader>

        <div className="flex justify-between items-center py-3 px-5">
          <div className="md:w-72">
            <Select
              label="Senior Team Leader"
              onChange={(e) => setSelectedLeader(e)}
            >
              {seniorTeamLeaders.map((item) => (
                <Option key={item._id} value={item._id}>
                  {item.name} - {item.refer_code}
                </Option>
              ))}
            </Select>
          </div>
          <button
            onClick={handleMapping}
            type="button"
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
                  "designation",
                  "status",
                  "country",
                  "language",
                  "date",
                  "refer id",
                  "whatsapp no",
                  "mapped delete",
                  "select",
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
              {activeStudents.map((item) => (
                <tr key={item._id}>
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-semibold"
                        >
                          {item.name}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {item.email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.role}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.status}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.country}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.language}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                    {new Date(item.createdAt).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.refer_code}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.whatsappNo}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      <button><MdDeleteOutline className="text-xl" /></button>
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Checkbox
                      size="small"
                      onChange={() => handleStudentSelect(item._id)}
                      checked={selectedStudents.includes(item._id)}
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

export default AdminActiveStudentMap;
