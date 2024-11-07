
import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";


const MessageDoneMember = () => {
  const [inactiveStudents, setInactiveStudents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/sms-done-student`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setInactiveStudents(res.data.data)

      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
    <Card>
      <CardHeader className="mb-8 p-2 bg-[#01121F]">
        <div className="flex justify-between items-center">
          <Typography
            className="hidden md:block"
            variant="h6"
            color="white"
          >
            Sms Done Student
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
      <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {[
                "author",
                "refer id",
                "referer id",
                "country",
                "language",
                "date",
                "whatsappNo",
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
          <tbody className="">
            {inactiveStudents.map((item) => (
              <tr key={item._id}>
                <td className="py-3 px-5">
                  <div className="flex items-center gap-4">
                    <div className="">
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
                    {item.refer_code}
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <Typography className="text-xs font-semibold text-blue-gray-600">
                    {item.refererCode}
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                    {item.country}
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                    {item.language}
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                    {item.createdAt}
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                    <button  className="text-white text-xs bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg  px-5  text-center">
                      {item.whatsappNo}
                    </button>
                  </Typography>
                </td>
                <td className="py-3 px-5">
                  <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                    <button  className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium text-xs rounded-lg  px-5  text-center">
                    {item.smsDone ? "Sent" : "Pending"}
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
  );
};

export default MessageDoneMember;
