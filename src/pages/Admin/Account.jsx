import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Account = () => {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/get-withdraw`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setRequests(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching withdrawal requests:", error);
      });
  };

  const handleApprove = async (id) => {
    console.log(id)
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_local_host}/auth/withdraw/requests/approve/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data.success)
      toast.success(response.data.message);
      fetchRequests();
    } catch (error) {
      console.error(`Erroring request:`, error);
    }
  };

  return (
    <div className="mt-20 md:mt-14 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader className="mb-8 p-2 bg-[#01121F]">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                Withdrawal Requests
              </Typography>
              <div className="relative outline-none">
                <input
                  type="text"
                  className="block w-36 md:w-full text-sm h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:outline focus:outline-2 focus:outline-primary"
                  placeholder="Search here..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute top-3 right-3 text-sm">
                  <FaSearch />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-auto px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Amount", "Refer ID", "Account No.", "Method", "Date", "Status", "Action"].map((header) => (
                    <th key={header} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                      <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                        {header}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {requests
                  .filter((req) => req.refer_code.includes(searchTerm)) // Basic search by refer code
                  .map((request) => (
                    <tr key={request._id}>
                      <td className="py-3 px-5">
                        <Typography variant="small" className="font-semibold">
                          {request.amount} Tk
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {request.refer_code}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {request.accountNumber}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {request.method}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                        {new Date(request.createdAt).toLocaleDateString()}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {request.status}
                        </Typography>
                      </td>
                      <td className="py-3 px-5 flex items-center gap-2">
                        <button
                          onClick={() => handleApprove(request._id)}
                          className="text-white text-xs bg-gradient-to-r from-green-500 to-green-700 hover:bg-green-600 px-2 py-1 rounded"
                          disabled={request.status !== "pending"}
                        >
                          Approve
                        </button>
                        <button
                          className="text-white text-xs bg-gradient-to-r from-red-500 to-red-700 hover:bg-red-600 px-2 py-1 rounded"
                          disabled={request.status !== "pending"}
                        >
                          Reject
                        </button>
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

export default Account;
