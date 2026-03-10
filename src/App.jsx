import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Email from "./components/Email";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const curtainRef = useRef(null);

  useGSAP(() => {
    gsap.to(curtainRef.current, {
      yPercent: -100,
      duration: 1.1,
      delay: 0.2,
      ease: "expo.inOut",
      onComplete: () => gsap.set(curtainRef.current, { display: "none" }),
    });
  });

  return (
    <main>
      <div
        ref={curtainRef}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#f3f0ed",
          zIndex: 9999,
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Email />
    </main>
  );
}

export default App;
