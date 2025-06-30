import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-6 mt-10">
            <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                {/* Logo or Brand */}
                <div className="text-lg font-bold text-purple-600">
                    Blindnetwork
                </div>

                {/* Navigation Links */}
                <div className="flex gap-6 text-gray-600 text-sm font-medium">
                    <a
                        href="#home"
                        className="hover:text-purple-600 transition"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="hover:text-purple-600 transition"
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className="hover:text-purple-600 transition"
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-purple-600 transition"
                    >
                        Contact
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Blindnetwork. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
