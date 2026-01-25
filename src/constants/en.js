import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    threejs,
    web_development,
    Robotics,
    ESP32,
    Arduino,
    Smart_Car_Project,
    Gemini_with_ESP32,
    Courses_Platform,
    portfolio_2d,
    Smat_wheather,
    Smart_Home,
    portfolio_3d,
    Ahmed_Alaa,
} from "../assets";

export const en = {
    navLinks: [
        {
            id: "about",
            title: "About",
        },
        {
            id: "work",
            title: "Experience",
        },
        {
            id: "skills",
            title: "Skills",
        },
        {
            id: "contact",
            title: "Contact",
        },
    ],
    services: [
        {
            title: "Web Developer",
            icon: web_development,
        },
        {
            title: "Embedded Systems",
            icon: Arduino,
        },
        {
            title: "IoT Solutions",
            icon: ESP32,
        },
        {
            title: "Robotics Engineer",
            icon: Robotics,
        },
    ],
    technologies: [
        {
            name: "React JS",
            icon: reactjs,
        },
        {
            name: "Tailwind CSS",
            icon: tailwind,
        },
        {
            name: "Three JS",
            icon: threejs,
        },
        {
            name: "JavaScript",
            icon: javascript,
        },
        {
            name: "Node JS",
            icon: nodejs,
        },
        {
            name: "HTML 5",
            icon: html,
        },
        {
            name: "CSS 3",
            icon: css,
        },
        {
            name: "git",
            icon: git,
        },
    ],
    experiences: [
        {
            title: "Freelance Frontend Developer",
            company_name: "Self-employed",
            iconBg: "#0188E3",
            date: "Jan 2023 - Present",
            points: [
                "Built responsive and interactive web apps using React.js, Tailwind CSS, and GSAP.",
                "Developed and deployed modern landing pages and portfolio websites for clients.",
                "Integrated APIs and handled form validation, animations, and smooth scroll effects.",
                "Delivered pixel-perfect UI designs based on Figma and Adobe XD mockups.",
            ],
        },
        {
            title: "Full Stack Development Trainee",
            company_name: "Sheryians Coding School",
            iconBg: "#ffff",
            date: "Aug 2023 - Mar 2025",
            points: [
                "Completed an intensive training program focused on MERN stack development.",
                "Built multiple full-stack projects, including CRUD apps and authentication systems.",
                "Worked with tools like Node.js, Express.js, MongoDB, React.js, and Git.",
                "Gained hands-on experience in deploying apps and following clean code practices.",
            ],
        },
    ],
    testimonials: [
        {
            testimonial:
                "I thought it was impossible to make a website as beautiful as our product, but Essam proved me wrong.",
            name: "Sara Lee",
            designation: "CFO",
            company: "Acme Co",
            image: "https://randomuser.me/api/portraits/women/4.jpg",
        },
        {
            testimonial:
                "I've never met a developer who truly cares about their clients' success like Essam does.",
            name: "Chris Brown",
            designation: "COO",
            company: "DEF Corp",
            image: "https://randomuser.me/api/portraits/men/5.jpg",
        },
        {
            testimonial:
                "After Essam optimized our website, our traffic increased by 50%. We can't thank them enough!",
            name: "Lisa Wang",
            designation: "CTO",
            company: "456 Enterprises",
            image: "https://randomuser.me/api/portraits/women/6.jpg",
        },
    ],
    projects: [
        {
            name: "Smart_Car_Project",
            description:
                "An autonomous vehicle built with Arduino, featuring obstacle detection, line following, and wireless control capabilities.",
            tags: [
                { name: "arduino", color: "blue-text-gradient" },
                { name: "c++", color: "green-text-gradient" },
                { name: "robotics", color: "pink-text-gradient" },
            ],
            image: Smart_Car_Project,
            source_code_link: "https://github.com/essam778",
            live_website_link: "#",
            category: "robotics",
            details: {
                overview: "This autonomous smart car represents my first major robotics project, combining hardware design, sensor integration, and intelligent programming. The vehicle can navigate obstacles, follow lines, and be controlled wirelessly via Bluetooth.",
                techStack: [
                    "Microcontroller: Arduino Uno R3 for main control",
                    "Motors: Dual DC motors with L298N motor driver",
                    "Sensors: HC-SR04 ultrasonic sensor for obstacle detection",
                    "Line Detection: IR sensor array for line following",
                    "Communication: HC-05 Bluetooth module for wireless control",
                    "Power: 18650 Li-ion battery pack"
                ],
                features: [
                    "Autonomous Mode: Obstacle avoidance using ultrasonic sensors",
                    "Line Following: Precise line detection algorithms",
                    "Manual Control: Bluetooth-based smartphone control",
                    "Speed Control: PWM-based motor speed regulation"
                ]
            }
        },
        {
            name: "Gemini_with_ESP32",
            description:
                "ESP32 microcontroller integrated with Google's Gemini AI for intelligent data processing and real-time decision making.",
            tags: [
                { name: "esp32", color: "blue-text-gradient" },
                { name: "gemini-ai", color: "green-text-gradient" },
                { name: "iot", color: "pink-text-gradient" },
            ],
            image: Gemini_with_ESP32,
            source_code_link: "https://github.com/essam778/ESP32-with-Gemini-AI.git",
            live_website_link: "#",
            category: "ai",
            details: {
                overview: "Combining the power of ESP32 microcontrollers with Google's Gemini AI, creating an intelligent IoT system capable of natural language understanding and autonomous decision-making.",
                techStack: [
                    "Microcontroller: ESP32-WROOM-32 with WiFi & Bluetooth",
                    "AI Integration: Google Gemini API for intelligent processing",
                    "Sensors: DHT22 temp/humidity, MQ gas sensors",
                    "Display: OLED for real-time data visualization",
                    "Cloud: Firebase for data storage and monitoring"
                ],
                features: [
                    "Natural Language: Voice commands and text-based interactions",
                    "Pattern Recognition: Anomaly detection in sensor data",
                    "Predictive Analysis: Trend forecasting and smart alerts",
                    "Adaptive Learning: System improves with usage patterns"
                ]
            }
        },
        {
            name: "Courses_Platform",
            description:
                "A modern, responsive platform designed for students, offering free online courses curated from quality sources.",
            tags: [
                { name: "html/css", color: "blue-text-gradient" },
                { name: "odoo", color: "green-text-gradient" },
                { name: "javascript", color: "pink-text-gradient" },
            ],
            image: Courses_Platform,
            source_code_link: "#",
            live_website_link: "https://moral2.odoo.com",
            category: "web",
            details: {
                overview: "A comprehensive platform designed for high school students, offering free online courses in various subjects with easy navigation and student tracking.",
                techStack: [
                    "Platform: Odoo ERP",
                    "Backend: Python (Odoo Framework)",
                    "Frontend: HTML, CSS, JavaScript",
                    "Database: PostgreSQL for stable data storage",
                    "Hosting: Cloud-deployed for 24/7 access"
                ],
                features: [
                    "Interactive Courses: Engaging lessons with multimedia",
                    "Course Tracking: Monitor learning progress and completions",
                    "Free Access: High quality education for free",
                    "Mobile Optimized: Smooth experience on all devices"
                ]
            }
        },
        {
            name: "portfolio_2d",
            description:
                "A responsive portfolio website built with modern web tech to showcase projects and skills as a robotics engineer.",
            tags: [
                { name: "tailwind", color: "blue-text-gradient" },
                { name: "javascript", color: "green-text-gradient" },
                { name: "web-dev", color: "pink-text-gradient" },
            ],
            image: portfolio_2d,
            source_code_link: "https://github.com/essam778/Personal-Website.git",
            live_website_link: "https://essam778.github.io/Personal-Website/",
            category: "web",
            details: {
                overview: "My previous personal portfolio website, designed to showcase skills and projects as a developer and robotics engineer with a focus on clean UI.",
                techStack: [
                    "Frontend: HTML, CSS, JavaScript, Tailwind CSS",
                    "Responsive: Mobile-first design architecture",
                    "Deployment: GitHub Pages automated hosting",
                    "Version Control: Git & GitHub workflow"
                ],
                features: [
                    "Modern UI: Clean, interactive user interface",
                    "Responsive: Optimized for desktop, tablet, and mobile",
                    "Project Showcase: Categorized display of achievements",
                    "Smooth Navigation: Intuitive user journey"
                ]
            }
        },
        {
            name: "Smat_wheather",
            description:
                "IoT-based weather monitoring system with real-time data collection, cloud storage, and mobile integration.",
            tags: [
                { name: "esp32", color: "blue-text-gradient" },
                { name: "firebase", color: "green-text-gradient" },
                { name: "sensors", color: "pink-text-gradient" },
            ],
            image: Smat_wheather,
            source_code_link: "https://github.com/essam778/Smart-Weather-Station.git",
            live_website_link: "#",
            category: "embedded",
            details: {
                overview: "An IoT-based weather monitoring system that collects real-time environmental data and allows users to view it through a cloud-based app.",
                techStack: [
                    "Microcontroller: ESP32 with Wi-Fi/Bluetooth",
                    "Sensors: DHT22 (Temp/Hum), BMP180 (Pressure)",
                    "Cloud API: Firebase real-time data storage",
                    "Communication: MQTT protocol for data transmission",
                    "Mobile App: Integration for remote monitoring"
                ],
                features: [
                    "Real-Time Monitoring: Live environmental data dashboard",
                    "Cloud Sync: Secure data storage and retrieval",
                    "Data Alerts: Instant notifications for changes",
                    "Energy Efficient: Optimized for long-term battery use"
                ]
            }
        },
        {
            name: "Smart_Home",
            description:
                "Comprehensive home automation system with voice control, scheduling, and energy monitoring capabilities.",
            tags: [
                { name: "arduino", color: "blue-text-gradient" },
                { name: "automation", color: "green-text-gradient" },
                { name: "iot", color: "pink-text-gradient" },
            ],
            image: Smart_Home,
            source_code_link: "https://github.com/essam778",
            live_website_link: "#",
            category: "embedded",
            details: {
                overview: "A comprehensive home automation system integrating voice control, scheduling, and energy monitoring using Arduino and MQTT.",
                techStack: [
                    "Microcontroller: Arduino Uno with Wi-Fi module",
                    "Voice Control: Google Assistant / Alexa Integration",
                    "Communication: MQTT protocol for device handling",
                    "Sensors: Motion, light, and temperature sensors",
                    "App: Custom mobile interface for control"
                ],
                features: [
                    "Voice Control: Hands-free device management",
                    "Smart Scheduling: Automatic appliance timing",
                    "Energy Monitoring: Real-time power usage tracking",
                    "Remote Access: Control your home from anywhere"
                ]
            }
        },
        {
            name: "portfolio_3d",
            description:
                "A responsive portfolio website built with modern web tech to showcase projects and skills as a robotics engineer.",
            tags: [
                { name: "tailwind", color: "blue-text-gradient" },
                { name: "javascript", color: "green-text-gradient" },
                { name: "web-dev", color: "pink-text-gradient" },
            ],
            image: portfolio_3d,
            source_code_link: "https://github.com/essam778/Personal-Website.git",
            live_website_link: "https://essam778.github.io/Personal-Website/",
            category: "web",
            details: {
                overview: "My previous personal portfolio website, designed to showcase skills and projects as a developer and robotics engineer with a focus on clean UI.",
                techStack: [
                    "Frontend: HTML, CSS, JavaScript, Tailwind CSS",
                    "Responsive: Mobile-first design architecture",
                    "Deployment: GitHub Pages automated hosting",
                    "Version Control: Git & GitHub workflow"
                ],
                features: [
                    "Modern UI: Clean, interactive user interface",
                    "Responsive: Optimized for desktop, tablet, and mobile",
                    "Project Showcase: Categorized display of achievements",
                    "Smooth Navigation: Intuitive user journey"
                ]
            }
        },
        {
            name: "Ahmed_Alaa",
            description:
                "A responsive portfolio website built with modern web tech to showcase projects and skills as a robotics engineer.",
            tags: [
                { name: "tailwind", color: "blue-text-gradient" },
                { name: "javascript", color: "green-text-gradient" },
                { name: "web-dev", color: "pink-text-gradient" },
            ],
            image: Ahmed_Alaa,
            source_code_link: "https://github.com/essam778/Personal-Website.git",
            live_website_link: "https://essam778.github.io/Personal-Website/",
            category: "web",
            details: {
                overview: "My previous personal portfolio website, designed to showcase skills and projects as a developer and robotics engineer with a focus on clean UI.",
                techStack: [
                    "Frontend: HTML, CSS, JavaScript, Tailwind CSS",
                    "Responsive: Mobile-first design architecture",
                    "Deployment: GitHub Pages automated hosting",
                    "Version Control: Git & GitHub workflow"
                ],
                features: [
                    "Modern UI: Clean, interactive user interface",
                    "Responsive: Optimized for desktop, tablet, and mobile",
                    "Project Showcase: Categorized display of achievements",
                    "Smooth Navigation: Intuitive user journey"
                ]
            }
        },
    ],
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/essam778",
            color: "#181717",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/essam-hisham-728bb4395/",
            color: "#0077B5",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/essamhisham77/",
            color: "#E4405F",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/profile.php?id=100044822680777",
            color: "#1877F2",
        },
    ],
    // General UI labels
    ui: {
        hero: {
            headText: "Hi, I'm",
            subText: [
                "I develop 3D visuals, user",
                "interfaces and web applications",
            ],
            typewriterWords: ["IOT", "Robotics", "Arduino&ESP32", "Web Development"]
        },
        about: {
            subText: "Introduction",
            headText: "Overview.",
            description: "Hi! I'm Essam Hisham, a 17-year-old developer and robotics engineer from Egypt. My journey into the world of technology began at the age of 14 when I first discovered programming, and I've been hooked ever since.\n\nCurrently in my senior year of high school (Grade 12), I've built a strong foundation in software development, robotics, and embedded systems. I love tackling complex problems and creating innovative solutions that bridge the gap between hardware and software.\n\nMy passion lies in building real-world projects that make a difference. From autonomous smart cars to AI-powered embedded systems, I'm always exploring new technologies and pushing the boundaries of what's possible."
        },
        experience: {
            subText: "What I have done so far",
            headText: "Work Experience."
        },
        tech: {
            subText: "What I use",
            headText: "Technologies."
        },
        works: {
            subText: "My work",
            headText: "Projects.",
            description: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
            categories: {
                all: "All Projects",
                robotics: "Robotics",
                embedded: "Embedded Systems",
                ai: "AI & ML",
                web: "Web Development"
            }
        },
        contact: {
            subText: "Get in touch",
            headText: "Contact.",
            form: {
                name: "Your Name",
                namePlaceholder: "What's your good name?",
                email: "Your Email",
                emailPlaceholder: "What's your web address?",
                message: "Your Message",
                messagePlaceholder: "What you want to say?",
                send: "Send",
                sending: "Sending..."
            },
            infoTitle: "Contact Information",
            quickNoteTitle: "Quick Note",
            quickNoteText: "Whether you have a question about my robotics projects, want to collaborate, or just want to say hello, my inbox is always open. I'll get back to you as soon as I can!",
            connectTitle: "Connect With Me",
            infoItems: {
                email: "Email",
                phone: "Phone",
                location: "Location",
                availability: "Availability",
                availabilityValue: "Open to new opportunities"
            }
        }
    }
};
