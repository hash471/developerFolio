/* Change this file to get your personal portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const isHireable = true;
const resumeSection = {
  display: false
};

const greeting = {
  username: "Sriharsha Ramachandra",
  title: "Hi all, I'm Sriharsha",
  subTitle: emoji(
    "A passionate Senior Full Stack Engineer 🚀 with expertise in AI/ML, Cloud Architecture, and Microservices. I love building scalable solutions that drive innovation and user engagement."
  ),
  resumeLink: "https://drive.google.com/file/d/YOUR_RESUME_LINK_HERE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/hash471", // Update with your actual GitHub
  linkedin: "https://www.linkedin.com/in/sriharsha-r-98b92a1a7/", // Update with your actual LinkedIn
  gmail: "sriharshar.471@gmail.com",
  gitlab: "", // Update if you have GitLab
  facebook: "", // Add if you have Facebook
  medium: "", // Add if you have Medium
  stackoverflow: "", // Add if you have StackOverflow
  instagram: "", // Add if you have Instagram
  twitter: "", // Add if you have Twitter
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER & AI/ML ENTHUSIAST WHO LOVES TO EXPLORE CUTTING-EDGE TECHNOLOGIES",
  skills: [
    emoji("⚡ Develop highly scalable production ready microservices architecture"),
    emoji("⚡ Build intelligent AI/ML solutions using LLMs, RAG, and modern frameworks"),
    emoji("⚡ Design cloud-native applications on AWS and GCP with containerization"),
    emoji("⚡ Create responsive frontend applications in React, Angular, and Vue.js"),
    emoji("⚡ Integration of third party services such as AWS Lambda, S3, RDS, and various APIs"),
    emoji("⚡ Lead engineering teams and mentor developers on best practices")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Birla Institute of Technology and Science, Pilani",
      logo: require("./assets/images/bitsLogo.png"), // Add BITS logo to assets/images
      subHeader: "M.Tech in Artificial Intelligence and Machine Learning",
      duration: "November 2024 - November 2026 (Expected)",
      desc: "Currently pursuing advanced studies in AI/ML with focus on Deep Learning, NLP, and Computer Vision.",
      descBullets: []
    },
    {
      schoolName: "Gayathri Vidya Parishad College of Engineering",
      logo: require("./assets/images/gvpLogo.png"), // Add GVP logo to assets/images
      subHeader: "B.Tech in Electronics and Communication Engineering",
      duration: "2006 - 2010",
      desc: "Foundation in engineering principles with strong mathematical background.",
      descBullets: [
        "Perfect 100% score in mathematics evaluations",
        "CAT Top 1 percentile in Logical Reasoning and Quantitative aptitude"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AI/ML & LLMs",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Architecture",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps & Containerization",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to false to hide workExperiences section, defaults to true
  experience: [
    {
      role: "Senior Full Stack Engineer (R&D)",
      company: "Taylor & Francis Technology Services LLP",
      companylogo: require("./assets/images/taylorFrancisLogo.png"), // Add logo
      date: "August 2022 – Present",
      desc: "Leading R&D initiatives in AI/ML and microservices architecture, driving innovation in academic publishing technology.",
      descBullets: [
        "Transitioned legacy monolith to microservices using Java-17 and Spring Boot, reducing deployment times by 60%",
        "Led team of 10 engineers building LLM-driven features, achieving 15% increase in user engagement",
        "Architected serverless solutions on AWS Lambda, reducing infrastructure costs by 40%",
        "Built knowledge center using LLMs and Gen-AI, boosting SEO traffic by 62%",
        "Implemented sentiment analysis dashboard processing 500 reviews daily"
      ]
    },
    {
      role: "Lead Engineer, Co-Founder",
      company: "RQB Technologies",
      companylogo: require("./assets/images/rqbLogo.png"), // Add logo
      date: "January 2021 – August 2022",
      desc: "Co-founded and led engineering efforts for social platform and fintech solutions with high-scale architecture.",
      descBullets: [
        "Converted legacy social platform to microservices using Java 17, RabbitMQ, and Angular",
        "Built scalable data infrastructure handling 2M+ daily transactions with 99.99% uptime",
        "Re-architected webhook system reducing latency from 4-5s to sub-second response times",
        "Implemented crypto wallet on SKALE-USDC blockchain supporting 60M+ transactions",
        "Developed Go-based video transcoding solution reducing storage costs by 40%"
      ]
    },
    {
      role: "Lead Consultant - Technology",
      company: "TechChefs",
      companylogo: require("./assets/images/techChefsLogo.png"), // Add logo
      date: "June 2020 – January 2021",
      desc: "Led technology consulting initiatives, focusing on modern development practices and system optimization.",
      descBullets: [
        "Built CLI tools cutting down data migration times by 50%",
        "Created 15+ mock services with NestJS accelerating integration testing by 40%",
        "Spearheaded team's shift to Test-Driven Development (TDD)",
        "Implemented robust design documentation reducing code rework by 20%"
      ]
    },
    {
      role: "Application Engineer",
      company: "DXC Technologies",
      companylogo: require("./assets/images/dxcLogo.png"), // Add logo
      date: "June 2018 – February 2019",
      desc: "Modernized legacy applications and implemented RESTful API architectures.",
      descBullets: [
        "Rebuilt legacy desktop applications using Angular-based SPAs",
        "Achieved 60% faster loading times and 40% increase in user engagement",
        "Automated validation of SOAP-XML contracts and error detection"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/aiResearchAssistant.png"),
      projectName: "AI-Powered Research Assistant",
      projectDesc: "Reduced research time by 15% using LLMs with RAG and Gen-AI via LangChain, ChromaDB, and OpenAI",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://your-project-url.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/voiceAssistant.png"),
      projectName: "Real-time Voice Assistant",
      projectDesc: "Developed voice assistant using OpenAI Whisper and Amazon Polly with 95% accuracy rate",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://your-project-url.com/"
        }
      ]
    },
    {
      image: require("./assets/images/cryptoWallet.png"),
      projectName: "Crypto Wallet Platform",
      projectDesc: "Built scalable crypto wallet on SKALE-USDC blockchain supporting 60M+ transactions",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://your-project-url.com/"
        }
      ]
    },
    {
      image: require("./assets/images/microservicesArch.png"),
      projectName: "Microservices Migration",
      projectDesc: "Led migration from monolith to microservices reducing deployment times by 60%",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://your-project-url.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Cloud Providers & No-Code Tools Section
const cloudProvidersSection = {
    title: "Cloud Infrastructure & Automation",
    subtitle: "Multi-Cloud Architecture • No-Code Automation • Enterprise Solutions",
  
  cloudProviders: [
    {
      name: "Amazon Web Services",
      image: require("./assets/images/aws-logo.png"),
      services: ["Lambda", "ECS", "EC2", "S3", "RDS", "IAM", "CloudWatch"],
      experience: "5+ Years",
      certifications: ["AWS Solutions Architect - Associate"]
    },
    {
      name: "Google Cloud Platform", 
      image: require("./assets/images/gcp-logo.png"),
      services: ["Workflows", "Firebase", "Compute Engine", "Cloud Storage", "BigQuery"],
      experience: "3+ Years",
      certifications: []
    },
    {
      name: "Microsoft Azure",
      image: require("./assets/images/azure-logo.png"),
      services: ["App Service", "Functions", "Storage", "SQL Database", "DevOps"],
      experience: "2+ Years",
      certifications: []
    },
    {
      name: "Bare Metal Solutions",
      image: require("./assets/images/openmetal-logo.png"),
      services: ["OpenMetal", "Dedicated Servers", "Custom Infrastructure", "High Performance Computing"],
      experience: "2+ Years",
      certifications: []
    }
  ],

  automationTools: [
    {
      name: "Make.com (Integromat)",
      image: require("./assets/images/make-logo.png"),
      description: "Advanced workflow automation and API integrations",
      useCases: ["CRM Automation", "Lead Processing", "Data Synchronization", "Multi-platform Integration"],
      expertise: "Expert"
    },
    {
      name: "GoHighLevel",
      image: require("./assets/images/ghl-logo.png"),
      description: "All-in-one agency CRM and marketing automation platform",
      useCases: ["Agency Management", "Client CRM", "Marketing Funnels", "Appointment Scheduling"],
      expertise: "Advanced"
    },
    // {
    //   name: "Zapier",
    //   image: require("./assets/images/zapier-logo.png"),
    //   description: "Simple automation between web applications",
    //   useCases: ["Quick Integrations", "Small Business Automation", "Workflow Triggers"],
    //   expertise: "Expert"
    // },
    {
      name: "Custom API Development",
      image: require("./assets/images/api-logo.png"),
      description: "RESTful and GraphQL API development for complex integrations",
      useCases: ["Enterprise Integration", "Legacy System Connection", "Real-time Data Sync"],
      expertise: "Expert"
    }
  ],
  
  display: true // Set false to hide this section
};

// Achievement Section
// Include certificates, talks etc



const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle: "Associate level certification demonstrating cloud architecture expertise",
      image: require("./assets/images/awsLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://your-aws-cert-url.com"
        }
      ]
    },
    {
      title: "Top Team Award - Taylor & Francis",
      subtitle: "Architected NLP-based journal recommender system",
      image: require("./assets/images/taylorFrancisLogo.png"),
      footerLink: []
    },
    {
      title: "Star of the Quarter - TCS",
      subtitle: "Recognized for exceptional performance and innovation in software development",
      image: require("./assets/images/tcsLogo.png"),
      footerLink: []
    },
    {
      title: "CAT Top 1 Percentile",
      subtitle: "Achieved top 1 percentile in Logical Reasoning and Quantitative Aptitude",
      image: require("./assets/images/catLogo.png"),
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@your-medium-handle/ai-ml-in-production",
      title: "Deploying AI/ML Models in Production",
      description: "Best practices for scaling AI/ML solutions in enterprise environments"
    },
    {
      url: "https://medium.com/@your-medium-handle/microservices-migration",
      title: "From Monolith to Microservices: A Practical Guide",
      description: "Step-by-step approach to migrating legacy systems to microservices architecture"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "AI/ML in Enterprise Applications",
      subtitle: "Tech Talk at Taylor & Francis",
      slides_url: "https://your-slides-url.com",
      event_url: "https://your-event-url.com"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/your-podcast/embed/episodes/your-episode"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9791018885",
  email_address: "sriharshar.471@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "your_twitter_handle", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  cloudProvidersSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};