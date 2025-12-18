import { useRef, useState } from "react"
import { projects } from "../../constants"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all";
import gsap from "gsap"

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const split = new SplitText(".title", { type: "chars" });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        });
    }, [])

    useGSAP(() => {
        gsap.fromTo("#tech-stack", { opacity: 0 }, { opacity: 1, duration: 1 });

        gsap.fromTo(".project img", { opacity: 0, xPercent: -100 }, {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.inOut",
        });

        gsap.fromTo(".details h2", { yPercent: 100, opacity: 0 }, {
            yPercent: 0,
            opacity: 1,
            ease: "power1.inOut",
        });

        gsap.fromTo(".details p", { yPercent: 100, opacity: 0 }, {
            yPercent: 0,
            opacity: 1,
            ease: "power1.inOut",
        });

    }, [currentIndex]);


    const totalProjects = projects.length;

    const goToSlide = (index) => {
        const newIndex = (index + totalProjects) % totalProjects;
        setCurrentIndex(newIndex);
    }

    const getProjectAt = (indexOffset) => {
        return projects[(currentIndex + indexOffset + totalProjects) % totalProjects];
    }

    const currentProject = getProjectAt(0);

    return (
        <section id="projects" className="bg-[#f3f0ed] relative w-full mt-0 2xl:px-0 px-5 py-10 mb-40" ref={sectionRef}>
            <h2 className="title mt-28 md:mt-32 mb-15 text-8xl md:text-[10vw] leading-none text-center font-modern-negra tracking-[-0.02em]">
                Projects
            </h2>

            <div className="border-t border-[#3d3228]/10 pt-12 font-sans text-xs sm:text-sm tracking-wide grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto">
                {projects.map((project, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button key={project.id} className={`
                        ${isActive
                                ? "text-[#91806e]"
                                : "text-[#3d3228]/50 hover:text-[#3d3228]"}
                                cursor-pointer`}
                            onClick={() => goToSlide(index)}>
                            {project.name.toUpperCase()}
                        </button>
                    )
                })}
            </div>

            <div className="container mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 gap-x-16 items-center lg:min-h-[470px]">
                    <div className="flex items-center justify-between w-full absolute top-full">
                        <button className="cursor-pointer max-w-20" onClick={() => goToSlide(currentIndex - 1)}>
                            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                        </button>

                        <button className="cursor-pointer max-w-20" onClick={() => goToSlide(currentIndex + 1)}>
                            <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                        </button>
                    </div>

                    <div id="tech-stack" className="order-3 lg:order-1 lg:col-span-3">
                        <p className="font-modern-negra text-3xl md:text-4xl mb-6">
                            Tech Stack
                        </p>
                        <ul className="space-y-3 text-sm tracking-wide text-[#3d3228]/70">
                            {currentProject.stack.map((tech) => (
                                <li key={tech}>{tech.toUpperCase()}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="project lg:col-span-5 flex justify-center order-1 lg:order-2">
                        <div className="w-full max-w-[420px] xl:max-w-[520px]">
                            <img
                                src={currentProject.image}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    <div className="details space-y-6 order-2 lg:col-span-4">
                        <h2 className="text-3xl md:text-4xl font-serif leading-tight">
                            {currentProject.title}
                        </h2>

                        <p className="font-sans text-base md:text-lg leading-relaxed text-[#3d3228]/80">
                            {currentProject.description}
                        </p>

                        <a href={currentProject.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-sm tracking-wide uppercase text-[#3d3228] border border-[#3d3228]/30 px-6 py-3 rounded-full transition-all duration-300 hover:bg-[#3d3228] hover:text-[#f3f0ed] hover:border-[#3d3228]">
                            View
                            <span className="text-lg">↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects