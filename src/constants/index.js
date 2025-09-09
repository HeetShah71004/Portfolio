const words = [
  // { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  // { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];
const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 7, suffix: "+", label: "Completed Projects" },
  { value: 8, suffix: "+", label: "Tech Stacks Mastered" },
  { value: "95%", suffix: "", label: "Client Satisfaction Rate" },
];
const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  // {
  //   name: "Experience",
  //   link: "#experience",
  // },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
  {
    name: "Download CV",
    link: "https://drive.google.com/uc?export=download&id=1Xhl1DekJntDeUecn2nNWG7MNFj5kC1Bm",
  },
];

const logoIconsList = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Three.js",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "JavaScript",
    imgPath: "/images/code.svg",
  },
  {
    name: "GitHub",
    imgPath: "/images/github.svg",
  },
  {
    name: "Vite",
    imgPath: "/vite.svg",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const expCards = [
  {
    review:
      "Heet brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Heet's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Heet's work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

// Enhanced Skills Data for HR-Friendly Portfolio
const skillCategories = [
  {
    category: "Frontend Development",
    icon: "⚛️",
    skills: [
      { name: "React.js", level: "Expert", years: "2+", color: "#61DAFB" },
      {
        name: "JavaScript ES6+",
        level: "Expert",
        years: "3+",
        color: "#F7DF1E",
      },
      { name: "TypeScript", level: "Advanced", years: "2+", color: "#3178C6" },
      { name: "HTML5 & CSS3", level: "Expert", years: "3+", color: "#E34F26" },
      { name: "Tailwind CSS", level: "Expert", years: "2+", color: "#06B6D4" },
      {
        name: "Responsive Design",
        level: "Expert",
        years: "3+",
        color: "#FF6B6B",
      },
    ],
  },
  {
    category: "Backend Development",
    icon: "🔧",
    skills: [
      { name: "Node.js", level: "Advanced", years: "2+", color: "#339933" },
      { name: "Python", level: "Expert", years: "3+", color: "#3776AB" },
      { name: "Express.js", level: "Advanced", years: "2+", color: "#000000" },
      { name: "Django", level: "Advanced", years: "2+", color: "#092E20" },
      { name: "REST APIs", level: "Expert", years: "2+", color: "#FF9500" },
      { name: "GraphQL", level: "Intermediate", years: "1+", color: "#E10098" },
    ],
  },
  {
    category: "Database & DevOps",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: "Advanced", years: "2+", color: "#47A248" },
      { name: "PostgreSQL", level: "Advanced", years: "2+", color: "#336791" },
      { name: "MySQL", level: "Advanced", years: "2+", color: "#4479A1" },
      { name: "Docker", level: "Intermediate", years: "1+", color: "#2496ED" },
      { name: "Git & GitHub", level: "Expert", years: "3+", color: "#F05032" },
      {
        name: "AWS Basics",
        level: "Intermediate",
        years: "1+",
        color: "#FF9900",
      },
    ],
  },
  {
    category: "Tools & Frameworks",
    icon: "🛠️",
    skills: [
      { name: "Next.js", level: "Advanced", years: "2+", color: "#000000" },
      { name: "Vite", level: "Advanced", years: "1+", color: "#646CFF" },
      {
        name: "Three.js",
        level: "Intermediate",
        years: "1+",
        color: "#000000",
      },
      {
        name: "React Native",
        level: "Intermediate",
        years: "1+",
        color: "#61DAFB",
      },
      { name: "Figma", level: "Intermediate", years: "2+", color: "#F24E1E" },
      { name: "VS Code", level: "Expert", years: "3+", color: "#007ACC" },
    ],
  },
  {
    category: "Soft Skills",
    icon: "🧠",
    skills: [
      {
        name: "Problem Solving",
        level: "Expert",
        years: "3+",
        color: "#9B59B6",
      },
      {
        name: "Team Collaboration",
        level: "Expert",
        years: "3+",
        color: "#E74C3C",
      },
      {
        name: "Project Management",
        level: "Advanced",
        years: "2+",
        color: "#F39C12",
      },
      {
        name: "Client Communication",
        level: "Advanced",
        years: "2+",
        color: "#2ECC71",
      },
      {
        name: "Agile Methodology",
        level: "Advanced",
        years: "2+",
        color: "#3498DB",
      },
      { name: "Code Review", level: "Advanced", years: "2+", color: "#E67E22" },
    ],
  },
];

const socialImgs = [
  {
    name: "instagram",
    imgPath: "/images/icons/instagram.svg",
    url: "https://www.instagram.com/heetshah710/",
  },
  {
    name: "github",
    imgPath: "/images/icons/github.svg",
    url: "https://github.com/HeetShah71004",
  },
  {
    name: "x-twitter",
    imgPath: "/images/icons/x-twitter.svg",
    url: "https://x.com/SHAHHEETD",
  },
  {
    name: "linkedin",
    imgPath: "/images/icons/linkedin.svg",
    url: "https://www.linkedin.com/in/shah-heet-d-049a98316/",
  },
];

export {
  words,
  counterItems,
  navLinks,
  logoIconsList,
  abilities,
  expCards,
  techStackIcons,
  techStackImgs,
  skillCategories,
  testimonials,
  socialImgs,
};
