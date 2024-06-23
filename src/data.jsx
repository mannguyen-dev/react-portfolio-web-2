import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen, FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const homeData = {
  name: "Man Nguyen",
  jobTitle: "Java Developer",
  jobDescription:
    "Skilled and dedicated Java Developer with over 3 years of experience in designing, implementing, and maintaining high-performance Java applications. Proficient in Java SE/EE, Spring Framework, Hibernate, and RESTful web services, with a strong understanding of object-oriented programming principles and design patterns. Demonstrated ability to work effectively in fast-paced environments, delivering robust and scalable solutions that meet business requirements. Adept at problem-solving and debugging, with a track record of collaborating with cross-functional teams to achieve project goals. Committed to continuous learning and passionate about leveraging the latest Java technologies to drive innovation and optimize application performance.",
  jobDescriptionShort:
    "Experienced Java Developer with over 3 years of expertise in building high-performance Java applications using Java SE/EE, Spring, and Hibernate. Strong problem-solving skills and a proven track record in delivering scalable, efficient solutions. Adept at collaborating with cross-functional teams and passionate about leveraging the latest Java technologies to drive innovation.",
};

export const aboutData = {
  firstName: "Man",
  lastName: "Nguyen",
};

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Man",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Nguyen",
  },

  {
    id: 3,
    title: "Age : ",
    description: "29 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Vietnamese",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Ho Chi Minh City",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+84 792 887 666",
  },

  {
    id: 8,
    title: "Email : ",
    description: "mannguyen.dev@mail.com",
  },

  {
    id: 9,
    title: "LinkedIn : ",
    description: "mannguyen-dev",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "English, Vietnamese",
  },
];

export const stats = [
  {
    id: 1,
    no: "03+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "22+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "20+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "10+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2021 - PRESENT",
    title: "Java Developer <span> DXC Technology </span>",
    desc: "Has extensive experience working on various projects for well-known clients, such as Zurich Insurance and OCBC Bank, delivering high-quality solutions that meet their specific needs and requirements.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - 2023",
    title: "Researcher <span> University of IT (VNU.HCM) </span>",
    desc: 'Contributed to the research project "Detecting algorithmically generated domains" by employing the Long Short-Term Memory (LSTM) artificial intelligence model and developing a system for classifying domain names.',
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2017 - 2018",
    title: "Lab Technician <span> Bureau Veritas Vietnam </span>",
    desc: "Worked as a laboratory technician, responsible for receiving and analyzing consumer products in accordance with established standards.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020 - 2023",
    title: "Bachelor Degree <span> University of IT (VNU.HCM) </span>",
    desc: "Studied Databases, Object-Oriented Programming, Data Structures, Algorithms, and Web System Development. Participated in study groups to collaborate and exchange knowledge and experiences.",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021",
    title: "Java Certification <span> University of Science (VNU.HCM) </span>",
    desc: "Acquired specialized knowledge in the Java programming language, including Java Core and Object-Oriented Programming principles, programming techniques, and storage technologies. Also gained expertise in web application development using JSP, Servlet, Hibernate, and the Spring Framework.",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2013 - 2017",
    title: "Bachelor Degree <span> University of Padagogy (Chemistry) </span>",
    desc: "Have acquired foundational knowledge and engaged in research within the field of chemistry, specifically organic chemistry.",
  },
];

export const skills = [
  {
    id: 1,
    title: "Java - SpringBoot",
    percentage: "95",
  },

  {
    id: 2,
    title: "React.Js",
    percentage: "90",
  },

  {
    id: 3,
    title: "SQL Databases",
    percentage: "90",
  },

  {
    id: 4,
    title: "MongoDB",
    percentage: "85",
  },

  {
    id: 5,
    title: "Node.Js",
    percentage: "70",
  },

  {
    id: 7,
    title: "C++",
    percentage: "65",
  },

  {
    id: 6,
    title: "Python",
    percentage: "60",
  },

  {
    id: 8,
    title: "WordPress",
    percentage: "50",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
