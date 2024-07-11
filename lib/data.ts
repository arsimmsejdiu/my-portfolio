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
    title: "University of business and technology",
    location: "Prishtina, KS",
    description:
      "I graduated after 3 years in Computer Science. I immediately found a job as a Fullstack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
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
