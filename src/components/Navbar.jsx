import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Navbar = () => {

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: "#home",
            start: "bottom top",
            onEnter: () =>
                gsap.to("nav", {
                    backgroundColor: "rgba(235, 230, 225, 0.88)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 1px 0 rgba(61, 50, 40, 0.08)",
                    duration: 0.5,
                    ease: "power2.out",
                }),
            onLeaveBack: () =>
                gsap.to("nav", {
                    backgroundColor: "transparent",
                    backdropFilter: "blur(0px)",
                    boxShadow: "none",
                    duration: 0.5,
                    ease: "power2.out",
                }),
        });
    });

    return (
        <nav className="px-10">
            <div>
                <a href="#home" className="font-serif flex items-center gap-2">
                    <p>Luis' Portfolio</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id} className="font-sans uppercase">
                            <a href={`#${link.id}`} className="hover:text-[#3d3228]/70">{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;