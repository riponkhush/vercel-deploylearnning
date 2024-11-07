import { CardHeader, Spinner, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddminHomeworkList = () => {
  const [homeworks, setHomeworks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/get-homework`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setHomeworks(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${import.meta.env.VITE_local_host}/auth/delete-homework/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        setHomeworks((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        toast.error("Failed to delete product. Please try again.");
      });
  };












  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader className="mb-8 md:p-6 p-3 bg-[#01121F]">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                All homework List
              </Typography>
              <div id="input" className="relative outline-none">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Search by name or category ......" // Handle search input change
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
                  {["title", "category", "list", "Date", "action"].map((el) => (
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
                {homeworks.map((item) => (
                  <tr key={item._id}>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold capitalize"
                          >
                            {item.title}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {item.category}
                      </Typography>
                    </td>
                    <td className="py-3 px-5 relative">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {item.homeList.map((listItem, index) => (
                          <div
                            key={index}
                            className="relative group flex items-center space-x-2 cursor-pointer"
                          >
                            {/* Main list item */}
                            <span className="font-medium">
                              {listItem.listItem}
                            </span>

                            {/* Dropdown container for details */}
                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-lg w-48 p-2 z-10">
                              <span className="text-gray-600 text-xs">
                                {listItem.details}
                              </span>
                            </div>
                          </div>
                        ))}
                      </Typography>
                    </td>

                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {item.createdAt}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600 flex gap-4 items-center">
                        <button onClick={()=> handleDelete(item._id)} className="bg-red-400 w-6 h-6 flex items-center justify-center text-white  rounded-full hover:bg-red-600 duration-500 shadow-md drop-shadow-xl">
                          <MdOutlineDeleteOutline className="text-xl" />
                        </button>
                        <button className="bg-red-400 w-6 h-6 flex items-center justify-center text-white  rounded-full hover:bg-red-600 duration-500 shadow-md drop-shadow-xl">
                          <CiEdit className="text-xl" />
                        </button>
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AddminHomeworkList;
