import { AiOutlineLike } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Typography } from "@material-tailwind/react";

export const PhotoGallary = () => {
  const [images, setImages] = useState([]);
  const [privateimage, setPrivateImage] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/image`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setImages(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  const handleLike = (imageId) => {
    const token = localStorage.getItem("token");
    axios
      .post(
        `${import.meta.env.VITE_local_host}/auth/image/like/671fab46103394ab81aefea3`, {imageId},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Like successful")
      })
      .catch((error) => {
        console.error("Error liking image:", error);
      });
  };
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/image/private`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPrivateImage(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);







  return (
    <div className="mt-20 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20 mb-8 flex flex-col gap-12 w-10/12 mx-auto">
      <div className="ml-0 lg:ml-44 xl:ml-40 2xl:ml-32">
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 justify-items-center 2xl:gap-6">
          <div className="w-full col-span-2 md:sticky top-0 rounded-md">
          {privateimage.length > 0 ? (
                <div>
                  <div className="bg-white py-10 px-4 rounded-lg">
                    <h2 className="text-md font-bold">Your uploaded photo</h2>
                    {privateimage.map((item) => (
                      <div
                        key={item._id}
                        className="grid grid-cols-3 gap-3 mt-4"
                      >
                        <img
                          className="rounded-lg h-full object-cover"
                          src={item.imageUrl}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Typography className="text-center text-md text-blue-gray-500 flex justify-center items-center h-96">
                  You have no image.
                </Typography>
              )}
          </div>
          <div className="col-span-3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 2xl:justify-items-center gap-2 lg:gap-4">
              {images.map((item) => (
                <div
                  key={item._id}
                  className="w-72 lg:w-60 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <img
                    className="w-full h-40 object-cover rounded-t-lg"
                    alt="Card Image"
                    src={item.imageUrl}
                  />
                  <div className="p-4">
                    <h2 className="text-xl  font-semibold">{item.title}</h2>
                    <p className="text-gray-600 text-xs">{new Date(item.createdAt).toLocaleDateString()}</p>
                    <div className="flex justify-between items-center mt-4">
                      <button
                        onClick={() => handleLike(item._id)}
                        className="text-white bg-gradient-to-r from-[#011627] via-[#0d528b] to-[#011627] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#011627] dark:focus:ring-[#011627] shadow-lg shadow-[#011627] dark:shadow-lg dark:shadow-[#011627] font-medium rounded-lg text-sm px-5 text-center flex items-center gap-3"
                      >
                        <AiOutlineLike className="text-md" />{" "}
                        <p className="text-xs">Like {item.totalLike}</p>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallary;
