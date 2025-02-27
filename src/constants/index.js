import {
  human,
  experience,
  monitor,
  tech,
  contact,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  unisiegen,
  websential,
  na,
  travelmap,
  portfolio,
  threejs,
  fullstack,
  frontend,
  cicd,
  github,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    icon: human,
  },
  {
    id: "experience",
    title: "Experience",
    icon: experience,
  },
  {
    id: "projects",
    title: "Projects",
    icon: monitor,
  },
  {
    id: "tech",
    title: "Technologies",
    icon: tech,
  },
  {
    id: "contact",
    title: "Contact",
    icon: contact,
  },
];

const social_medias = [
  {
    title: "LinkedIn",
    color: "#0077B5",
    link: "https://www.linkedin.com/in/usama-a-b75133105/",
    logo: linkedin,
  },
  {
    title: "GitHub",
    color: "#24292e",
    link: "https://github.com/Usama-ASattar?tab=repositories",
    logo: github,
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: cicd,
  },
  {
    title: "Full Stack Developer",
    icon: fullstack,
  },
  {
    title: "Front End Developer",
    icon: frontend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Universität Siegen",
    icon: unisiegen,
    iconBg: "#ffffff",
    date: "Dec 2022 - Jan 2024",
    points: [
      "Translated complex Figma wireframes into intuitive, accessible web interfaces, improving UI usability by 15%.",
      "Developed engaging frontend solutions using Vue.js, increasing user engagement.",
      "Optimized backend workflows with Java and facilitated team communication for efficient project execution.",
      "Implemented CI/CD pipelines with GitHub Actions, automating testing and deployment processes.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Websential (SMC-Private) Limited",
    icon: websential,
    iconBg: "#ffffff",
    date: "Jan 2021 - Nov 2022",
    points: [
      "Created 10+ reusable React.ts libraries, improving development speed.",
      "Integrated RESTful APIs, reducing API call overhead by 30%.",
      "Developed component stories with Storybook and conducted rigorous unit testing to reduce bug incidents by 20%.",
      "Enhanced deployment efficiency by leveraging AWS, cutting deployment time by 50%.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Pioneer Logix",
    icon: na,
    iconBg: "#000000",
    date: "Feb 2019 - Oct 2020",
    points: [
      "Implemented cross-browser compatible responsive user interfaces using the React.js framework for an e-commerce website project.",
      "Integrated APIs for inventory management, optimizing performance, and ensuring code quality through rigorous reviews, enhancing project stability.",
      "Gained valuable experience in front-end development and API integration for e-commerce applications.",
    ],
  },
];

const projects = [
  {
    name: "Sustainable Travel Map",
    description:
      "An innovative web application to encourage users to adopt low-carbon transportation options by visually comparing the carbon emissions of different travel modes. Designed and implemented interactive user interfaces using React.js and Tailwind CSS, ensuring a seamless and responsive experience. Integrated Google Maps API to provide real-time route mapping and carbon emission data based on user-selected travel options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "google_map_api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind_CSS",
        color: "pink-text-gradient",
      },
    ],
    image: travelmap,
    source_code_link: "",
    demo_link: "https://sustainable-travel-map.vercel.app/explore",
  },
  {
    name: "Portfolio",
    description:
      "This portfolio project highlights my key projects, showcasing my skills and achievements in web development and design. With a clean, user-friendly design, it demonstrates my expertise, creativity, and problem-solving abilities. Each project includes visuals and descriptions, reflecting my passion for delivering high-quality work.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind_CSS",
        color: "pink-text-gradient",
      },
      {
        name: "sweetalert2",
        color: "pink-text-gradient",
      },
      {
        name: "motion",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link:
      "https://github.com/Usama-ASattar/usama-abdal-sattar-portfolio",
    demo_link: "",
  },
];

export { social_medias, services, technologies, experiences, projects };
