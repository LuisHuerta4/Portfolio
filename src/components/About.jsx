import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const About = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Title
    const titleSplit = new SplitText(".about-title", { type: "chars" });

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
      stagger: 0.05,
    });

    // Top divider
    const topLines = sectionRef.current.querySelectorAll(".divider-top .divider-line");
    const topStar = sectionRef.current.querySelector(".divider-top .divider-star");

    gsap.fromTo(topLines[0],
      { scaleX: 0, transformOrigin: "right" },
      {
        scaleX: 1,
        duration: 0.9,
        ease: "expo.inOut",
        scrollTrigger: { trigger: topLines[0], start: "top 85%", toggleActions: "play reset play reset" },
      }
    );
    gsap.fromTo(topLines[1],
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        duration: 0.9,
        ease: "expo.inOut",
        scrollTrigger: { trigger: topLines[1], start: "top 85%", toggleActions: "play reset play reset" },
      }
    );
    gsap.from(topStar, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(2)",
      scrollTrigger: { trigger: topStar, start: "top 85%", toggleActions: "play reset play reset" },
    });

    // Paragraphs
    const paraEls = sectionRef.current.querySelectorAll(".about-para");
    const paraSplits = [];

    paraEls.forEach((para, i) => {
      const split = new SplitText(para, { type: "lines" });
      paraSplits.push(split);

      gsap.from(split.lines, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play reset play reset",
        },
        y: 28,
        opacity: 0,
        duration: 0.75,
        ease: "expo.out",
        stagger: 0.07,
        delay: 0.15 + i * 0.2,
      });
    });

    // Info rows
    const infoRows = sectionRef.current.querySelectorAll(".about-info-row");

    gsap.from(infoRows, {
      scrollTrigger: {
        trigger: infoRows[0],
        start: "top 82%",
        toggleActions: "play reset play reset",
      },
      x: 40,
      opacity: 0,
      duration: 0.75,
      ease: "expo.out",
      stagger: 0.18,
    });

    // Bottom divider
    const botLines = sectionRef.current.querySelectorAll(".divider-bottom .divider-line");
    const botStar = sectionRef.current.querySelector(".divider-bottom .divider-star");

    gsap.fromTo(botLines[0],
      { scaleX: 0, transformOrigin: "right" },
      {
        scaleX: 1,
        duration: 0.9,
        ease: "expo.inOut",
        scrollTrigger: { trigger: botLines[0], start: "top 90%", toggleActions: "play reset play reset" },
      }
    );
    gsap.fromTo(botLines[1],
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        duration: 0.9,
        ease: "expo.inOut",
        scrollTrigger: { trigger: botLines[1], start: "top 90%", toggleActions: "play reset play reset" },
      }
    );
    gsap.from(botStar, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(2)",
      scrollTrigger: { trigger: botStar, start: "top 90%", toggleActions: "play reset play reset" },
    });

    // Sparkles
    gsap.to(".sparkle", {
      y: -7,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      titleSplit.revert();
      paraSplits.forEach((s) => s.revert());
    };
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

        <div className="divider-top flex items-center gap-6 mb-20">
          <div className="divider-line flex-1 h-px bg-[#3d3228]/40" />
          <div className="divider-star text-[#3d3228] text-xl">✦</div>
          <div className="divider-line flex-1 h-px bg-[#3d3228]/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 gap-x-16">
          <div className="lg:col-span-7 space-y-10 font-sans text-lg leading-relaxed text-[#3d3228]/90">
            <p className="about-para font-sans text-lg md:text-xl lg:text-2xl leading-relaxed text-[#3d3228]/90">
              I'm a <span className="font-semibold text-[#3d3228]">Computer Science graduate</span> who enjoys building
              web experiences that feel intentional, visually clear, responsive, and thoughtfully structured.
            </p>

            <p className="about-para font-sans text-base md:text-lg lg:text-xl leading-relaxed text-[#3d3228]/80">
              I graduated with a Bachelor's degree in Computer Science from <span className="font-semibold">UC Riverside</span>,
              where I developed a strong foundation in problem-solving, software design, and full-stack development.
              I'm especially drawn to the space where clean UI meets solid backend logic.
            </p>

            <p className="about-para font-sans text-base md:text-lg lg:text-xl leading-relaxed text-[#3d3228]/80">
              I like working with tools like <span className="font-semibold">React</span>, <span className="font-semibold">Node.js</span>,
              and <span className="font-semibold">JavaScript</span>, and I care a lot about details — layout, spacing, motion,
              and how a product feels to use, not just whether it works.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-14">
            <div className="about-info-row flex items-center gap-4">
              <img src="/svg/sparkle-pink.svg" alt="pink sparkle" className="sparkle w-20" />
              <p className="font-sans text-base tracking-wide">
                Location - <span className="font-medium italic">Rialto, California</span>
              </p>
            </div>

            <div className="about-info-row flex items-center gap-4">
              <img src="/svg/sparkle-blue.svg" alt="blue sparkle" className="sparkle w-20" />
              <p className="font-sans text-base tracking-wide">
                Education - <span className="font-medium italic">B.S. Computer Science, UCR</span>
              </p>
            </div>

            <div className="about-info-row flex items-center gap-10 pt-6">
              <img src="/svg/sparkle-yellow.svg" alt="yellow sparkle" className="sparkle w-20" />
              <a href="https://www.linkedin.com/in/luis-huerta-859b54332/" aria-label="LinkedIn" target="_blank" className="hover:opacity-70 transition">
                <img src="/svg/linkedin-icon.svg" alt="" className="w-8 h-8 transition-transform duration-300 hover:scale-150" />
              </a>
              <a href="https://github.com/LuisHuerta4" target="_blank" aria-label="GitHub" className="hover:opacity-70 transition">
                <img src="/svg/github-icon.svg" alt="" className="w-8 h-8 transition-transform duration-300 hover:scale-150" />
              </a>
              <a href="mailto:LuisHuerta0518@gmail.com" target="_blank" aria-label="Email" className="hover:opacity-70 transition">
                <img src="/svg/email-icon.svg" alt="" className="w-8 h-8 transition-transform duration-300 hover:scale-150" />
              </a>
            </div>
          </div>
        </div>

        <div className="divider-bottom flex items-center gap-6 mt-28">
          <div className="divider-line flex-1 h-px bg-[#3d3228]/40" />
          <div className="divider-star text-[#3d3228] text-xl">✦</div>
          <div className="divider-line flex-1 h-px bg-[#3d3228]/40" />
        </div>
      </div>
    </section>
  );
};

export default About;
