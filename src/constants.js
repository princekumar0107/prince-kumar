// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Education Section Logo's
import abes from './assets/education_logo/abes.jpeg';
import ddu from './assets/education_logo/ddu.jpeg';
import up from './assets/education_logo/up.png';

// Project Section Logo's
import analog from './assets/work_logo/analog.png';
import calculator from './assets/work_logo/calculator.png';
import bmi from './assets/work_logo/bmi.png';
import news from './assets/work_logo/news.png';
import ems from './assets/work_logo/ems.png';
import weather from './assets/work_logo/weather.png';
// import webverLogo from './assets/work_logo/web_dig.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },   
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [    
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];
 
  export const education = [
    {
      id: 0,
      img: abes,
      school: "Abes Engineering College, Ghaziabad",
      date: "Sept 2023 - July 2025",
      grade: "8.09 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from Abes Engineering College, Ghaziabad. During my time at Abes, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Abes College has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: ddu,
      school: "DDU Gorakhpur, University Gorakhpur",
      date: "Sept 2019 - Aug 2022",
      grade: "56.16%",
      desc: "I completed my Bachelor's degree in Mathematics (B.Sc.) from DDU Gorakhpur University, Gorakhpur. Throughout my studies, I was immersed in a variety of subjects that strengthened my analytical and problem-solving skills. From exploring Algebra and Calculus to diving into Statistics and Mathematical Modelling, I gained practical insights into logical reasoning and quantitative analysis. My time at DDU University allowed me to work on problem-solving approaches that applied theoretical concepts to real-world situations.",
      degree: "Bachelor of Science - B.sc (Mathematics)",
    },
    {
      id: 2,
      img: up,
      school: "MMM IC Bhatpar Rani, Deoria",
      date: "Apr 2018 - March 2019",
      grade: "58.8%",
      desc: "I completed my class 12 education from MMM IC Bhatpar Rani, Deoria, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "UP Board (XII) - PCM",
    },
    {
      id: 3,
      img: up,
      school: "SBIC Ahirauli Tiwari, Deoria",
      date: "Apr 2016 - March 2017",
      grade: "70.17%",
      desc: "I completed my class 10 education from SBIC Ahirauli Tiwari, Deoria, under the UP board, where I studied Science.",
      degree: "UP Board (X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Live Analog Watch",
      description:
        "This is a fully functional Analog Clock built using HTML, CSS, and JavaScript. It dynamically shows the real-time hours, minutes, and seconds with smooth movement. The project highlights my skills in DOM manipulation, CSS styling, and JavaScript Date object usage to create an interactive live clock.",
      image: analog,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/princekumar0107/LiveAnalogWatch",
      webapp: "https://live-analog-watch.vercel.app/",
    },
    {
      id: 1,
      title: "Numeric Calculator",
      description:
        "This is a Numeric Calculator built using HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, multiplication, division, percentage, and deletion. The stylish UI with neumorphism design makes it modern and user-friendly. This project highlights my skills in interactive UI design and JavaScript logic implementation.",
      image: calculator,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/princekumar0107/numericCalculator",
      webapp: "https://numeric-calculator-murex.vercel.app/",
    },
    {
      id: 2,
      title: "Body Mass Index Calculator",
      description:
        "This is a BMI (Body Mass Index) Calculator created using HTML, CSS, and JavaScript. Users enter their height (in CM) and weight (in KG), and it calculates BMI instantly. The tool also provides a guide to check if you are underweight, normal, or overweight, ensuring easy health tracking.",
      image: bmi,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/princekumar0107/BMICalculator",
      webapp: "https://bmi-calculator-wine-one.vercel.app/",
    },
    {
      id: 3,
      title: "Employee Management System",
      description:
        "This Employee Management System is built using React, Redux, Tailwind CSS, HTML, and JavaScript. It includes both User Dashboard and Admin Dashboard, allowing efficient employee management. Data is stored in localStorage for persistence. The project demonstrates my skills in state management, responsive UI design, and interactive dashboard development.",
      image: ems,
      tags: ["HTML", "JavaScript","React JS", "Redux", "Tailwind CSS"],
      github: "https://github.com/princekumar0107/EmployeeManagementSystem",
      webapp: "#",
    },
    {
      id: 4,
      title: "News Website",
      description:
        "This is a News Website built using HTML, CSS, JavaScript, and ReactJS. It fetches real-time news articles dynamically through an API and displays them in different categories like Business, Technology, Sports, and Politics. The project highlights my skills in API integration, React components, and creating responsive, user-friendly web applications.",
      image: news,
      tags: ["React.js", "API", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/princekumar0107/News_Site",
      webapp: "#",
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "This Weather App is built using React JS and fetches real-time weather data from an API. Users can search any city to view current temperature, conditions, and other details. The app is fully responsive, simple to use, and serves as a great project for showcasing in a portfolio.",
      image: weather,
      tags: ["HTML", "CSS", "JavaScript", "React js"],
      github: "https://github.com/princekumar0107/Weather-App",
      webapp: "#",
    },
    
  ];  