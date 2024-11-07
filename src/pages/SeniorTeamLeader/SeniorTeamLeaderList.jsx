import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";

const SeniorTeamLeaderList = () => {
    const [seniorLeaders, setSeniorLeaders] = useState([])
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
          .get(`${import.meta.env.VITE_local_host}/auth/senior-team-leader-list`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setSeniorLeaders(res.data.data);
          })
          .catch((error) => {
            console.error("Error fetching profile:", error);
          });
      }, []);
    return (
        <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
        <Card>
          <CardHeader className="mb-8 md:p-6 p-3 bg-[#01121F]">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                Senior Team Leader List
              </Typography>
              <div id="input" className="relative outline-none">
                <input
                  type="text"
                  className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 focus:outline-primary hover:border-brand-500-secondary"
                  placeholder="Search name or email ......"
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
                      {
                        seniorLeaders.map(user => (
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
                                {user.whatsappNo                                }
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
                                {user.createdAt}
                              </Typography>
                            </td>
                          </tr>
                        ))
                      }
                  </tbody>
                </table>
            </CardBody>
        </Card>
      </div>
    );
};

export default SeniorTeamLeaderList;