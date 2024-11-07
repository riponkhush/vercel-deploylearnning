import { Card, CardBody, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import img1 from "../../assets/profile/3135715.png";

const ProfilePage = () => {
  const [isUserData, setIsUserData] = useState([]);
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

  return (
    <div className="mt-10 md:mt-14 lg:mt-4 xl:mt-6 2xl:mt-4 mb-8 flex flex-col gap-12 md:w-10/12 lg:w-9/12 xl:w-9/12 2xl:w-10/12 xl:mr-8 2xl:mr-2 mx-auto md:mr-0">
      <div className="mt-6">
        <div
          className={`relative mt-8 md:h-28 h-20 w-full overflow-hidden rounded-xl bg-cover bg-center`}
        >
          <div className="absolute inset-0 h-full w-full bg-[#01121F] opacity-50" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
          <CardBody className="p-4">
            <div>
              <img className="w-24" src={img1} alt="" />
            </div>
            <div className="mb-10 grid grid-cols-2 gap-6 ">
              <div className="flex items-center justify-start gap-6">
                <div className="space-y-4">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mt-2 text-lg text-blue-500 font-bold "
                  >
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
                    className=" text-lg text-blue-500 font-bold "
                  >
                    Whatsapp no: {isUserData?.whatsappNo}
                  </Typography>
                  {isUserData?.role === "Student" && (
                    <>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-600"
                      >
                        Refer code - {isUserData?.refer_code}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-600  flex items-center "
                      >
                        Share Link{" "}
                        <a
                          className="border border-blue-500 p-2 ml-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {isUserData?.referUrl}
                        </a>
                      </Typography>
                    </>
                  )}
                  <Typography
                    variant="small"
                    className=" font-normal text-blue-gray-600"
                  >
                    Language - {isUserData?.language}
                  </Typography>
                  <Typography
                    variant="small"
                    className=" font-normal text-blue-gray-600"
                  >
                    Country - {isUserData?.country}
                  </Typography>
                </div>
              </div>
              <div className=""></div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
