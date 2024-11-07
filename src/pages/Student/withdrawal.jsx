import { toast } from "react-toastify";
import bkashImg from "../../assets/balance/bkash.png";
import nogodImg from "../../assets/balance/nogod.png";
import rocketImg from "../../assets/balance/rocket.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Typography, CardBody } from "@material-tailwind/react";

export const Withdrawal = () => {
  const [isUserData, setIsUserData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [withdrawInfo, setWithdrawInfo] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/get-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setIsUserData(res.data.userData);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  const handleMethodClick = (method) => {
    setSelectedMethod(method.toLowerCase()); // Ensure method is lowercase (bkash or nagad)
    setShowForm(true);
    setWithdrawAmount(""); // Reset amount field
    setAccountNumber(""); // Reset account number
    setError("");
  };

  const handleWithdraw = () => {
    if (!withdrawAmount || !accountNumber) {
      setError("Please enter amount and account number.");
      return;
    }

    setLoading(true); // Show loading spinner
    const token = localStorage.getItem("token");
    axios
      .post(
        `${import.meta.env.VITE_local_host}/auth/withdraw`,
        {
          requestId: isUserData._id,
          refer_code: isUserData.refer_code,
          method: selectedMethod,
          amount: withdrawAmount,
          accountNumber: accountNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success(response.data.message);
        setShowForm(false);
        setWithdrawAmount("");
        setAccountNumber("");
      })
      .catch((error) => {
        toast.error("Withdrawal error:", error);
        setError("Failed to withdraw. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/withdraw-info-owner`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setWithdrawInfo(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Withdraw Balance
          </h2>
          <div className="flex items-center justify-center gap-6 mt-2">
            <p className="text-sm bg-blue-500 py-1 px-3 text-white rounded-md">
              Current balance: {isUserData.totalBalance || 0} Taka
            </p>
            <button className="text-sm bg-gray-600 py-1 px-3 text-white rounded-md hover:bg-gray-500">
              Pay pending balance: {isUserData.pendingBalance || 0} Taka
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-6">
          <div
            className="border cursor-pointer flex justify-center items-center gap-4 shadow-lg px-6 py-4 rounded hover:bg-gray-100"
            onClick={() => handleMethodClick("bkash")}
          >
            <img className="w-16" src={bkashImg} alt="bKash" />
          </div>
          <div
            className="border cursor-pointer flex justify-center items-center gap-4 shadow-lg px-6 py-4 rounded hover:bg-gray-100"
            onClick={() => handleMethodClick("nagad")}
          >
            <img className="w-16" src={nogodImg} alt="Nagad" />
          </div>
          <div
            className="border cursor-pointer flex justify-center items-center gap-4 shadow-lg px-6 py-4 rounded hover:bg-gray-100"
            onClick={() => handleMethodClick("rocket")}
          >
            <img className="w-16" src={rocketImg} alt="Rocket" />
          </div>
        </div>

        {showForm && (
          <div className="mt-8 bg-gray-50 p-6 rounded shadow-lg w-full mx-auto">
            <h3 className="text-center text-xl font-semibold text-gray-800 mb-4">
              Withdraw via{" "}
              {selectedMethod.charAt(0).toUpperCase() + selectedMethod.slice(1)}
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Amount (Taka)
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Account Number
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:border-blue-500"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                placeholder="Enter your account number"
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button
              onClick={handleWithdraw}
              disabled={loading}
              className={`w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 ${
                loading && "opacity-50 cursor-not-allowed"
              }`}
            >
              {loading ? "Processing..." : "Withdraw"}
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="w-full mt-4 bg-gray-500 text-white py-2 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        )}

        <div className="mt-8">
          <Card className="shadow-lg">
            <CardBody className="overflow-x-auto p-0">
              <table className="w-full min-w-[640px] table-auto bg-white">
                <thead>
                  <tr>
                    {[
                      "Amount",
                      "Account Number",
                      "Method",
                      "Status",
                      "Withdraw Date",
                    ].map((header) => (
                      <th
                        key={header}
                        className="border-b border-blue-gray-50 py-3 px-5 text-left bg-gray-100"
                      >
                        <Typography
                          variant="small"
                          className="text-[12px] font-semibold uppercase text-gray-600"
                        >
                          {header}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {withdrawInfo.map((entry) => (
                    <tr key={entry._id}>
                      <td className="py-3 px-5">
                        <Typography className="text-sm font-medium text-gray-700">
                          {entry.amount} Taka
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-sm font-medium text-gray-700">
                          {entry.accountNumber}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-sm font-medium text-gray-700">
                          {entry.method}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-sm font-medium text-gray-700">
                          {entry.status}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography className="text-sm font-medium text-gray-700">
                          {entry.createdAt}
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
    </div>
  );
};

export default Withdrawal;
