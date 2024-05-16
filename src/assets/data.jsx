import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './Work1.png';
import Work2 from './project2.jpeg';
import Work3 from './project3.jpeg';
import Work4 from './project4.png';
import Work5 from './project5.png';
import Work6 from './project6.png';

import Theme1 from './purple.png';
import Theme2 from './red.png';
import Theme3 from './blueviolet.png';
import Theme4 from './blue.png';
import Theme5 from './goldenrod.png';
import Theme6 from './magenta.png';
import Theme7 from './yellowgreen.png';
import Theme8 from './orange.png';
import Theme9 from './green.png';
import Theme10 from './yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Divya',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Meesala',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '19 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Piduguralla',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 7330936065',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'divimeesala@mail.com',
  },

  {
    id: 9,
    title: 'Lindked in : ',
    description: 'Divya Meesala',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Telugu, English,Hindi',
  },
];

export const stats = [
  {
    id: 1,
    no: '3',
    title: 'Languages <br /> Spoken',
  },

  {
    id: 2,
    no: '5+',
    title: 'Certifications <br /> Earned',
  },

  {
    id: 3,
    no: '4+',
    title: 'Internships <br /> Completed',
  },

  {
    id: 4,
    no: '2',
    title: 'Group <br /> Projects',
  },
];


export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: '10th <span> MPZPS PDRL </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2021',
    title: 'Primary University Course <span> RGUKT Ongole </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021-25',
    title: 'Bachelor Degree <span> RGUKT Ongole </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '66',
  },

  {
    id: 5,
    title: 'ReactJS',
    percentage: '75',
  },

  {
    id: 6,
    title: 'NodeJS',
    percentage: '50',
  },

  {
    id: 7,
    title: 'ExpressJS',
    percentage: '50',
  },

  {
    id: 8,
    title: 'MongoDB',
    percentage: '45',
  },
  {
    id: 9,
    title: 'Java',
    percentage: '60',
  },
  {
    id: 10,
    title: 'Python',
    percentage: '50',
  },
  {
    id: 10,
    title: 'Kotlin',
    percentage: '45',
  },
  {
    id: 11,
    title: 'Firebase',
    percentage: '40',
  },
  {
    id: 12,
    title: 'Bootstrap',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Work Hunter',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WebSite',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Team project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS,JS,PHP',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www..file://home/rgukt/TEAM2/WH/HOME.html',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Android App Dev',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'App',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Kotlin & Firebase',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.app.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.laghui.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'MERN Project',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'M E R N ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.DEVELOPERHUB.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Frontend',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Personal Project',
      },
      {
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.atgworld.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'NODE JS- EXPRESS JS',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Routing Concepts',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal Work',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'NodeJs , ExpressJs',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.nodejs.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
