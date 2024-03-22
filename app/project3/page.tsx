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
          <h1>Project#3</h1>
          <Carousel
            slides={slides}
            carouselWidth={"30rem"}
            effect="slide"
            showControlArrow={false}
          />
          <Link
            href="https://tododo-seven.vercel.app/"
            className=" hover:bg-[#FF0032] hover:border-[#FF0032] hover:animate-pulse   font-roboto border-[#E33C5D] border-4 py-3 px-3 mt-10 rounded-2xl  text-white w-40 flex justify-center"
          >
            visit
          </Link>
        </div>
        <div className="w-1/2 h-full ">
          <div className="flex items-center  mt-6  ">
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
