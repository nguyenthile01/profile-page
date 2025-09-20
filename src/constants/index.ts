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
      "Developed modern web apps using React, Next.js for enterprise platforms.",
      "Boosted system performance and API security using JWT and REST architecture.",
      "Improved test reliability and code quality with Jest and Playwright, achieving over 90% test coverage.",
      "Engaged in discussions on UI ideas and application design to enhance usability and functionality.",
      "Acted as a code reviewer and lead, ensuring codebase consistency."
      ],
  },
  {
    title: "Software Engineer",
    companyName: "TMA Solutions",
    icon: TMA,
    iconBg: "#C9CCD7",
    date: "Jan 2020 - May 2021",
    points: [
      "Developed and maintained web apps using React, Next.js, and Tailwind CSS.",
      "Collaborated with designers and backend teams to deliver full product experience."
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
      `Implemented shipment tracking and warehouse management features using Next.js with Server-SideRendering (SSR) and Client-Side Rendering (CSR), improving both SEO and initial load performance. Utilized Static Site Generation (SSG) for non-dynamic pages to reduce server load and improve response times.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "azure",
        color: "blue-text-gradient",
      }
    ],
    image: rail,
    sourceCodeLink: "",
  },
  {
    name: "Support System for Qualiity Assurance",
    description:
      "Built responsive interfaces for shipment tracking and warehouse management. Integrated real-time APIs, improved system reliability with 90%+ test coverage using Jest and Playwright.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "blue-text-gradient",
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
    name: "Hitachi Advance Logistics",
    description:
      "Implemented features to track shipments and manage warehouse data, reducing manual work by 40%. Boosted data accuracy by 30% via real-time API integration.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: materialproject,
    sourceCodeLink: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
