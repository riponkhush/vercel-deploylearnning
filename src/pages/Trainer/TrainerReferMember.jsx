
import { CardHeader, Spinner, Typography } from "@material-tailwind/react";
import { Card, CardBody } from "@material-tailwind/react";

const TrainerReferMember = () => {

  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
        <div className="mt-12 mb-8 flex flex-col gap-12">
          <Card>
            <CardHeader className="mb-8 p-6 bg-[#01121F] flex justify-between">
              <Typography variant="h6" color="white">
                Your student code ......
              </Typography>
              <Typography variant="h6" color="white">
                loginUser
              </Typography>
            </CardHeader>
            <CardBody className="overflow-x-scroll md:px-10 px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {["Name", "Email", "Phone", "WhatsApp", "Status", "Date", "Country"].map(
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
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            student.firstName
                          </Typography>
                        </td>
                        <td className="py-3 px-5">
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            tudent.email
                          </Typography>
                        </td>
                        <td className="py-3 px-5">
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            student.phoneNumber
                          </Typography>
                        </td>
                        <td className="py-3 px-5">
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            tudent.whatsappNumber
                          </Typography>
                        </td>
                        <td className="py-3 px-5">
                          <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                            student.status
                          </Typography>
                        </td>
                        <td className="py-3 px-5">
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            ew Dattudent.cr
                          </Typography>
                        </td>
                        <td className="py-3 px-5">
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            tudent.country
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

export default TrainerReferMember;
