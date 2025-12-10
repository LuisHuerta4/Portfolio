import { useEffect } from "react";
import gsap from "gsap";
import { techList } from "../../constants";

const Technologies = () => {
    useEffect(() => {
        techList.forEach((_, i) => {
            const card = `.tech-card-${i}`;
            const logo = `.tech-logo-${i}`;
            const shape = `.tech-shape-${i}`;

            const tl = gsap.timeline({ paused: true, defaults: { ease: "power1.inOut" } });

            // Initial states
            gsap.set(logo, { autoAlpha: 0, scale: 0.3 });
            gsap.set(shape, { opacity: 1, scale: 1.5 });
            gsap.set(card, { overflow: "visible" });

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
            el.addEventListener("mouseleave", () => tl.reverse());
        });
    }, []);

    return (
        <section id="technologies" className="py-32 bg-[#f7f4f1]">
            <div className="container mx-auto px-5">
                <h2 className="text-4xl md:text-6xl font-display mb-12 font-bold">
                    Technologies I Use
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12">
                    {techList.map((tech, i) => (
                        <div
                            key={tech.name}
                            className={`tech-card-${i} relative h-40 flex-center`}
                        >
                            <svg
                                width="160"
                                height="160"
                                viewBox="0 0 300 300"
                                className={`tech-shape-${i} transition-transform absolute`}
                                style={{ fill: tech.color }}
                            >
                                <path d="M150 20c7 0 13 4 16 11l23 58 63 4c7 1 13 6 15 13s0 14-6 19l-52 39 19 61c2 7 0 15-6 20s-14 5-20 1l-52-35-52 35c-6 4-14 4-20-1s-8-13-6-20l19-61-52-39c-6-5-9-12-6-19s8-12 15-13l63-4 23-58c3-7 9-11 16-11z" />
                            </svg>

                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className={`tech-logo-${i} w-16 absolute pointer-events-none`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
