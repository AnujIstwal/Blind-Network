import React from "react";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowCircleDown } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="home"
            className="bg-no-repeat bg-right-bottom bg-cover  py-16 px-6 md:px-20 text-gray-800 mx-4 md:mx-8 rounded-4xl border border-purple-100"
            style={{
                backgroundImage: `url('bg-overlay.jpg'), linear-gradient(to bottom right, #f5ecff, #eae1fd, #dcd1ff)`,
                backgroundBlendMode: "overlay", // or 'soft-light', 'multiply', etc.
            }}
        >
            <div className="max-w-7xl mx-auto flex  items-center justify-center">
                {/* Text Content */}
                <div className="md:w-1/2 text-center  space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Unlock the Future of <br />
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent font-bold ">
                            <Typewriter
                                words={[
                                    "Tech Education",
                                    "STEM Learning",
                                    "AI Innovation",
                                    "Robotics",
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
                    <p className="text-lg text-gray-600">
                        From AI tools and robotics to STEM programs and Aerolabs
                        — Blindnetwork serves innovation with purpose.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center ">
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-84}
                            duration={1000}
                            activeClass="font-bold border-b-2 border-purple-600"
                            className="cursor-pointer transition-all duration-200 bg-gray-700 text-white px-6 py-3 rounded-full group font-semibold hover:bg-gray-800 "
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
                            activeClass="font-bold border-b-2 border-purple-600"
                            className="cursor-pointer text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition "
                        >
                            Join Us
                        </Link>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src="hero.png"
                            className="w-[80%] md:w-[65%] max-w-[400px] md:max-w-[500px]  "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
