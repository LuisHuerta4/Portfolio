import { useEffect } from "react";
import gsap from "gsap";
import { techList } from "../../constants";

const Technologies = () => {
    useEffect(() => {
        techList.forEach((tech, i) => {
            const card = `.tech-card-${i}`;
            const logo = `.tech-logo-${i}`;
            const shape = `.tech-shape-${i}`;

            const tl = gsap.timeline({ paused: true, defaults: { ease: "power1.inOut" } });

            // Initial states
            gsap.set(logo, { autoAlpha: 0, scale: 0.3 });
            gsap.set(shape, { opacity: 1, scale: 1.5 });
            gsap.set(card, { overflow: "visible" });

            gsap.to(card, {
                y: "+=" + gsap.utils.random(4, 16),
                duration: gsap.utils.random(2, 5),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Star shrinks
            tl.to(shape, {
                scale: 0.1,
                opacity: 1,
                duration: 0.2,
                ease: "linear",
            });

            // Logo appears
            tl.fromTo(logo,
                { autoAlpha: 0, scale: 0.3 },
                {
                    autoAlpha: 1,
                    scale: 2.6,
                    duration: 0.6,
                    ease: "power1.out",
                    delay: 0
                }
            );

            const el = document.querySelector(card);
            el.addEventListener("mouseenter", () => tl.play());
            el.addEventListener("mouseleave", () => {
                setTimeout(() => {
                    tl.reverse();
                }, 3000);
            });
        });
    }, []);

    return (
        <section id="technologies" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-[#f3f0ed] to-[#d7d1c9]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-[#3d3228] text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[-0.02em] font-modern-negra mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                    Technologies I Use
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-10 md:gap-15 lg:gap-16 p-3 sm:p-4 md:p-5">
                    {techList.map((tech, i) => (
                        <div
                            key={tech.name}
                            className={`tech-card-${i} relative h-32 sm:h-36 md:h-40 flex-center flex-col gap-2 sm:gap-3`}
                        >
                            <svg
                                width="120"
                                height="120"
                                viewBox="0 0 300 300"
                                className={`tech-shape-${i} transition-transform absolute w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[145px] md:h-[145px]`}
                                style={{ fill: tech.color }}
                            >
                                <path d="M150 20c7 0 13 4 16 11l23 58 63 4c7 1 13 6 15 13s0 14-6 19l-52 39 19 61c2 7 0 15-6 20s-14 5-20 1l-52-35-52 35c-6 4-14 4-20-1s-8-13-6-20l19-61-52-39c-6-5-9-12-6-19s8-12 15-13l63-4 23-58c3-7 9-11 16-11z" />
                            </svg>

                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className={`tech-logo-${i} w-10 sm:w-12 md:w-14 absolute pointer-events-none`}
                            />

                            <div
                                className="tech-label font-sans text-[10px] sm:text-xs uppercase tracking-widest font-medium text-white/90 px-3 sm:px-4 py-1 mt-40 md:mb-5 lg:mb-0 sm:mt-44 md:mt-51"
                                style={{
                                    backgroundColor: tech.color,
                                    clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                                }}
                            >
                                {tech.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;