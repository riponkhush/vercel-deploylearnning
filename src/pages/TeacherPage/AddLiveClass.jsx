import { CardHeader, Typography } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
const AddLiveClass = () => {

  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <Card>
        <CardHeader className="mb-8 p-6 bg-[#01121F]">
          <div className="flex justify-between items-center">
            <Typography variant="h6" color="white">
              Add Live Class
            </Typography>
          </div>
        </CardHeader>
        <div>
          <form
            className="px-7 h-screen bg-red-50 flex justify-center items-center"
          >
            <div className="grid gap-6 w-full">
              <div className="w-full flex gap-3">
                <input
                  className="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
                  type="text"
                  placeholder="Class title"
                  id=""
                />
              </div>
              <div className="grid gap-6 w-full">
                <textarea
                  className="p-3 shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
                  type="text"
                  placeholder="Sort description"
                  id=""
                />
              </div>
              <div className="flex gap-3">
                <input
                  className="p-3 glass shadow-2xl  w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                  type="text"
                  placeholder="zoom_link"
                  id=""
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
  );
};

export default AddLiveClass;
