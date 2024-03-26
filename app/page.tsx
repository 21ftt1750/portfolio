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
                prevText === "designer" ? "developer" : "designer"
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="bg-[#181A1B]">
                <div className="mt-16 bg-black h-screen w-full">
                    <div className="w-8/12 h-full flex flex-col justify-center ml-48 text-white font-bold">
                        <h1 className="">HEY THERE, MY NAME IS MUIN</h1>
                        <h1 style={{ width: "100%" }} className="flex py-5">
                            <p>IM A FRONT-END WEB&nbsp;</p>
                            <p className="glitch">{glitchText.toUpperCase()}</p>
                        </h1>

                        <ScrollLink
                            to="AboutMesection"
                            smooth={true}
                            duration={500}
                        >
                            <button className="border-[#E33C5D] hover:bg-[#FF0032] hover:border-[#FF0032] border-4 py-3 px-5 rounded-2xl w-64 flex justify-center animate-bounce font-roboto">
                                LETS TAKE A LOOK...
                            </button>
                        </ScrollLink>
                    </div>
                </div>

                <div
                    id="AboutMesection"
                    className="w-full h-screen bg-[#7A7A1F] flex flex-col justify-center items-center"
                >
                    <h1 className=" font-koulen font-bold text-white">
                        ABOUT ME
                    </h1>
                    <p className="text-[#CACACA] w-2/3  py-16 text-justify font-roboto">
                        Im a web developer with a creative flair and a strong
                        work ethic. I love turning cool ideas into awesome
                        websites, and Im all about getting things done
                        efficiently without sacrificing quality. Im passionate
                        about web development, and my goal is to create websites
                        that really stand out. Looking forward to bringing my
                        skills to exciting projects!
                    </p>
                    <Link
                        href="/AboutMe"
                        className="border-[#E33C5D] border-4 py-3 px-5 rounded-2xl text-white w-64 flex justify-center font-roboto hover:bg-[#FF0032] hover:border-[#FF0032] hover:animate-pulse"
                    >
                        view more
                    </Link>
                </div>
                <div className="w-full  mb-28 bg-[#181A1B] flex flex-col ">
                    <h1 className="text-white  flex justify-center py-20">
                        PROJECTS
                    </h1>
                    <div className="grid grid-cols-2 grid-rows-2 gap-8 gap-y-20 ">
                        <div className=" flex flex-col items-center justify-start">
                            <Image
                                src={marketdp}
                                height={450}
                                width={450}
                                alt=""
                                className="transition-transform duration-300 transform hover:-translate-y-10"
                            />

                            <h2 className="text-white flex justify-center mr-12 py-6 ">
                                Marketbn
                            </h2>
                            <p className="text-[#CACACA] w-9/12 text-justify font-roboto">
                                An e-commerce hub in Brunei, offering limitless
                                buying and selling opportunities with diverse
                                categories, prices, and locations.
                            </p>
                            <Link
                                href="/project1"
                                className="hover:bg-[#FF0032] hover:border-[#FF0032] hover:animate-pulse font-roboto border-[#E33C5D] border-4 py-3 px-3 mt-10 rounded-2xl mr-12 text-white w-56 flex justify-center"
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
                                className="transition-transform duration-300 transform hover:-translate-y-10"
                            ></Image>
                            <h2 className="text-white flex justify-center mr-12 py-6 ">
                                Netflix Replica
                            </h2>
                            <p className="text-[#CACACA] w-9/12 text-justify font-roboto">
                                I was tasked with replicating the layout of the
                                Netflix website, aiming to achieve an identical
                                end result.
                            </p>
                            <Link
                                href="/project2"
                                className="hover:bg-[#FF0032] hover:border-[#FF0032] hover:animate-pulse font-roboto border-[#E33C5D] border-4 py-3 px-3 mt-10 rounded-2xl mr-12 text-white w-56 flex justify-center"
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
                                className="transition-transform duration-300 transform hover:-translate-y-10"
                            ></Image>
                            <h2 className="text-white flex justify-center mr-12 py-6">
                                Tododo
                            </h2>
                            <p className="text-[#CACACA] w-9/12 text-justify font-roboto">
                                Tododo, a desktop checklist platform, empowers
                                you to jot down anything on your mind, serving
                                as a convenient reminder tool.
                            </p>
                            <Link
                                href="/project3"
                                className="hover:bg-[#FF0032] hover:border-[#FF0032] hover:animate-pulse font-roboto border-[#E33C5D] border-4 py-3 px-3 mt-10 rounded-2xl mr-12 text-white w-56 flex justify-center"
                            >
                                view more
                            </Link>
                        </div>
                        <div className=" flex justify-center items-center ">
                            <h1 className="text-white ">SOON...</h1>
                        </div>
                    </div>
                </div>

                <div className="w-full  bg-black flex">
                    <div className="w-1/2 h-full  flex justify-center items-center">
                        <div className="py-28">
                            <h1 className="pb-16 mt-12">CONTACT INFORMATION</h1>
                            <div className="w-full flex justify-center pb-20">
                                <Link
                                    href="/contactme"
                                    className=" hover:bg-[#FF0032] hover:border-[#FF0032] hover:animate-pulse font-roboto border-[#E33C5D] border-4 py-3 px-3 mt-10 rounded-2xl mr-12 text-white w-56 flex justify-center"
                                >
                                    contact me
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2  flex flex-col justify-center items-center ">
                        <h2 className="font-bold">YOU CAN FIND ME ON:</h2>
                        <div className=" text-white pt-28">
                            <Link
                                href="https://github.com/21ftt1750"
                                className="flex "
                            >
                                <Github color="#ffffff" />
                                GitHub
                            </Link>

                            <Link
                                href="https://www.instagram.com/"
                                className="flex py-2"
                            >
                                <Instagram color="#ffffff" />
                                Instagram
                            </Link>

                            <Link
                                href="https://www.facebook.com/"
                                className="flex "
                            >
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
