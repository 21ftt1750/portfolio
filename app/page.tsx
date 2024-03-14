"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "../app/typewriter";
import logo from "../public/images/logo.png";

const Page = () => {
  const [glitchText, setGlitchText] = useState("IM A FRONT-END WEB designer");

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText((prevText) =>
        prevText === "IM A FRONT-END WEB designer"
          ? "IM A FRONT-END WEB developer"
          : "IM A FRONT-END WEB designer"
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="navbar w-full border-b h-28 flex bg-black fixed top-0 z-10 font-roboto">
        <div className="w-1/2 h-full">
          <div className="w-2/6 items-center h-full flex justify-center">
            <Image src={logo} alt="logo" className="w-24" />
          </div>
        </div>
        <div className="w-1/2 justify-between h-full text-white flex items-center px-28">
          <h4>About me</h4>
          <h4>Projects</h4>
          <h4>Contact Information</h4>
        </div>
      </div>
      <div className="mt-16 bg-black h-screen w-full">
        <div className="w-8/12 h-full flex flex-col justify-center ml-48  text-white font-bold">
          <h1>HEY THERE, MY NAME IS MUIN</h1>
          <h1 style={{ width: "100%" }} className="flex py-5">
            <span className="glitch ">{glitchText.toUpperCase()}</span>
          </h1>
          <button className="border-[#E33C5D] border-2 py-3 px-5 rounded-2xl w-64 flex justify-center">
            LETS TAKE A LOOK...
          </button>
        </div>
      </div>
      <div className="w-full h-screen bg-[#7A7A1F]">
        <h1>
          Welcome to <Typewriter text="My React App" delay={100} />
        </h1>
      </div>
      <div className="w-full h-screen bg-[#181A1B]"></div>
      <div className="w-full h-screen bg-[#181A1B]"></div>
      <div className="w-full h-screen bg-black"></div>
    </>
  );
};

export default Page;
