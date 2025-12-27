import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const About = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const split = new SplitText(".about-title", { type: "chars" });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      yPercent: 100,
      opacity: 0,
      duration: 1.6,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.fromTo(".About-text", { yPercent: 100, opacity: 0 }, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      yPercent: 0,
      opacity: 1,
      ease: "power1.inOut",
      duration: 1
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#f3f0ed] py-28 px-5 lg:px-0"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="about-title text-center font-modern-negra text-7xl md:text-8xl lg:text-9xl tracking-tight mb-10">
          ABOUT ME
        </h2>

        <div className="flex items-center gap-6 mb-20">
          <div className="flex-1 h-px bg-[#3d3228]/40" />
          <div className="text-[#3d3228] text-xl">✦</div>
          <div className="flex-1 h-px bg-[#3d3228]/40" />
        </div>

        <div className="About-text grid grid-cols-1 lg:grid-cols-12 gap-y-20 gap-x-16">

          <div className="lg:col-span-7 space-y-10 font-sans text-lg leading-relaxed text-[#3d3228]/90">
            <p className="font-sans text-lg md:text-xl lg:text-2xl leading-relaxed text-[#3d3228]/90">
              I'm a <span className="font-semibold text-[#3d3228]">Computer Science graduate</span> who enjoys building
              web experiences that feel intentional — visually clear, responsive, and thoughtfully structured.
            </p>

            <p className="font-sans text-base md:text-lg lg:text-xl leading-relaxed text-[#3d3228]/80">
              I graduated with a Bachelor's degree in Computer Science from <span className="font-semibold">UC Riverside</span>,
              where I developed a strong foundation in problem-solving, software design, and full-stack development.
              I'm especially drawn to the space where clean UI meets solid backend logic.
            </p>

            <p className="font-sans text-base md:text-lg lg:text-xl leading-relaxed text-[#3d3228]/80">
              I like working with tools like <span className="font-semibold">React</span>, <span className="font-semibold">Node.js</span>,
              and <span className="font-semibold">TypeScript</span>, and I care a lot about details — layout, spacing, motion,
              and how a product feels to use, not just whether it works.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-14">
            <div className="flex items-center gap-4">
              <img src="/svg/sparkle-pink.svg" alt="pink sparkle" className="w-20" />
              <p className="font-sans text-base tracking-wide">
                Location - <span className="font-medium italic">Rialto, California</span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img src="/svg/sparkle-blue.svg" alt="blue sparkle" className="w-20" />
              <p className="font-sans text-base tracking-wide">
                Education - <span className="font-medium italic">B.S. Computer Science, UCR</span>
              </p>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <img src="/svg/sparkle-yellow.svg" alt="yellow sparkle" className="w-20" />
              <a href="#" aria-label="LinkedIn" target="_blank" className="hover:opacity-70 transition">
                <img src="/svg/linkedin-icon.svg" alt="" className="w-8 h-8" />
              </a>
              <a href="https://github.com/LuisHuerta4" target="_blank" aria-label="GitHub" className="hover:opacity-70 transition">
                <img src="/svg/github-icon.svg" alt="" className="w-8 h-8" />
              </a>
              <a href="mailto:LuisHuerta0518@gmail.com" target="_blank" aria-label="Email" className="hover:opacity-70 transition">
                <img src="/svg/email-icon.svg" alt="" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 mt-28">
          <div className="flex-1 h-px bg-[#3d3228]/40" />
          <div className="text-[#3d3228] text-xl">✦</div>
          <div className="flex-1 h-px bg-[#3d3228]/40" />
        </div>
      </div>
    </section>
  );
};

export default About;
