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
  git,
  figma,
  wix,
  conetec,
  solidity,
  python,
  freecodecamp,
  rust,
  punks,
  ai_saas,
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
    name: "Solidity",
    icon: solidity,
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
    name: "Rust",
    icon: rust,
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
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "UI/UX Developer (Freelance)",
    company_name: "Wix",
    icon: wix,
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
    icon: conetec,
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
    icon: freecodecamp,
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
    icon: solidity,
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
      "We had an amazing experience working with Rajvir. From design to upkeep of our website, he has worked with us to create our ideal vision.",
    name: "Vishakha Jani",
    designation: "CFO",
    company: "Jagannath Growers PLC.",
    image:
      "https://media.licdn.com/dms/image/C4E03AQGQVpaMAPlTfg/profile-displayphoto-shrink_800_800/0/1516648768082?e=1712793600&v=beta&t=Y9y39KKRPXGV75BHLLKEq0FpamWfZSMK_138tmtwNN0",
  },
  {
    testimonial:
      "Rajvir is a web developer who truly cares about his client's success. I would recommend him to any of my colleagues.",
    name: "Grace Ngatia",
    designation: "Manager",
    company: "Prime Living Luxury Apartments",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    testimonial:
      "Working with Rajvr to design products and make a website was both a pleasure and creatively inspiring.",
    name: "Jana Rolland",
    designation: "Design Lead",
    company: "Kanga Threads",
    image:
      "https://media.licdn.com/dms/image/C5603AQGa4dkSEWZa8Q/profile-displayphoto-shrink_800_800/0/1646335721867?e=1712793600&v=beta&t=XCjd_hxEyDmAuxrd_c2KaWIy9OOx5_RDW28fu_KI6mw",
  },
];

const projects = [
  {
    name: "Solana NFT Marketplace",
    description:
      "Web-based platform connected to OpenSea API that allows users to find and purchase Cryptopunk Clone NFT's using Solana Wallet.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "thirdWeb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: punks,
    source_code_link: "https://github.com/rsbassi9/react-nft-challenge",
  },
  {
    name: "Nebula.ai",
    description:
      "Web application uses API's for AI content generation. Integrated customer support, Stripe payments, database management and Pro-tier subscriptions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api's",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: ai_saas,
    source_code_link: "https://github.com/rsbassi9/ai-saas",
  },
  {
    name: "Solidity Development",
    description:
      "A comprehensive Solidity development library for beginners and experts alike. Use ethers.js, thirdweb, remix and others to develop your own smart contracts, NFT's and more.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "thirdweb",
        color: "green-text-gradient",
      },
      {
        name: "ethers.js",
        color: "pink-text-gradient",
      },
    ],
    image: solidity,
    source_code_link:
      "https://github.com/rsbassi9/Solidity/tree/main/Blockchain%20Dev.%20Bootcamp",
  },
];

export { services, technologies, experiences, testimonials, projects };
