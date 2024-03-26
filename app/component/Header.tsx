import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";

function Header() {
  return (
    <div className="fixed top-0 z-10 w-full bg-black ">
      <div className="navbar mx-auto flex h-28 w-[85%]  justify-between font-roboto">
        <div className="h-full">
          <div className="flex h-full items-center justify-center">
            <Link href="./">
              <Image src={logo} alt="logo" className="w-24" />
            </Link>
          </div>
        </div>
        <div className="flex h-full items-center space-x-16 text-white">
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
    </div>
  );
}

export default Header;
