const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    }
]

const techList = [
    {
        name: "JavaScript",
        color: "#FFE55E",
        icon: "/svg/javascript-icon.svg",
    },
    {
        name: "React",
        color: "#53c1de",
        icon: "/svg/react-icon.svg",
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
];

const projects = [
    {
        id: "project-1",
        name: "Spotify BPM Sorter",
        image: "/images/Project-1.png",
        url: "https://spotify.com",
        title: "Spotify BPM Sorter",
        stack: ["React", "Node.js", "Express", "Spotify API"],
        description: "The bpm of songs can have differnt effects on a persons mood and energy levels. This project is a web application where users can log in with their Spotify account, select a playlist, and the app will analyze the songs and sort them into different playlist based on their BPM ranges.",
    },
    {
        id: "project-2",
        name: "AI Resume Analyzer",
        image: "/images/Project-2.png",
        url: "https://github.com/LuisHuerta4/Resume-Analyzer",
        title: "AI Resume Analyzer",
        stack: ["React", "Typescript", "Node.js", "TailwindCSS", "Zustand", "JS", "Puter"],
        description: "A Web application that helps job seekers improve their resumes by providing AI-powered, job-specific feedback. Users can upload their resumes, enter job details, and instantly receive ATS scores, strengths, weaknesses, and tailored suggestions for improvement.",
    },
    {
        id: "project-3",
        name: "Stock Tracker and Notifier",
        image: "/images/Project-3.png",
        url: "https://github.com/LuisHuerta4/Stocket-Stock-Tracker",
        title: "Stock Tracker and Notifier",
        stack: ["Next.js", "TypeScript", "Inngest", "TailwindCSS", "Stock API"],
        description: "A web application that allows users to track their favorite stocks and receive real-time notifications on price changes, news, and market trends. Users can create a personalized watchlist, set custom alerts, and view detailed stock performance charts.",
    }
];

export {
    navLinks,
    techList,
    projects
};