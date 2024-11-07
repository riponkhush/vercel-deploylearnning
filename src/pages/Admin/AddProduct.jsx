import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Spinner } from "@material-tailwind/react";
import { imageUpload } from "../../hook/useImageApi";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false)



  const onSubmit = async (data) => {
    setLoading(true);  // Set loading to true at the start
    const token = localStorage.getItem("token");

    try {
      // Handle image upload asynchronously
      const image = data.image[0];
      const imageData = await imageUpload(image);

      const dataInfo = {
        ...data,
        image: imageData?.data?.display_url,
      };

      // Send request to the backend
      const res = await axios.post(
        `${import.meta.env.VITE_local_host}/auth/add-product`,
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
      setLoading(false);  // Set loading to false after completion
    }
  };
  return (
    <div className="flex items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-2/6 lg:w-3/6 mx-auto mt-16 md:mt-0 lg:mr-28 xl:mr-48 2xl:mr-60"
      >
        <p className="text-center mb-4 text-2xl font-bold text-gray-400">
          Upload Porduct
        </p>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <Input
            label="Title"
            placeholder="Title"
            {...register("title", { required: true })}
          />
        </div>

        {/* Country Code and WhatsApp Number Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input
            type="text"
            placeholder="About"
            label="About"
            {...register("about", { required: true })}
          />
          <Input
            type="file"
            placeholder="Image"
            label="Image"
            {...register("image", { required: true })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input
            label="Price"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          <Input
            type="text"
            label="Rating"
            placeholder="Rating"
            {...register("rating", { required: true })}
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center gap-10"
            disabled={loading}
          >
            Upload {loading && <Spinner color="blue" />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
