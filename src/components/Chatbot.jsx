import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen ? (
                <div className="w-80 bg-white rounded-3xl shadow-2xl border  animate-fadeIn">
                    {/* Header */}
                    <div className="bg-gray-900 text-white flex justify-between items-center px-4 py-3 rounded-t-2xl">
                        <div className="flex items-center gap-2">
                            <img src="/bot.svg" alt="bot" className="w-5 h-5" />
                            <span className="font-semibold tracking-wide">
                                BlindBot
                            </span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:text-red-300 transition"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Body with Form */}
                    <div className="p-5 space-y-4 text-[.92rem] text-gray-800">
                        <p className="font-semibold text-gray-700">
                            👋 How can we assist you today?
                        </p>

                        <form className="space-y-4">
                            {/* Query */}
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-600">
                                    Your Query
                                </label>
                                <textarea
                                    rows={2}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-gray-500 placeholder:text-gray-400"
                                    placeholder="e.g. I need help with course access..."
                                ></textarea>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400"
                                    placeholder="your@email.com"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-600">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gray-900 text-white py-2 rounded-lg font-semibold text-sm transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="relative animate-bounce group"
                >
                    <img
                        src="/bot.svg"
                        alt="bot"
                        className="w-auto h-16 md:h-32 hover:scale-110 transition-transform duration-300 drop-shadow-xl"
                    />
                    <span className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-ping" />
                </button>
            )}
        </div>
    );
}
