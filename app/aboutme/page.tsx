"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import skills from "../../public/images/skills.png";
import Link from "next/link";
import Typed from "typed.js";

const Aboutme = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hello! I'm a 20-year-old student at Politeknik Brunei with a passion for coding, video games, and enhancing the web experience. Currently interning at Dossyr Corporation, I'm diving deep into website development, learning how to create sites that not only function flawlessly but also stand out visually. I love the thrill of transforming ideas into captivating digital experiences. If you share my enthusiasm for web development, let's connect and explore the amazing projects we can bring to life together!",
      ],
      typeSpeed: 0,
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
      <div className="w-screen md:h-screen bg-[#7A7A1F] flex flex-col md:flex-row  ">
        <div className="md:w-1/2 mt-28  flex justify-center items-center">
          <div className="bg-[#181A1B] w-9/12 h-5/6 transition-transform duration-300 transform hover:-translate-y-6">
            <h1 className="px-10 py-10">More About Me</h1>
            <p
              className="text-[#CACACA] font-mono text-justify px-10 pb-10"
              ref={typedRef}
            ></p>
          </div>
        </div>
        <div className="md:w-1/2 mt-28  flex justify-center items-center">
          <Image
            src={skills}
            alt="skills"
            height={545}
            width={545}
            className="transition-transform duration-300 transform hover:-translate-y-6"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
