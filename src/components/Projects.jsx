import { useRef } from "react";
import { projects } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Projects = () => {
    const sectionRef = useRef(null);
    const rowRefs = useRef([]);
    const activeIndexRef = useRef(null);
    const animatingRef = useRef(false);

    // Title
    useGSAP(() => {
        const split = new SplitText(".projects-title", { type: "chars" });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play reset play reset",
            },
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        });

        return () => split.revert();
    }, []);

    const expandRow = (index) => {
        const row = rowRefs.current[index];
        const content = row.querySelector(".expand-content");
        const img = row.querySelector(".project-img");
        const detailLines = row.querySelectorAll(".detail-line");
        const plusIcon = row.querySelector(".plus-icon");

        gsap.set(content, { height: "auto" });
        const targetH = content.offsetHeight;
        gsap.set(content, { height: 0 });

        gsap.to(content, {
            height: targetH,
            duration: 0.75,
            ease: "power3.inOut",
            onComplete: () => {
                gsap.set(content, { height: "auto" });
                animatingRef.current = false;
            },
        });

        // Plus → X
        gsap.to(plusIcon, { rotation: 45, duration: 0.45, ease: "back.out(2)" });

        // Image reveal
        gsap.fromTo(
            img,
            { clipPath: "inset(0 100% 0 0)" },
            { clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "expo.inOut", delay: 0.2 }
        );

        // Project details
        gsap.fromTo(
            detailLines,
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.65, stagger: 0.13, ease: "expo.out", delay: 0.38 }
        );
    };

    const collapseRow = (index, onComplete) => {
        const row = rowRefs.current[index];
        const content = row.querySelector(".expand-content");
        const plusIcon = row.querySelector(".plus-icon");

        gsap.to(content, {
            height: 0,
            duration: 0.5,
            ease: "power3.inOut",
            onComplete,
        });

        gsap.to(plusIcon, { rotation: 0, duration: 0.35 });
    };

    const handleRowClick = (index) => {
        if (animatingRef.current) return;
        animatingRef.current = true;

        if (activeIndexRef.current === index) {
            collapseRow(index, () => {
                activeIndexRef.current = null;
                animatingRef.current = false;
            });
        } else {
            if (activeIndexRef.current !== null) {
                collapseRow(activeIndexRef.current);
            }
            activeIndexRef.current = index;
            expandRow(index);
        }
    };

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="bg-linear-to-b from-[#d7d1c9] via-[#e8e3de] to-[#f3f0ed] relative w-full px-5 py-10 mb-40"
        >
            <div className="overflow-hidden">
                <h2 className="projects-title mt-20 md:mt-32 mb-16 text-7xl md:text-[16vw] lg:text-[10vw] leading-none text-center font-modern-negra tracking-[-0.02em]">
                    PROJECTS
                </h2>
            </div>

            <div className="max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={project.id + index}
                        ref={(el) => (rowRefs.current[index] = el)}
                    >
                        <div className="row-line h-px bg-[#3d3228]/20" />
                        <div
                            className="row-header flex items-center justify-between py-5 sm:py-7 cursor-pointer select-none group"
                            onClick={() => handleRowClick(index)}
                        >
                            <div className="flex items-baseline gap-4 sm:gap-8 min-w-0">
                                <span className="font-modern-negra text-xs sm:text-sm text-[#3d3228]/30 shrink-0 w-6 sm:w-8 tabular-nums">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="font-modern-negra text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 truncate">
                                    {project.name.toUpperCase()}
                                </span>
                            </div>

                            <div className="flex items-center gap-3 sm:gap-6 shrink-0 ml-3">
                                <span className="hidden lg:block font-sans text-[10px] tracking-[0.2em] text-[#3d3228]/40 uppercase whitespace-nowrap">
                                    {project.stack.slice(0, 2).join(" · ")}
                                </span>
                                <div className="plus-icon w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#3d3228]/25 flex-center text-sm text-[#3d3228]/50 shrink-0 transition-colors duration-300 group-hover:border-[#3d3228]/50">
                                    +
                                </div>
                            </div>
                        </div>

                        <div
                            className="expand-content overflow-hidden"
                            style={{ height: 0 }}
                        >
                            <div className="pb-12 sm:pb-16 pl-10 sm:pl-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-img w-full h-auto object-contain"
                                        style={{ clipPath: "inset(0 100% 0 0)" }}
                                    />
                                </div>

                                <div className="flex flex-col justify-center space-y-5 sm:space-y-6">
                                    <p className="detail-line font-sans text-sm sm:text-base leading-relaxed text-[#3d3228]/75">
                                        {project.description}
                                    </p>

                                    <div className="detail-line flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[10px] tracking-[0.15em] uppercase border border-[#3d3228]/20 px-3 py-1.5 rounded-full text-[#3d3228]/55"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="detail-line self-start inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-[#3d3228] border border-[#3d3228]/30 px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#3d3228] hover:text-[#f3f0ed]"
                                    >
                                        View Project <span className="text-base">↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="bottom-line h-px bg-[#3d3228]/20" />
            </div>
        </section>
    );
};

export default Projects;