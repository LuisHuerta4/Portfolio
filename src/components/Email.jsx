import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

const Email = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const titleSplit = new SplitText(".contact-title", { type: "chars" });

        gsap.from(titleSplit.chars, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            yPercent: 100,
            opacity: 0,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        });

        gsap.from(".contact-form", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
            },
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power2.out",
        });
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        if (isSubmitting) return;
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            );
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="min-h-screen py-20 px-5 lg:px-0">
            <div className="container mx-auto max-w-4xl">
                <div className="overflow-hidden mb-16">
                    <h2 className="contact-title font-modern-negra text-6xl md:text-8xl text-center">
                        Let's Connect
                    </h2>
                </div>

                <div className="contact-form bg-[#ebe6e1] rounded-3xl p-8 md:p-12 shadow-lg">
                    <p className="text-center text-lg md:text-xl mb-8 font-sans">
                        Have any questions or just want to chat? Send me a message!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="form-group">
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-[#f3f0ed] border-2 border-transparent focus:border-[#3d3228] focus:outline-none transition-colors"
                                placeholder="Your name"
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-[#f3f0ed] border-2 border-transparent focus:border-[#3d3228] focus:outline-none transition-colors"
                                placeholder="your.email@example.com"
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="w-full px-4 py-3 rounded-xl bg-[#f3f0ed] border-2 border-transparent focus:border-[#3d3228] focus:outline-none transition-colors resize-none"
                                placeholder="Your Message"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 px-8 bg-[#3d3228] text-[#f3f0ed] rounded-xl font-medium text-lg hover:bg-[#2a221a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>

                        {submitStatus === "success" && (
                            <p className="text-center text-green-600 font-medium">
                                Message sent successfully! I'll get back to you soon.
                            </p>
                        )}

                        {submitStatus === "error" && (
                            <p className="text-center text-red-600 font-medium">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-[#3d3228]/60">
                        Or reach out directly at{" "}
                        <a
                            href="mailto:LuisHuerta0518@gmail.com"
                            className="underline hover:text-[#3d3228] transition-colors"
                        >
                            LuisHuerta0518@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Email;