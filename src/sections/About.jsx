import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="py-20 bg-white text-center px-6 md:px-20"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
                About Us
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
                <strong>Blindnetwork</strong> is a next-generation education
                platform dedicated to empowering students, creators, and future
                innovators through AI, STEM, and robotics. Our goal is to blend
                traditional education with hands-on learning in modern labs, AI
                toolkits, and certification programs — helping learners build
                real-world skills that matter.
            </p>
        </section>
    );
};

export default About;
