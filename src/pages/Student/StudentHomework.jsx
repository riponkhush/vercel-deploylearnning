import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const StudentHomework = () => {
  const [homeworks, setHomeworks] = useState([]);
  const [selectedHomework, setSelectedHomework] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedListItem, setSelectedListItem] = useState(null);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_local_host}/auth/get-homework`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setHomeworks(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching homework:", error);
      });
  }, []);

  const handleViewClick = (homework) => {
    setSelectedHomework(homework);
    setShowModal(true);
  };

 const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHomework(null);
  };

  const handleSubmitHomework = (listItemId) => {
    const selectedItem = selectedHomework?.homeList.find(item => item._id === listItemId);
    setSelectedListItem(selectedItem);
    setShowForm(true);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const submissionData = {
      homeworkId: selectedHomework._id,
      listItemId: selectedListItem._id,
      link: link,
      name: name
    };
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_local_host}/auth/submit-homework`,
        submissionData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
  
      if (response.data.success) {
        console.log("Homework submitted successfully:", response.data);
        toast.success(response.data.message);
        setShowForm(false);
      }
    } catch (error) {
      console.error("Error submitting homework:", error);
        toast.error("You have already submitted homework today. Please wait until tomorrow to submit again."); // জেনেরিক এরর মেসেজ
      
    }
  };
  



  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <div className="md:my-0 my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-items-center">
          {homeworks.map((item, index) => (
            <div
              key={item._id}
              className="transform relative transition duration-300 hover:scale-110 rounded-lg shadow-lg md:h-52 h-full w-full md:w-60 hover:shadow-xl bg-white"
            >
              <div className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 rounded-lg">
                <img
                  className="w-16"
                  src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-assignment-flat-icon-vector-png-image_6696151.png"
                  alt="Assignment icon"
                />
              </div>
              <div className="absolute top-0 right-0 px-4 py-2 font-bold text-2xl">
                #{index + 1}
              </div>
              <div className="px-5 pt-2 flex flex-col">
                <h2 className="font-semibold">{item.category}</h2>
                <p>{item.about}</p>
                <h2 className="text-xs">
                  {new Date(item.createdAt).toLocaleDateString()}
                </h2>

                <button
                  className="bg-[#01121F] cursor-pointer text-white px-2 mt-2 rounded-md transition duration-150 hover:bg-blue-600"
                  type="button"
                  onClick={() => handleViewClick(item)}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Homework Details Modal */}
      {showModal && selectedHomework && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">{selectedHomework.title}</h2>
            <p className="mb-2 font-semibold">
              Category: {selectedHomework.category}
            </p>
            <ul className="mb-4">
              {selectedHomework?.homeList?.map((item, index) => (
                <li key={item._id} className="text-sm">
                  <div className="flex items-center justify-between space-y-3">
                    <button onClick={() => handleSubmitHomework(item._id)}>
                      <p className="font-medium">
                        {index + 1}. {item.listItem}
                      </p>
                    </button>
                    <p>{item.details}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Submission Form Modal */}
      {showForm && selectedListItem && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-96">
            <h2 className="text-xl font-bold mb-4">Submit Homework</h2>
            <form onSubmit={handleFormSubmit}>
              <p className="font-semibold text-xs">Topic: {selectedListItem.listItem}</p>
              <label className="block mb-2 font-semibold text-xs">Your Submit Link:</label>
              <input
                required
                className="w-full border rounded p-2 mb-4 text-xs"
                placeholder="Enter link..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <input
                required
                className="w-full border rounded p-2 mb-4 text-xs"
                placeholder="Enter name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded-md ml-4 hover:bg-red-600"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentHomework;
