import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner } from "@material-tailwind/react";
import { CardHeader, Typography } from "@material-tailwind/react";
import img1 from "../../assets/noticeDetailsimage/ban1.jpg";
import img2 from "../../assets/noticeDetailsimage/ban2.jpg";

const NoticedDetails = () => {
  const { id } = useParams();
  return (
    <div className="mt-24 mb-8 flex flex-col gap-12 w-10/12 mx-auto md:mr-0">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader className="mb-8 md:p-6 p-3 bg-[#01121F]">
            <div className="flex justify-between items-center">
              <Typography variant="h6" color="white">
                Read News
              </Typography>
            </div>
          </CardHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:h-screen justify-items-center md:px-10 px-4">
            <div className="md:col-span-3 ">
              <h2>isRead.news_title</h2>
            </div>
            <div className="md:col-span-2 w-full hidden md:block">
              <h2 className="capitalize font-bold mb-4">
                Read more for knowledge
              </h2>

              <div className="md:w-56 relative">
                <img className="rounded-lg shadow-lg" src={img1} alt="" />
                <img
                  className="absolute top-28 md:left-28 rounded-lg shadow-xl"
                  src={img2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NoticedDetails;
