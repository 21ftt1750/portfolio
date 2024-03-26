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
        "Feel free to complete the form or reach out using my contacts. Im ready to dive into your project and get things moving! abdulmuinudin28@gmail.com",
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
      "name",
    ) as HTMLInputElement;
    const email = formRef.current?.elements.namedItem(
      "email",
    ) as HTMLInputElement;
    const message = formRef.current?.elements.namedItem(
      "message",
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
        "2_gZTIbnUvupM7D4M",
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
        },
      );
  };

  return (
    <>
      {showPopup && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <p>Thank you for your message. I will get back to you soon!</p>
          </div>
        </div>
      )}
      <div className="w-full bg-black">
        <div className="mx-auto flex h-[calc(100vh-112px)] w-[85%] bg-black">
          <div className="flex  w-1/2 flex-col justify-center bg-black ">
            <h1>HOW MAY I HELP YOU?</h1>
            <p className="pr-24 font-roboto text-white" ref={typedRef}></p>
          </div>
          <div className="  w-1/2 pt-20">
            <form ref={formRef} onSubmit={sendEmail} className="p-8">
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 block text-white ">
                  <h4 className="font-bold">NAME</h4>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border border-white bg-[#181A1B] px-3 py-2 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-white">
                  <h4 className="font-bold">EMAIL</h4>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border border-white bg-[#181A1B] px-3 py-2 text-white"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="mb-2 block text-white">
                  <h4 className="font-bold">MESSAGE</h4>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full rounded border border-white bg-[#181A1B] px-3 py-2 text-white"
                ></textarea>
              </div>
              <div className="flex w-full justify-center">
                <button
                  type="submit"
                  className="mr-12 mt-10 flex w-48 justify-center rounded-2xl border-4 border-[#E33C5D] px-3 py-3 font-roboto text-white hover:animate-pulse hover:border-[#FF0032] hover:bg-[#FF0032]"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactme;
