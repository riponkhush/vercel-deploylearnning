import { Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../assets/profile/bird-7411459_1280.jpg";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try{
      const response = await axios.post(`${import.meta.env.VITE_local_host}/auth/login`, data)
      if(response.data.success){
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('role', response.data.role)
        toast.success('Login successful')
        navigate('/dashboard/profile')
      }

    }catch(error){
      toast.error("Error during registration. Please try again.", error);

    }
  }


  return (
    <section
      className="relative flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 p-6 w-full max-w-lg h-auto bg-white shadow-lg rounded-lg">
        <div className="w-full mt-8">
          <div className="text-center">
            <Typography variant="h2" className="font-bold mb-4">
              Sign In
            </Typography>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 mx-auto w-full max-w-sm"
          >
            <div className="mb-6 flex flex-col gap-6">
              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-medium"
              >
                Your email
              </Typography>
              <Input
                size="lg"
                type="email"
                placeholder="name@mail.com"
                {...register("email", { required: true })}
              />

              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-medium"
              >
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                {...register("password", { required: true })}
              />
            </div>

            <Button
              type="submit"
              className="mt-6 flex justify-center items-center gap-3 bg-blue-600"
              fullWidth
            >
              Sign In
            </Button>

            <div className="flex items-center justify-between gap-2 mt-6">
              <Typography variant="small" className="font-medium text-gray-900">
                <button>
                  Forgot Password
                </button>
              </Typography>
            </div>

            <Typography
              variant="paragraph"
              className="text-center text-blue-gray-500 font-medium mt-4"
            >
              Not registered?
              <Link to="/signUp" className="text-gray-900 ml-1">
                Create account
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
