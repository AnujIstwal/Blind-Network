import React from "react";

const Navbar = () => {
    return (
        <header className="bg-white  sticky top-0 z-50    ">
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-extrabold text-purple-600">
                    Blindnetwork
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
