import { useEffect, useState } from "react";
import axios from "axios";
import { CardHeader, Typography, Spinner, Card, CardBody } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
const MappedCouncilor = () => {
    const [councilors, setCouncilors] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const token = localStorage.getItem("token");
        setLoading(true);
        axios
          .get(`${import.meta.env.VITE_local_host}/auth/mapped-councilor`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setCouncilors(res.data.data);
            console.log(res.data.ata)
          })
          .catch((error) => {
            console.error("Error fetching councilors:", error);
          })
          .finally(() => {
            setLoading(false); 
          });
      }, []);
    return (
        <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
        <Card>
          <CardHeader className="mb-8 p-2 bg-[#01121F]">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                Delete Mapped Councilor
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
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            {loading ? ( // Conditionally render spinner or table
              <div className="flex justify-center items-center h-screen">
                <Spinner color="blue" size="xl" className="h-12 w-12" />
              </div>
            ) : (
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    {[
                      "author",
                      "refer id",
                      "status",
                      "councilor",
                      "whatsapp no.",
                      "referer",
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
                  {councilors.map((item) => (
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
                          {item.refer_code}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {item.status}
                        </Typography>
                      </td>
                      <td className="py-8">
                        <div className="relative group">
                          <Typography className="text-xs font-semibold text-blue-gray-600 cursor-pointer">
                            Councilor
                          </Typography>
                          <div className="absolute hidden group-hover:block bg-gray-100 text-xs font-semibold text-blue-gray-600 rounded p-2 shadow-lg">
                            ownCouncilorforStu
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {item.whatsappNo}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <div className="relative">
                          <Typography className="text-xs font-normal text-blue-gray-500 cursor-pointer">
                            <p className="font-bold cursor-pointer">
                              {item.refererCode}
                            </p>
                          </Typography>
                        </div>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {item.smsDone}
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </CardBody>
        </Card>
      </div>
    );
};

export default MappedCouncilor;