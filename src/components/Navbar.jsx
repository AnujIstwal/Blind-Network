import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white/80  sticky top-0 z-50  backdrop-blur-3xl ">
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex flex-col leading-tight">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-extrabold text-purple-600">
                            Blind
                        </span>
                        <span className="text-xl font-extrabold text-white bg-gray-700 px-1 rounded">
                            Network
                        </span>
                    </div>
                    <a
                        href="https://schoolforall.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-purple-600 transition"
                    >
                        <span className="text-xs text-gray-500 tracking-wide mt-1">
                            by SchoolForAll
                        </span>
                    </a>
                </div>

                {/* Menu */}
                <nav className="hidden md:flex  justify-center items-center gap-8 text-gray-700 font-medium">
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
                        activeClass=" font-bold border-b-2 border-purple-600"
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
                        activeClass=" font-bold border-b-2 border-purple-600"
                        className="cursor-pointer transition-all duration-200"
                    >
                        Services
                    </Link>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-84}
                        duration={1000}
                        className="text-purple-600 transition rounded-full border-2 border-purple-600 px-4 py-2 font-semibold hover:bg-purple-100 "
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* mobile devices */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu */}
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </header>
    );
};

export default Navbar;
