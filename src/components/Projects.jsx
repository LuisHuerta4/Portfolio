'use client'
import { useRef, useState } from "react"
import { projects } from "../../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Projects = () => {
    const contentRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
        gsap.fromTo("#title", { opacity: 0 }, {opacity: 1, duration: 1 });
        gsap.fromTo(".project img", { opacity: 0, xPercent: -100 }, {xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" });
        gsap.fromTo(".details h2", { yPercent: 100, opacity: 0}, { yPercent: 0, opacity: 100, ease: "power1.inOut" });
        gsap.fromTo(".details p", { yPercent: 100, opacity: 0}, { yPercent: 0, opacity: 100, ease: "power1.inOut" });
    }, [currentIndex])

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
        <section className="bg-[#f3f0ed] relative w-full mt-0 2xl:px-0 px-5 py-40">
            <h2 className="text-black sr-only">
                Projects 
            </h2>

            <div className="font-display text-xl grid md:grid-cols-3 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto">
                {projects.map((project, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button key={project.id} className={`
                        ${isActive
                                ? "text-[#3d3228] border-white"
                                : "text-black border-white/50"}`}
                            onClick={() => goToSlide(index)}>
                            {project.name}
                        </button>
                    )
                })}
            </div>

            <div className="flex flex-col justify-between items-center container mx-auto relative">
                <div className="flex items-center justify-between w-full absolute">
                    <button className="text-left hover:text-yellow cursor-pointer transition-colors max-w-25" onClick={() => goToSlide(currentIndex - 1)}>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>

                    <button className="text-left hover:text-yellow cursor-pointer transition-colors max-w-25" onClick={() => goToSlide(currentIndex + 1)}>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>

                <div className="project flex-center mt-10">
                    <img src={currentProject.image} className="object-contain max-w-80"/>
                </div>

                <div className="flex max-md:flex-col gap-10 md:items-center justify-between w-full lg:absolute bottom-0">
                    <div ref={contentRef} className="space-y-4 lg:translate-y-20">
                        <p id="title" className="font-modern-negra md:text-6xl text-3xl text-yellow max-w-40">{currentProject.name}</p>
                    </div>

                    <div className="details space-y-5 md:max-w-md text-left">
                        <h2 className="md:text-5xl text-3xl font-serif">{currentProject.title}</h2>
                        <p className="md:text-lg pe-5">{currentProject.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects