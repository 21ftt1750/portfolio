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
      <div className="flex h-[calc(100vh-112px)]  w-screen flex-col bg-[#181A1B] ">
        <div className="mt-6 flex w-full items-center justify-center  ">
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
          <div className="flex h-full w-1/2 flex-col items-center justify-center pt-8 ">
            <Carousel
              slides={slides}
              carouselWidth={"30rem"}
              effect="slide"
              showControlArrow={false}
            />
            <Link
              href="https://tododo-seven.vercel.app/"
              className=" mt-8 flex w-40   justify-center rounded-2xl border-4 border-[#E33C5D] px-3 py-3 font-roboto  text-white hover:animate-pulse hover:border-[#FF0032] hover:bg-[#FF0032]"
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
