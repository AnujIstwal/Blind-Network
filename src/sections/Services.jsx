import React from "react";

const services = [
    {
        title: "AI Tools Manufacturing",
        image: "ai_tools.png",
        modules: [
            "Automation Systems",
            "AI Model Deployment",
            "Tool Integration",
        ],
        desc: "Learn to build intelligent tools and systems with real-world applications in automation and analytics.",
    },
    {
        title: "AI Certification Course",
        image: "ai.png",
        modules: [
            "ML & DL Basics",
            "Projects with TensorFlow",
            "Model Evaluation",
        ],
        desc: "Get certified in AI fundamentals, machine learning, and deep learning with hands-on projects.",
    },
    {
        title: "STEM",
        image: "stem.png",
        modules: [
            "Science Experiments",
            "Coding with Python",
            "Math & Logic Games",
        ],
        desc: "Engage in multidisciplinary learning covering science, technology, engineering, and mathematics.",
    },
    {
        title: "Robotics",
        image: "robotics.png",
        modules: ["Robot Design", "Arduino & Sensors", "AI for Robotics"],
        desc: "Design, build, and program robots while learning control systems, sensors, and AI integration.",
    },
    {
        title: "Aerolabs",
        image: "aero.png",
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
                            className="bg-purple-50 space-y-4 hover:bg-purple-100 transition p-6 rounded-2xl shadow-md border border-purple-100 flex flex-col justify-between"
                        >
                            {/* <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-40 object-contain mb-4"
                            /> */}
                            <div className="flex justify-center items-center rounded-2xl bg-purple-300 w-full h-40"></div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800  mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {service.desc}
                                </p>
                            </div>
                            <ul className="text-gray-600 mb-4 list-disc list-inside space-y-1 text-sm">
                                {service.modules.map((mod, i) => (
                                    <li key={i}>{mod}</li>
                                ))}
                            </ul>
                            <button className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-700 transition">
                                Enroll Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
