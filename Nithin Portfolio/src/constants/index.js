import exp1 from "../assets/Experience/exp-1.png";
import exp2 from "../assets/Experience/exp-2.png";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project5.png";
import certificate1 from "../assets/Certifications/certificate1.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including React.js, Socket.Io, Node.js, MySQL, PostgreSQL, and MongoDB,Git. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2023",
    role: "Web Developer Intern",
    company: "PHN Tehnology",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    image:exp1,
  },
  {
    year: "2022 - 2023",
    role: "GDSC GNI Webdev member",
    company: "Google",
    description: `Designed and developed user interfaces for web applications using HTML,CSS, JavaScript. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "mySQL"],
    image:exp2,
  },
];

export const PROJECTS = [
  {
    title: "Diabetes Prediction Model Using Machine Learning",
    image: project1,
    description:
      "Developed a machine learning model that predicts whether the patient is affected by type 2 diabetes or not instantly.Model is built using various machine learning models like KNN, SVM, Logistic Regression,Random Forest, Decision Trees, and C4.5.Front end designed using Flask, Html, CSS. Backend: Python.Model performance is evaluated by accuracy, the Roc curve, and the confusion matrix.",
    technologies: ["HTML", "CSS", "Python", "Machine Learning", "Flask"],
    link:"https://github.com/Nithin-Meesala/Diabetes-Pediction-model-Using-Machine-Learning-Algorithm",
  },
  { 
    title: "AI Resume Builder",
    image: project2,
    description:
      "Developed a full-stack AI-powered resume builder application that allows users to create and customize and download resumes for free with real-time preview. Integrated Gemini AI to assist users in generating resume content, including summaries and skills. The application is responsive across various screen sizes and offers custom styling and social sharing features.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Google OAuth",
      "MongoDB",
      "Axios",
      "Express",
      "Shad CN",
    ],
    link:"https://nithin-ai.onrender.com/",
  },
  {
    title: "Lumina Chat(Realtime Chat Application)",
    image: project3,
    description:
      "Developed a web-based chat application using Socket.io where the user can create a profile and chatwith friends. Direct messaging and creating groups feature also added. Responsive for all screen size. Users can also share images and files in the groups and individual messages.The The available users can also view and download the images and files.",
    technologies: [
      "React",
      "Node.js",
      "Socket.Io",
      "Amazon S3",
      "JWT",
      "Tailwind CSS",
      "MongoDB",
      "Shad CN",
    ],
  },
  {
    title: "Sec-Health: BlockChain based Protocol for securing health records",
    image: project4,
    description:
      "Developed an System which provides more security to the patients health records based on Blockchain Mechanism and Encryption of health records.The patients health records can only be acessed by doctors only if approved by the patients which provides more control of patients health records , otherwise the doctor recieves an encrypted health record .",
    technologies: ["Java", "Eclipse", "mySQL", "HTML", "CSS"],
    link:"https://github.com/Nithin-Meesala/Sec-Health-BlockChain-based-Protocol-for-securing-health-records",
  },
  {
    title: "Result Management System",
    image: project5,
    description:
      "Developed a comprehensive Result Management System using modern web technologies like HTML, CSS, JavaScript, Node.js, Express.js, EJS, and Mongoose. This system streamlines the process of managing and accessing academic results for both students and staff, ensuring a user-friendly and efficient experience.",
    technologies: ["HTML", "CSS", "EJS", "Node.js", "Express","JavaScript"],
    link:"https://github.com/Nithin-Meesala/Student-Result-Management-System",
  }
];

export const CERTIFICATIONS= [
  {
    title: "WIPRO Talent-Next Java FullStack ",
    image: certificate1,
    description:
      "Completed the certification focused on core Java programming,Frontend, Backend,   object-oriented principles, and application development, preparing for real-world software development scenarios..",
    technologies: ["HTML", "CSS", "Java", "SQL"],
    link:"https://drive.google.com/file/d/1_S8BdTHSaGOHsPnzjqAwwvqg2sHitds5/view?usp=sharing",
  },
  
];




export const CONTACT = {
  address: "Tarnaka, Hyderabad",
  phoneNo: "+91 9949103344 ",
  email: "meesalanithinplmt@gmail.com",
};

