import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/notion.png";
import rmtdevImg from "@/public/mirro.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "PRIME",
    location: "Prishtina, KS",
    description:
      "I worked there for 2 years as a front-end developer, where i learned all about React and how to build highly scalable front-ends",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Paragon Custom Communications",
    location: "Cosgn sur loire, FR",
    description:
      "After comming to France i worked as a Full-stack developer for 2 years, where i was lucky to work from ground up building a dashboard mechanic management platform",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Bik'air",
    location: "Remote, FR",
    description:
      "I worked for this great startup for more than 2 years, where i was asigned as a Lead full-stack developer, where i managed the entire application from figma to implementation, creating the microservices along with the microfrontends, to deployment to App store and Google play",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Microsoft teams application",
    location: "Remote, FR",
    description:
      "Working as a Lead Front-end developer to plan and code the entire app that will be part of the Engineers at Swisscom for helping them on Teams to access Microsoft Graphs data more easily",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Jotion",
    description:
      "I created an end-to-end fullstack notion clone, all with proper notion-style editor, cover images, nested documents, publishing documents to public, real-time database and more.",
    tags: ["React", "Next.js", "Convex", "Tailwind", "Prisma", "Shadcn", "Typescript"],
    imageUrl: corpcommentImg,
    url: "https://jotion-note-three.vercel.app/"
  },
  {
    title: "Mirro",
    description:
      "A collaborative, real-time whiteboard. Packed with features such as real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Convex", "Prisma"],
    imageUrl: rmtdevImg,
    url: "https://penyard.vercel.app/"
  },
  {
    title: "Comming soon",
    description:
      "problem with free databases",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    url: ""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "Shadcn",
  "Zod",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "React hook form",
  "Next.js",
  "Bit composable software",
  "Microsoft Teams Toolkit",
  "Redux-toolkit",
  "React-query",
  "Node.js",
  "Sequelize",
  "SocketIO",
  "Web Scrapper",
  "WEB3",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Prisma",
  "PostgreSQL",
  "MySql",
  "SQL server",
  "AWS Lambda",
  'AWS Amplify',
  'DevOps',
  'Project Manager',
  "Serverless",
  "Framer Motion",
] as const;
