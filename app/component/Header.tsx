import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";

function Header() {
  return (
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
  );
}

export default Header;
