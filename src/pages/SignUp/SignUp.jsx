import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../assets/profile/bird-7411459_1280.jpg";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";


const SignUp = () => {
  const { register, handleSubmit, control } = useForm();
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+880");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();




  const onSubmit = async (data) => {
    // Combine selectedCountryCode with the whatsappNo input
    data.whatsappNo = `${selectedCountryCode}${data.whatsappNo}`;
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_local_host}/auth/signup`,
        data
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log("Error during signup:", error);
  
      // Check if the response indicates the user already exists
      if (error.response && error.response.status === 409) {
        toast.error("User already exists, please login.");
      } else {
        toast.error("An error occurred during signup.");
      }
    } finally {
      setLoading(false);
    }
  };




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



  return (
    <div
      className="relative flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 p-6 md:h-[600px] h-screen flex items-center bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="md:mb-10 mb-2 text-center text-2xl font-bold text-gray-600">
            Sign Up
          </h2>

          {/* First Name */}
          <div className="md:mb-4 mb-2">
            <div className="md:w-full">
              <Input
                label="Name"
                placeholder="Name"
                className="appearance-none"
                {...register("name", { required: true })}
              />
            </div>
          </div>

          {/* Language & Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-4 mb-2">
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

          {/* Country Code & Whatsapp Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-4 mb-2">
            <div className="bg-white rounded-lg max-w-[350px]">
              <div className="relative text-gray-500">
                <div className="absolute inset-y-0 left-3 my-auto h-6 items-center border-r">
                  <select
                    className="text-sm outline-none rounded-lg h-full px-2"
                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                    value={selectedCountryCode}
                  >
                    {countryCodes.map((item) => (
                      <option key={item._id} value={item.code}>
                        {item.name} {item.code}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Whatsapp Number"
                  className="w-full pl-[4.5rem] text-end placeholder:text-end pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-slate-600 shadow-sm rounded-lg"
                  {...register("whatsappNo", { required: true })}
                />
              </div>
            </div>
            <div className="w-full">
              <Input
                label="Enter Reference No."
                placeholder="Enter Reference No."
                className="appearance-none"
                {...register("refererCode", { required: false })}
              />
            </div>
          </div>

          {/* Email & Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-4 mb-2">
            <div className="w-full">
              <Input
                label="Email Address"
                placeholder="Email Address"
                className="appearance-none"
                {...register("email", { required: true })}
              />
            </div>

            <div>
              <Input
                type="password"
                label="Enter A Secure Password"
                placeholder="Enter A Secure Password"
                className="appearance-none"
                {...register("password", { required: true })}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-6 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full transition-all"
            >
              Register {loading && <Spinner color="blue" />}
            </button>
          </div>

          {/* Login Link */}
          <p className="text-start text-sm text-gray-600">
            Already a member?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
