import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card, CardBody } from "@material-tailwind/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CiEdit } from "react-icons/ci";
import Dialog from "@mui/material/Dialog";
import { Input } from "@material-tailwind/react";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
const [about, setAbout] = useState("");
const [image, setImage] = useState("");
const [price, setPrice] = useState("");
const [rating, setRating] = useState("");


  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/get-product`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  const handleUpdate = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${import.meta.env.VITE_local_host}/auth/update-product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.message);
      handleClose();
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product. Please try again.");
    }
  };
  




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`${import.meta.env.VITE_local_host}/auth/delete-product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        toast.error("Failed to delete product. Please try again.");
      });
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
        <Card>
          <CardHeader className="mb-8 md:p-6 p-3 bg-[#01121F]">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                Product List
              </Typography>
              <div id="input" className="relative outline-none">
                <input
                  type="text"
                  id="floating_outlined"
                  className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                  placeholder="Search product name......"
                />
                <div className="absolute top-3 text-sm right-3">
                  <FaSearch />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["image", "price", "status", "Date", "action"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item._id}>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-4">
                        <div>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            {item.title}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {item.price} Tk
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {item.createdAt}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        item.createdAt
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography className="text-xs font-semibold text-blue-gray-600 flex items-center gap-4">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="bg-red-400 w-6 h-6 flex items-center justify-center text-white  rounded-full hover:bg-red-600 duration-500 shadow-md drop-shadow-xl"
                        >
                          <MdOutlineDeleteOutline className="text-xl" />
                        </button>
                        <button
                          onClick={() => handleClickOpen(item._id)}
                          className="bg-red-400 w-6 h-6 flex items-center justify-center text-white  rounded-full hover:bg-red-600 duration-500 shadow-md drop-shadow-xl"
                        >
                          <CiEdit className="text-xl" />
                        </button>
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>

      <Dialog onClose={handleClose} open={open}>
        <div className="p-10">
          <div>
            <p className="text-center mb-4 text-2xl font-bold text-gray-400">
              Upload Porduct
            </p>

            <div className="grid grid-cols-1 gap-4 mb-4">
              <Input label="Title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            {/* Country Code and WhatsApp Number Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input type="text" placeholder="About" label="About" value={about} onChange={(e) => setAbout(e.target.value)} />
              <Input type="text" placeholder="Image" label="Image" value={image} onChange={(e) => setImage(e.target.value)} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input label="Price" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
              <Input type="text" label="Rating" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
            </div>
            <div className="mb-4">
              <button
                onClick={handleUpdate}
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full flex justify-center items-center gap-10"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ProductList;
