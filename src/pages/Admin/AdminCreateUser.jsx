import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Spinner } from "@material-tailwind/react";

const AdminCreateUser = () => {
  const [countryCodes, setCountryCodes] = useState([]);
  const [role, setRole] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [loading, setLoading] = useState(false);
  const userRole = localStorage.getItem("role");


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/country-code`)
      .then((res) => {
        setCountryCodes(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching country codes:", error);
      });
  }, []);

  const { register, handleSubmit, setValue, control, reset } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    data.whatsappNo = `${selectedCountryCode}${data.whatsappNo}`;
    const token = localStorage.getItem("token");

    axios
      .post(`${import.meta.env.VITE_local_host}/auth/admin/signup`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        reset();
        toast.success("User created successfully!");
        console.log("User created successfully:", response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          toast.error("User already exists, you can login");
        } else {
          toast.error("Error creating user. Please try again.");
        }
        console.error("Error creating user:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderRoleOptions = () => {
    switch (userRole) {
      case "Admin":
        return (
          <>
            <Option value="Admin">Admin</Option>
            <Option value="Manager">Manager</Option>
            <Option value="Controller">Controller</Option>
            <Option value="Councilor">Councilor</Option>
            <Option value="Senior Team Leader">Senior Team Leader</Option>
            <Option value="Team Leader">Team Leader</Option>
            <Option value="Teacher">Teacher</Option>
            <Option value="Accounter">Accounter</Option>
          </>
        );
      case "Senior Team Leader":
        return <Option value="Team Leader">Team Leader</Option>;
      case "Controller":
        return <Option value="Councilor">Councilor</Option>;
      case "Councilor":
        return <Option value="Senior Team Leader">Senior Team Leader</Option>;
      case "Team Leader":
        return <Option value="Teacher">Teacher</Option>;
      default:
        return (
          <>
            <Option value="Councilor">Councilor</Option>
            <Option value="Team Leader">Team Leader</Option>
          </>
        );
    }
  };

  return (
    <div className="flex items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-2/6 lg:w-3/6 mx-auto mt-16 md:mt-0 lg:mr-28 xl:mr-48 2xl:mr-60"
      >
        <p className="text-center mb-4 text-2xl font-bold text-gray-400">
          Create User
        </p>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <Input
            label="Name"
            placeholder="Name"
            {...register("name", { required: true })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="w-full">
            <Controller
              name="language"
              control={control}
              render={({ field }) => (
                <Select label="Select a language" {...field}>
                  <Option value="Bangla">Bangla</Option>
                  <Option value="English">English</Option>
                  <Option value="Urdu">Urdu</Option>
                  <Option value="Hindi">Hindi</Option>
                  <Option value="Nepali">Nepali</Option>
                </Select>
              )}
            />
          </div>
          <div className="w-full">
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select label="Select Country" {...field}>
                  <Option value="Bangladesh">Bangladesh</Option>
                  <Option value="Pakistan">Pakistan</Option>
                  <Option value="Nepal">Nepal</Option>
                  <Option value="India">India</Option>
                  <Option value="Malaysia">Malaysia</Option>
                </Select>
              )}
            />
          </div>
        </div>

        {/* Country Code and WhatsApp Number Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Select
            label="Country Code"
            value={selectedCountryCode}
            onChange={(e) => {
              setSelectedCountryCode(e);
              setValue("countryCode", e);
            }}
          >
            {countryCodes.map((item) => (
              <Option key={item._id} value={item.code}>
                {item.name} {item.code}
              </Option>
            ))}
          </Select>
          <Input
            type="text"
            placeholder="WhatsApp Number"
            label="WhatsApp Number"
            {...register("whatsappNo", { required: true })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input
            label="Email Address"
            placeholder="Email Address"
            {...register("email", { required: true })}
          />
          <Input
            type="password"
            label="Enter A Secure Password"
            placeholder="Enter A Secure Password"
            {...register("password", { required: true })}
          />
        </div>

        <div className="mb-4">
          <Select
            label="Select Role"
            value={role}
            onChange={(e) => {
              setRole(e);
              setValue("role", e);
            }}
          >
            {renderRoleOptions()}
          </Select>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center gap-10"
            disabled={loading}
          >
            Register {loading && <Spinner color="blue" />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminCreateUser;





