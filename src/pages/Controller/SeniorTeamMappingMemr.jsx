
import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody, Chip } from "@material-tailwind/react";
import Checkbox from "@mui/material/Checkbox";
import { Select, Option } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";

const SeniorTeamMappingMemr = () => {

  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <Card>
        <CardHeader className="mb-8 md:p-6 p-3 bg-[#01121F]">
          <div className="flex justify-between items-center">
            <Typography variant="h6" color="white">
              Senior team leader to mapping Senior
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

        <div className="flex justify-between items-center py-3 px-5">
          <div className="md:w-72">
            <Select
              label="Mapping with senior team leader"

            >
                <Option
                  className="text-black"

                >
                  tem.firstName
                </Option>
            </Select>
          </div>
          <button
            type="submit"
            className=" flex items-center gap-2 p-2 bg-[#01121F] text-xs text-white rounded"
          >
            Assign to Leader
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
                    "employed",
                    "phone no.",
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
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                        item.createdAt
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        item.createdAt
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        item.phoneNumber
                      </Typography>
                    </td>

                    <td className="py-3 px-5">
                      <Checkbox
                        size="small"
                      />
                    </td>
                  </tr>
              </tbody>
            </table>
          </CardBody>
      </Card>
    </div>
  );
};

export default SeniorTeamMappingMemr;
