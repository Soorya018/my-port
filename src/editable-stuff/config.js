// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Arun  Soorya",
  middleName: "",
  lastName: "Kumaresan",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/arunsooryak/",
    },
    {
      image: "fa-github",
      url: "https://github.com/Soorya018",
    },

    {
      image: "fa-stack-overflow", // Add Stack Overflow icon
      url: "https://stackoverflow.com/users/12929660/arun-soorya", // Replace with your Stack Overflow profile URL
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/picture.png"),
  imageSize: 375,
  message:
    "I am a passionate tech support professional with 4 years of hands-on experience solving complex issues and making technology seamless for users. From troubleshooting at the OS level to integrating APIs and monitoring tools, I thrive on turning problems into solutions. I bring a sharp eye for detail, a love for clean, efficient systems, and a commitment to delivering support that actually supports.",
  resume: "https://drive.google.com/file/d/1giwMoimBsn4OYJ3Nd5_hJW3pLLuzKmsN/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Soorya018", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Airline_Ticket_Pricing_Prediction","Cardio-Disease-Predictor","Face-Attendance","Flask-Application"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "I am able to provide your team with a new positive energy and compassionate leadership qualities.",
  images: [
    { 
      img: require("../editable-stuff/picture.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/picture.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript, Python, Node.js, React.js, XML, JSON, Shell scripting", value: 90 },
    { name: "MSSQL, PostgreSQL, MySQL", value: 75 },
    { name: "Chrome DevTools, Wireshark, Splunk", value: 85 },
    { name: "Linux (Ubuntu, RHEL), Windows Server", value: 65 },
    { name: "TCP, UDP, DNS, SSL/TLS, SMTP, SAML 2.0, IMAP4 ", value: 90 },
    { name: "AWS (including Lambda), VMware, Git, ITIL 4", value: 65 },
    { name: "JIRA, Zendesk, Salesforce, Confluence", value: 55 },
    { name: "REST APIs, Webhooks, Postman", value: 80 },
  ],
  softSkills: [
    { name: "Customer Obsessed", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Technical Support opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "contact@arunsoorya.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Technical Support Engineer - Intern',// Here Add Company Name
      companylogo: require('../assets/img/zoho.png'),
      date: 'June 2020 – Dec 2020',
    },
    {
      role: 'Technical Support Engineer',
      companylogo: require('../assets/img/zoho.png'),
      date: 'Jan 2021 – Sept 2022',
    },
    {
      role: 'Technical Support Engineer',
      companylogo: require('../assets/img/solarsquad.png'),
      date: 'Sept 2022 – June 2024',
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
