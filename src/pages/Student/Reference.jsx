import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Reference = () => {
  const [isUserData, setIsUserData] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${import.meta.env.VITE_local_host}/auth/own-refer-student`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data.data);
        setIsUserData(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <div className="mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader className="mb-8 p-2 bg-[#01121F] flex justify-between">
            <Typography variant="h6" color="white" className="text-center">
              Your Referer
            </Typography>
            <Typography variant="h6" color="white">
              {isUserData?.refer_code || "N/A"}
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll md:px-10 px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "image",
                    "whatsapp no.",
                    "refer id",
                    "status",
                    "Date",
                    "language",
                    "country",
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
                {isUserData?.map((item, index) => (
                  item ? (
                    <tr key={index}>
                      <td className="py-3 px-5">
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {item.name || "N/A"}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {item.email || "N/A"}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {item.whatsappNo || "N/A"}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {item.refer_code || "N/A"}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                          {item.status || "N/A"}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {new Date(item.createdAt).toLocaleDateString() || "N/A"}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {item.language || "N/A"}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {item.country || "N/A"}
                        </Typography>
                      </td>
                    </tr>
                  ) : null
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Reference;
