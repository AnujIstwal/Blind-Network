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
                <div className="md:w-1/2">
                    <img
                        src="ceo.png"
                        alt="Founder and CEO"
                        className="rounded-2xl  w-full max-w-sm mx-auto object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left space-y-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        About Us
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Blindnetwork is dedicated to reshaping the future of
                        education by integrating AI, STEM, Robotics, and
                        Aeronautics into practical, engaging learning
                        experiences. We empower learners with real-world skills
                        and futuristic tools.
                    </p>
                    <div className="pt-4 border-t border-gray-300">
                        <p className="text-lg font-semibold text-purple-700">
                            Dr. Surojit Saha
                        </p>
                        <p className="text-sm text-gray-500 italic">
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
                        >
                            <FaTwitter className="text-gray-600 text-xl hover:text-purple-800 transition" />
                        </a>
                        <a
                            href="https://www.instagram.com/schoolforall_sfa?igsh=aW91enZvbm9wZDAx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="text-gray-600 text-xl hover:text-purple-800 transition" />
                        </a>
                        <a
                            href="https://t.me/SchoolForAllOrg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTelegramPlane className="text-gray-600 text-xl hover:text-purple-800 transition" />
                        </a>
                        <a
                            href="https://www.facebook.com/people/Surojit-Saha/pfbid0mjA3eyBewFzeweDtAN6aQUYzSQsTNwvtg7zKupmvSXpAf3fT1di9osCj7MzQjJnl/?mibextid=eHce3h"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF className="text-gray-600 text-xl hover:text-purple-800 transition" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
