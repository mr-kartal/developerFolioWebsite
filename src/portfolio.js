/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

//export const Mailroom = () => (

  //<div>
    //<FontAwesomeIcon icon="fa-solid fa-dog" />
    //<FontAwesomeIcon icon="fa-sharp fa-solid fa-hippo" />
    //<FontAwesomeIcon icon="fa-duotone fa-solid fa-feather" />
    //<FontAwesomeIcon icon="fa-duotone fa-thin fa-fish" />
    //<FontAwesomeIcon icon="fa-sharp-duotone fa-solid fa-dolphin" />
  //</div>
//)

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

const greeting = {
  username: "ↃK",
  title: "This is ↃK",
  subTitle: emoji(
     "I'm Çağrı Kartal. I have experience in conducting R&D to design end-to-end systems tailored to specific needs. " +
    "I have specialized in software development, web design, and mobile app development."
  ),
  //resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mr-kartal",
  linkedin: "https://www.linkedin.com/in/cagrikartal/",
  gmail: "krtl.cgri@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Techs I Use",
  skills: [
    emoji("▪️ Develop custom software for specific needs both in desktop 💻 and mobile 📱 "),
    emoji("▪️ Responsive Web Design and Development 🌐"),
    emoji("▪️ Database Management and Design 📊"),
    emoji("▪️ Integration of third party services such as Supabase ⚡ and GoogleAuth 🛡️"),
    emoji("️️▪ Video Game Development 🎮"),
  ],

  softwareSkills: [
    { skillName: "HTML5" },
    { skillName: "CSS3" },
    { skillName: "JavaScript" },
    { skillName: "Python" },
    { skillName: "PostgreSQL" },
    { skillName: "Database"},
    { skillName: "GitHub" },
    { skillName: "Flutter" },
    { skillName: "Renpy" },
    { skillName: "Mobile"},
    { skillName: "Desktop"},
    { skillName: "Supabase"},
  ],


  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Manisa Celal Bayar University",
      logo: require("./assets/images/logocbu_kare_800.jpg"),
      subHeader: "BEng in Computer Engineering",
      duration: "September 2020 - July 2025",
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Turkish", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "English",
      progressPercentage: "95%"
    },
    {
      Stack: "Latin",
      progressPercentage: "15%"
    },
    {
      Stack: "Dutch",
      progressPercentage: "10%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Computer Scientist",
      company: "Vexnor Teknoloji A.Ş",
      companylogo: require("./assets/images/VEXNOR.jpg"),
      date: "September 2024 – November 2024",
      desc: "Designed a custom-built desktop app for scientific calculations in a biotechnology company, ensuring accurate data processing and reporting.",
      descBullets: []
    },
    {
      role: "Web Developer",
      company: "MCBU Computer Research Administration Center",
      companylogo: require("./assets/images/logocbu_kare_800.jpg"),
      date: "July 2022 – August 2022",
      desc: "Managed and structured databases, for an internal university management system."
    },
    {
      role: "Software Developer Intern",
      company: "Mese Informatics",
      companylogo: require("./assets/images/mese-bilisim-kare-logo.jpg"),
      date: "October 2021 – July 2022",
      desc: "Algorithm design analysis and testing. Collaborated with\n" +
        " cross-functional teams to structure technical documentation and research reports."
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
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle:"Here is some writings from my personal blog. Click on the title to read more.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://cagrikartal.com/2025/03/16/every-time-i-love/",
      title: "Every time I love",
      description:"Every time I love, it hurts moreover\n Like a blade made of your thoughts..."
    },
    {
      url: "https://cagrikartal.com/2025/03/16/vale-o-valde-decora/",
      title: "Vale, o valde decora",
      description:"Si tibi pretium est meam animam tuam cum tua servare, ignosce mihi pro omnibus quae feci. Ignarus eram, oblitteratus..."
    },
    {
      url: "https://cagrikartal.com/2025/03/16/lux-amplius-non-est/",
      title: "Lux amplius non est",
      description:"Ezbere bildiğim caddelerden kaçıyorum.\n "
        + "Yolumu uzatıyorum ama yetmiyor...."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+905063003638",
  email_address: "krtl.cgri@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
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
