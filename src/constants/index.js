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
  figma,
  docker,
  meta,
  starbucks,
  //wix,
  //conetec,
  //solidity,
  //python,
  //freecodecamp,
  //rust,
  tesla,
  shopify,
  carrent,
  jobit,
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
    title: "Web3 Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
  {
    title: "Data Scientist (ML/AI)",
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
    name: "Typescript", //Solidity
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
    name: "MongoDB", // Rust
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
    name: "docker", // Python
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX Developer (Freelance)",
    company_name: "Wix",
    icon: starbucks, //wix
    iconBg: "#383E56",
    date: "March 2018 - Present",
    points: [
      "Developing and maintaining web applications using Wix and other related technologies.",
      "Collaborating with cross-functional teams including designers and product managers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in design reviews and providing constructive feedback to clients.",
    ],
  },
  {
    title: "Data Scientist (ML/AI)",
    company_name: "ConeTec Investigations Ltd.",
    icon: tesla, //conetec,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining database of employee flights within Canada.",
      "Analyzing the carbon footprint from flights for ConeTec employees using Python, Pandas and numpy.",
      "Using Selenium for Webscraping real-time data pretaining to CO2 emmissions.",
      "Self-directed learning in ML & AI libraries such as Scikit-Learn, Matplotlib and Keras.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "FreeCodeCamp",
    icon: shopify, //freecodecamp,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Crafting responsive web layouts with HTML, CSS, and dynamic design techniques.",
      "Foundation in JavaScript programming, data structures, and efficient algorithmic problem-solving.",
      "Implementing React and Redux to create interactive user interfaces with effective state management.",
      "Optimizing code efficiency, integrating third-party libraries, and utilizing APIs for enhanced functionality.",
    ],
  },
  {
    title: "Web3 Developer",
    company_name: "Self-taught",
    icon: meta, //solidity,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Self-taught Rust developer creating secure applications, adept at integrating with blockchain networks using Web3.js and OpenSea APIs.",
      "Self-educated in Solidity for Ethereum smart contracts, utilizing tools like Hardhat and Remix for efficient development and testing.",
      "Mastering Rust's systems programming, integrating libraries and frameworks for high-performance applications.",
      "Optimizing code in Rust and Solidity, adept at debugging interactions with third-party integrations and Web3 protocols.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We had an amazing experience working with Rajvir. From design to upkeep of our website, he's kept us in the loop.",
    name: "Vishakha Jani",
    designation: "CFO",
    company: "Jagannath Growers PLC.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rajvir does.",
    name: "Grace Ngatia",
    designation: "Manager",
    company: "Prime Living Luxury Apartments",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    testimonial:
      "Working on designing products and making a website to portray our company's ethos with Rajvir has been a breeze.",
    name: "Jana Rolland",
    designation: "Design Lead",
    company: "Kanga Threads",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
