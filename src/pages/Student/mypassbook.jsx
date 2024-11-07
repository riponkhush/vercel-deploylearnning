import { Card, CardHeader, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const Mypassbook = () => {
  const [isUserData, setIsUserData] = useState({});
  
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

  // Consolidate all histories into one array of notifications
  const notifications = [
    ...isUserData.allgotHistory || [],
    ...isUserData.referStudentHistory || [],
    ...isUserData.activeStudenMappingtHistory || [],
    ...isUserData.inactiveStudencouncilorMappingtHistory || [],
    ...isUserData.activeStudentoTeamLeaderMappingtHistory || [],
    ...isUserData.activeStudentoTrainerMappingtHistory || [],
    ...isUserData.homeworkHistory || [],
    ...isUserData.likeHistory || [],
    ...isUserData.homeworkSubmitHistory || [],
    ...isUserData.mappingHistory || [],
  ];

  return (
    <div className="md:mt-24 mt-32 mb-8 flex flex-col gap-12 md:w-10/12 mx-auto md:mr-0">
      <div className="mb-8 md:flex flex-col gap-12">
        <CardHeader className="md:p-2 p-3 bg-[#01121F]">
          <Typography className="text-center" variant="h6" color="white">
            My Passbook
          </Typography>
        </CardHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
          <div className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] shadow-md font-medium rounded-lg text-sm w-56 text-center p-4">
            <p>Total balance: {isUserData.totalBalance} Tk</p>
          </div>
          <div className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] shadow-md font-medium rounded-lg text-sm w-56 text-center p-4">
            <p>Total Like Balance: {isUserData.totalLikeBalance} Tk</p>
          </div>
          <div className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] shadow-md font-medium rounded-lg text-sm w-56 text-center p-4">
            <p>Total Submit Balance: {isUserData.totalSubmitBalance} Tk</p>
          </div>
          <div className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] shadow-md font-medium rounded-lg text-sm w-56 text-center p-4">
            <p>Total Refer Balance: {isUserData.totalReferBalance} Tk</p>
          </div>
          <div className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] shadow-md font-medium rounded-lg text-sm w-56 text-center p-4">
            <p>Cashback: {isUserData.cashback} Tk</p>
          </div>
          <div className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] shadow-md font-medium rounded-lg text-sm w-56 text-center p-4">
            <p>Pending Balance: {isUserData.pendingBalance} Tk</p>
          </div>
        </div>

        <Card className="shadow-none">
          <div className="p-4 md:p-6">
            <ul className="space-y-4">
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <li
                    key={index}
                    className="p-3 border border-blue-gray-200 rounded-lg shadow-md"
                  >
                    <Typography variant="small" className="font-semibold">
                      {notification.message || "Notification"}
                    </Typography>
                    <Typography variant="small" className="text-gray-500 flex justify-between items-center">
                      <p>Cashback: {notification.cashback} Tk</p>
                      <p>Pending Balance: {notification.pendingBalance} Tk</p> 
                      <p>Total Amount: {notification.totalAmount} Tk</p>
                      <p>Date: {new Date(notification.date).toLocaleString()}</p>
                    </Typography>
                  </li>
                ))
              ) : (
                <li>
                  <Typography variant="small" className="text-gray-500">
                    No notifications available.
                  </Typography>
                </li>
              )}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Mypassbook;
