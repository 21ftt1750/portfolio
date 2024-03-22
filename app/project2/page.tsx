"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import Carousel from "reactjs-nextjs-carousel";
import {
  ChevronLeft,
  ChevronRight,
  SquareChevronLeft,
  SquareChevronRight,
} from "lucide-react";
import Typed from "typed.js";

const slides = [
  "images/netflix1.png",
  "images/netflix2.png",
  "images/netflix3.png",
  "images/netflix4.png",
  "images/netflix5.png",
  "images/netflix6.png",
  "images/netflix7.png",
  "images/netflix8.png",
];

const Page = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "During my January internship at Dossyr Corporation, I was tasked with replicating the layout of website of our choice, aiming for an identical appearance. I chose Netflix due to its content-rich nature, featuring images, videos, and fonts within a minimalistic and space-efficient design. Over the course of a month, I successfully replicated most pages, achieving a remarkable visual resemblance to the actual website. While some functionalities were omitted, my focus centered on emulating the visual aesthetics of the platform.",
      ],
      typeSpeed: 1,
      loop: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="navbar w-full h-28 flex bg-black fixed top-0 z-10 font-roboto">
        <div className="w-1/2 h-full">
          <div className="w-2/6 items-center h-full flex justify-center">
            <Link href="./">
              <Image src={logo} alt="logo" className="w-24" />
            </Link>
          </div>
        </div>
        <div className="w-1/2 justify-between h-full text-white flex items-center px-28">
          <Link href="/aboutme">
            <h4>About me</h4>
          </Link>
          <Link href="/project1">
            <h4>Projects</h4>
          </Link>
          <Link href="/contactme">
            <h4>Contact Information</h4>
          </Link>
        </div>
      </div>
      <div className="w-screen h-screen  bg-[#181A1B] flex pt-28">
        <div className="w-1/2 h-full flex flex-col justify-center items-center pt-6 ">
          <h1>Project#2</h1>
          <Carousel
            slides={slides}
            carouselWidth={"30rem"}
            effect="slide"
            showControlArrow={false}
          />
          <Link
            href="https://netflix-3yyd.vercel.app/"
            className=" hover:bg-[#FF0032] hover:border-[#FF0032] hover:animate-pulse   font-roboto border-[#E33C5D] border-4 py-3 px-3 mt-10 rounded-2xl  text-white w-40 flex justify-center"
          >
            visit
          </Link>
        </div>
        <div className="w-1/2 h-full ">
          <div className="flex items-center  mt-6  ">
            <Link href="/project1" className="text-white">
              {" "}
              <ChevronLeft size={50} />
            </Link>
            <h1 className="flex items-center ">NETFLIX REPLICA</h1>
            <Link href="/project3" className="text-white">
              {" "}
              <ChevronRight size={50} />
            </Link>
          </div>
          <p
            className="text-[#CACACA] font-roboto mt-6 text-justify mr-36"
            ref={typedRef}
          ></p>
        </div>
      </div>
    </>
  );
};

export default Page;
