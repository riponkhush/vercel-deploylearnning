import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UsersBonusSystem = () => {
  const [currentBonus, setCurrentBonus] = useState([]);
  const [bonuses, setBonuses] = useState({
    cashBack: "",
    activeBonusReferer: "",
    activeBonusTeamLeader: "",
    activeBonusSeniorTeamLeader: "",
    activeBonusCouncilor: "",
    likeBonus: "",
    homeworkSubmitBonus: "",
    signUpBonus: "",
    studentReferBonus: "",
    pendingBalance: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBonuses({ ...bonuses, [name]: value });
  };

  const handleBonusUpdate = async (bonusType) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${
          import.meta.env.VITE_local_host
        }/auth/updatebonus/DefaultBonusSetting`,
        { [bonusType]: bonuses[bonusType] },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.message);
      fetchBonusData();
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : error.message;
      toast.error(`Failed to update ${bonusType}: ${message}`);
    }
  };

  const fetchBonusData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_local_host}/auth/getbonus`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCurrentBonus(response.data.data || {});
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    fetchBonusData();
  }, []);

  return (
    <div className="mt-32 lg:mt-24 xl:mt-24 lg:w-9/12 2xl:w-10/12 xl:w-9/12 mx-auto mr-0 lg:mr-0 xl:mr-8 2xl:mr-2">
      <div>
        <div className="md:px-10 px-4">
          <p className="text-center text-xl font-semibold text-gray-400">
            Bonus Setup
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2 py-4">
            {Object.keys(bonuses).map((bonusType) => (
              <div key={bonusType} className="flex items-center gap-2">
                <input
                  className="bg-zinc-200 text-xs text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 rounded-full px-4 py-1 shadow-md"
                  placeholder={bonusType}
                  name={bonusType}
                  type="text"
                  value={bonuses[bonusType]}
                  onChange={handleInputChange}
                  required
                />
                <button
                  onClick={() => handleBonusUpdate(bonusType)}
                  className="bg-blue-950 text-xs text-blue-400 border border-blue-400 px-4 rounded-md hover:brightness-150"
                >
                  Post
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center border-2 py-10 border-[#01121F] w-10/12 mx-auto rounded-lg">
          {currentBonus.map((item) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:space-y-4 space-y-2 divide-x-2 divide-[#01121F]"
              key={item._id}
            >
              <div>
                <p>For Active </p>
                <p className="text-[#01121F] text-sm">
                  CashBack: {item.cashBack} Tk
                </p>
                <p className="text-[#01121F] text-sm">
                  Active Bonus for Referer: {item.activeBonusReferer} Tk
                </p>
                <p className="text-[#01121F] text-sm">
                  Active Bonus for Team Leader: {item.activeBonusTeamLeader} Tk
                </p>
                <p className="text-[#01121F] text-sm">
                  Active Bonus for Senior Team Leader:{" "}
                  {item.activeBonusSeniorTeamLeader} Tk
                </p>
                <p className="text-[#01121F] text-sm">
                  Active Bonus for Councilor: {item.activeBonusCouncilor} Tk
                </p>
              </div>

              <div>
                <p>For Referer</p>
                <p className="text-[#01121F] text-sm">
                  Student Refer Bonus: {item.studentReferBonus} Tk
                </p>
              </div>
              <div>
                <p>For Others</p>
                <p className="text-[#01121F] text-sm">
                  Homework Bonus: {item.homeworkSubmitBonus} Tk
                </p>
                <p className="text-[#01121F] text-sm">
                  Like Bonus: {item.likeBonus} Tk
                </p>
                <p className="text-[#01121F] text-sm">
                  Signup Bonus: {item.signUpBonus} Tk
                </p>
                <p className="text-[#01121F] text-sm">
                  Pending Fee: {item.pendingBalance} Tk
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersBonusSystem;
