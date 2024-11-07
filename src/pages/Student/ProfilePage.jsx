import { Card, CardBody, Typography, Input, Button } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import img1 from "../../assets/profile/3135715.png";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const [isUserData, setIsUserData] = useState({});
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/get-profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setIsUserData(res.data.userData);
        setFormData(res.data.userData); // Populate formData with initial user data
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_local_host}/auth/updateUser/${isUserData._id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setIsUserData(response.data.data); 
      setIsEditing(false); 
      toast.success(response.data.message); 
    } catch (error) {
      toast.error("Error updating profile.", error);
    }
  };

  return (
    <div className="mt-10 md:mt-14 lg:mt-4 xl:mt-6 2xl:mt-4 mb-8 flex flex-col gap-12 md:w-10/12 lg:w-9/12 xl:w-9/12 2xl:w-10/12 xl:mr-8 2xl:mr-2 mx-auto md:mr-0">
      <div className="mt-6">
        <div className={`relative mt-8 md:h-28 h-20 w-full overflow-hidden rounded-xl bg-cover bg-center`}>
          <div className="absolute inset-0 h-full w-full bg-[#01121F] opacity-50" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
          <CardBody className="p-4">
            <div>
              <img className="w-24" src={img1} alt="Profile" />
            </div>
            <div className="mb-10 grid grid-cols-2 gap-6">
              <div className="flex items-center justify-start gap-6">
                <div className="space-y-4">
                  <Typography variant="h5" color="blue-gray" className="mt-2 text-lg text-blue-500 font-bold">
                    {formData.name}
                  </Typography>

                  {isEditing ? (
                    <>
                      <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
                      <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
                      <Input label="Whatsapp No" name="whatsappNo" value={formData.whatsappNo} onChange={handleChange} />
                      <Input label="Country" name="country" value={formData.country} onChange={handleChange} />
                      <Input label="Language" name="language" value={formData.language} onChange={handleChange} />
                      <Input
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password || ""}
                        onChange={handleChange}
                        placeholder="New Password"
                      />
                      <Button color="green" onClick={handleUpdate} className="mt-4">
                        Save Changes
                      </Button>
                      <Button color="red" onClick={toggleEdit} className="mt-4 ml-2">
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Typography variant="small" className="font-normal text-blue-gray-600">
                        Email - {isUserData?.email}
                      </Typography>
                      <Typography variant="small" className="text-lg text-blue-500 font-bold">
                        Whatsapp no: {isUserData?.whatsappNo}
                      </Typography>
                      <Typography variant="small" className="font-normal text-blue-gray-600">
                        Country - {isUserData?.country}
                      </Typography>
                      <Typography variant="small" className="font-normal text-blue-gray-600">
                        Language - {isUserData?.language}
                      </Typography>
                      <Button color="blue" onClick={toggleEdit} className="mt-4">
                        Edit Profile
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
