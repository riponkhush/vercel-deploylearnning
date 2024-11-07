
import { CardHeader, Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { Card,} from "@material-tailwind/react";


const AccounterList = () => {

  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
        <div className="mt-12 mb-8 flex flex-col gap-12">
          <Card>
            <CardHeader className="mb-8 md:p-6 p-3 bg-[#01121F]">
              <div className="flex justify-between items-center">
                <Typography variant="h6" color="white">
                  Accounter List
                </Typography>
                <div id="input" className="relative outline-none">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="block md:w-full w-36 text-sm outline-none h-[36px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                    placeholder="Search name or email ......"
                  />
                  <div className="absolute top-3 text-sm right-3">
                    <FaSearch />
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

        </div>
      
    </div>
  );
};

export default AccounterList;
