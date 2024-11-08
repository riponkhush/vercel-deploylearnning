import {
  CardHeader,
  Typography,
  Card,
  CardBody,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Button,
} from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminAllUserList = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const itemsPerPage = 9; // Items per page
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserInfo(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching inactive students:", error);
      })
      
  }, []);

  const filteredItems = userInfo.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.whatsappNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const openModal = (id) => {
    setSelectedUserId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUserId(null);
    setCurrentPassword("");
    setNewPassword("");
  };

  const handleChangePassword = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${
          import.meta.env.VITE_local_host
        }/auth/changePassword/${selectedUserId}`,
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        console.log(response.data.success)
        toast.success("Password updated successfully!");
      } else {
        console.log("Failed to update password.");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error(error.response?.data?.message || "An error occurred.");
    }

    closeModal();
  };

  return (
    <div className="mt-32 md:mt-14 lg:mt-24 xl:mt-24 2xl:mt-24 mb-8 flex flex-col gap-12 md:w-10/12 lg:w-9/12 xl:w-9/12 2xl:w-9/12 lg:ml-60 xl:ml-72 2xl:ml-80">
      <div>
        <Card>
          <CardHeader className="mb-8 md:p-2 p-2 w-full bg-[#01121F] ">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                All Students
              </Typography>
              <div id="input" className="relative outline-none">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 focus:outline-primary"
                  placeholder="Search ........ "
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
                  {[
                    "author",
                    "role",
                    "status",
                    "date",
                    "country",
                    "language",
                    "whatsapp",
                    "change password",
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
                {currentItems.map((item) => (
                  <tr key={item._id}>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-4">
                        <div>
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
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {item.role}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                        {item.status}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                      {new Date(item.createdAt).toLocaleDateString()}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                        {item.country}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                        {item.language}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                        {item.whatsappNo}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600 capitalize">
                        <Button color="blue" className="py-1" onClick={() => openModal(item._id)}>
                          change
                        </Button>
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 text-xs py-1 rounded-lg ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Password Change Modal */}
        <Dialog open={isModalOpen} handler={closeModal}>
          <DialogHeader>Change Password</DialogHeader>
          <DialogBody divider>
            <div className="flex flex-col gap-4">
              <Input
                label="Current Password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <Input
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={closeModal}
              className="mr-2"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="green"
              onClick={handleChangePassword}
            >
              Save
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminAllUserList;
