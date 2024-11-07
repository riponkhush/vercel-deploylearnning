import { Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../assets/profile/bird-7411459_1280.jpg";
import { Spinner } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

const SubAdmin = () => {
  return (
    <section
      className="relative flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${img1})`, // Replace with your actual image URL
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Form container */}
      <div className="relative z-10 p-6 w-full max-w-lg h-auto bg-white shadow-lg rounded-lg">
        <div className="w-full mt-8">
          <div className="text-center">
            <Typography variant="h2" className="font-bold mb-4">
              Sign In
            </Typography>
          </div>

          {/* Form */}
          <form
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
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Select
                label="Select Role"
              >
                <Option value="Manager">Manager</Option>
                <Option value="Controller">Controller</Option>
                <Option value="Councilor">Councilor</Option>
                <Option value="Senior Team Leader">Senior Team Leader</Option>
                <Option value="Team Leader">Team Leader</Option>
                <Option value="Trainer">Trainer</Option>
                <Option value="Checker">Checker</Option>
                <Option value="Teacher">Teacher</Option>
                <Option value="Account">Account</Option>
                <Option value="Student">Student</Option>
              </Select>
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
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="mt-6 flex justify-center items-center gap-3 bg-blue-600"
              fullWidth
            >
              Sign In
            </Button>

            <div className="flex items-center justify-between gap-2 mt-6">
              <Typography variant="small" className="font-medium text-gray-900">
                <a href="#">Forgot Password</a>
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

export default SubAdmin;
