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
      <div className="flex h-screen  w-screen flex-col bg-[#181A1B] pt-28">
        <div className="mt-6 flex w-full items-center  justify-center  ">
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
          <div className="flex h-full w-1/2 flex-col items-center justify-center pt-8 ">
            <Carousel
              slides={slides}
              carouselWidth={"30rem"}
              effect="slide"
              showControlArrow={false}
            />
            <Link
              href="http://marketbn.tech/"
              className=" mt-8 flex w-40 justify-center rounded-2xl border-4 border-[#E33C5D] px-3 py-3 font-roboto  text-white hover:animate-pulse hover:border-[#FF0032] hover:bg-[#FF0032]"
            >
              visit
            </Link>
          </div>
          <div className="h-full w-1/2 ">
            <p
              className="mr-36 mt-6 text-justify font-roboto text-[#CACACA]"
              ref={typedRef}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
