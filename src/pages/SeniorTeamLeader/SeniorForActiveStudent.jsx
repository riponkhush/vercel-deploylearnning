import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import Checkbox from "@mui/material/Checkbox";
import { Spinner } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const SeniorForActiveStudent = () => {
  const [activeStudents, setActiveStudents] = useState([]);
  const [teamLeaders, setTeamLeaders] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedCouncilor, setSelectedCouncilor] = useState(null);



  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/senior-active-student-false`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setActiveStudents(res.data.data.activeStudents);
        console.log(res.data.dataactiveStudents);

      })
      .catch((error) => {
        console.error("Error fetching active students:", error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/senior-team-leader-list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTeamLeaders(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  const handleStudentSelect = (studentId) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId) ? prev.filter((id) => id !== studentId) : [...prev, studentId]
    );
  };

  const handleMapping = async () => {
    if (!selectedCouncilor || selectedStudents.length === 0) {
      return alert("Please select both a Senior Team Leader and at least one student.");
    }

    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `${import.meta.env.VITE_local_host}/auth/mapping-to-teamleader`,
        {
          teamLeaderId: selectedCouncilor,
          studentIds: selectedStudents,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Students mapped to the Senior Leader.")
      setSelectedStudents([]); // Clear selected students after mapping
    } catch (error) {
      console.error("Error mapping students:", error);
      toast.error("Student already assing.")
    }
  };





  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <Card>
        <CardHeader className="mb-8 p-6 bg-[#01121F] ">
          <div className="flex justify-between items-center">
            <Typography variant="h6" color="white">
              Active Student
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
        <div className="flex justify-between gap-1 items-center md:py-3 md:px-5 px-2">
          <div className="md:w-72">
            <Select className="" label="Team Leader" onChange={(e) => setSelectedCouncilor(e)}>
              {teamLeaders.map((item) => (
                <Option key={item._id} value={item._id}>
                  {item.name} - {item.refer_code}
                </Option>
              ))}
            </Select>
          </div>
          <button
            type="submit" onClick={handleMapping}
            className=" flex items-center gap-2 p-2 bg-[#01121F] text-xs text-white rounded"
          >
            Assign to Leader
          </button>
        </div>
        <CardBody className="overflow-x-scroll md:px-10 px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "author",
                  "role",
                  "status",
                  "refer id",
                  "number",
                  "action",
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
              {activeStudents.length > 0 ? (
                activeStudents.map((item) => (
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
                      <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                        {item.status}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                        {item.refer_code}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                        {item.whatsappNo}
                      </Typography>
                    </td>
                    <td className="py-3 px-5 flex gap-3">
                      <Typography className="text-xs font-semibold text-blue-gray-600 flex gap-4">
                        <Checkbox size="small" onChange={() => handleStudentSelect(item._id)} checked={selectedStudents.includes(item._id)} />
                      </Typography>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="py-3 px-5 text-center text-xs font-semibold text-blue-gray-600"
                  >
                    No active students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default SeniorForActiveStudent;
