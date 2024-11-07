import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, Avatar, Typography } from "@material-tailwind/react";
import axios from "axios";
import img1 from '../../assets/profile/3135715.png'
const UserDetail = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [isUserData, setIsUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_local_host}/auth/users`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Find the user with the matching ID
        const user = response.data.data.find((user) => user._id === id);
        if (user) {
          setIsUserData(user); // Set matched user data
        } else {
          setError("User not found");
        }
      } catch (error) {
        setError("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-14 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <div>
        <div
          className={`relative mt-8 md:h-28 h-20 w-full overflow-hidden rounded-xl bg-cover bg-center`}
        >
          <div className="absolute inset-0 h-full w-full bg-[#011627] opacity-50" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
          <CardBody className="p-4">
            <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-6">
                <Avatar
                  src={img1}
                  size="xl"
                  variant="rounded"
                  className="rounded-full shadow-lg shadow-blue-gray-500/40"
                />
              </div>
            </div>
            <div>
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                    {isUserData?.name}
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-600"
                  >
                    Email - {isUserData?.email}
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-lg text-blue-500 font-bold"
                  >
                    {isUserData?.role}
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-lg text-blue-500 font-bold"
                  >
                    {isUserData?.language}
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-lg text-blue-500 font-bold"
                  >
                    {isUserData?.country}
                  </Typography>
                </div>
                <div>
                    
                </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default UserDetail;
