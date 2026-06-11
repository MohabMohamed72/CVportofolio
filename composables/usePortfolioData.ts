import HSE from "../public/images/HSE.svg";
import ORBIT from "../public/images/logo_orbit_footer.png";
import forever from "../public/images/forever.png";
import fimpire from "../public/images/fimpire.png";
import cart from "../public/images/cart.webp";
import Plane from "../public/images/plane.webp";
import edu from "../public/images/books.webp";
export function usePortfolioData() {
  const personalInfo = {
    name: "Mohab Mohamed",
    title: "Frontend Developer",
    email: "mohabmohamedd772@gmail.com",
    phone: "+20 100 759 9123",
    location: "Mansoura, Egypt",
    portfolio: "https://portfolio772.vercel.app/",
    linkedin: "https://linkedin.com/in/mohab-mohamed-a5121024b",
    github: "https://github.com/MohabMohamed72",
    bio: `Motivated Frontend Developer with 1+ year of hands-on experience building responsive, scalable web applications using Vue.js, React.js, Angular, Nuxt.js, and TypeScript. Skilled in translating Figma designs into pixel-perfect UIs with Tailwind CSS and SCSS. Comfortable using AI-powered development tools like GitHub Copilot, Cursor AI, and ChatGPT to write cleaner code faster.`,
  };

  const skills = {
    frontend: [
      { name: "Vue.js 2/3", level: 92, icon: "🟢" },
      { name: "React.js", level: 85, icon: "⚛️" },
      { name: "Angular", level: 78, icon: "🔺" },
      { name: "Nuxt.js", level: 90, icon: "💚" },
      { name: "Next.js", level: 75, icon: "▲" },
      { name: "TypeScript", level: 88, icon: "🔷" },
      { name: "JavaScript", level: 95, icon: "⚡" },
      { name: "HTML5 / CSS3", level: 96, icon: "🎨" },
      { name: ".NET", level: 95, icon: "🔺" },
      { name: "Node js", level: 95, icon: "▲" },
      { name: "C#", level: 95, icon: "⚛️" },
      { name: "C", level: 95, icon: "🎨" },
      { name: "Paython", level: 95, icon: "🔷" },
    ],
    styling: [
      { name: "Tailwind CSS", level: 93 },
      { name: "SCSS / SASS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
    tools: [
      "Redux",
      "Vuex",
      "Pinia",
      "NgRx",
      "REST APIs",
      "GraphQL",
      "Axios",
      "Git / GitHub",
      "Vite",
      "Webpack",
      "Jest",
      "Cypress",
      "Docker",
      "Figma",
      "Agile / Scrum",
      "Jira",
    ],
    ai: [
      {
        category: "Code Assistants",
        icon: "🤖",
        tools: ["GitHub Copilot", "Cursor AI", "Codeium", "Tabnine"],
        description:
          "Daily use for intelligent code completion, refactoring, and rapid prototyping.",
      },
      {
        category: "AI Chatbots",
        icon: "💬",
        tools: ["ChatGPT (GPT-4o)", "Claude (Anthropic)", "Gemini (Google)"],
        description:
          "Debugging, code review, documentation, and architectural decisions.",
      },
      {
        category: "Design Tools",
        icon: "🎨",
        tools: ["Figma AI", "Galileo AI", "Uizard", "v0 by Vercel"],
        description:
          "Rapid UI prototyping, wireframe generation, and design-to-code workflows.",
      },
    ],
  };

  const experiences = [
    {
      title: " Frontend Developer",
      company: "Full-Time",
      period: "Jan 2024 – Present",
      location: "Mansoura, Egypt",
      highlights: [
        "Built and maintained 4 web applications (dashboards + client-facing websites) using Vue 3, Nuxt.js, React.js, Angular, and TypeScript.",
        "Translated Figma wireframes into responsive, pixel-perfect UIs using Tailwind CSS and SCSS.",
        "Integrated RESTful APIs and payment gateways (Stripe, PayPal) into frontend applications.",
        "Contributed to building AI-powered chatbot and smart search features in production.",
        "Built admin dashboards with data visualization (Chart.js), role-based views, and real-time tracking.",
        "Collaborated in Agile/Scrum workflow using Git, GitHub, and Jira.",
        "Used GitHub Copilot and ChatGPT daily to accelerate development velocity by 40%.",
      ],
    },
    {
      title: "Programming Instructor",
      company: "Part-Time",
      period: "2022 – Present",
      location: "Mansoura, Egypt",
      highlights: [
        "Taught Python, C, Arduino, Machine Learning, Computer Vision, and Scratch to 200+ students.",
        "Created structured lesson plans with hands-on projects.",
        "Conducted workshops on AI tools for developers.",
      ],
    },
    {
      title: "Embedded Systems Trainee",
      company: "NTI (National Telecommunication Institute)",
      period: "2023",
      location: "Egypt",
      highlights: [
        "Completed intensive training in embedded systems and microcontroller programming (AVR, ARM).",
        "Hands-on experience with Raspberry Pi, sensor interfacing, and real-time systems.",
      ],
    },
  ];

  const projects = [
    {
      title: "HSE Safety Platform",
      subtitle: "Health, Safety & Environment",
      link: "https://hse.techlabeg.com/",
      description:
        "HSE platform promoting safety awareness with service plans, subscription management, and comprehensive admin dashboard.",
      tech: [
        "Vue 3",
        "TypeScript",
        "Tailwind CSS 4",
        "PrimeVue 4",
        "Pinia",
        "Axios",
      ],
      features: [
        "Safety resources",
        "Pricing plans",
        "Subscription tracking",
        "CMS dashboard",
      ],
      color: "#ef4444",
      image: HSE,
      details: {
        overview:
          "An enterprise Health, Safety & Environment (HSE) management web application built with Vue 3 and Vite. The system provides dedicated modules for managing equipment, observations, hazards, incidents, and safety workflows within an organization — with full multi-language support (English & Arabic/RTL).",
        highlights: [
          "Equipment management — CRUD with inspection tracking, certification, and decommissioning",
          "Safety observations — hazard types, near-miss tracking, and action items",
          "Hazard identification and incident logging with image attachments",
          "Configurable inspection/checklist template builder",
          "Role-based authentication, permissions, and organization management",
          "Multi-language support: English and Arabic (RTL layout via vue-i18n)",
          "Analytics dashboard with Chart.js and ApexCharts",
          "Excel import/export and PDF report generation",
          "Real-time notifications via WebSocket (STOMP protocol)",
        ],
        techStack: [
          {
            category: "Framework",
            items: ["Vue 3 (Composition API)", "Vite", "TypeScript"],
          },
          {
            category: "UI & Styling",
            items: ["PrimeVue 4 (Aura theme)", "Tailwind CSS 4", "Sass"],
          },
          {
            category: "State & Routing",
            items: ["Pinia", "pinia-plugin-persistedstate", "Vue Router"],
          },
          {
            category: "HTTP & Realtime",
            items: ["Axios", "WebSocket (STOMP)"],
          },
          {
            category: "Charts",
            items: ["Chart.js", "ApexCharts (vue3-apexcharts)"],
          },
          { category: "i18n", items: ["vue-i18n (EN + AR / RTL)"] },
          { category: "Export", items: ["jsPDF", "html2canvas", "xlsx"] },
        ],
      },
    },
    {
      title: "Orbit System",
      subtitle: "Engineering Company Management Platform",
      link: "https://orbitconsults.com/",

      description:
        "Full dashboard + website for managing engineering projects, clients, reservations, and financial operations. Supports complete project lifecycle with real-time analytics.",
      tech: ["Vue 3", "TypeScript", "SCSS", "Pinia", "REST APIs", "Chart.js"],
      features: [
        "Project lifecycle management",
        "Real-time analytics dashboard",
        "Invoice management",
        "Multi-role access control",
      ],
      color: "#42d392",
      image: ORBIT,
      details: {
        overview:
          "Orbit System is a comprehensive engineering company management platform covering the full project lifecycle — from client acquisition through delivery and invoicing. Built with a feature-driven architecture, it provides separate dashboards for admins, project managers, and clients.",
        highlights: [
          "Full project lifecycle tracking from proposal to delivery",
          "Client & reservation management with automated notifications",
          "Financial module: invoices, payments, and revenue reporting",
          "Role-based access control for admin, manager, and client views",
          "Real-time analytics with Chart.js visualizations",
          "Responsive design with SCSS custom theming",
        ],
        techStack: [
          {
            category: "Framework",
            items: ["Vue 3 (Composition API)", "TypeScript"],
          },
          { category: "State & Routing", items: ["Pinia", "Vue Router"] },
          {
            category: "Styling",
            items: ["SCSS / SASS", "Custom design system"],
          },
          { category: "Data & APIs", items: ["REST APIs", "Axios"] },
          { category: "Charts", items: ["Chart.js"] },
        ],
      },
    },
    {
      title: "Education System",
      subtitle: "E-Learning Platform",
      description:
        "Full-featured LMS with course catalog, video lectures, AI chatbot for student support, and secure multi-method payment processing.",
      tech: [
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
        "AI Chatbot",
        "Payment Gateway",
      ],
      features: [
        "AI-powered chatbot",
        "Course catalog with rich content",
        "Payment integration",
        "Admin analytics",
      ],
      color: "#647eff",
      image: edu,
      details: {
        overview:
          "A full-featured Learning Management System (LMS) enabling educators to publish courses and students to enroll, watch lectures, and track progress. Integrated an AI chatbot for real-time student support and multiple payment gateways for secure checkout.",
        highlights: [
          "Course catalog with categories, search, and filtering",
          "Video lecture player with progress tracking",
          "AI-powered chatbot for instant student support",
          "Multi-method payment integration (Stripe, PayPal)",
          "Admin dashboard with enrollment analytics",
          "Rich content editor for course creation",
        ],
        techStack: [
          { category: "Framework", items: ["Vue.js", "TypeScript"] },
          { category: "Styling", items: ["Tailwind CSS"] },
          { category: "State", items: ["Pinia"] },
          {
            category: "AI & Payments",
            items: ["AI Chatbot integration", "Stripe", "PayPal"],
          },
          { category: "APIs", items: ["REST APIs", "Axios"] },
        ],
      },
    },
    {
      title: "Alkhalil Traveling",
      subtitle: "Travel & Booking Platform",
      description:
        "Comprehensive travel platform with flight booking, hotel reservations, room management, and e-ticket generation with multi-method payments.",
      tech: [
        "Vue.js",
        "TypeScript",
        "SCSS",
        "REST APIs",
        "Payment Integration",
      ],
      features: [
        "Flight booking system",
        "Hotel reservation",
        "E-ticket generation",
        "Revenue reporting",
      ],
      color: "#f59e0b",
      image: Plane,
      details: {
        overview:
          "Alkhalil Traveling is a full-stack travel booking platform handling flights, hotels, and package tours. It generates e-tickets, manages room inventory, and provides a back-office portal for agents and admins to track bookings and revenue.",
        highlights: [
          "Flight search and booking with seat selection",
          "Hotel reservation with real-time room availability",
          "E-ticket generation and PDF export",
          "Multi-method payment processing",
          "Revenue and booking analytics reports",
          "Admin back-office for managing inventory and agents",
        ],
        techStack: [
          { category: "Framework", items: ["Vue.js", "TypeScript"] },
          { category: "Styling", items: ["SCSS"] },
          { category: "APIs", items: ["REST APIs", "Axios"] },
          { category: "Payments", items: ["Payment Gateway integration"] },
          { category: "Export", items: ["PDF e-ticket generation"] },
        ],
      },
    },
    {
      title: "Fashion Store",
      subtitle: "Clothing E-Commerce Platform",
      link: "https://ecommerce8.netlify.app/",
      description:
        "Modern fashion e-commerce platform for men, women, and kids with product browsing, shopping cart, category filtering, and responsive user experience.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      features: [
        "Men, Women & Kids categories",
        "Shopping cart",
        "Product filtering",
        "Responsive design",
        "Modern UI/UX",
      ],
      color: "#ec4899",
      image: forever,
      details: {
        overview:
          "A responsive fashion e-commerce application built with React.js and Tailwind CSS. The platform provides a seamless shopping experience for men's, women's, and kids' clothing collections.",
        highlights: [
          "Modern responsive design for all devices",
          "Category-based product browsing",
          "Shopping cart functionality",
          "Fast performance with React.js",
          "Tailwind CSS powered UI",
          "Clean and intuitive user experience",
        ],
        techStack: [
          {
            category: "Frontend",
            items: ["React.js", "JavaScript"],
          },
          {
            category: "Styling",
            items: ["Tailwind CSS"],
          },
        ],
      },
    },
    {
      title: "Mega E-Commerce",
      subtitle: "Multi-Category Online Marketplace",
      link: "https://ecommerce759.netlify.app/",
      description:
        "Comprehensive e-commerce marketplace featuring electronics, mobiles, laptops, furniture, perfumes, food products, and more.",
      tech: ["Vue.js", "TypeScript", "Tailwind CSS", "Pinia"],
      features: [
        "Multi-category marketplace",
        "Electronics & mobiles",
        "Furniture & home products",
        "Perfumes & fashion",
        "Shopping cart",
        "Product search",
      ],
      color: "#10b981",
      image: cart,
      details: {
        overview:
          "A complete Vue.js e-commerce marketplace offering a wide range of products including mobiles, laptops, furniture, perfumes, food items, and other consumer products.",
        highlights: [
          "Multiple product categories",
          "Product search and filtering",
          "Responsive shopping experience",
          "State management with Pinia",
          "Modern Vue.js architecture",
          "Optimized performance",
        ],
        techStack: [
          {
            category: "Frontend",
            items: ["Vue.js", "TypeScript"],
          },
          {
            category: "State Management",
            items: ["Pinia"],
          },
          {
            category: "Styling",
            items: ["Tailwind CSS"],
          },
        ],
      },
    },
    {
      title: "FilmPire",
      subtitle: "Movies & Actors Discovery Platform",
      link: "https://filmpiren.netlify.app/",
      description:
        "Movie discovery platform featuring movies, actors, ratings, movie details, cast information, and entertainment content.",
      tech: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS"],
      features: [
        "Movie browsing",
        "Actor profiles",
        "Movie details",
        "Ratings and information",
        "Search functionality",
        "Responsive UI",
      ],
      color: "#8b5cf6",
      image: fimpire,
      details: {
        overview:
          "A movie and entertainment platform built with React.js that allows users to explore movies, actors, ratings, cast details, and other cinema-related information.",
        highlights: [
          "Movie catalog browsing",
          "Actor and cast information",
          "Detailed movie pages",
          "Search functionality",
          "API-driven content",
          "Responsive modern design",
        ],
        techStack: [
          {
            category: "Frontend",
            items: ["React.js", "JavaScript"],
          },
          {
            category: "Data",
            items: ["REST APIs", "Axios"],
          },
          {
            category: "Styling",
            items: ["Tailwind CSS"],
          },
        ],
      },
    },
  ];

  const education = {
    degree: "Bachelor of Engineering",
    department: "Mechatronics Department",
    university: "Mansoura University, Faculty of Engineering",
    period: "2019 – 2024",
    description:
      "Interdisciplinary program covering software engineering, embedded systems, computer architecture, control systems, and robotics.",
  };

  return { personalInfo, skills, experiences, projects, education };
}
