import React from "react";
import {
    FaHome,
    FaInfoCircle,
    FaServicestack,
    FaEnvelope,
    FaBars,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const navItems = [
        { name: "Home", to: "#home", icon: <FaHome /> },
        { name: "About Us", to: "#about", icon: <FaInfoCircle /> },
        { name: "Services", to: "#services", icon: <FaServicestack /> },
        { name: "Contact", to: "#contact", icon: <FaEnvelope /> },
    ];

    return (
        <>
            {/* Sidebar */}
            <aside
                className={`md:hidden space-y-8 bg-white border-r border-gray-200 fixed top-0 left-0 h-screen w-64 p-6 z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0`}
            >
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

                <nav className="flex flex-col space-y-4">
                    {navItems.map((item, idx) => (
                        <Link
                            key={idx}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 text-gray-700 hover:text-purple-600 cursor-pointer transition-colors text-base"
                            activeClass="text-purple-700 font-bold"
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
