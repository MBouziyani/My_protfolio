import {
  mobile,
  backend,
  creator,
  web,
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
  techinfo,
  figma,
  docker,
  starbucks,
  fssm,
  shopify,
  carrent,
  realEstate,
  dashboard,
  jobit,
  medical,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Designer",
    icon: creator,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    title: "Internship - Medical Practice Management Web Application",
    company_name: "Networia",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jun 2023 - August 2023",
    points: [
      "Development of a medical application enabling secure user authentication. It provides comprehensive management of appointments, prescriptions, certificates, income, expenses, and medications, offering a complete solution for efficient medical practice management.",
    ],
  },
  {
    title: "Internship - Human Resources Management Application",
    company_name: "FSSM",
    icon: fssm,
    iconBg: "#E6DEDD",
    date: "May 2022 - Jul 2022",
    points: [
      "Tools Used:",
      "Analysis and Design: MERISE and UML.",
      "Design: Figma.",
      "Database: SQL.",
      "Client-Side: JavaScript, HTML, CSS, TailWindCSS.",
      "Server-Side: PHP.",
    ],
  },
  {
    title: "Intership - Development of a static website for a nursery",
    company_name: "TECHINFO",
    icon: techinfo,
    iconBg: "#383E56",
    date: "September 2020 - December 2020",
    points: [
      "Tools Used:",
      "Client-Side:",
      "JavaScript (React.js), BOOTSTRAP, HTML, CSS.",
    ],
  },
  {
    title: "Intership - Management of computer club application submissions",
    company_name: "TECHINFO",
    icon: fssm,
    iconBg: "#383E56",
    date: "August 2020 - August 2020",
    points: [
      "Tools Used:",
      "Analysis and Design: MERISE",
      "Database: SQL",
      "Client-Side: JavaScript, HTML, CSS     ",
      "Server-Side: PHP",
    ],
  },

];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "HR management application    ",
    description:
      "The Human Resources Management Application simplifies HR processes by allowing employees to submit requests like vacations or payroll documents and track their approval status, providing easy access to approved documents.",
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/MBouziyani/RH-management-application-of-FSSM",
  },
  {
    name: "real-estate-agency website",
    description: "The website features an elegant and user-friendly front-end interface, along with a robust search function for property listings, offering a seamless browsing experience for potential buyers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: realEstate,
    source_code_link: "https://github.com/MBouziyani/-real-estate-agency-landing-page",
  },
  {
    name: "Medical Practice Management Web Application",
    description:
      "Development of a medical application enabling secure user authentication. It provides comprehensive management of appointments, prescriptions, certificates, income, expenses, and medications, offering a complete solution for efficient medical practice management.",
    tags: [
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "Spring",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: medical,
    source_code_link: "https://github.com/MBouziyani",
  },
];

export { services, technologies, experiences, projects };
