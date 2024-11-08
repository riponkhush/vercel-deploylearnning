
import {
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



const AdminAllCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/get-course`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data)
        setCourses(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${import.meta.env.VITE_local_host}/auth/delete-course/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        setCourses((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        toast.error("Failed to delete course. Please try again.");
      });
  };

  return (
    <div>
      <div className="md:mt-24 mt-28 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
        <Card>
          <CardHeader className="mb-8 md:p-6 p-3 bg-[#01121F] ">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                All course List
              </Typography>
              <div id="input" className="relative outline-none">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Search by title ......"
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
                      {["title", "category", "image", "Date", "action"].map(
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
                  {courses.map((item) => (
                  <tr key={item._id}>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
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
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {item.image}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                      {new Date(item.createdAt).toLocaleDateString()}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600 flex items-center gap-4">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="bg-red-400 w-6 h-6 flex items-center justify-center text-white  rounded-full hover:bg-red-600 duration-500 shadow-md drop-shadow-xl"
                        >
                          <MdOutlineDeleteOutline className="text-xl" />
                        </button>
                        <button
                          
                          className="bg-red-400 w-6 h-6 flex items-center justify-center text-white  rounded-full hover:bg-red-600 duration-500 shadow-md drop-shadow-xl"
                        >
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

export default AdminAllCourse;
