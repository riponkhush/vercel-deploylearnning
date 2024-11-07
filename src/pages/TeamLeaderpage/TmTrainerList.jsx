import { CardHeader, Spinner, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody, Avatar } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";

const TmTrainerList = () => {
  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <Card>
        <CardHeader className="mb-8 p-6 bg-[#01121F]">
          <div className="flex justify-between items-center">
            <Typography variant="h6" color="white">
              Tariner list
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
          <CardBody className="overflow-x-scroll md:px-10 px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    {["author", "designation", "status", "action"].map((el) => (
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
                    <tr>
                      <td className="py-3 px-5">
                        <div className="flex items-center gap-4">
                          <div className="">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              item.name
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              tem.email
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          tem.role
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                          item.status
                        </Typography>
                      </td>
                    </tr>
                </tbody>
              </table>
          </CardBody>
      </Card>
    </div>
  );
};

export default TmTrainerList;