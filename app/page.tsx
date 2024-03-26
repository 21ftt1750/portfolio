"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import logo from "../public/images/logo.png";
import marketdp from "../public/images/marketDisplay.png";
import neflixdp from "../public/images/netflixDisplay.png";
import todododp from "../public/images/tododoDisplay.png";
import { Facebook, Github, Instagram } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const [glitchText, setGlitchText] = useState("");
  const [fullText, setFullText] = useState("designer");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setGlitchText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFullText((prevText) =>
        prevText === "designer" ? "developer" : "designer",
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-[#181A1B]">
        <div className="mt-16 h-screen w-full bg-black">
          <div className="ml-48 flex h-full w-8/12 flex-col justify-center font-bold text-white">
            <h1 className="">HEY THERE, MY NAME IS MUIN</h1>
            <h1 style={{ width: "100%" }} className="flex py-5">
              <p>IM A FRONT-END WEB&nbsp;</p>
              <p className="glitch">{glitchText.toUpperCase()}</p>
            </h1>

            <ScrollLink to="AboutMesection" smooth={true} duration={500}>
              <button className="flex w-64 animate-bounce justify-center rounded-2xl border-4 border-[#E33C5D] px-5 py-3 font-roboto hover:border-[#FF0032] hover:bg-[#FF0032]">
                LETS TAKE A LOOK...
              </button>
            </ScrollLink>
          </div>
        </div>

        <div
          id="AboutMesection"
          className="flex h-screen w-full flex-col items-center justify-center bg-[#7A7A1F]"
        >
          <h1 className=" font-koulen font-bold text-white">ABOUT ME</h1>
          <p className="w-2/3 py-16  text-justify font-roboto text-[#CACACA]">
            Im a web developer with a creative flair and a strong work ethic. I
            love turning cool ideas into awesome websites, and Im all about
            getting things done efficiently without sacrificing quality. Im
            passionate about web development, and my goal is to create websites
            that really stand out. Looking forward to bringing my skills to
            exciting projects!
          </p>
          <Link
            href="/aboutme"
            className="flex w-64 justify-center rounded-2xl border-4 border-[#E33C5D] px-5 py-3 font-roboto text-white hover:animate-pulse hover:border-[#FF0032] hover:bg-[#FF0032]"
          >
            view more
          </Link>
        </div>
        <div className="mb-28  flex w-full flex-col bg-[#181A1B] ">
          <h1 className="flex  justify-center py-20 text-white">PROJECTS</h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-8 gap-y-20 ">
            <div className=" flex flex-col items-center justify-start">
              <Image
                src={marketdp}
                height={450}
                width={450}
                alt=""
                className="transform transition-transform duration-300 hover:-translate-y-10"
              />

              <h2 className="mr-12 flex justify-center py-6 text-white ">
                Marketbn
              </h2>
              <p className="w-9/12 text-justify font-roboto text-[#CACACA]">
                An e-commerce hub in Brunei, offering limitless buying and
                selling opportunities with diverse categories, prices, and
                locations.
              </p>
              <Link
                href="/project1"
                className="mr-12 mt-10 flex w-56 justify-center rounded-2xl border-4 border-[#E33C5D] px-3 py-3 font-roboto text-white hover:animate-pulse hover:border-[#FF0032] hover:bg-[#FF0032]"
              >
                view more
              </Link>
            </div>
            <div className=" flex flex-col items-center justify-start">
              <Image
                src={neflixdp}
                height={450}
                width={450}
                alt=""
                className="transform transition-transform duration-300 hover:-translate-y-10"
              ></Image>
              <h2 className="mr-12 flex justify-center py-6 text-white ">
                Netflix Replica
              </h2>
              <p className="w-9/12 text-justify font-roboto text-[#CACACA]">
                I was tasked with replicating the layout of the Netflix website,
                aiming to achieve an identical end result.
              </p>
              <Link
                href="/project2"
                className="mr-12 mt-10 flex w-56 justify-center rounded-2xl border-4 border-[#E33C5D] px-3 py-3 font-roboto text-white hover:animate-pulse hover:border-[#FF0032] hover:bg-[#FF0032]"
              >
                view more
              </Link>
            </div>
            <div className=" flex flex-col items-center justify-start">
              <Image
                src={todododp}
                height={450}
                width={450}
                alt=""
                className="transform transition-transform duration-300 hover:-translate-y-10"
              ></Image>
              <h2 className="mr-12 flex justify-center py-6 text-white">
                Tododo
              </h2>
              <p className="w-9/12 text-justify font-roboto text-[#CACACA]">
                Tododo, a desktop checklist platform, empowers you to jot down
                anything on your mind, serving as a convenient reminder tool.
              </p>
              <Link
                href="/project3"
                className="mr-12 mt-10 flex w-56 justify-center rounded-2xl border-4 border-[#E33C5D] px-3 py-3 font-roboto text-white hover:animate-pulse hover:border-[#FF0032] hover:bg-[#FF0032]"
              >
                view more
              </Link>
            </div>
            <div className=" flex items-center justify-center ">
              <h1 className="text-white ">SOON...</h1>
            </div>
          </div>
        </div>

        <div className="flex  w-full bg-black">
          <div className="flex h-full  w-1/2 items-center justify-center">
            <div className="py-28">
              <h1 className="mt-12 pb-16">CONTACT INFORMATION</h1>
              <div className="flex w-full justify-center pb-20">
                <Link
                  href="/contactme"
                  className=" mr-12 mt-10 flex w-56 justify-center rounded-2xl border-4 border-[#E33C5D] px-3 py-3 font-roboto text-white hover:animate-pulse hover:border-[#FF0032] hover:bg-[#FF0032]"
                >
                  contact me
                </Link>
              </div>
            </div>
          </div>

          <div className="flex  w-1/2 flex-col items-center justify-center ">
            <h2 className="font-bold">YOU CAN FIND ME ON:</h2>
            <div className=" pt-28 text-white">
              <Link href="https://github.com/21ftt1750" className="flex ">
                <Github color="#ffffff" />
                GitHub
              </Link>

              <Link href="https://www.instagram.com/" className="flex py-2">
                <Instagram color="#ffffff" />
                Instagram
              </Link>

              <Link href="https://www.facebook.com/" className="flex ">
                <Facebook color="#ffffff" />
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
