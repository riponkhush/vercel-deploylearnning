import TextField from "@mui/material/TextField";
import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { imageUpload } from "../../hook/useImageApi";
import { toast } from "react-toastify";
import axios from "axios";

const UploadImage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true); // Set loading to true at the start
    const token = localStorage.getItem("token");

    try {
      // Handle image upload asynchronously
      const image = data.image[0];
      const imageData = await imageUpload(image);

      const dataInfo = {
        ...data,
        imageUrl: imageData?.data?.display_url,
      };

      // Send request to the backend
      const res = await axios.post(
        `${import.meta.env.VITE_local_host}/auth/image`,
        dataInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      reset();
      toast.success(res.data.message);
      console.log(res.data);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Please try again.");
      }
    } finally {
      setLoading(false); // Set loading to false after completion
    }
  };

  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <div className="container  mx-auto">
        <div className="flex mx-auto justify-center items-center h-[450px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-96 space-y-6"
          >
            <TextField
              id="standard-basic"
              type="text"
              label="Photo title"
              variant="standard"
              {...register("title", { required: true })}
            />
            <TextField
              id="standard-basic"
              type="text"
              label="About photo"
              variant="standard"
              {...register("about", { required: true })}
            />
            <TextField
              type="file"
              label="Your image"
              variant="standard"
              {...register("image", { required: true })}
            />
            <button
              className="bg-[#01121F] py-2 flex justify-center items-center gap-4 text-white capitalize rounded-full hover:bg-blue-600 duration-500"
              type="submit"
            >
              post {loading && <Spinner color="blue" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
