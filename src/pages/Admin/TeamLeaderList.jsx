import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import Dialog from "@mui/material/Dialog";
import { Select, Option, Input } from "@material-tailwind/react";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const TeamLeaderList = () => {
  const [seniorLeaders, setSeniorLeaders] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [updatedFields, setUpdatedFields] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/teamLeader`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setSeniorLeaders(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching senior team leaders:", error);
      });
  }, []);

  const handleUpdate = async () => {
    if (!selectedLeader) return;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${import.meta.env.VITE_local_host}/auth/updateUser/${
          selectedLeader._id
        }`,
        updatedFields,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Update the local state with the updated data
      setSeniorLeaders((prevLeaders) =>
        prevLeaders.map((leader) =>
          leader._id === selectedLeader._id
            ? { ...leader, ...updatedFields }
            : leader
        )
      );
      console.log(response.data.message);
      toast.success(response.data.message);
      handleClose();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleClickOpen = (leader) => {
    setSelectedLeader(leader);
    setUpdatedFields({
      name: leader.name,
      email: leader.email,
      role: leader.role,
      language: leader.language,
      country: leader.country,
      whatsappNo: leader.whatsappNo,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedLeader(null);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFields((prevFields) => ({ ...prevFields, [name]: value }));
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

  
  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <Card>
        <CardHeader className="mb-8 md:p-6 p-3 bg-[#01121F]">
          <div className="flex justify-between items-center">
            <Typography variant="h6" color="white">
              Teacher List
            </Typography>
            <div className="relative">
              <input
                type="text"
                placeholder="Search name or email ..."
                className="block md:w-full w-36 text-sm h-[36px] px-4 bg-white rounded-[8px] border border-slate-200 focus:outline-primary"
              />
              <div className="absolute top-3 right-3">
                <FaSearch />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "Author",
                  "role",
                  "whatsapp no.",
                  "language",
                  "country",
                  "total balance",
                  "date",
                  "Actions",
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
              {seniorLeaders.map((leader) => (
                <tr key={leader._id}>
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {leader.name}
                      </Typography>
                      <Typography className="text-xs font-normal text-blue-gray-500">
                        {leader.email}
                      </Typography>
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {leader.role}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    {" "}
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {leader.whatsappNo}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {leader.language}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {leader.country}
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {leader.totalBalance} Tk
                    </Typography>
                  </td>
                  <td className="py-3 px-5">
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                    {new Date(leader.createdAt).toLocaleDateString()}
                    </Typography>
                  </td>
                  <td className="py-3 px-5 flex items-center gap-2">
                    <button
                      onClick={() => handleClickOpen(leader)}
                      className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br px-2 rounded-lg"
                    >
                      <CiEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(leader._id)}
                      className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br px-2 rounded-lg"
                    >
                      <MdDeleteOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>

      <Dialog onClose={handleClose} open={open}>
        <div className="p-10">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <Input
              label="Name"
              placeholder="Name"
              name="name"
              value={updatedFields.name || ""}
              onChange={handleFieldChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="w-full">
              <Select
                label="Select a language"
                value={updatedFields.language}
                onChange={(e) =>
                  setUpdatedFields((prev) => ({
                    ...prev,
                    language: e.target.value,
                  }))
                }
              >
                <Option value="Bangla">Bangla</Option>
                <Option value="English">English</Option>
                <Option value="Urdu">Urdu</Option>
                <Option value="Hindi">Hindi</Option>
                <Option value="Nepali">Nepali</Option>
              </Select>
            </div>
            <div className="w-full">
              <Select
                label="Select Country"
                value={updatedFields.country}
                onChange={(e) =>
                  setUpdatedFields((prev) => ({
                    ...prev,
                    country: e.target.value,
                  }))
                }
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="Pakistan">Pakistan</Option>
                <Option value="Nepal">Nepal</Option>
                <Option value="India">India</Option>
                <Option value="Malaysia">Malaysia</Option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              type="text"
              placeholder="WhatsApp Number"
              label="WhatsApp Number"
              value={updatedFields.whatsappNo || ""}
              onChange={handleFieldChange}
            />
            <Input
              label="Email Address"
              placeholder="Email Address"
              name="email"
              value={updatedFields.email || ""}
              onChange={handleFieldChange}
            />
          </div>

          <div className="mb-4 ">
            <Select
              label="Select Role"
              className="z-50"
              value={updatedFields.role}
              onChange={(e) =>
                setUpdatedFields((prev) => ({ ...prev, role: e.target.value }))
              }
            >
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
              onClick={handleUpdate}
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center gap-10"
            >
              Register
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TeamLeaderList;
