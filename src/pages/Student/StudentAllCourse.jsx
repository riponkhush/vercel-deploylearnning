import axios from "axios";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ReactPlayer from "react-player";
import { Typography } from "@material-tailwind/react";

const StudentAllCourse = () => {
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(""); 
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/get-course`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCourses(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
      
  }, []);
  const handleClickOpen = (link) => {
    setVideoUrl(link);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setVideoUrl(""); 
  };

  return (
    <div className="mt-24 md:mt-0 mb-8 flex flex-col gap-12 w-full mx-auto md:mr-0">

        <div className="mx-auto md:my-20 max-w-screen">
          {courses.length > 0 ? ( 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 justify-items-center">
              {courses.map((item, index) => (
                <div
                  key={item._id}
                  className="transform p-4 relative transition duration-300 hover:scale-110 rounded-lg shadow-lg md:h-68 h-full w-full md:w-64 hover:shadow-xl bg-white"
                >
                  <div className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 rounded-lg p-2">
                    <img
                      className="w-full h-32 object-cover mx-auto md:mx-0 rounded-lg"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="absolute top-0 right-0 px-4 py-2 font-bold text-xl">
                    # {index + 1}
                  </div>

                  <div className="px-5 flex flex-col">
                    <h2 className="font-semibold text-xs capitalize">
                      {item.course_title}
                    </h2>

                    {/* Dropdown for video links */}
                    <select
                      onChange={(e) => handleClickOpen(e.target.value)} // Pass the selected link to the handler
                      className="bg-white border border-gray-300 text-xs text-gray-700 py-2 px-3 rounded-md transition duration-150 hover:border-gray-400"
                    >
                      <option value="">Select a video</option>
                      {item.links.map((link, idx) => (
                        <option key={idx} value={link}>
                          Video {idx + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Typography className="text-center text-4xl text-blue-gray-500 flex justify-center items-center h-96">
              You have no course
            </Typography>
          )}
        </div>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Course Video</DialogTitle>
        <DialogContent>
          {videoUrl && (
            <div className="flex justify-center">
              <ReactPlayer
                url={videoUrl}
                controls={true}
                width="100%"
                height="400px"
              />
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StudentAllCourse;
