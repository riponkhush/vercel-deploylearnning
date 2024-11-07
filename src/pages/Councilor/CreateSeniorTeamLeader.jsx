import Select from "@mui/material/Select";
import { CardHeader, Typography } from "@material-tailwind/react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Spinner } from "@material-tailwind/react";

const CreateSeniorTeamLeader = () => {
  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <CardHeader className="mb-8 mt-10 p-6 bg-[#01121F]">
        <Typography variant="h6" color="white">
          Create Senior Leader
        </Typography>
      </CardHeader>
      <div className="flex flex-col justify-center sm:px-6 lg:px-2">
        <div className="mt-8">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form >
              {/* First Name and Last Name Fields */}
              <div className="flex items-center justify-between gap-5">
                <div className="w-full">
                  <TextField
                    type="text"
                    name="name"
                    required
                    className="w-full"
                    label="First name"
                    variant="standard"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-5 mt-10">
                <div className="w-full">
                  <TextField
                    type="text"
                    name="number"
                    required
                    className="w-full"
                    label="Phone number"
                    variant="standard"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-5 mt-10">
                <div className="w-full">
                  <TextField
                    type="email"
                    name="email"
                    required
                    className="w-full"
                    label="Email"
                    variant="standard"
                  />
                </div>
                <div className="w-full">
                  <TextField
                    type="password"
                    name="password"
                    required
                    className="w-full"
                    label="Password"
                    variant="standard"
                  />
                </div>
              </div>
              {/* Role Select and File Upload */}
              <div className="flex items-center justify-between gap-5 mt-10">
                <div className="w-full flex items-center">
                  <Select
                    displayEmpty
                    variant="standard"
                    className="w-full"
                  >
                    <MenuItem value="" disabled>
                      Select Role
                    </MenuItem>
                    <MenuItem value="Senior Team Leader">
                      Senior Team Leader
                    </MenuItem>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="text-center w-full bg-blue-600 py-2 flex items-center gap-3 justify-center mt-10 rounded-md text-white hover:bg-blue-700 duration-500 shadow-2xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSeniorTeamLeader;
