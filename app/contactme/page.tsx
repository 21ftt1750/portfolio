"use client";
import emailjs from "emailjs-com";
import React, { useRef, useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import Typed from "typed.js";

const Contactme = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        " Feel free to complete the form or reach out using my contacts. Im ready to dive into your project and get things moving! abdulmuinudin28@gmail.com",
      ],
      typeSpeed: 10,
      loop: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const formRef = useRef<HTMLFormElement | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = formRef.current?.elements.namedItem(
      "name"
    ) as HTMLInputElement;
    const email = formRef.current?.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const message = formRef.current?.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_f92wjxg",
        "template_c0lgvjf",
        e.currentTarget,
        "2_gZTIbnUvupM7D4M"
      )
      .then(
        (result) => {
          console.log(result.text);
          formRef.current?.reset();
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 4000);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <>
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>Thank you for your message. I will get back to you soon!</p>
          </div>
        </div>
      )}
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
      <div className="w-screen h-screen bg-black flex ">
        <div className="w-1/2  h-screen flex justify-center items-center ">
          <div className="w-9/12">
            <h1>HOW MAY I HELP YOU?</h1>
            <p className="text-white font-roboto" ref={typedRef}></p>
          </div>
        </div>
        <div className="w-1/2  h-screen pt-28">
          <form ref={formRef} onSubmit={sendEmail} className="p-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-white mb-2 ">
                <h4 className="font-bold">NAME</h4>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-white rounded px-3 py-2 w-full bg-[#181A1B] text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-2">
                <h4 className="font-bold">EMAIL</h4>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-white rounded px-3 py-2 w-full bg-[#181A1B] text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white mb-2">
                <h4 className="font-bold">MESSAGE</h4>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="border border-white rounded px-3 py-2 w-full bg-[#181A1B] text-white"
              ></textarea>
            </div>
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="hover:bg-[#FF0032] hover:border-[#FF0032] hover:animate-pulse font-roboto border-[#E33C5D] border-4 py-3 px-3 mt-10 rounded-2xl mr-12 text-white w-48 flex justify-center"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactme;
