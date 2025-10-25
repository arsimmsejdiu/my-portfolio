import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import corpcommentImg from "@/public/notion.png";
import rmtdevImg from "@/public/mirro.png";
import wordanalyticsImg from "@/public/corinna.png";
import builder from "@/public/builder.png";
import Discord from "@/public/dicordimage.png";
import Storeit from "@/public/storeit.png";

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
    date: "Jan 2020 - Dec 2022",
  },
  {
    title: "Bik'air",
    location: "Remote, FR",
    description:
      "I worked for this great startup for more than 2 years, where i was asigned as a Lead full-stack developer, where i managed the entire application from figma to implementation, creating the microservices along with the microfrontends, to deployment to App store and Google play",
    icon: React.createElement(CgWorkAlt),
    date: "June 2022 - Jan 2025",
  },
  {
    title: "Microsoft teams application",
    location: "Remote, FR",
    description:
      "Working as a Lead Front-end developer to plan and code the entire app that will be part of the Engineers at Swisscom for helping them on Teams to access Microsoft Graphs data more easily",
    icon: React.createElement(CgWorkAlt),
    date: " nov 2024 - jan 2025",
  },
  {
    title: "AI automation builder for e-commerce brand",
    location: "Paris, FR",
    description:
      "Building an AI automation builder for an e-commerce brand to automate their marketing and sales processes, using AI to generate content, images, videos, and more. Also, building a CRM platform for the brand to manage their customers and sales.",
    icon: React.createElement(CgWorkAlt),
    date: " fev 2025 - aprill 2025",
  },
  {
    title: "Ai Marketing campaign builder and chatbot for Marketing agency",
    location: "Paris, FR",
    description:
      "Ai Marketing Compaigne with AI chatbot to help Marketing Agencies to build and manage their marketing campaigns, with AI to generate content, images, videos, and more. Also, managing their customers and sales.",
    icon: React.createElement(CgWorkAlt),
    date: " may 2025 - august 2025",
  },
  {
    title: "Payroll management System",
    location: "Paris, FR",
    description:
      "Payroll management System for a company to manage their employees and their salaries, clock in and out, leave management, sick leave management, vacation management. Also, other HR related tasks like employee management, payroll management, etc.",
    icon: React.createElement(CgWorkAlt),
    date: " september 2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Jotion - Personal notes",
    description:
      "I created an end-to-end fullstack notion clone, all with proper notion-style editor, cover images, nested documents, publishing documents to public, real-time database and more.",
    tags: [
      "React",
      "Next.js",
      "Convex",
      "Tailwind",
      "Prisma",
      "Shadcn",
      "Typescript",
    ],
    imageUrl: corpcommentImg,
    url: "https://jotion-note-three.vercel.app/",
  },
  {
    title: "Mirro - Collaborate with others",
    description:
      "A collaborative, real-time whiteboard. Packed with features such as real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Convex", "Prisma"],
    imageUrl: rmtdevImg,
    url: "https://penyard.vercel.app/",
  },
  {
    title: "Corinna AI - SAAS AI Chatbot",
    description:
      "Manage all you marketing experience with this AI chatbot that takes care all your messaging with the client nd response depending on the form that you give it",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Convex",
      "Prisma",
      "NeonTech",
      "Uploadcare",
      "Bun",
      "Stripe",
      "Pusher",
    ],
    imageUrl: wordanalyticsImg,
    url: "/",
  },
  {
    title: "Fuzzie - SAAS Automation Builder",
    description:
      "SAAS Website Builder, All in one CRM platform, Ticket tracking system, funnels, Stripe Connect, Sell Products through website builder etc",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Convex",
      "Prisma",
      "NeonTech",
      "Uploadcare",
      "Bun",
      "Stripe",
      "Ngrok",
    ],
    imageUrl: builder,
    url: "/",
  },
  {
    title: "Dicord - Collaborate and interact with your peers",
    description:
      "Discord clone where you can chat with others, create video and audio conference, share your screen, invite other people to the server, edit delete messages, private messages and more",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "NeonTech",
      "Uploadcare",
      "Bun",
      "Stripe",
      "Ngrok",
      "LiveKit",
      "SocketIO",
    ],
    imageUrl: Discord,
    url: "https://discord-clone-bj6rqup21-arsimmsejdius-projects.vercel.app/",
  },
  {
    title: "StoreIt - Store your files in the cloud",
    description:
      "StoreIt is a cloud storage platform where you can store your files, share them with others, create folders, upload files, download files, delete files, search files and more",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "NeonTech",
      "Uploadcare",
      "Bun",
      "Stripe",
      "Ngrok",
      "LiveKit",
      "SocketIO",
    ],
    imageUrl: Storeit,
    url: "https://storeit-arsimmsejdius-projects.vercel.app/",
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
  "AWS Amplify",
  "DevOps",
  "Project Manager",
  "Serverless",
  "Framer Motion",
] as const;
