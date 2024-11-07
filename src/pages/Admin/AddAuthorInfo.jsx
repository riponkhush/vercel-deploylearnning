
import { Spinner } from "@material-tailwind/react";
import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card } from "@material-tailwind/react";

const AddAuthorInfo = () => {
  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <Typography className="text-center text-4xl text-blue-gray-500 flex justify-center items-center h-screen">
        <Spinner className="h-10 w-10" color="blue" />
      </Typography>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader className="mb-8 p-6 bg-[#01121F]">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                Add Author Information
              </Typography>
              <div id="input" className="relative outline-none">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Search here...."
                  value=""
                />
                <div className="absolute top-3 text-sm right-3">
                  <FaSearch />
                </div>
              </div>
            </div>
          </CardHeader>

          <div>
            <form  className="px-7 h-[500px]">
              <div className="grid gap-6" id="form">
                <div className="w-full flex gap-3">
                  <input
                    className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
                    type="text"
                    placeholder="Author name"
                    id=""

                  />
                </div>
                <div className="grid gap-6 w-full">
                  <textarea
                    className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
                    type="text"
                    placeholder="About him/her"
                    id=""

                  />
                </div>
                <div className="flex gap-3">
                  <input
                    className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                    type="text"
                    placeholder="Dasignation"
                    id=""

                  />
                </div>
                <div className="flex gap-3">
                  <input
                    className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                    type="email"
                    placeholder="Email"
                    id=""

                  />
                </div>
                <div className="flex gap-3">
                  <input
                    className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                    type="file"
                    placeholder="Rating"
                    id="password"

                  />
                </div>

                <button
                  className="outline-none glass shadow-2xl flex items-center justify-center gap-5 w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Card>
      </div>

    </div>
  );
};

export default AddAuthorInfo;
