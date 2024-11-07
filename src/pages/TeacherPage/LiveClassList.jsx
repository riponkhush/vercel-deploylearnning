import { CardHeader, Spinner, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { TbLock } from "react-icons/tb";
const LiveClassList = () => {
  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader className="mb-8 p-6 bg-[#01121F]">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                All Student
              </Typography>
              <div id="input" className="relative outline-none">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Search here...."
                  value=""
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
                  {["class title", "date", "link", "action"].map((el) => (
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
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      item.class_title
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                      item.createdAt
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                      item.zoom_link
                    </Typography>
                  </td>
                  <td className="py-3 px-5 flex gap-3">
                    <Typography className="text-xs font-semibold text-blue-gray-600 flex gap-4">
                      <button className="capitalize text-lg">
                        <TbLock />
                      </button>
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

export default LiveClassList;
