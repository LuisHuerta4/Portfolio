import { navLinks } from "../../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top", //when bottom of navbar reaches top of view port
            }
        });

        navTween.fromTo("nav", { backgroundColor: "transparent" }, {
            backgroundColor: "#ebe6e1",
            duration: 1,
            ease: "power1.inOut",
        });
    })

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
    )
}

export default Navbar