import { Card, CardHeader, Typography } from "@material-tailwind/react";
const TrainerPassbook = () => {
  return (
    <div>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card className="h-screen">
          <CardHeader className="mb-8 p-6 bg-[#01121F]">
            <Typography variant="h6" color="white">
              My Passbook
            </Typography>
          </CardHeader>
          <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
              <div className="bg-gradient-to-r text-center font-bold text-xl from-blue-200 to-purple-200 w-56 h-32 rounded-lg p-4 text-white">
                Id Bonus
              </div>
              <div className="bg-gradient-to-r text-center font-bold text-xl from-blue-200 to-purple-200 w-56 h-32 rounded-lg p-4 text-white">
                Refer Bonus
              </div>
              <div className="bg-gradient-to-r  from-blue-200 to-purple-200 w-56 h-32 rounded-lg p-4 ">
                <h2 className="text-white text-center font-bold text-xl">
                  Photo Bonus
                </h2>
                <div>
                  <p className="text-center text-white mt-4 capitalize">
                    Like's Point
                  </p>
                  <div className="text-white text-center bg-deep-orange-50 h-6 w-48 mx-auto flex justify-center items-center rounded-2xl bg-gradient-to-r from-purple-300 to-purple-600">
                    <h1 className="text-white text-sm">Total point: </h1>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r  from-blue-200 to-purple-200 w-56 h-32 rounded-lg p-4 ">
                <h2 className="text-white text-center font-bold text-xl">
                  Homework Bonus
                </h2>
                <div>
                  <p className="text-center text-white mt-4 capitalize">
                    Per homework bonus
                  </p>
                  <div className="text-white text-center bg-deep-orange-50 h-6 w-48 mx-auto flex justify-center items-center rounded-2xl bg-gradient-to-r from-purple-300 to-purple-600">
                    <h1 className="text-white text-sm">Total Bonus: Taka</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TrainerPassbook;
