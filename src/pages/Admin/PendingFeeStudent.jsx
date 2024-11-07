import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
const PendingFeeStudent = () => {
  const [pendingStudents, setPendingStudents] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/pending-student`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPendingStudents(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching active students:", error);
      });
  }, []);

  return (
    <div className="mt-32 md:mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <Card>
        <CardHeader className="md:mb-8 md:p-6 pl-2 md:pl-0 bg-[#01121F]">
          <div className="flex justify-between items-center">
            <Typography variant="h6" color="white">
              All Students
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
        <CardBody className=" overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "author",
                  "refer id",
                  "status",
                  "total amount",
                  "senior leader",
                  "pending amount",
                  "pending type",
                  "referer",
                  "whatsapp no.",
                  "sms",
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
              {pendingStudents.map((item) => (
                <tr key={item._id} className="">
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
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
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.totalBalance} Tk
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.status}
                    </Typography>
                  </td>
                  <td className="py-8">
                    <Typography className="text-xs font-semibold text-blue-gray-600 cursor-pointer">
                      {item.pendingBalance} Tk
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-bold text-blue-gray-500">
                    {item.pendingType ? "Pending" : "Not Pending"}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-bold text-blue-gray-500">
                      {item.refererCode}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.whatsappNo}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.smsDone ? "Yes" : "No"}
                    </Typography>
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

export default PendingFeeStudent;
