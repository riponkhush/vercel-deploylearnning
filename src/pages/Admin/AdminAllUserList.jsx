import {
  CardHeader,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminAllUserList = () => {
  return (
    <div className="mt-32 md:mt-14 lg:mt-24 xl:mt-24 2xl:mt-24 mb-8 flex flex-col gap-12 md:w-10/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12 lg:ml-60 xl:ml-72 2xl:ml-80">
      <div className="">
        <Card className="">
          <CardHeader className="mb-8 md:p-6 p-2 w-full bg-[#01121F] ">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                All student
              </Typography>
              <div id="input" className="relative outline-none">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Search ........ "
                />
                <div className="absolute top-3 text-sm right-3">
                  <FaSearch />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll md:px-10 px-0 pt-0 pb-2 ">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "author",
                    "designation",
                    "status",
                    "registration date",
                    "referer",
                    "action",
                    "Details",
                    "mobile",
                    "whatsapp",
                    "refer code",
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
                <tr>
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-semibold"
                        >
                          item.firstName
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          item.email
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      item.role
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                      item.status
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                      Date
                      {/* Format the date */}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <div className="relative">
                      <Typography className="text-xs font-normal text-blue-gray-500 cursor-pointer">
                        <p className="font-bold cursor-pointer">
                          refStudent.firstName
                        </p>
                      </Typography>
                    </div>
                  </td>

                  <td className="py-3 px-5 gap-3">
                    <Typography className="text-xs font-semibold text-blue-gray-600 flex flex-col gap-4">
                      <button className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg text-sm px-5  text-center">
                        active
                      </button>
                      <button className="text-white bg-gradient-to-r from-[#011627] via-[#011627] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg text-sm px-5  text-center">
                        block
                      </button>
                      <button className="text-white bg-gradient-to-r from-[#011627] via-[#011627] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg text-sm px-5  text-center capitalize">
                        inactive
                      </button>
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Link>
                      <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                        <button
                          className="text-white bg-gradient-to-r from-[#011627] via-[#011627] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg text-sm px-5  text-center"
                          type="button"
                        >
                          View
                        </button>
                      </Typography>
                    </Link>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs flex flex-col font-semibold text-blue-gray-600 capitalize">
                      <p>item.phoneNumber</p>
                      <p>item.country</p>
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                      item.whatsappNumber
                    </Typography>
                    <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                      <button
                        className="text-white bg-gradient-to-r from-[#011627] via-[#011627] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg text-sm px-5  text-center"
                        type="button"
                      >
                        Whatsapp
                      </button>
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                      tem.refer_code
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AdminAllUserList;
