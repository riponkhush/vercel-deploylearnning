import { useState } from "react";
import { Select, Option, Spinner } from "@material-tailwind/react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const AddHomeWorks = () => {
  const { register, handleSubmit, reset, control } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "homeList",
  });
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(""); // Separate category state

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      data.category = category; // Set the selected category in form data
      const response = await axios.post(
        `${import.meta.env.VITE_local_host}/auth/add-homework`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(response.data.message);
      reset();
      setCategory(""); // Reset category selection
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Category Selection */}
        <Select
          label="Select category"
          className="capitalize shadow-2xl p-3 w-full outline-none focus:border-[#035ec5]"
          value={category}
          onChange={(e) => setCategory(e)} // Manage category state separately
        >
          <Option value="Mathematics">Mathematics</Option>
          <Option value="English">English</Option>
          <Option value="Science">Science</Option>
          <Option value="History">History</Option>
          <Option value="Art">Art</Option>
        </Select>

        {/* Homework Title */}
        <input
          className="p-3 shadow-2xl glass w-full placeholder:text-gray-400 outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
          type="text"
          placeholder="Homework Title"
          {...register("title", { required: true })}
        />

        {/* Homework About/Description */}
        <textarea
          className="p-3 shadow-2xl glass w-full placeholder:text-gray-400 outline-none focus:border-solid border-[#035ec5] focus:border-[1px]"
          placeholder="About Homework"
          {...register("about", { required: true })}
        />

        {/* Dynamic Homework List Items */}
        <div className="grid gap-4">
          <h3 className="font-semibold">Homework List Items</h3>
          {fields.map((item, index) => (
            <div key={item.id} className="flex items-center gap-2">
              <input
                className="p-2 shadow w-1/2 outline-none focus:border-[#035ec5] border-[1px] rounded"
                placeholder="List Item"
                {...register(`homeList.${index}.listItem`, { required: true })}
              />
              <input
                className="p-2 shadow w-full outline-none focus:border-[#035ec5] border-[1px] rounded"
                placeholder="Details"
                {...register(`homeList.${index}.details`, { required: true })}
              />
              <button
                type="button"
                className="bg-red-500 text-white px-3 rounded"
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ listItem: "", details: "" })}
            className="bg-[#01121F] text-white px-4 py-2 rounded"
          >
            Add List Item
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="outline-none shadow-2xl w-full p-3 bg-[#ffffff42] hover:border-[#035ec5] hover:border-[1px] hover:text-[#035ec5] font-bold flex justify-center items-center gap-2"
        >
          {loading ? <Spinner className="h-5 w-5" /> : "Add Homework"}
        </button>
      </form>
    </div>
  );
};

export default AddHomeWorks;
