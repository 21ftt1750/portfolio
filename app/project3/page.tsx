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
  "images/tododo1.png",
  "images/tododo2.png",
  "images/tododo3.png",
  "images/tododo4.png",
  "images/tododo5.png",
  "images/tododo6.png",
  "images/tododo7.png",
  "images/tododo8.png",
];

const Page = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Tododo, a desktop checklist website, empowers users to effortlessly jot down reminders and organize tasks. Derived from the word to do, it allows the creation of multiple projects, each with its own set of reminders. The website offers essential functions like edit, delete, and tick/untick items upon completion, embodying simplicity and efficiency. Assigned as one of my tasks during my February internship at Dossyr Corporation. I successfully developed a fully functional website that meets all checklist criteria, with room for future improvements.",
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
      <div className="w-screen h-screen  bg-[#181A1B] flex flex-col pt-28">
        <div className="flex items-center w-full justify-center mt-6  ">
          <Link href="/project2" className="text-white">
            {" "}
            <ChevronLeft size={50} />
          </Link>
          <h1 className="flex items-center ">TODODO</h1>
          <Link href="/project1" className="text-white">
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
              href="https://tododo-seven.vercel.app/"
              className=" hover:bg-[#FF0032] hover:border-[#FF0032] hover:animate-pulse   font-roboto border-[#E33C5D] border-4 py-3 px-3 mt-8 rounded-2xl  text-white w-40 flex justify-center"
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
