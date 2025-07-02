import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white/80 sticky top-0 z-50 backdrop-blur-3xl">
            <div className="max-w-[82rem] mx-auto px-6 md:px-12 py-2 flex items-center justify-between">
                {/* Left: SchoolForAll Logo */}
                <div className="w-1/3 flex items-center">
                    <a
                        href="https://schoolforall.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-90  transition"
                    >
                        <img
                            src="sfa_logo.jpg"
                            alt="SchoolForAll"
                            className="h-14"
                        />
                    </a>
                </div>

                {/* Center: BlindNetwork Logo */}
                <div className="w-1/3 flex justify-center">
                    <a href="/" className="flex items-center gap-2">
                        <img
                            src="logo.png"
                            alt="BlindNetwork Logo"
                            className="h-16 w-auto"
                        />
                    </a>
                </div>

                {/* Right: Nav Links */}
                <div className="w-1/3 hidden md:flex justify-end items-center gap-8 text-gray-800 font-medium">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-84}
                        duration={1000}
                        activeClass="font-bold border-b-2 border-purple-600"
                        className="cursor-pointer transition-all duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-84}
                        duration={1000}
                        activeClass="font-bold border-b-2 border-purple-600"
                        className="cursor-pointer transition-all duration-200"
                    >
                        About Us
                    </Link>
                    <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-84}
                        duration={1000}
                        activeClass="font-bold border-b-2 border-purple-600"
                        className="cursor-pointer transition-all duration-200"
                    >
                        Services
                    </Link>
                    <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-84}
                            duration={1000}
                            className="cursor-pointer block rounded-full px-4 py-2 font-semibold text-white bg-white/10 hover:bg-white/20 transition-all duration-200 hover:shadow-lg shadow-purple-500/30 backdrop-blur-sm text-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Mobile: Hamburger Icon */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Sidebar for mobile */}
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </header>
    );
};

export default Navbar;
