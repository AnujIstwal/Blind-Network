import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// List of critical images to preload
const imageUrls = [
    "hero.png",
    "ai_tools.jpg",
    "stem.jpg",
    "robotics.jpg",
    "aero.jpg",
    "logo.jpg",
    "ceo.png",
    "bg-overlay.jpg",
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
            <Footer />
        </>
    );
}

export default App;
