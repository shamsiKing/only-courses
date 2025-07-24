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
    image: "/assets/instructors/instructor1.jpg",
    job: "Web Developer",
  },
  {
    name: "Thomas Winter",
    image: "/assets/instructors/instructor2.jpg",
    job: "Photographer",
  },
  {
    name: "Emma Watson",
    image: "/assets/instructors/instructor3.jpg",
    job: "Digital Marketer",
  },
  {
    name: "John Doe",
    image: "/assets/instructors/instructor4.jpg",
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
    previewImage: "/assets/courses/js.jpg",
    author: {
      image: "/assets/courses/authors/author1.jpg",
      name: "Chris Impley",
    },
    oldPrice: 179,
    currentPrice: 79,
    level: "Beginner",
  },
  {
    title: "ReactJS",
    previewImage: "/assets/courses/ReactJs.jpg",
    author: {
      image: "/assets/courses/authors/author2.jpg",
      name: "Chris Impley",
    },
    oldPrice: 159,
    currentPrice: 59,
    level: "Intermediate",
  },
  {
    title: "VueJS",
    previewImage: "/assets/courses/vue.jpg",
    author: {
      image: "/assets/courses/authors/author3.jpg",
      name: "Chris Impley",
    },
    oldPrice: 129,
    currentPrice: 29,
    level: "Intermediate",
  },
  {
    title: "Telegram BOT",
    previewImage: "/assets/courses/Tbot.jpg",
    author: {
      image: "/assets/courses/authors/author4.jpg",
      name: "Chris Impley",
    },
    oldPrice: 209,
    currentPrice: 109,
    level: "Intermediate",
  },
  {
    title: "React Native",
    previewImage: "/assets/courses/reactNative.jpg",
    author: {
      image: "/assets/courses/authors/author5.jpg",
      name: "Chris Impley",
    },
    oldPrice: 129,
    currentPrice: 29,
    level: "Intermediate",
  },
  {
    title: "Foundation",
    previewImage: "/assets/courses/foundation.jpg",
    author: {
      image: "/assets/courses/authors/author6.jpg",
      name: "Chris Impley",
    },
    oldPrice: 129,
    currentPrice: 109,
    level: "Intermediate",
  },
];
