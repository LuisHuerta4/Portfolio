import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function App() {
  const container = useRef();

  useGSAP(() => {
      gsap.to("#title", {
        y: 100,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 id="title" className="text-4xl font-bold opacity-0">
        My Portfolio
      </h1>
    </div>
  );
}

export default App;
