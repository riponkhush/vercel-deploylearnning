import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";
import Dialog from "@mui/material/Dialog";
import { Select, Option } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

const AllStudent = () => {
  const [inactiveStudents, setInactiveStudents] = useState([]);
  const [students, setStudents] = useState([]);
  const [hoveredReferer, setHoveredReferer] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/all-students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setInactiveStudents(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching inactive students:", error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/all-students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setStudents(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching all students:", error);
      });
  }, []);

  const getRefererInfo = (refererCode) => {
    return students.find((student) => student.refer_code === refererCode);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    try {
      // SweetAlert confirmation prompt
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          // Proceed with deletion
          const response = await axios.delete(
            `${import.meta.env.VITE_local_host}/auth/users/delete/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Display backend message in the toast notification
          const message = response.data.message;

          if (response.data.success) {
            toast.success(message);
            Swal.fire({
              title: "Deleted!",
              text: "The user has been deleted.",
              icon: "success",
            });
            // Optional: update state to remove deleted user from UI
          }
        }
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while deleting the user.";
      toast.error(errorMessage);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleWhatsappSMS = (studentId) => {
    const token = localStorage.getItem("token");
    const message = `Hello ${studentId.name}, your ID is ${studentId._id} and your refer code is ${studentId.refer_code}. Please active your account!`;
    axios
      .post(
        `${import.meta.env.VITE_local_host}/auth/send-whatsapp-messages`,
        { studentId, message },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.success && res.data.link) {
          // Open the generated WhatsApp link in a new tab
          window.open(res.data.link, "_blank");
        } else {
          toast.error("Failed to generate WhatsApp link.");
        }
      })
      .catch((error) => {
        console.error("Error sending WhatsApp message:", error);
        toast.error("Failed to send WhatsApp message.");
      });
  };

  const handleActive = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${import.meta.env.VITE_local_host}/auth/users/active/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : error.message;
      toast.error(`Failed to activate user: ${message}`);
    }
  };
  const handleInactive = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${import.meta.env.VITE_local_host}/auth/users/inactive/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : error.message;
      toast.error(`Failed to activate user: ${message}`);
    }
  };
  const handleBlock = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${import.meta.env.VITE_local_host}/auth/users/block/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : error.message;
      toast.error(`Failed to activate user: ${message}`);
    }
  };







  return (
    <div className="mt-32 md:mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <Card>
        <CardHeader className="md:mb-8 md:p-2 bg-[#01121F]">
          <div className="flex justify-between items-center">
            <Typography variant="h6" color="white">
              All Students
            </Typography>
            <div id="input" className="relative outline-none">
              <input
                type="text"
                id="floating_outlined"
                className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                placeholder="Search name or ID..."
              />
              <div className="absolute top-3 text-sm right-3">
                <FaSearch />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className=" overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "author",
                  "refer id",
                  "status",
                  "councilor",
                  "senior leader",
                  "action",
                  "referer",
                  "whatsapp no.",
                  "sms",
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
              {inactiveStudents.map((item) => (
                <tr key={item._id} className="">
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {item.name}
                      </Typography>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        {item.email}
                      </Typography>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.refer_code}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.status}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.status}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.status}
                    </Typography>
                  </td>
                  <td className="py-8">
                    <Typography className="text-xs font-semibold text-blue-gray-600 cursor-pointer flex flex-col gap-1">
                      <button onClick={() => handleActive(item._id)} className="text-white bg-gradient-to-r text-xs from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg px-5  text-center">
                        Active
                      </button>
                      <button onClick={() => handleInactive(item._id)} className="text-white bg-gradient-to-r text-xs from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg px-5  text-center">
                       In active
                      </button>
                      <button onClick={() => handleBlock(item._id)} className="text-white bg-gradient-to-r text-xs from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg px-5  text-center">
                       Block
                      </button>
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <div
                      className="relative cursor-pointer"
                      onMouseEnter={() =>
                        setHoveredReferer(getRefererInfo(item.refererCode))
                      }
                      onMouseLeave={() => setHoveredReferer(null)}
                    >
                      <Typography className="text-xs font-bold text-blue-gray-500">
                        {item.refererCode}
                      </Typography>
                      {hoveredReferer &&
                        hoveredReferer.refer_code === item.refererCode && (
                          <div className="absolute z-50 bg-white border border-gray-200 rounded shadow-lg p-2 text-xs w-56 space-y-4">
                            <p>
                              <strong>Name:</strong> {hoveredReferer.name}
                            </p>
                            <p>
                              <strong>Email:</strong> {hoveredReferer.email}
                            </p>
                            <p>
                              <strong>Whatsapp:</strong>{" "}
                              {hoveredReferer.whatsappNo}
                            </p>
                            <p>
                              <strong>Refer Id:</strong>{" "}
                              {hoveredReferer.refer_code}
                            </p>
                          </div>
                        )}
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                      <button
                        onClick={() => handleWhatsappSMS(item)}
                        className="text-white bg-gradient-to-r text-xs from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg text-sm px-5  text-center"
                      >
                        {item.whatsappNo}
                      </button>
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {item.smsDone ? "Yes" : "No"}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600 flex items-center gap-2">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg text-sm px-5 text-center"
                      >
                        <MdDeleteOutline />
                      </button>
                      <button
                        onClick={handleClickOpen}
                        className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg text-sm px-5 text-center"
                      >
                        <CiEdit />
                      </button>
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>

      <Dialog onClose={handleClose} open={open}>
        <form className="p-10">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <Input label="Name" placeholder="Name" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="w-full">
              <Select label="Select a language">
                <Option value="Bangla">Bangla</Option>
                <Option value="English">English</Option>
                <Option value="Urdu">Urdu</Option>
                <Option value="Hindi">Hindi</Option>
                <Option value="Nepali">Nepali</Option>
              </Select>
            </div>
            <div className="w-full">
              <Select label="Select Country">
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="Pakistan">Pakistan</Option>
                <Option value="Nepal">Nepal</Option>
                <Option value="India">India</Option>
                <Option value="Malaysia">Malaysia</Option>
              </Select>
            </div>
          </div>

          {/* Country Code and WhatsApp Number Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Select label="Country Code">
              <Option>tem.nameitem.code</Option>
            </Select>
            <Input
              type="text"
              placeholder="WhatsApp Number"
              label="WhatsApp Number"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input label="Email Address" placeholder="Email Address" />
            <Input
              type="password"
              label="Enter A Secure Password"
              placeholder="Enter A Secure Password"
            />
          </div>

          <div className="mb-4 ">
            <Select label="Select Role" className="z-50">
              <Option value="Admin">Admin</Option>
              <Option value="Manager">Manager</Option>
              <Option value="Controller">Controller</Option>
              <Option value="Councilor">Councilor</Option>
              <Option value="Senior Team Leader">Senior Team Leader</Option>
              <Option value="Team Leader">Team Leader</Option>
              <Option value="Checker">Checker</Option>
              <Option value="Teacher">Teacher</Option>
            </Select>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center gap-10"
            >
              Register
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default AllStudent;
