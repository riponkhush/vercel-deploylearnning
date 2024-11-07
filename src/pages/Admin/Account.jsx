import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";


const Account = () => {
  const [request, setRequest] = useState([])
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/get-withdraw`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setRequest(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching senior team leaders:", error);
      });
  }, []);


  const handleApprove = (id) => {
    console.log(id)
  }
  return (
    <div className="mt-20 md:mt-14 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader className="mb-8 p-2 bg-[#01121F]">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                Active Students
              </Typography>
              <div id="input" className="relative outline-none">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Search here...."
                  value=""
                />
                <div className="absolute top-3 text-sm right-3">
                  <FaSearch />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "amount",
                    "refer id",
                    "account no.",
                    "method",
                    "date",
                    "status",
                    "action"
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
              {request.map((leader) => (
                <tr key={leader._id}>
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {leader.amount} Tk
                      </Typography>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {leader.refer_code}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    {" "}
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {leader.accountNumber}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {leader.method}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {leader.createdAt}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {leader.status}
                    </Typography>
                  </td>
                  <td className="py-3 px-5 flex items-center gap-2">
                    <button onClick={() => handleApprove(leader._id)}
                      className="text-white text-xs bg-gradient-to-r capitalize from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br px-2 py-2"
                    >
                      approved
                    </button>
                    <button onClick={() => handleApprove(leader._id)}
                      className="text-white text-xs bg-gradient-to-r capitalize from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br px-2 py-2"
                    >
                      rejected
                    </button>
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

export default Account;
