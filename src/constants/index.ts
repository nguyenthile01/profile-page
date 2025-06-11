import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  threejs,
  angular,
  javaspring,
  TMA,
  Hitachi,
  rail,
  materialproject,
  qualityproject,
  next,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "Angular",
    icon: angular,
  },
  {
    title: "Java",
    icon: javaspring,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
];

const technologies: TTechnology[] = [
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
    name: "Java",
    icon: javaspring,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
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

const experiences: TExperience[] = [
  {
    title: "Senior Software Engineer",
    companyName: "Hitachi Digital Service",
    icon: Hitachi,
    iconBg: "#C9CCD7",
    date: "May 2021 - Present",
    points: [
      "Built several B2B websites using Angular, HTML, SCSS, Styled Components, and OAuth2, improving development speed by 30% and enhancing user experience for over 1,000 active business users.",
      "Built RESTful APIs using Java Spring Boot, JWT Authentication, improving system performance and scalability while ensuring secure and maintainable code.",
      "Developed unit and integration tests using Jest, achieving over 90% code coverage across key components which improved code reliability, enabled faster refactoring, and reduced regression bugs.",
      "Implemented and enforced code linting using ESLint in projects, reducing code quality issues by 40% and decreasing code review time by 25%. This improved team productivity and ensured consistent coding standards across the codebase.",
      "Used Azure DevOps/Jira to manage tasks, track progress, and coordinate sprints in Agile development environments, improving team collaboration and delivery efficiency."
    ],
  },
  {
    title: "Software Engineer",
    companyName: "TMA Solutions",
    icon: TMA,
    iconBg: "#C9CCD7",
    date: "Jan 2020 - May 2021",
    points: [
      "Built the e-commerce website using React, Nextjs, styled component, NextAuth, GoogleAPI which improved page load speed by 120%.",
      "Developed unit and integration tests using Jest, achieving over 90% code coverage across key components which improved code reliability, enabled faster refactoring, and reduced regression bugs",
      "Implemented and enforced code linting using ESLint in projects, reducing code quality issues by 40% and decreasing code review time by 25%. This improved team productivity and ensured consistent coding standards across the codebase.",
      "Worked closely with UX/UI designers to translate their designs into functional web applications",
      "Collaborated with back-end developers to improve website functionality and integrate new features."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Global Integrated Rail Solutions",
    description:
      "Developed a data analysis system for a train control platform. The project involved receiving signal and event data from the train system, processing and analyzing it on the server, and storing the results in a structured database. Additionally, the system could send commands and event responses back to the train system in real time, enabling two-way communication and improved operational monitoring.",
    tags: [
      {
        name: "angular",
        color: "red-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "ngrx",
        color: "blue-text-gradient",
      }
    ],
    image: rail,
    sourceCodeLink: "",
  },
  {
    name: "Project Quality Management System",
    description:
      "This is project quality control. The Quality Assurances will check and evaluate the project quality and then report information and records storage in systems.",
    tags: [
      {
        name: "angular",
        color: "red-text-gradient",
      },
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "ngrx",
        color: "pink-text-gradient",
      },
      {
        name: "azure",
        color: "blue-text-gradient",
      },
    ],
    image: qualityproject,
    sourceCodeLink: "",
  },
  {
    name: "E-commerce website for building materials",
    description:
      "The site feature product listings, order management, and secure online payment to support efficient sales and customer engagement. ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: materialproject,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
