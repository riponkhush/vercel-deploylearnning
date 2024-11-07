
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { FcCallback } from "react-icons/fc";
import { Link } from "react-router-dom";
import img1 from "../../assets/slider image/bg1.jpg";
import img2 from "../../assets/slider image/bg2.jpg";
import img3 from "../../assets/slider image/bg3.jpg";
import img4 from "../../assets/slider image/bg4.jpg";
import img5 from "../../assets/slider image/bg5.jpg";

const Home = () => {


  return (
    <div className="mt-16 mb-8 flex flex-col gap-12 w-10/12 mx-auto 2xl:px-12 xl:px-16  lg:px-16 md:px-20 md:-mr-14 lg:-mr-10 2xl:-mr-2 m-auto">
        <div className="mt-4">
          <div className="relative mt-2 md:h-36 h-20 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
            <div className="absolute inset-0 h-full w-full bg-[#01121F]" />
          </div>
          <div className="mb-4 mx-3 -mt-10 grid grid-cols-1 gap-6 xl:grid-cols-3">
            <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="m-0 flex items-center justify-between p-6"
              >
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-1">
                    Senior Team Leader
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {["name", "whatsApp number", "status"].map((el) => (
                        <th
                          key={el}
                          className="border-b border-blue-gray-50 py-3 px-6 text-center"
                        >
                          <Typography
                            variant="small"
                            className="text-[11px] font-medium uppercase text-blue-gray-400"
                          >
                            {el}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                      <tr
                        className="border-b border-blue-gray-50 py-3 px-6 text-center"
                      >
                        <td>
                          <div className="">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              item.firstName
                            </Typography>
                          </div>
                        </td>
                        <td>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            <button className="flex items-center justify-center w-full bg-blue-50 text-sm rounded-lg mx-auto gap-4 py-2">
                              item.whatsappNumber
                              <FcCallback />
                            </button>
                          </Typography>
                        </td>
                        <td>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            item.role
                          </Typography>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
            <div>
                <Card className="border border-blue-gray-100 shadow-sm">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 p-6"
                  >
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                      Notice Board
                    </Typography>
                    <Typography
                      variant="small"
                      className="flex items-center gap-1 font-normal text-blue-gray-600"
                    >
                      <ArrowUpIcon
                        strokeWidth={3}
                        className="h-3.5 w-3.5 text-green-500"
                      />
                    </Typography>
                  </CardHeader>
                  <CardBody className="pt-0">
                      <div
                        className="flex items-start gap-4 py-2 divide-y"
                      >
                        <Link>
                          <div className="border-b-2  border-b-blue-100 md:w-96 p-1 md:flex justify-between items-center">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="block font-medium"
                            >
                              item.news_title
                            </Typography>
                            <Typography
                              as="span"
                              variant="small"
                              className="text-xs font-medium text-blue-gray-500"
                            >
                              item.createdAt
                            </Typography>
                          </div>
                        </Link>
                      </div>
                  </CardBody>
                </Card>
            </div>
          </div>
          <div>
            <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 flex items-center justify-between p-6"
              >
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-1">
                    Team Leader
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {["name", "whatsApp number", "status"].map((el) => (
                        <th
                          key={el}
                          className="border-b border-blue-gray-50 py-3 px-6 text-center"
                        >
                          <Typography
                            variant="small"
                            className="text-[11px] font-medium uppercase text-blue-gray-400"
                          >
                            {el}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                      <tr
                        className="border-b border-blue-gray-50 py-3 px-6 text-center"
                      >
                        <td>
                          <div className="">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              item.name
                            </Typography>
                          </div>
                        </td>
                        <td>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            <button className="flex items-center justify-center w-full bg-blue-50 text-sm rounded-lg mx-auto gap-4 py-2">
                              item.number
                              <FcCallback />
                            </button>
                          </Typography>
                        </td>
                        <td>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            item.role
                          </Typography>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </div>
          <div className="mt-10">
            <div>
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="w-full md:h-[500px] p-4">
                    <img
                      className="object-cover w-full h-full"
                      src={img1}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full md:h-[500px] p-4">
                    <img
                      className="object-cover w-full h-full"
                      src={img2}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full md:h-[500px] p-4">
                    <img
                      className="object-cover w-full h-full"
                      src={img3}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full md:h-[500px] p-4">
                    <img
                      className="object-cover w-full h-full"
                      src={img4}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full md:h-[500px] p-4">
                    <img
                      className="object-cover w-full h-full"
                      src={img5}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
