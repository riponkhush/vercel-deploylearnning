import React, { useEffect, useState } from "react";
import { CardHeader, Spinner, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody, Avatar, Chip } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import { IconButton } from "@material-tailwind/react";

const TeamLeadedList = () => {
  
  return (
    <div>
        <div className="mt-12 mb-8 flex flex-col gap-12">
          <Card>
            <CardHeader className="mb-8 p-6 bg-[#01121F]">
              <div className="flex justify-between items-center">
                <Typography variant="h6" color="white">
                  Team leader list
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
                    {["author", "designation", "status", "date", "action"].map(
                      (el) => (
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
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td className="py-3 px-5">
                        <div className="flex items-center gap-4">
                          <Avatar
                            src=''
                            alt=""
                            size="sm"
                            variant="rounded"
                          />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              item.name
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
                          item.role
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          item.createdAt
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <button>
                            <MdDelete className="text-xl  text-red-400" />
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

export default TeamLeadedList;