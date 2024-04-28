import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import { Hind } from "next/font/google";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Testimonial() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: false,
    centerMode: true,
    centerPadding: "10px",
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonial ">
      <div
        className="bg-[#E0F3FB] max-h-[450px] py-12 lg:px-12 md:px-5 px-3 hidden md:block "
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #EEF7FB 0 50%, #EEF7FB 0% 100%)",
          width: "100%",
        }}
      >
        <div className="lg:container mx-auto px-0 sm:max-h-[350px]">
          <div className="text-center">
            <h2 className="font-extrabold text-5xl mb-6 text-[#000000]">
              What my clients Are Saying
            </h2>
            <p
              className={`max-w-2xl font-[200] font-recoletaBold mx-auto mb-12 lg:mb-24 `}
            >
              My clients are always pleased with my detailed explanations. Read
              what my clients are saying about how I helped them make a
              difference in their lives.
            </p>
          </div>
          <Slider {...settings} className="cursor-all-scroll">
            <div className="slider-card flex" style={{ paddingLeft: "0px" }}>
              <div
                className="swiper-slide   sm:w-[95%] w-[100%]  pl-20  m-auto  mt-5 p-4 lg:p-6 min-h-[250px]swiper-slide-active"
                style={{
                  backgroundImage:
                    "linear-gradient(5deg, 	#747474 0 10%, white 0% 90%)",
                }}
              >
                <div className=" flex">
                  <div className="min-w-[100px]">
                    <Image
                      height={25}
                      width={25}
                      className="mb-3 md:mb-0  h-20 w-20 rounded-full"
                      src="/kua.jpeg"
                      alt="/"
                    />
                  </div>
                  <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
                    <div className="font-medium text-base">
                      Dr. Kamal Uddin Ahamad
                    </div>
                    <div
                      className={`font-[200] ${hind.className} text-[13px] text-[#4b5366]`}
                    >
                      Head &amp; Professor, Department of Civil Engineering,
                      Tezpur University
                    </div>
                    <p
                      className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                    >
                      Working with Abhijit was an absolute pleasure! His
                      attention to detail and creativity truly set him apart. He
                      took the time to understand our vision and translated it
                      into a stunning website that exceeded our
                      expectations.⭐️⭐️⭐️⭐️⭐️
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider-card flex" style={{ paddingLeft: "0px" }}>
              <div
                className="swiper-slide sm:w-[95%] w-[100%]  pl-20 m-auto mt-5 p-4 lg:p-6 min-h-[250px]swiper-slide-active"
                style={{
                  backgroundImage:
                    "linear-gradient(5deg, 	#747474 0 10%, white 0% 90%)",
                }}
              >
                <div className=" flex">
                  <div className="min-w-[100px]">
                    <Image
                      height={25}
                      width={25}
                      className="mb-3 md:mb-0  h-20 w-20 rounded-full"
                      src="/pritom.jpeg"
                      alt="/"
                    />
                  </div>
                  <div className="flex flex-col gap-x-4 md:flex-col mb:items-center">
                    <div className="font-medium text-base">
                      Dr. Pritom Rajkhowa
                    </div>
                    <div
                      className={`font-[200] ${hind.className} text-[13px] text-[#4b5366]`}
                    >
                      Lecturer at school of Engineering, The Hong Kong
                      University of Science and Technology
                    </div>
                    <p
                      className={`mb-6 font-[200] font-recoletablack min-h-[70px] text-[15px] mt-3`}
                    >
                      He is true professional with a knack for turning ideas
                      into reality. From the initial concept to the final
                      launch, he demonstrated expertise in every aspect of web
                      development. I wouldn't hesitate to collaborate with him
                      again in the future 💙💙💙💙💙
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
