import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";


const NoticeList = () => {
  return (
    <div>
      <div className="md:mt-24 mt-36 mb-8 flex flex-col gap-12 w-10/12 mx-auto 2xl:px-6 xl:px-8  lg:px-16 md:px-20 mr-auto md:-mr-14 lg:-mr-4 2xl:-mr-0 m-auto">
        <Card className="lg:ml-10 2xl:ml-4">
          <CardHeader className="mb-8 md:p-6 p-3 bg-[#01121F]">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                Notice List
              </Typography>
              <div id="input" className="relative outline-none">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Search by product title..."
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
                  {["Title", "Date", "Action"].map((el) => (
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
                            tem.news_title
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            tem.uerEmail
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        item.createdAt
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <button
                        className="bg-red-400 px-6 text-white rounded-full hover:bg-red-600 duration-500 shadow-md drop-shadow-xl text-xs"
                      >
                        Delete
                      </button>
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

export default NoticeList;
