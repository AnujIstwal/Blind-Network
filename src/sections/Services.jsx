import React from "react";

const services = [
    {
        title: "AI Tools Manufacturing",
        desc: "Learn to build intelligent tools and systems with real-world applications in automation and analytics.",
    },
    {
        title: "AI Certification Course",
        desc: "Get certified in AI fundamentals, machine learning, and deep learning with hands-on projects.",
    },
    {
        title: "STEM",
        desc: "Engage in multidisciplinary learning covering science, technology, engineering, and mathematics.",
    },
    {
        title: "Robotics",
        desc: "Design, build, and program robots while learning control systems, sensors, and AI integration.",
    },
    {
        title: "Aerolabs",
        desc: "Explore future-ready aeronautics concepts and experiments in a creative, lab-style environment.",
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-white py-16 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Our Courses
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-purple-50 hover:bg-purple-100 transition p-6 rounded-2xl shadow-md border border-purple-100 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {service.desc}
                                </p>
                            </div>
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
