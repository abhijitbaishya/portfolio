"use client";
import React, { useEffect, useState } from "react";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import { Hind } from "next/font/google";
import MySlider from "./components/SliderCard/MySlider";
import AboutMe from "./components/AboutMe/AboutMe";
import Testimonial from "./components/Testimonial/Testimonial";

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="min-h-screen relative">
      <HomeComponent />
      <div
        className="mt-0 pt-5 -mb-40"
        id="portfolio"
        style={{
          backgroundImage:
            "linear-gradient(-62deg, 	#b1b1b1 0 50%,  white 0% 100%)",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <p
            className="text-[300px]  text-[#F7FBFD] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
            style={{ transform: "translate(0px,-20px)" }}
          >
            Portfolio
          </p>
          <div className="" style={{ transform: "translate(0px, -290px)" }}>
            <p className="text-black  md:pl-[80px] px-5 font-extrabold text-5xl">
              Recent Works
            </p>
            <p
              className={`max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-black leading-8 mt-5 ${hind.className}`}
            >
              Welcome to my portfolio showcasing the latest projects I've
              crafted as a passionate web developer. From sleek, responsive
              designs to robust backend systems, my recent works embody a blend
              of creativity and functionality. Explore dynamic LMS platforms
              where user experience reigns supreme, delve into custom web
              applications tailored to specific client needs, and witness the
              power of clean, efficient code driving seamless interactions. Each
              project represents a journey of innovation, collaboration, and
              dedication to delivering cutting-edge solutions in today's digital
              landscape. Take a tour and witness firsthand the fusion of design
              and technology that defines my approach to web development
            </p>
          </div>
        </div>
        <div style={{ transform: "translate(0px,-230px)" }}>
          <MySlider />
        </div>
      </div>
      <AboutMe />
      <Testimonial />

      {isScrolled ? (
        <div
          onClick={() => window.scrollTo(0, 0)}
          className="bg-black p-4 w-fit fixed bottom-8 right-8 cursor-pointer z-50 animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
