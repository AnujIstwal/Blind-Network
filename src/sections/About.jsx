import React from "react";

import {
    FaTwitter,
    FaInstagram,
    FaTelegramPlane,
    FaFacebookF,
} from "react-icons/fa";

const About = () => {
    return (
        <section
            id="about"
            className="bg-white py-16 px-6 md:px-20 scroll-mt-8"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Image */}
                <div className="md:w-1/2 w-[55%]">
                    <img
                        src="ceo.png"
                        alt="Founder and CEO"
                        className="rounded-2xl  w-full max-w-sm mx-auto object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left space-y-5">
                    <h2 className="text-3xl  md:text-4xl font-bold text-gray-800">
                        About{" "}
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                            Us
                        </span>
                    </h2>
                    <p className="text-gray-600 text-justify leading-relaxed">
                        Blindnetwork is a next-gen tech-skilling initiative by{" "}
                        <a
                            href="https://www.schoolforall.co/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-500 font-semibold transition duration-200 hover:underline"
                        >
                            SchoolForAll.co
                        </a>
                        , it is dedicated to reshaping the future of education
                        by integrating AI, STEM, Robotics, and Aeronautics into
                        practical, engaging learning experiences. We empower
                        learners with real-world skills and futuristic tools.
                    </p>
                    <div className="pt-4 border-t border-gray-300">
                        <p className="text-lg font-semibold text-purple-700">
                            Dr. Surojit Saha
                        </p>
                        <p className="text-sm text-gray-500 font-medium">
                            CEO,{" "}
                            <span className="text-gray-500">
                                SchoolForAll.co
                            </span>
                        </p>
                        <p className="text-[.92rem] text-gray-500 italic mt-1">
                            “Our mission is to bridge imagination and innovation
                            — starting from the classroom.”
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start gap-4 pt-4">
                        <a
                            href="https://twitter.com/SchoolforallOrg?t=WUoy8M6wIoAmSiMlZSj-ag&s=08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition transform hover:scale-125"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com/schoolforall_sfa?igsh=aW91enZvbm9wZDAx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-400 hover:text-pink-300 transition transform hover:scale-125"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="https://t.me/SchoolForAllOrg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:text-sky-300 transition transform hover:scale-125"
                        >
                            <FaTelegramPlane size={20} />
                        </a>
                        <a
                            href="https://www.facebook.com/people/Surojit-Saha/pfbid0mjA3eyBewFzeweDtAN6aQUYzSQsTNwvtg7zKupmvSXpAf3fT1di9osCj7MzQjJnl/?mibextid=eHce3h"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300 transition transform hover:scale-125"
                        >
                            <FaFacebookF size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
