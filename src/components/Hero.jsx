import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    useGSAP(() => {
        const tl = gsap.timeline({ delay: 0.3 });

        tl.from(".star", {
            scale: 0,
            opacity: 0,
            rotate: -40,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
        });

        tl.from(
            ".intro-text, .hero-title",
            {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.15,
            },
            "-=0.6"
        );

        // Up and down
        gsap.to(".star", {
            y: -40,
            duration: 1,
            ease: "sine.inOut",
            stagger: 0.25,
            repeat: -1,
            yoyo: true,
        });

        // Rotate Star
        gsap.to(".star", {
            rotate: 360,
            duration: 6,
            ease: "none",
            repeat: -1,
            yoyo: true,
        });

    });

    return (
        <section id="home" className="w-full min-h-screen relative pt-20 bg-[#f3f0ed] overflow-hidden">
            {/* Stars */}
            <div className="star-container absolute -translate-y-1/2 flex">
                <img src="/svg/star-blue.svg" className="star" />
                <img src="/svg/star-orange.svg" className="star" />
                <img src="/svg/star-pink.svg" className="star" />
                <img src="/svg/star-yellow.svg" className="star" />
            </div>

            {/* Hero text */}
            <div className="hero-text absolute -translate-y-[15%] z-10">
                <p className="intro-text text-3xl sm:text-4xl md:text-5xl font-bold italic mb-4">
                    Hello, I'm
                </p>

                <h1 className="hero-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-serif font-bold inline-block px-4 pb-2">
                    LUIS <br /> HUERTA
                </h1>
            </div>
        </section>
    );
};

export default Hero;
