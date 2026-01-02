import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/_shivamm_11?igsh=MXJsb2Z5OTNmcHdoZQ==",
  },
  // {
  //   name: "Facebook",
  //   icon: FaFacebook,
  //   link: "https://facebook.com",
  // },
  // {
  //   name: "Twitter",
  //   icon: RxTwitterLogo,
  //   link: "https://twitter.com",
  // },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "PetroShop E-commerce Website",
    description:
      'Discover the future of online shopping with "PetroShop E-commerce Website" - a cutting-edge e-commerce platform designed to revolutionize your shopping experience. Seamlessly blending technology and convenience, PetroShop offers a user-friendly interface, secure transactions, and a vast array of products at your fingertips. Whether you\'re a tech enthusiast or a casual shopper, PetroShop is your gateway to a world of endless possibilities.',
    image: "/projects/project-1.png",
    link: "https://thepetroshop.com/",
  },
  {
    title: "MyIndustryHouse B2B Marketplace",
    description:
      'Step into the world of industrial commerce with "MyIndustryHouse B2B Marketplace" - a dynamic platform tailored for businesses seeking seamless connections and efficient transactions. MyIndustryHouse serves as a hub for manufacturers, suppliers, and buyers to collaborate, negotiate, and thrive in the competitive B2B landscape. Experience a new era of industrial trade where opportunities abound and partnerships flourish.',
    image: "/projects/project-2.png",
    link: "https://myindustryhouse.com/",
  },
  {
    title: "Standard Petro India Pvt Ltd Website",
    description:
      'Explore the digital presence of "Standard Petro India Pvt Ltd" - a leading name in the petroleum industry. This website serves as a comprehensive platform showcasing the company\'s commitment to excellence, innovation, and sustainability. From detailed insights into their services to the latest industry news, the Standard Petro India Pvt Ltd website is your go-to destination for all things related to petroleum solutions.',
    image: "/projects/project-3.png",
    link: "https://standardpetro.in/",
  },
  {
    title: "Coffee Cafe Website",
    description:
      'Indulge in the aromatic world of "Coffee Cafe Website" - a virtual haven for coffee enthusiasts and connoisseurs alike. This website is designed to capture the essence of a cozy cafe experience, offering a delightful array of coffee blends, brewing techniques, and café culture. Whether you\'re seeking brewing tips or simply want to explore the rich history of coffee, the Coffee Cafe Website is your ultimate guide to all things coffee.',
    image: "/projects/project-4.png",
    link: "https://rohit-rich.github.io/coffee/",
  },
  {
    title: "Radio World Wide Website",
    description:
      'Tune into the vibrant world of "Radio World Wide Website" - your gateway to a global radio experience. This website is a dynamic platform that brings together diverse radio stations from around the world, offering a rich tapestry of music, talk shows, and cultural programming. Whether you\'re a music lover or a curious listener, Radio World Wide Website provides an immersive audio journey that transcends borders and connects communities through the power of radio.',
    image: "/projects/project-5.png",
    link: "https://radioworldwide.in/",
  },
  {
    title: "Radio Corporation Website",
    description:
      'Tune into the vibrant world of "Radio World Wide Website" - your gateway to a global radio experience. This website is a dynamic platform that brings together diverse radio stations from around the world, offering a rich tapestry of music, talk shows, and cultural programming. Whether you\'re a music lover or a curious listener, Radio World Wide Website provides an immersive audio journey that transcends borders and connects communities through the power of radio.',
    image: "/projects/project-6.png",
    link: "https://iradiocorporation.com/",
  },
  {
    title: "Portfolio Website",
    description:
      'A personal portfolio website to showcase my projects, skills, and experience as a developer. It features a clean and modern design, responsive layout, and smooth animations to provide an engaging user experience. The website is built using Next.js and Tailwind CSS, ensuring optimal performance and scalability.',
    image: "/projects/project-7.png",
    link: "https://sujalrathore.online/",
  }
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      // {
      //   name: "YouTube",
      //   icon: FaYoutube,
      //   link: "https://youtube.com",
      // },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      // {
      //   name: "Discord",
      //   icon: RxDiscordLogo,
      //   link: "https://discord.com",
      // },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      // {
      //   name: "Twitter",
      //   icon: RxTwitterLogo,
      //   link: "https://twitter.com",
      // },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  // {
  //   title: "About",
  //   data: [
  //     {
  //       name: "Become Sponsor",
  //       icon: null,
  //       link: "https://youtube.com",
  //     },
  //     {
  //       name: "Learning about me",
  //       icon: null,
  //       link: "https://example.com",
  //     },
  //     {
  //       name: "Contact Me",
  //       icon: null,
  //       link: "mailto:contact@example.com",
  //     },
  //   ],
  // },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

