import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";

function Header() {
    return (
        <div className="w-full fixed top-0 z-10 bg-black ">
            <div className="navbar w-[85%] h-28 flex justify-between  font-roboto mx-auto">
                <div className="h-full">
                    <div className="items-center h-full flex justify-center">
                        <Link href="./">
                            <Image src={logo} alt="logo" className="w-24" />
                        </Link>
                    </div>
                </div>
                <div className="h-full text-white flex items-center space-x-16">
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
