// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: '7Jobs Recruitment Platform',
    shortDescription:
      'A complete recruitment platform connecting job seekers and employers with advanced filtering, matching algorithms, and scalable architecture built using Next.js and Supabase.',
    cover:
      'https://images.unsplash.com/photo-1581092334394-70b7c8d4fc2e?q=80&w=2070&auto=format&fit=crop',
    livePreview: 'https://www.sebatsolutions.com/',
    type: 'Client Work 👥',
    siteAge: 'Launched in 2024',
  },
  {
    priority: 2,
    title: 'Inventory Management Software (IMS)',
    shortDescription:
      'A web-based inventory management system enabling businesses to track stock levels, manage products, and generate performance analytics. Built with React, Redux, Laravel, and MySQL.',
    cover:
      'https://images.unsplash.com/photo-1581090700227-4c4f50cce256?q=80&w=2070&auto=format&fit=crop',
    livePreview: 'https://demoretail.alephtavconsult.net/',
    type: 'Client Work 🏢',
    siteAge: 'Launched in 2024',
  },
  {
    priority: 3,
    title: 'Justinshope E-commerce App',
    shortDescription:
      'A cross-platform e-commerce mobile app for the Italian market developed in Flutter with Node.js (TypeScript) and Firebase backend, delivering a seamless shopping experience.',
    cover:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    livePreview: 'https://justinshop.it/',
    type: 'Client Work 🌍',
    siteAge: 'Released in 2025',
  },
  {
    priority: 4,
    title: 'Web Crawler Desktop App',
    shortDescription:
      'A desktop application designed to automate scraping of job listings from remote hiring platforms, significantly improving data collection speed and efficiency.',
    cover:
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2070&auto=format&fit=crop',
    livePreview: '',
    type: 'Client Work 🏢',
    siteAge: 'Completed in 2023',
  },
]

// Service Data
export const serviceData = [
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription: 'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription: 'Building modern and responsive user interfaces with React.js.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription: 'Developing scalable server-side applications using Node.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription: 'Creating server-rendered React applications with Next.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Ensuring robust and maintainable code with TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription: 'Designing beautiful and responsive interfaces with Tailwind CSS.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressjsIcon,
  },
  {
    name: 'Nest.js',
    icon: NestjsIcon,
  },
  {
    name: 'Socket.io',
    icon: SocketIcon,
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  {
    title: 'Blogs',
    href: '#blogs',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['English', 'Amharic']
