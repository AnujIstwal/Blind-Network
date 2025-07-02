import React from "react";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import {
    FaArrowCircleDown,
    FaSearch,
    FaTools,
    FaUserGraduate,
} from "react-icons/fa";
import { FiBookOpen, FiGlobe, FiUserCheck, FiZap } from "react-icons/fi";

const Hero = () => {
    return (
        <section
            id="home"
            className="flex flex-col items-center justify-center  px-6 md:px-10   relative overflow-hidden"
        >
            <div
                className="w-full bg-no-repeat bg-right-bottom bg-cover  py-16 px-6 md:px-20 text-gray-800 mx-4 md:mx-8 rounded-4xl border border-purple-100"
                style={{
                    backgroundImage: `url('bg-overlay.jpg'), linear-gradient(to bottom right,rgb(73, 73, 73),rgb(70, 70, 70),rgb(31, 31, 31))`,
                    backgroundBlendMode: "soft-light", // or 'soft-light', 'multiply', etc.
                }}
            >
                <div className="max-w-7xl mx-auto flex  items-center justify-center">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-center  space-y-6">
                        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                            Unlock the Future of <br />
                            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent font-bold ">
                                <Typewriter
                                    words={[
                                        "Tech Education",
                                        "STEM Learning",
                                        "AI Innovation",
                                        "Robotics",
                                        "AeroLabs",
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h1>
                        <p className=" text-lg text-gray-200">
                            From AI tools and robotics to STEM programs and
                            Aerolabs — Blindnetwork serves innovation with
                            purpose.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center ">
                            <Link
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={1000}
                                activeClass="font-bold border-b-2 border-purple-600"
                                className="cursor-pointer transition-all duration-200 bg-gray-100 text-black px-6 py-3 rounded-full group font-semibold hover:bg-gray-300 "
                            >
                                Explore Services
                                <FaArrowCircleDown className="inline ml-2 rotate-220 group-hover:rotate-275 transition" />
                            </Link>

                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-84}
                                duration={1000}
                                className="cursor-pointer text-purple-100 border-2 border-purple-100 px-6 py-3 rounded-full font-semibold hover:bg-purple-100/20 transition "
                            >
                                Join Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Below Grid Layout with Colorful Boxes */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mt-2 md:mt-4  ">
                <div
                    className="basis-[40%] h-64 rounded-3xl shadow-md bg-no-repeat bg-cover p-8 flex flex-col justify-center border border-gray-300 bg-center bg-blend-soft-light"
                    style={{
                        backgroundImage: `url('bg-overlay3.jpg'), linear-gradient(to bottom right,rgb(73,73,73),rgb(70,70,70),rgb(31,31,31))`,
                    }}
                >
                    <h2 className="text-2xl font-bold mb-5 text-white text-center md:text-left">
                        Why Blindnetwork?
                    </h2>

                    <ul className="space-y-3 text-sm md:text-base font-normal text-white">
                        <li className="flex items-center gap-3">
                            <FiZap className="text-purple-400 text-xl" />
                            Hands-on project-based learning
                        </li>
                        <li className="flex items-center gap-3">
                            <FiUserCheck className="text-pink-400 text-xl" />
                            Expert instructors & industry mentors
                        </li>
                        <li className="flex items-center gap-3">
                            <FiGlobe className="text-blue-400 text-xl" />
                            Global tech-ready curriculum
                        </li>
                        <li className="flex items-center gap-3">
                            <FiBookOpen className="text-yellow-300 text-xl" />
                            24/7 access to curated resources
                        </li>
                    </ul>
                </div>

                <div
                    className="bg-no-repeat bg-cover basis-[60%]  text-white rounded-3xl p-8 flex flex-col justify-center h-64 shadow-md"
                    style={{
                        backgroundImage: `url('bg-overlay3.jpg')`,
                        backgroundBlendMode: "soft-light", // or 'soft-light', 'multiply', etc.
                    }}
                >
                    <div className="relative z-10 h-full flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">
                            How It Works
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 text-white">
                            {/* Step Card */}
                            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-md">
                                    <FaSearch className="text-2xl text-white" />
                                </div>
                                <p className="text-lg font-semibold">
                                    Browse Courses
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-4 shadow-md">
                                    <FaUserGraduate className="text-2xl text-white" />
                                </div>
                                <p className="text-lg font-semibold">
                                    Enroll & Access
                                </p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-4 shadow-md">
                                    <FaTools className="text-2xl text-white" />
                                </div>
                                <p className="text-lg font-semibold">
                                    Start Learning
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
