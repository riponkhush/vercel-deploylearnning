import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Spinner,
} from "@material-tailwind/react";

export const Liveclass = () => {
  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
        <div className="mt-12 mb-8 flex flex-col gap-12">
          <Card>
            <CardHeader className="mb-8 p-6 bg-[#01121F]">
              <Typography variant="h6" color="white">
                Join Your Class
              </Typography>
            </CardHeader>
            <CardBody className="overflow-x-scroll md:px-10 px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {["class title", "post date", "zoom link", "join"].map(
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
                  <tbody className="">
                      <tr>
                        <td className="py-3 px-5">
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            tem.class_title
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
                            <button className="capitalize bg-blue-400 w-16 text-white hover:bg-blue-600 duration-300 shadow drop-shadow-xl rounded-full">
                              zoom
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

export default Liveclass;
