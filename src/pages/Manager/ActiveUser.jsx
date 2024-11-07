import { CardHeader, Typography, Button } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ActiveUser = () => {
  const [activeStudents, setActiveStudents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [actionType, setActionType] = useState(""); // "debit" or "credit"
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [amount, setAmount] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/activeStudent`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setActiveStudents(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching active students:", error);
      });
  }, []);

  const openModal = (type, studentId) => {
    setActionType(type);
    setSelectedStudent(studentId);
    setModalOpen(true);
  };

  const handleFormSubmit = () => {
    console.log(`${actionType}ing ${amount} for ${selectedStudent.name}`);

    // Get the token from localStorage
    const token = localStorage.getItem("token");

    // Prepare the payload with studentId and debitAmount (or creditAmount)
    const payload = {
      studentId: selectedStudent._id,
      [actionType === "debit" ? "debitAmount" : "creditAmount"]: parseFloat(amount),
        about
    };

    // Determine the endpoint URL based on actionType
    const url =
      actionType === "debit"
        ? `${import.meta.env.VITE_local_host}/auth/debits`
        : `${import.meta.env.VITE_local_host}/auth/credits`;

    // Make the POST request to debit or credit the amount
    axios
      .post(
        url,
        payload, // Pass the payload in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("Response:", res.data);
        toast.success(`${actionType}ing ${amount} for ${selectedStudent.name}`)
      })
      .catch((error) => {
        console.error("Error processing request:", error);
      });

    // Reset fields and close modal after submission
    setAmount("");
    setModalOpen(false);
  };

  return (
    <div>
      <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
        <Card>
          <CardHeader className="mb-8 md:p-2 p-3 bg-[#01121F]">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                Active Student
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
                  {[
                    "author",
                    "whatsapp",
                    "mapping man",
                    "date",
                    "refer code",
                    "referer id",
                    "total amount",
                    "refer student",
                    "homework amount",
                    "homework submit",
                    "like amount",
                    "bonus amount",
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
                {activeStudents.map((student) => (
                  <tr key={student._id}>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {student.name}
                          </Typography>
                          <Typography className="text-xs font-normal text-blue-gray-500">
                            student.email
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        student.whatsappNo
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        student.role
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        student.createdAt
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        student.refer_code
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-bold text-blue-gray-500">
                        student.refererCode
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        <p>student.totalBalance Tk</p>
                      </Typography>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        <div className="flex items-center gap-3">
                          <Button
                            onClick={() => openModal("debit", student)}
                            className="capitalize py-1"
                            color="red"
                          >
                            debit
                          </Button>
                          <Button
                            onClick={() => openModal("credit", student)}
                            className="capitalize py-1"
                            color="green"
                          >
                            credit
                          </Button>
                        </div>
                      </Typography>
                    </td>
                    <td className="py-3 px-5">zczzx</td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        student.totalSubmitBalance
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        student.homeworkSubmitHistory
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        student.totalLikeBalance
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        student.totalReferBalance
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-96">
            <Typography variant="h5" className="mb-4">
              {actionType === "debit" ? "Debit Amount" : "Credit Amount"} for{" "}
              {selectedStudent?.name}
            </Typography>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <textarea
              name=""
              type="number"
              placeholder="Enter amount"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              id=""
            ></textarea>
            <div className="flex justify-end gap-4">
              <Button onClick={() => setModalOpen(false)} color="red">
                Cancel
              </Button>
              <Button onClick={handleFormSubmit} color="green">
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveUser;
