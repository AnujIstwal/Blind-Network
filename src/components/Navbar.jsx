import React from "react";

const Navbar = () => {
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
                    <a href="#" className="hover:text-purple-600 transition">
                        Home
                    </a>
                    <a
                        href="#about"
                        className="hover:text-purple-600 transition"
                    >
                        About Us
                    </a>
                    <a
                        href="#services"
                        className="hover:text-purple-600 transition"
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className="text-purple-600 transition rounded-full border-2 border-purple-600 px-4 py-2 font-semibold hover:bg-purple-100 "
                    >
                        Contact Us
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
