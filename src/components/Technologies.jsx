import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { techList } from "../../constants";

const Technologies = () => {
    const sectionRef = useRef(null);
    const funRef = useRef(null);
    const proRef = useRef(null);
    const [view, setView] = useState("fun");

    const switchToView = (newView) => {
        if (newView === view) return;
        const outEl = view === "fun" ? funRef.current : proRef.current;
        const inEl = newView === "fun" ? funRef.current : proRef.current;

        gsap.to(outEl, {
            opacity: 0,
            y: -10,
            duration: 0.25,
            ease: "power2.in",
            onComplete: () => {
                gsap.set(outEl, { display: "none" });
                gsap.set(inEl, { display: "grid", opacity: 0, y: 12 });
                gsap.to(inEl, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
                setView(newView);
            },
        });
    };

    useGSAP(() => {
        // Header
        const titleSplit = new SplitText(".tech-title", { type: "chars" });

        gsap.from(titleSplit.chars, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play reset play reset",
            },
            yPercent: 100,
            opacity: 0,
            duration: 1.6,
            ease: "expo.out",
            stagger: 0.04,
        });

        // Hover animations
        techList.forEach((tech, i) => {
            const card = `.tech-card-${i}`;
            const logo = `.tech-logo-${i}`;
            const shape = `.tech-shape-${i}`;

            const tl = gsap.timeline({ paused: true, defaults: { ease: "power1.inOut" } });

            gsap.set(logo, { autoAlpha: 0, scale: 0.3 });
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
                    delay: 0,
                }
            );

            const el = document.querySelector(card);
            el.addEventListener("mouseenter", () => tl.play());
            el.addEventListener("mouseleave", () => {
                setTimeout(() => tl.reverse(), 3000);
            });
        });

        return () => {
            titleSplit.revert();
        };
    }, []);

    return (
        <section id="technologies" ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-[#f3f0ed] to-[#d7d1c9]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-end justify-between mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                    <h2 className="tech-title text-[#3d3228] text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[-0.02em] font-modern-negra overflow-hidden">
                        Technologies I Use
                    </h2>

                    <div className="flex items-center gap-1 bg-[#3d3228]/8 border border-[#3d3228]/15 rounded-full p-1 shrink-0 ml-6">
                        <button
                            onClick={() => switchToView("fun")}
                            className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-sans font-medium tracking-widest uppercase transition-colors duration-300 cursor-pointer ${
                                view === "fun"
                                    ? "bg-[#3d3228] text-[#f3f0ed]"
                                    : "text-[#3d3228]/50 hover:text-[#3d3228]"
                            }`}
                        >
                            Star
                        </button>
                        <button
                            onClick={() => switchToView("pro")}
                            className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-sans font-medium tracking-widest uppercase transition-colors duration-300 cursor-pointer ${
                                view === "pro"
                                    ? "bg-[#3d3228] text-[#f3f0ed]"
                                    : "text-[#3d3228]/50 hover:text-[#3d3228]"
                            }`}
                        >
                            List
                        </button>
                    </div>
                </div>

                {/* Star view */}
                <div
                    ref={funRef}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-10 md:gap-15 lg:gap-16 p-3 sm:p-4 md:p-5"
                >
                    {techList.map((tech, i) => (
                        <div
                            key={tech.name}
                            className={`tech-card-${i} relative h-32 sm:h-36 md:h-40 flex-center flex-col gap-2 sm:gap-3`}
                        >
                            <img
                                src={tech.star}
                                width="120"
                                height="120"
                                className={`tech-shape-${i} transition-transform absolute w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[145px] md:h-[145px]`}
                            >
                            </img>

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

                {/* List view */}
                <div
                    ref={proRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3"
                    style={{ display: "none" }}
                >
                    {techList.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex items-center gap-4 px-5 py-4 rounded-xl border border-[#3d3228]/10 bg-white/35 hover:bg-white/55 transition-colors duration-200"
                        >
                            <div
                                className="w-1 h-8 rounded-full shrink-0"
                                style={{ backgroundColor: tech.color }}
                            />
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-8 h-8 object-contain shrink-0"
                            />
                            <span className="font-sans text-lg font-medium text-[#3d3228] tracking-wide">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Technologies;