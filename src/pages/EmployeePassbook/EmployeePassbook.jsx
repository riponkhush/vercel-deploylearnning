import {
  Card,
  CardHeader,
  Typography,
  Spinner,
} from "@material-tailwind/react";

const EmployeePassbook = () => {
  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card className="">
          <CardHeader className="mb-8 p-6 bg-[#01121F]">
            <Typography variant="h6" color="white">
              My Passbook
            </Typography>
          </CardHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            <div className="bg-gradient-to-r flex flex-col items-center justify-center text-center font-bold text-xl from-blue-200 to-purple-200 w-56 h-32 rounded-lg p-4 text-white">
              <p className="text-sm">Id Bonus</p>
              <p>tudentBonus.activeIdBonus</p>
            </div>
            <div className="bg-gradient-to-r flex flex-col items-center justify-center text-center font-bold text-xl from-blue-200 to-purple-200 w-56 h-32 rounded-lg p-4 text-white">
              <p className="text-sm">Refer Bonus</p>
              <p>studentBonus.bonus</p>
            </div>
            <div className="bg-gradient-to-r flex flex-col items-center justify-center text-center font-bold text-xl from-blue-200 to-purple-200 w-56 h-32 rounded-lg p-4 text-white">
              <p className="text-sm">Id active bonus</p>
              <p>totalPoint</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EmployeePassbook;
