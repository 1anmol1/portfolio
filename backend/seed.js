require("dotenv").config();
const mongoose = require("mongoose");
const Portfolio = require("./models/Portfolio");

// Hardcoded data with the new Cloudinary images!
const portfolioData = {
  name: "Anmol Patil",
  title: "Product Designer & Full Stack Developer",
  role: "Product Designer & Developer · Brandkrit Technologies",
  phone: "+91 9834628034",
  summary:
    "Full Stack Web Developer and Product Designer specializing in the MERN stack and cloud architecture. Experienced in building scalable B2B SaaS applications, IoT platforms, and responsive UI/UX designs using Figma. Strong background in RESTful API development, CI/CD pipelines, and database management to deliver high-performance technical solutions.",
  about:
    "I'm a Full Stack Developer and Product Designer currently building at Brandkrit Technologies. I work across the entire stack — from designing pixel-perfect UIs in Figma to architecting scalable backends on AWS and Google Cloud.",
  education: [
    {
      school: "Sanjay Ghodawat University, Kolhapur",
      degree: "B.Tech, Computer Science and Engineering",
      duration: "08/2024 – 05/2027",
      score: "CGPA: 8.49",
    },
    {
      school: "Government College of Engineering, Karad",
      degree: "B.Tech, Electronics and Telecommunication (Transferred)",
      duration: "08/2023 – 05/2024",
      score: "CGPA: 9.18",
    },
    {
      school: "Jaysingpur College, Jaysingpur",
      degree: "Higher Secondary Certificate (HSC)",
      duration: "06/2021 – 05/2023",
      score: "92.50%",
    },
    {
      school: "Laxminarayan Malu Highschool, Jaysingpur",
      degree: "Secondary School Certificate (SSC)",
      duration: "06/2020 – 07/2021",
      score: "99.60%",
    },
  ],
  experience: [
    {
      role: "Product Designer and Developer",
      company: "Brandkrit Technologies",
      location: "Pune, India (Remote)",
      duration: "07/2026 – Present",
      points: [
        "Designed and developed full-stack client-facing web applications using React.js, Node.js, and Figma, integrating JWT and WebSockets to support over 500 active users.",
        "Developed RESTful and GraphQL APIs, managing SQL and NoSQL databases including MySQL, PostgreSQL, and MongoDB.",
        "Deployed scalable web architectures via AWS and Google Cloud utilizing Docker-based environments and CI/CD pipelines.",
      ],
    },
    {
      role: "Website Development Intern",
      company: "Brandkrit Technologies",
      location: "Pune, India (Remote)",
      duration: "12/2025 – 06/2026",
      points: [
        "Built responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS.",
        "Implemented secure JWT authentication and integrated Cloudinary storage and payment gateways for data scalability.",
      ],
    },
    {
      role: "Full Stack Web Developer Intern",
      company: "Yukti Yantra",
      location: "Kolhapur, India (Remote)",
      duration: "07/2025 – 12/2025",
      points: [
        "Engineered backend REST APIs using Node.js and PostgreSQL, optimizing database queries to improve data retrieval speeds by 20%.",
        "Developed interactive frontend UI components utilizing HTML5, CSS3, JavaScript (ES6+), and React.js.",
      ],
    },
  ],
  projects: [
    {
      id: "cleanconnect",
      name: "CleanConnect",
      subtitle: "Smart City Platform",
      link: "https://cleanconnectbyanmol.vercel.app/",
      github: "https://github.com/1anmol1/CleanConnect-Improved",
      image: "https://res.cloudinary.com/dcgjkxook/image/upload/v1787040704/Cleanconnect_sagdin.png",
      color: "#10b981",
      tags: ["React.js", "Node.js", "MongoDB Atlas", "ESP32", "IoT", "AI APIs", "Docker", "Google Maps API"],
      shortDescription:
        "AI-powered civic platform for reporting municipal issues with IoT smart waste management.",
      longDescription:
        "CleanConnect is a comprehensive smart city platform that bridges citizens, administrators, and municipal workers in a complete 360° workflow. It features automated issue categorization using AI APIs, real-time geolocation tracking via Google Maps, and an innovative IoT smart waste management routing system powered by ESP32 microcontrollers.",
      highlights: [
        "AI-powered automated categorization and geolocation for civic issue reporting",
        "IoT smart waste management routing system using ESP32 microcontrollers",
        "Multi-role dashboard: citizen, admin, and field worker interfaces",
        "Dockerized deployment for scalable infrastructure",
      ],
      achievement: "2nd Rank, Prarambha 2025 Hackathon",
    },
    {
      id: "dairy",
      name: "Dairy Management System",
      subtitle: "B2B SaaS Platform",
      link: "https://dairymanagementanmol.vercel.app/",
      github: "https://github.com/1anmol1/Dairy-Management",
      image: "https://res.cloudinary.com/dcgjkxook/image/upload/v1787040699/DairyManagement_sduaia.png",
      color: "#3b82f6",
      tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "AWS", "JWT", "WebSockets", "Docker", "CI/CD"],
      shortDescription:
        "B2B multi-tenant SaaS platform for dairy operational management and supply chain logistics.",
      longDescription:
        "A production-grade B2B SaaS platform architected for the dairy industry. It handles multi-tenant dairy operational management, supply chain logistics, and advanced financial tracking. The platform features a secure PostgreSQL relational database architecture, JWT authentication, real-time WebSocket updates, and is deployed on AWS with CI/CD pipelines.",
      highlights: [
        "Multi-tenant architecture supporting multiple dairy businesses",
        "Real-time WebSocket updates for live inventory and order tracking",
        "Multi-tier revenue tracking and financial analytics",
        "Secure JWT authentication with role-based access control",
        "AWS deployment with Docker-based CI/CD pipelines",
      ],
      achievement: null,
    },
    {
      id: "design-portal",
      name: "AI Design Portal",
      subtitle: "Interior Design AI Application",
      link: "https://intedesignbyanmol.vercel.app/",
      github: "https://github.com/1anmol1/InteDesign",
      image: "https://res.cloudinary.com/dcgjkxook/image/upload/v1787040701/InteDesign_dqginj.png",
      color: "#a855f7",
      tags: ["React.js", "Python", "FastAPI", "Cloudinary", "REST APIs", "Tailwind CSS"],
      shortDescription:
        "AI-powered interior design web app with generative AI suggestions and an interactive canvas board.",
      longDescription:
        "An AI-powered design portal built for interior design workflows. It leverages Python FastAPI for generative AI image suggestions via REST APIs, and features an interactive drag-and-drop canvas board for design exploration. Client communication and asset delivery are integrated directly into the portal via Cloudinary and a structured REST API communication portal.",
      highlights: [
        "Generative AI image suggestions powered by Python FastAPI",
        "Interactive drag-and-drop canvas board for design exploration",
        "Cloudinary integration for high-quality asset management",
        "Integrated REST API client communication portal",
      ],
      achievement: null,
    },
  ],
  skills: {
    languages: ["C", "C++", "Java", "Python", "JavaScript (ES6+)", "TypeScript (Basics)", "HTML5", "CSS3"],
    frameworks: ["React.js", "Node.js", "Express.js", "FastAPI", "Tailwind CSS", "Figma"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Google Cloud", "Vercel", "Hostinger", "Docker"],
    tools: ["REST", "GraphQL", "WebSockets", "JWT", "Git/GitHub", "Postman", "CI/CD"],
  },
  achievements: [
    {
      title: "Reliance Foundation Undergraduate Scholar",
      description: "Selected as one of 5,000 scholars nationwide out of 60,000+ applications.",
      iconName: "Trophy",
    },
    {
      title: "2nd Rank — Prarambha 2025 Hackathon",
      description: "Secured second place for developing the CleanConnect Smart City Platform.",
      iconName: "Medal",
    },
    {
      title: "1st Rank — National Science Day",
      description: "Won first place among 100+ participants in an intercollegiate competition for a Smart Dustbin prototype.",
      iconName: "Award",
    },
    {
      title: "1st Rank — Taluka Level (HSC)",
      description: "Achieved top academic standing in the Class 12 board examinations across the taluka.",
      iconName: "GraduationCap",
    },
  ],
  stats: {
    yearsCoding: "3+",
    projectsBuilt: "10+",
    internshipExp: "1yr+",
  },
  contact: {
    email: "patilanmolkop@gmail.com",
    linkedin: "https://www.linkedin.com/in/patil-anmol/",
    github: "https://github.com/1anmol1",
    leetcode: "https://leetcode.com/u/1anmol1/",
    resume: "/Anmol_Patil_Resume_Aug_26.pdf",
  },
};

const seedDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    await mongoose.connect(MONGO_URI);
    
    console.log("Connected to MongoDB. Wiping existing portfolio data...");
    await Portfolio.deleteMany({});
    
    console.log("Inserting new portfolio data...");
    await Portfolio.create(portfolioData);
    
    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();
