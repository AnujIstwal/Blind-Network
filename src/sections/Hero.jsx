import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <section className="bg-[#F9F6FF] py-16 px-6 md:px-20 text-gray-800 mx-4 md:mx-8 rounded-4xl border border-purple-100">
            <div className="max-w-7xl mx-auto flex  items-center justify-center">
                {/* Text Content */}
                <div className="md:w-1/2 text-center  space-y-6">
                    <h1 className="text-4xl md:text-5xl font-[600] leading-tight">
                        Unlock the Future of <br />
                        <span className="text-purple-600 font-bold">
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
                        <a
                            href="#services"
                            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
                        >
                            Explore Services
                        </a>
                        <a
                            href="#contact"
                            className="text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition"
                        >
                            Join Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
