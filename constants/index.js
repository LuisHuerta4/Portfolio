const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "technologies",
        title: "Tech Stack",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    }
];

const techList = [
    {
        name: "React",
        color: "#53c1de",
        icon: "/svg/react-icon.svg",
    },
    {
        name: "JavaScript",
        color: "#FFE55E",
        icon: "/svg/javascript-icon.svg",
    },
    {
        name: "HTML",
        color: "#e44d26",
        icon: "/svg/html-icon.svg",
    },
    {
        name: "CSS",
        color: "#1172b8",
        icon: "/svg/css-icon.svg",
    },
    {
        name: "MongoDB",
        color: "#449d46",
        icon: "/svg/mongo-icon.svg",
    },
    {
        name: "TailwindCSS",
        color: "#38b2ac",
        icon: "/svg/tailwind-icon.svg",
    },
    {
        name: "Typescript",
        color: "#3178c6",
        icon: "/svg/typescript-icon.svg",
    },
    {
        name: "Node.js",
        color: "#8cc84b",
        icon: "/svg/node-icon.svg",
    },
    {
        name: "Postgres",
        color: "#336791",
        icon: "/svg/postgres-icon.svg",
    },
    {
        name: "GSAP",
        color: "#1ac44a",
        icon: "/svg/gsap-icon.jpg",
    },
    {
        name: "Git",
        color: "#de4c36",
        icon: "/svg/git-icon.svg",
    },
    {
        name: "C++",
        color: "#5c8dbc",
        icon: "/svg/C++-icon.svg",
    },
];

const projects = [
    {
        id: "project-1",
        name: "Job Application Tracker",
        image: "/images/Project-JobTracker.png",
        url: "https://jobtracker-dev.vercel.app",
        github: "https://github.com/LuisHuerta4/Job-Tracker?tab=readme-ov-file",
        title: "Job Application Tracker",
        stack: ["React", "Node.js", "Express", "TailwindCSS", "MongoDB", "JWT", "GSAP", "Axios", "Nodemailer"],
        description: "Application that helps users manage and track job applications in one place. Users can create, edit, and delete applications, view them in multiple formats (card, table, and kanban), and organize progress.",
    },
    {
        id: "project-2",
        name: "Score Stream",
        image: "/images/Project-ScoreStream.png",
        url: "https://scorestream-kzaf.onrender.com",
        github: "https://github.com/LuisHuerta4/ScoreStream",
        title: "Score Stream",
        stack: ["React", "Typescript", "Node.js", "Express", "TailwindCSS", "PostgreSQL", "WebSockets", "Zod", "Football API", "Arcjet"],
        description: "A full-stack live sports dashboard that streams football match data from top European leagues in real time. It polls the API-Football REST API, ingests fixtures, events, and statistics into a PostgreSQL database, and pushes updates to every connected client over WebSockets",
    },
    {
        id: "project-3",
        name: "Stock Tracker and Notifier",
        image: "/images/Project-StockTracker.png",
        url: "",
        github: "https://github.com/LuisHuerta4/Stocket-Stock-Tracker",
        title: "Stock Tracker and Notifier",
        stack: ["Next.js", "TypeScript", "Inngest", "MongoDB", "TailwindCSS", "Finnhub API"],
        description: "A web application that allows users to track their favorite stocks and receive real-time notifications on price changes, news, and market trends. Users can create a personalized watchlist, set custom alerts, and view detailed stock performance charts.",
    },
    {
        id: "project-4",
        name: "AI Resume Analyzer",
        image: "/images/Project-AI-Resume-Analyzer.png",
        url: "",
        github: "https://github.com/LuisHuerta4/Resume-Analyzer",
        title: "AI Resume Analyzer",
        stack: ["React", "Typescript", "Node.js", "TailwindCSS", "Zustand", "JS", "Puter"],
        description: "A web application that helps job seekers improve their resumes by providing AI-powered, job-specific feedback. Users can upload their resumes, enter job details, and instantly receive ATS scores, strengths, weaknesses, and tailored suggestions for improvement.",
    },
    {
        id: "project-5",
        name: "Tennis Landing Page",
        image: "/images/Project-Tennis-Landing_page.png",
        url: "https://w-tennis-rackets.vercel.app/",
        github: "https://github.com/LuisHuerta4/Tennis-Landing-Page",
        title: "Tennis Landing Page",
        stack: ["React", "Three.js", "GSAP", "TailwindCSS"],
        description: "An immersive, scroll-driven product landing page for the Wilson tennis racket Performance Series. It showcases the Wilson Blade 98 and Performance Series racket lineup through a cinematic, interactive experience. As users scroll through the page, a 3D tennis racket model animates in real-time,repositioning, rotating, and scaling across each section.",
    },
];

export {
    navLinks,
    techList,
    projects
};