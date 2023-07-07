import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  typescript,
  html,
  css,
  reactjs,
  angularjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  adobexd,
  carrent,
  jobit,
  tripguide,
  devpro,
  sgi,
  evrazna,
  rrrc,
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
    title: "Web Designer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Creative Thinker",
    icon: creator,
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
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angularjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "adobeXD",
    icon: adobexd,
  },
];

const experiences = [
  {
    title: "Systems Trainee (Co-op)",
    company_name: "Saskatchewan Government Insurance",
    icon: sgi,
    iconBg: "#383E56",
    date: "Jan 2021 - Aug 2021",
    points: [
      "Providing support for clients on hardware, software, and printers in desktop applications.",
      "Tracking hardware, software and their licensed use at SGI using Service Now.",
      "Assisting in the acquisition and implementation of new desktop technologies.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Regina Residential Resource Center",
    icon: rrrc,
    iconBg: "#E6DEDD",
    date: "May 2022 - Jul 2022",
    points: [
      "Developed a MERN (Mongo, Express, React and Node) application to digitalize filing forms.",
      "Increased productivity by 2% utilizing Microsoft SharePoint",
    ],
  },
  {
    title: "IT Developer (Co-op)",
    company_name: "EVRAZ NA",
    icon: evrazna,
    iconBg: "#383E56",
    date: "Sep 2021 - Dec 2021",
    points: [
      "Assisted with improving previous application builds",
      "Developed WPF applications using ASP.NET MVC/MVVM, C#, and SQL.",
      "Developed SSRS reports using .NET framework and SQL query commands, improving productivity by 5%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "DevPro",
    icon: devpro,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Design and develop applications using Java technologies: Spring Boot, Angular, Lombok, JPA, TypeScript, React and Liquibase.",
      "Work closely with team members to write high-quality code, ensuring applications are scalable, maintainable, and performant meeting clients and endusers needs.",
    ],
  },
];

const testimonials = [
  {
    testimonial: `I partnered with Favor a lot in our web development class. We shared ideas, did pair programming and learned from each other. 
      It is great to work with Favor, both as a person and as a software engineer. He possesses good collaborative skills. 
      He is also goal-oriented, and ready to learn. A great addition.`,
    name: "Emmanuel Idun",
    designation: "SWE Intern",
    company: "Microsoft",
    image:
      "https://lh3.googleusercontent.com/ArUK68heR7CLvad6J8ZeLHefDns5hjXD5HXJcR631KuuKezUgLvbLnBuL_Ry4MPnQlZnjW8=s85",
  },
  {
    testimonial:
      "Favor is driven and hard-working; he is always focused on furthering his knowledge and skillset, not only to benefit himself, but also current/future employers. ",
    name: "Ayden Mack",
    designation: "Signal and Power Integrity Designer",
    company: "Ciena",
    image:
      "https://lh3.googleusercontent.com/NZpyHq5lB5Pb_HoQImI6i1lj27dqcx5a-Vbn8WymEI1SCuyFO8aJPPdIm-0dvw6XCQzn9A=s85",
  },
];

const projects = [
  {
    name: "URXperience",
    description:
      "This website application is a central hub for students in residence at the University of Regina, it contains a chat system, event planer and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/The-4-Codesmen/URXperience/tree/main",
  },
  {
    name: "Video Service Website",
    description:
      "This website allows one to curate and manage favorite films, while enjoying the convenience of watching trailers all in one place.",
    tags: [
      {
        name: "linux",
        color: "white",
      },
      {
        name: "apache",
        color: "green-text-gradient",
      },
      {
        name: "mariaDB",
        color: "orange-text-gradient",
      },
      {
        name: "php",
        color: "violet-text-gradient",
      },
      {
        name: "TMDB api",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/fasunwon/video-service-website",
  },
  {
    name: "Amazon Clone",
    description:
      "A full-stack E-commerce web app that allow users to imitate viewing previous orders and purchasing items from Amazon.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "violet-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "yellow-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/fasunwon/AmazonClone",
  },
];

export { services, technologies, experiences, testimonials, projects };
