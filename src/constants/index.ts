import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  shopify,
  carrent,
  jobit,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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

const experiences: TExperience[] = [
  {
    title: "Secondary Education.",
    companyName: "Shree Ram Vidyalaya",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2019 - April 2020",
    points: [
      "Attending and actively participating in classroom lessons across core subjects such as Mathematics, Science, English, and Social Science.",
      "Collaborating with peers and teachers during group activities, projects, and school events to enhance learning and teamwork skills.",
      "Completing homework, assignments, and periodic assessments to demonstrate understanding and progress in academic subjects.",
      "Participating in co-curricular activities such as sports, arts, and cultural programs to support all-round development.",
    ],
  },
  {
    title: "Higher Secondary Education.",
    companyName: "Shree Ram Vidyalaya",
    icon: shopify,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Pursuing academic coursework in core subjects including Physics, Chemistry, Mathematics/Biology, and English under the CBSE curriculum.",
      "Collaborating with classmates and faculty on group projects, laboratory experiments, and academic presentations to develop analytical and communication skills.",
      "Participating in school-level and inter-school competitions such as Olympiads, debates, and science exhibitions to foster critical thinking and innovation.",
      "Managing time effectively to balance academic responsibilities with co-curricular engagements such as sports, cultural activities, and volunteer work.",
    ],
  },
  {
    title: "B.Tech Information Technology",
    companyName: "CHARUSAT",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - 2026",
    points: [
      "Pursuing coursework in core subjects such as Data Structures, Algorithms, Database Management Systems, Operating Systems, and Computer Networks as part of the B.Tech in Computer Engineering program.",
      "Collaborating with peers and faculty on academic projects, coding assignments, and research activities to build problem-solving and technical skills.",
      "Developing mini-projects and prototypes using programming languages like C/C++, Java, Python, and web technologies such as HTML, CSS, JavaScript.",
      "Participating in coding contests, technical fests, hackathons, and workshops to enhance practical knowledge and stay updated with industry trends.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jasmin proved me wrong.",
    name: "Bharat Prajapati",
    designation: "HR",
    company: "Great Idea Tech",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jasmin does.",
    name: "Hardeep Rathod",
    designation: "CEO",
    company: "Knc Future Tech",
  },
  
];

const projects: TProject[] = [
  {
    name: "Ticket Buddy",
    description:
      "Ticket Buddy is a full-stack application that helps users browse, book, and manage event tickets. Built with modern web technologies, it offers a seamless experience for both event organizers and attendees.",
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
    sourceCodeLink: "https://github.com/JasminChaudhary/TICKET_BUDDY.git",
  },
  {
    name: "Craftelio  ",
    description:
      "Web application that allows artists to showcase and sell their artwork online. Users can browse a curated selection of art pieces, view detailed artist profiles, and purchase original artwork directly through the platform. Built using .NET technology for secure, scalable performance.",
    tags: [
      {
        name: ".Net",
        color: "blue-text-gradient",
      },
      {
        name: "MVC Architecture",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Abhayhindocha/Craftelio.git",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
