"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import skills from "../../public/images/skills.png";
import Typed from "typed.js";

const AboutMe = () => {
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
    <div className="w-full bg-[#7A7A1F] ">
      <div className="mx-auto flex w-[85%] flex-col space-x-16  md:h-[calc(100vh-112px)] md:flex-row">
        <div className="m-auto flex h-[90%] basis-1/2 transform flex-col items-center justify-center space-y-10 bg-[#181A1B] p-10 transition-transform duration-300 md:hover:-translate-y-6">
          <h1>More About Me</h1>
          <p
            className="text-justify font-mono text-[#CACACA]"
            ref={typedRef}
          ></p>
        </div>
        <div className="m-auto flex h-[90%] w-[90%] basis-1/2 transform flex-col items-center justify-center bg-[#181A1B] transition-transform duration-300 md:hover:-translate-y-6">
          <Image src={skills} alt="skills" height={545} width={545}></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
