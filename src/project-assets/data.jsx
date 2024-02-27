import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Building interactive and dynamic web applications using JavaScript with a focus on seamless user interactions as well as using MongoDB and Express for back-end functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://kamal-gnews.netlify.app",
    github: "https://github.com/skamalkumar/ReactAuthFinal.git",
    title: "global news",
    text: "Global news app which displays latest worldwide information with just a click.  Authorization through google console makes the App more secured while Redux has been used for global state management.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://kamal-stockmarket.netlify.app",
    github: "https://github.com/skamalkumar/ReactStockMarket.git",
    title: "stockmarket tracker",
    text: "Ticker, prices, Symbols, Percentages; you name it and they are at your disposal. Latest analytical data about all the stocks in the US exchange for your decison making process.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://kamal-reactcrud.netlify.app/",
    github: "https://github.com/skamalkumar/ReactCrud.git",
    title: "CRUD",
    text: "CRUD app allows you to perform functionalities such as create, retrieve, update and delete data using local storage in your system.",
  },
];
