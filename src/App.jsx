import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Chatbot from "./components/Chatbot";

// List of critical images to preload
const imageUrls = [
    "hero.png",
    "ai_tools.jpg",
    "stem.jpg",
    "robotics.jpg",
    "aero.jpg",
    "selenium.jpg",
    "rpa.jpg",
    "dev_ops.jpg",
    "cloud.jpg",
    "blockchain.jpg",
    "aws.jpg",
    "ai_ml.jpg",
    "logo.png",
    "sfa_logo.jpg",
    "ceo.png",
    "bg-overlay.jpg",
    "bg-overlay3.jpg",
    "bot.svg",
    "contact_us_bg.jpg",
];

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const preloadImages = () => {
            return Promise.all(
                imageUrls.map(
                    (src) =>
                        new Promise((resolve, reject) => {
                            const img = new Image();
                            img.src = src;
                            img.onload = resolve;
                            img.onerror = reject;
                        })
                )
            );
        };

        preloadImages()
            .then(() => {
                // Optional delay to show loader for UX consistency
                setTimeout(() => setLoading(false), 3500);
            })
            .catch((err) => {
                console.error("Image preload failed", err);
                setLoading(false); // Still load app to avoid stuck screen
            });
    }, []);

    if (loading) return <Loader />;

    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Contact />
            <Chatbot />
            <Footer />
        </>
    );
}

export default App;
