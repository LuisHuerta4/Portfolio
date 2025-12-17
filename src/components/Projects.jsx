'use client'
import { useRef, useState } from "react"
import { projects } from "../../constants"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap"

const Projects = () => {
    const contentRef = useRef()
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
        gsap.fromTo("#title", { opacity: 0 }, {opacity: 1, duration: 1 });

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

            <div className="flex flex-col justify-between items-center container mx-auto relative">
                <div className="flex items-center justify-between w-full absolute top-[45%]">
                    <button className="cursor-pointer max-w-25" onClick={() => goToSlide(currentIndex - 1)}>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>

                    <button className="cursor-pointer max-w-25" onClick={() => goToSlide(currentIndex + 1)}>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>

                <div className="project flex-center mt-10">
                    <img src={currentProject.image} className="object-contain max-w-[18rem] md:max-w-[22rem] lg:max-w-[26rem]"/>
                </div>

                <div className="flex max-md:flex-col gap-14 md:gap-20 md:items-center justify-between w-full lg:absolute bottom-0">
                    <div ref={contentRef} className="space-y-4 lg:translate-y-20">
                        <p id="title" className="font-modern-negra text-3xl md:text-4xl max-w-60">Tech Stack</p>
                        {/* <p id="title" className="font-modern-negra text-3xl md:text-4xl max-w-60">{currentProject.name}</p> */}
                    </div>

                    <div className="details space-y-5 md:max-w-md text-left">
                        <h2 className="text-2xl md:text-4xl font-serif leading-tight">{currentProject.title}</h2>
                        <p className="font-sans text-base md:text-lg leading-relaxed text-[#3d3228]/80">{currentProject.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects