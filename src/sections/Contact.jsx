import React from "react";
import { HiMail, HiPhone } from "react-icons/hi";

const Contact = () => {
    return (
        <section
            id="#contact"
            className="scroll-mt-8 bg-purple-50 py-16 px-6 md:px-20"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
                    Contact Us
                </h2>
                <p className="text-center text-gray-600 mb-4">
                    Have questions or want to collaborate? Drop us a message and
                    we’ll get back to you shortly.
                </p>

                {/* Contact Info */}
                <div className="text-center text-gray-700 mb-8 space-y-2">
                    <p className="flex justify-center items-center gap-2">
                        <HiMail className="text-gray-500 text-xl" />
                        <a
                            href="business.head@schoolforall.co"
                            className="text-gray-500 font-bold hover:underline"
                        >
                            business.head@schoolforall.co
                        </a>
                    </p>
                    <p className="flex justify-center items-center gap-2">
                        <HiPhone className="text-gray-500 text-xl" />
                        <a
                            href="tel:+919130854236"
                            className="text-gray-500 font-bold hover:underline"
                        >
                            +91 9130854236
                        </a>
                    </p>
                </div>

                {/* Contact Form */}
                <form className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    <textarea
                        rows="5"
                        placeholder="Your Message"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
