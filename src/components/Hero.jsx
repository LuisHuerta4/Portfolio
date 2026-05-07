import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
    useGSAP(() => {
        const nameSplit = new SplitText(".hero-title", { type: "chars" });

        // Set initial hidden states — curtain covers these until ~1.3s
        gsap.set(nameSplit.chars, { yPercent: 110, opacity: 0 });
        gsap.set(".intro-text", { y: 20, opacity: 0 });
        gsap.set(".hero-subtitle", { y: 20, opacity: 0 });
        gsap.set(".star", { scale: 0, opacity: 0 });

        // Delay 1.0s so animations overlap with curtain's final reveal
        const tl = gsap.timeline({ delay: 1.0 });

        // Stars pop in
        tl.to(".star", {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "back.out(1.7)",
        });

        // Text animations
        tl.to(".intro-text", {
            y: 0,
            opacity: 0.8,
            duration: 0.7,
            ease: "expo.out",
        }, "-=0.4");

        tl.to(nameSplit.chars, {
            yPercent: 0,
            opacity: 1,
            duration: 1.0,
            stagger: 0.03,
            ease: "expo.out",
        }, "-=0.35");

        tl.to(".hero-subtitle", {
            y: 0,
            opacity: 0.8,
            duration: 0.7,
            ease: "expo.out",
        }, "-=0.55");

        // Star animations: floating and rotating
        gsap.to(".star", {
            y: -40,
            duration: 2,
            ease: "sine.inOut",
            stagger: 0.3,
            repeat: -1,
            yoyo: true,
            delay: 1.8,
        });

        gsap.to(".star", {
            rotate: 360,
            duration: 10,
            ease: "none",
            repeat: -1,
            delay: 1.5,
        });

        return () => nameSplit.revert();
    });

    return (
        <section id="home" className="hero-bg w-full min-h-screen relative pt-20 bg-[#f3f0ed] overflow-hidden">
            {/* Stars */}
            <div className="star-container absolute -translate-y-1/2 flex">
                <img src="/icons/blue-glossy-star.png" className="star" alt="blue star" />
                <img src="/icons/orange-glossy-star.png" className="star" alt="orange star" />
                <img src="/icons/pink-glossy-star.png" className="star" alt="pink star" />
                <img src="/icons/yellow-glossy-star.png" className="star" alt="yellow star" />
            </div>

            {/* Hero text */}
            <div className="hero-text absolute md:-translate-y-[5%] -translate-y-[10%] z-10">
                <p className="intro-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans italic mb-3 sm:mb-4 opacity-80 tracking-[0.1em]">
                    Hello, I'm
                </p>

                <h1 className="hero-title text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[11rem] font-serif font-bold inline-block px-4 pb-2 leading-[0.9]">
                    LUIS <br /> HUERTA
                </h1>
                <div className="pl-6">
                    <p className="hero-subtitle text-lg sm:text-xl md:text-2xl mt-6 opacity-80 font-serif">
                        Full-Stack Developer
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
