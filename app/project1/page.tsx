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
  "images/market1.png",
  "images/market2.png",
  "images/market3.png",
  "images/market4.png",
  "images/market5.png",
  "images/market6.png",
  "images/market7.png",
  "images/market8.png",
];

const Page = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "During my Final Year Project (FYP), I took a leading role in developing Marketbn, a website aimed at catering to a specific audience. My responsibilities included overseeing the implementation of key features such as ratings, reviews, chat functionality, admin tools, order and payment systems, as well as managing receipts and user profiles. Despite encountering challenges with integrating a real-time database, our team worked collaboratively to ensure the successful launch of the website. This experience not only strengthened my skills in web development but also highlighted our ability to overcome obstacles and deliver a high-quality project that surpassed our initial objectives.",
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
      <div className="w-screen h-screen  bg-[#181A1B] flex flex-col pt-28">
        <div className="flex items-center w-full justify-center  mt-6  ">
          <Link href="/project3" className="text-white">
            {" "}
            <ChevronLeft size={50} />
          </Link>
          <h1 className="flex items-center ">MARKETBN</h1>
          <Link href="/project2" className="text-white">
            {" "}
            <ChevronRight size={50} />
          </Link>
        </div>
        <div className="flex">
          <div className="w-1/2 h-full flex flex-col justify-center items-center pt-8 ">
            <Carousel
              slides={slides}
              carouselWidth={"30rem"}
              effect="slide"
              showControlArrow={false}
            />
            <Link
              href="http://marketbn.tech/"
              className=" hover:bg-[#FF0032] hover:border-[#FF0032] hover:animate-pulse font-roboto border-[#E33C5D] border-4 py-3 px-3 mt-8 rounded-2xl  text-white w-40 flex justify-center"
            >
              visit
            </Link>
          </div>
          <div className="w-1/2 h-full ">
            <p
              className="text-[#CACACA] font-roboto mt-6 text-justify mr-36"
              ref={typedRef}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
