import { Contact, Home, ListVideo, Rss } from "lucide-react";
import {
  DiCreativecommonsBadge,
  DiDjango,
  DiDocker,
  DiGhost,
  DiGithubFull,
  DiLess,
  DiMailchimp,
  DiMeteorfull,
  DiNetmagazine,
  DiNginx,
  DiStylus,
  DiYahoo,
} from "react-icons/di";

export const navLinks = [
  { route: "", name: "Home", icon: Home },
  { route: "courses", name: "Courses", icon: ListVideo },
  { route: "blogs", name: "Blogs", icon: Rss },
  { route: "contact", name: "Contact", icon: Contact },
];

export const lngs = [
  { route: "en", label: "English" },
  { route: "uz", label: "O'zbekcha" },
  { route: "ru", label: "Русский" },
  { route: "tr", label: "Türkçe" },
];

export const companies = [
  DiDocker,
  DiCreativecommonsBadge,
  DiGhost,
  DiGithubFull,
  DiMeteorfull,
  DiLess,
  DiMailchimp,
  DiNetmagazine,
  DiNginx,
  DiStylus,
  DiYahoo,
  DiDjango,
  DiDocker,
];

export const filterCourses = [
  { label: "cateogry1", name: "all" },
  { label: "cateogry2", name: "trending" },
  { label: "cateogry3", name: "popular" },
  { label: "cateogry4", name: "featured" },
];

export const filterLevels = [
  { label: "level1", name: "all" },
  { label: "level2", name: "beginner" },
  { label: "level3", name: "intermediate" },
  { label: "level4", name: "advaced" },
];

export const categories = [
  {
    icon: "/assets/categories/digital-marketing.svg",
    label: "Digital Marketing",
  },
  { icon: "/assets/categories/web-development.svg", label: "Web Development" },
  { icon: "/assets/categories/graphic-design.svg", label: "Graphic Design" },
  { icon: "/assets/categories/photography.svg", label: "Photography" },
  { icon: "/assets/categories/social-sciences.svg", label: "Social Sciences" },
  {
    icon: "/assets/categories/arts-humanities.svg",
    label: "Arts & Humanities",
  },
  {
    icon: "/assets/categories/personal-development.svg",
    label: "Personal Development",
  },
  { icon: "/assets/categories/it-software.svg", label: "IT & Software" },
];

export const instructors = [
  {
    name: "Chris Impley",
    image:
      "https://blog.sammi.app/_next/image?url=https://media.graphassets.com/km6vx9k0r8jYk63btttv&w=1920&q=75",
    job: "Web Developer",
  },
  {
    name: "Thomas Winter",
    image:
      "https://blog.sammi.app/_next/image?url=https://media.graphassets.com/d72ZspAPTq2lGV3T5A8w=3840&q=75",
    job: "Photographer",
  },
  {
    name: "Emma Watson",
    image:
      "https://blog.sammi.app/_next/image?url=https://media.graphassets.com/nbwJXtMQuvylp1jzBmoqB&w=3840&q=75",
    job: "Digital Marketer",
  },
  {
    name: "John Doe",
    image:
      "https://static.independent.co.uk/2023/06/11/08/5efbdacbeee4f50e8ab7f21f23a60807?quality=75&width=990&crop=3:2,smart&auto=webp",
    job: "Designer",
  },
];

export const learningJourney = [
  {
    title: "startTitle1",
    excerpt: "startDescription1",
    image: "/assets/Journey/rating.png",
  },
  {
    title: "startTitle2",
    excerpt: "startDescription2",
    image: "/assets/Journey/science.png",
  },
  {
    title: "startTitle3",
    excerpt: "startDescription3",
    image: "/assets/Journey/online-learning.png",
  },
  {
    title: "startTitle4",
    excerpt: "startDescription4",
    image: "/assets/Journey/certificate.png",
  },
];

export const courses = [
  {
    title: "JavaScript",
    previewImage:
      "https://sammi.ac/_next/image?url=https://utfs.io/f/35ca3db9-fb43-4f12-bd48-8b08aa5e03bb-k1lwdj.png&w=1920&q=75",
    author: {
      image: "https://media.graphassets.com/KmuGV9XoRjYhKG3bZttvc&w=1920&q=75",
      name: "Chris Impley",
    },
    oldPrice: 179,
    currentPrice: 79,
    level: "Beginner",
  },
  {
    title: "ReactJS",
    previewImage:
      "https://sammi.ac/_next/image?url=https://utfs.io/f/a8573b7c-9b52-4459-8414-8eacde8740ba-k1lwd1.png&w=1920&q=75",
    author: {
      image: "https://media.graphassets.com/KmuGV9XoRjYhKG3bZttvc&w=1920&q=75",
      name: "Chris Impley",
    },
    oldPrice: 159,
    currentPrice: 59,
    level: "Intermediate",
  },
  {
    title: "VueJS",
    previewImage:
      "https://sammi.ac/_next/image?url=https://utfs.io/f/bddfc919-2260-46dd-a078-b956bd9a377c-k1lwcq.png&w=1920&q=75",
    author: {
      image: "https://media.graphassets.com/KmuGV9XoRjYhKG3bZttvc&w=1920&q=75",
      name: "Chris Impley",
    },
    oldPrice: 129,
    currentPrice: 29,
    level: "Intermediate",
  },
  {
    title: "Telegram BOT",
    previewImage:
      "https://sammi.ac/_next/image?url=https://utfs.io/f/1662922d-b61d-401b-aa1a-693a6231d8aa-k1lw9a.png&w=1920&q=75",
    author: {
      image: "https://media.graphassets.com/KmuGV9XoRjYhKG3bZttvc&w=1920&q=75",
      name: "Chris Impley",
    },
    oldPrice: 209,
    currentPrice: 109,
    level: "Intermediate",
  },
  {
    title: "React Native",
    previewImage:
      "https://sammi.ac/_next/image?url=https://utfs.io/f/2f7f74594-ae28-4fe1-86ce-964a5c89c78d-k1lw7k.png&w=1920&q=75",
    author: {
      image: "https://media.graphassets.com/KmuGV9XoRjYhKG3bZttvc&w=1920&q=75",
      name: "Chris Impley",
    },
    oldPrice: 129,
    currentPrice: 29,
    level: "Intermediate",
  },
  {
    title: "Foundation",
    previewImage:
      "https://sammi.ac/_next/image?url=https://utfs.io/f/bc6dfb541-3300-438f-b8b2-ffefb57dfe56-k1lw6p.png&w=1920&q=75",
    author: {
      image: "https://media.graphassets.com/KmuGV9XoRjYhKG3bZttvc&w=1920&q=75",
      name: "Chris Impley",
    },
    oldPrice: 129,
    currentPrice: 109,
    level: "Intermediate",
  },
];
