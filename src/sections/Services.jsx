import React from "react";
import { FaStar } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";

const services = [
    {
        title: "AI Tools Manufacturing",
        image: "ai_tools.jpg",
        rating: 5.0,
        modules: [
            "Automation Systems",
            "AI Model Deployment",
            "Tool Integration",
        ],
        desc: "Learn to build intelligent tools and systems with real-world applications in automation and analytics.",
    },
    {
        title: "AI Certification Course",
        image: "ai.jpg",
        rating: 4.5,
        modules: [
            "ML & DL Basics",
            "Projects with TensorFlow",
            "Model Evaluation",
        ],
        desc: "Get certified in AI fundamentals, machine learning, and deep learning with hands-on projects.",
    },
    {
        title: "STEM",
        image: "stem.jpg",
        rating: 4.5,
        modules: [
            "Science Experiments",
            "Coding with Python",
            "Math & Logic Games",
        ],
        desc: "Engage in multidisciplinary learning covering science, technology, engineering, and mathematics.",
    },
    {
        title: "Robotics",
        image: "robotics.jpg",
        rating: 4.3,
        modules: ["Robot Design", "Arduino & Sensors", "AI for Robotics"],
        desc: "Design, build, and program robots while learning control systems, sensors, and AI integration.",
    },
    {
        title: "Aerolabs",
        image: "aero.jpg",
        rating: 4.3,
        modules: ["Flight Mechanics", "Drone Tech", "Aerodynamic Simulation"],
        desc: "Explore future-ready aeronautics concepts and experiments in a creative, lab-style environment.",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="scroll-mt-8 bg-white py-16 px-6 md:px-20"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Our Courses
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-gray-50   p-2  rounded-2xl shadow-md border border-purple-100 flex flex-col justify-between"
                        >
                            {/* Trending Badge */}
                            {service.rating === 5.0 && (
                                <div className="flex justify-center items-center gap-x-2 m-2 absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                                    <IoMdTrendingUp className="text-white" />{" "}
                                    Trending
                                </div>
                            )}

                            <div className="flex justify-center items-center rounded-2xl bg-gray-200 w-full h-40">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="p-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800  mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 ">
                                        {service.desc}
                                    </p>
                                </div>
                                <ul className="text-gray-800 mb-4 list-disc list-inside space-y-1 text-[.92rem]">
                                    {service.modules.map((mod, i) => (
                                        <li key={i}>{mod}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-row justify-between items-center ">
                                    {/* Enroll Button */}
                                    <button className="mt-auto bg-gray-800 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-700 transition">
                                        Enroll Now
                                    </button>
                                    {/* Rating */}
                                    <div className="flex items-center mt-2 text-gray-700  font-bold">
                                        <FaStar className="mr-1 text-lg text-yellow-500" />
                                        {service.rating.toFixed(1)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
