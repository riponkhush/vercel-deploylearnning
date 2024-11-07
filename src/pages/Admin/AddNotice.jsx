
import { CardHeader, Typography } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Spinner } from "@material-tailwind/react";
const AddNotice = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false)

  const onSubmit = (data) => {
    setLoading(false)
    const token = localStorage.getItem("token");
    axios.post(`${import.meta.env.VITE_local_host}/auth/add-product`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message); // Success message from backend
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          // Display backend message for existing product
          toast.error(error.response.data.message);
        } else {
          toast.error("Please try again.");
        }
      }).finally(() => {
        setLoading(false);
      })
  };

  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <Card className="">
        <CardHeader className="mb-8 p-6 bg-[#01121F]">
          <div className="flex justify-between items-center">
            <Typography variant="h6" color="white">
              Add notice
            </Typography>
          </div>
        </CardHeader>
      </Card>
      <div className="flex items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="px-7 w-96 mx-auto">
            <div className="grid gap-6" id="form">
              <div className="w-full flex gap-3">
                <input
                  className="capitalize shadow p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
                  type="text"
                  placeholder="News Title"
                  id=""
                />
              </div>
              <div className="grid gap-6 w-full">
                <textarea
                  className="p-3 shadow  glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
                  type="text"
                  placeholder="About News"
                  id="textarea "
                />
              </div>
              <button className="outline-none glass shadow  w-full p-3  bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px]  hover:text-[#035ec5] font-bold">
                Post notice
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default AddNotice;
