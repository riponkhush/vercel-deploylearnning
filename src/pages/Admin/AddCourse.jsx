import { Select, Option, Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form"; // Import Controller
import { toast } from "react-toastify";
import { imageUpload } from "../../hook/useImageApi";




const AddCourse = () => {
  const { register, handleSubmit, reset, control } = useForm(); // Add control
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([""]); // Dynamic course links array

  const onSubmit = async (data) => {
    setLoading(true);
    data.links = links;
    const token = localStorage.getItem("token");

    try {
      // Handle image upload asynchronously
      const image = data.image[0];
      const imageData = await imageUpload(image);

      // Prepare the course information with the uploaded image URL
      const courseInfo = {
        ...data,
        image: imageData?.data?.display_url,
      };

      // Send request to add the course
      const res = await axios.post(
        `${import.meta.env.VITE_local_host}/auth/add-course`,
        courseInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Show success message and reset the form
      toast.success(res.data.message);
      console.log("API Response:", res.data);
      reset();
      setLinks([""]); // Reset links array if needed
    } catch (error) {
      console.error("API Error:", error); // Log error for debugging
      if (error.response && error.response.status === 409) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Please try again.");
      }
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };



  // Handle dynamic links
  const handleLinkChange = (index, value) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
  };

  const addLink = () => setLinks([...links, ""]);

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div className="md:mt-24 mt-28 md:mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-1/2 w-full mx-auto flex flex-col justify-center"
      >
        <div className="grid md:gap-6 gap-4" id="form">
          <div className="w-full flex gap-3">
            <input
              className="capitalize shadow p-3 w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
              type="text"
              placeholder="Course Title"
              {...register("title", { required: true })}
            />
          </div>

          {/* Use Controller for Select component */}
          <div className="w-full flex gap-3">
            <Controller
              name="category"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  className="capitalize shadow-2xl p-3 w-full outline-none focus:border-[#035ec5]"
                  label="Select category"
                  {...field}
                >
                  <Option value="Nature">Nature</Option>
                  <Option value="Drawing">Drawing</Option>
                  <Option value="Culture">Culture</Option>
                  <Option value="English">English</Option>
                  <Option value="Bangla">Bangla</Option>
                  <Option value="Islam">Islam</Option>
                  <Option value="javaScript">JavaScript</Option>
                </Select>
              )}
            />
          </div>

          {/* Dynamic course links section */}
          <div className="w-full flex flex-col gap-3">
            {links.map((link, index) => (
              <div key={index} className="flex gap-3">
                <input
                  className="capitalize shadow p-3 w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
                  type="text"
                  placeholder="Course Link"
                  value={link}
                  onChange={(e) => handleLinkChange(index, e.target.value)}
                />
                <button
                  type="button"
                  className="bg-red-500 text-white px-2 rounded"
                  onClick={() => removeLink(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-[#01121F] text-white px-4 py-2 rounded"
              onClick={addLink}
            >
              Add More Links
            </button>
          </div>

          <div className="grid gap-6 w-full">
            <textarea
              className="p-3 shadow glass w-full placeholder:text-black outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
              type="text"
              placeholder="About course"
              {...register("about", { required: true })}
            />
          </div>
          <div className="flex gap-3">
            <input
              className="p-3 glass shadow-md w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
              type="file"
              placeholder="Image"
              {...register("image", { required: true })}
            />
          </div>

          <button
            type="submit"
            className="outline-none glass shadow w-full p-3 bg-[#ffffff42] hover:border-[#035ec5] hover:border-solid hover:border-[1px] hover:text-[#035ec5] font-bold flex justify-center items-center gap-2"
          >
            {loading ? <Spinner className="h-5 w-5" /> : "Add Course"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
