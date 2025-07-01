import React from "react";
import {
    FaTwitter,
    FaInstagram,
    FaTelegramPlane,
    FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-gray-200 text-gray-500 text-sm pt-10 pb-6 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left: Logo & Description */}
                <div className="space-y-4">
                    <a
                        href="https://www.schoolforall.co/ "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="logo.jpg"
                            alt="SchoolForAll Logo"
                            className="w-36 py-2"
                        />
                    </a>
                    <p>
                        A futuristic ed-tech venture empowering learners through
                        AI, STEM, and Robotics. We provide hands-on
                        skill-building with real-world tools and futuristic
                        experiences.
                    </p>
                    <div className="space-x-4 mt-2 text-lg">
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter className="inline hover:text-purple-600" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="inline hover:text-purple-600" />
                        </a>
                        <a
                            href="https://t.me/yourchannel"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTelegramPlane className="inline hover:text-purple-600" />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF className="inline hover:text-purple-600" />
                        </a>
                    </div>
                </div>

                {/* Middle: Course Links */}
                <div>
                    <h3 className="font-semibold text-gray-400 mb-2">
                        Our Courses
                    </h3>
                    <ul className="space-y-1">
                        <li>AI Tools Manufacturing</li>
                        <li>AI Certification Course</li>
                        <li>STEM</li>
                        <li>Robotics</li>
                        <li>Aerolabs</li>
                    </ul>
                </div>

                {/* Right: Contact Info */}
                <div>
                    <p>
                        <span className="font-semibold text-gray-400 mb-2">
                            Corporate Office Address
                        </span>
                        Gate No.1230, SH.No.1, 2, 3 & 4,
                        <br />
                        Ground Floor, Near Hiras Nagar
                        <br />
                        Police Station, Hiras Nagar Society,
                        <br />
                        Pirangut, Pune 412215
                        <br />
                        Maharashtra, India.
                    </p>
                    <p className="mt-2">
                        <span className="font-semibold text-gray-400">
                            Our Voice:
                        </span>{" "}
                        +91 91308 54236, +91 7823812240
                        <br />
                        <span className="font-semibold text-gray-400">
                            Email ID:
                        </span>{" "}
                        schoolforall@outlook.com
                    </p>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="mt-10 border-t pt-4 text-center text-gray-500 text-sm">
                Copyright © {new Date().getFullYear()} Blindnetwork. All rights
                reserved.
            </div>
        </footer>
    );
};

export default Footer;
