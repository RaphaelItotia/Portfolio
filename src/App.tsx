import {
  Github,
  /*Linkedin*/
  Mail,
  ArrowDown,
  Wrench, 
  Sparkles,
  Bot,
  Computer,
} from "lucide-react";
import Navbar from "./components/Navbar"; 
import ProjectCard from "./components/ProjectCard";
import ResumeButton from "./components/ResumeButton";
import SkillCard from "./components/SkillCard";
import customerImage from "./assets/murima_header.png";
import revenuedebtImage from "./assets/Thumbnail.png";
//import watertanksImage from "./assets/Header_Tanks.png";
import kenyaImage from "./assets/Kenya.png";
import logo from "./assets/logo.png";
import officeImage from "./assets/Office.png";
//import TestimonialCard from "./components/TestimonialCard";
import AnimatedText from "./components/AnimatedText";
//import maleImage from "./assets/male.png"
//import femaleImage from "./assets/female.png"
import ContactForm from "./components/ContactForm";
import profilePicture from "./assets/IMG_20190908_115819_0.jpg" 

function App() {
  const titles = [
    {
      text: "Computer Applications & AI Integration",
      description: "Applying AI tools to everyday software applications to improve productivity and efficiency."
    },
    {
      text: "Computer Applications & Digital Systems Support",
      description: "Supporting digital workflows, documentation, system use, and AI-assisted productivity tools."
    }
  ];

  const projects = [
     {
      title: "Office Organizer",
      description: "An automated leave and attendance management system built using Google Forms, Sheets, Calendar, and Apps Script. It streamlines leave requests, sends approval emails, and syncs approved dates with Google Calendar for efficient HR operations.",
      image: officeImage,
      technologies: ["Google Apps Script", "HR Workflow", "Calendar Integration", "Automation"],
      githubUrl: "https://github.com/RaphaelItotia/Office_Digital_Organizer",
      // liveUrl: "",
    } /*,
    {
      title: "Customer Satisfaction Analysis",
      description: "In this project, I used hypothesis testing (paired t-test) to determine if there is a statistically significant improvement in customer satisfaction after the service improvements at Murima Superstores.",
      image: customerImage,
      technologies: ["Statistical Analysis (Hypothesis Testing)", "Python"],
      githubUrl: "https://github.com/RaphaelItotia/Customer_Satisfaction_Analysis",
      liveUrl: "https://drive.google.com/file/d/1-qF0HJIwtBokpWTAyyJfXAiz2AJsH_03/view?usp=drivesdk",
    },
    {
      title: "Kenyan Government Debt and Revenue Analysis",
      description:
        "It reveals the relationship between Government debt and revenue over a specific period. It includes correlation studies, growth rate comparisons, and examination of debt-to-revenue ratios. The goal was to assess sustainability of Government finances by analyzing trends in domestic and external debt relative to revenue, including external grants.",
      image: revenuedebtImage,
      technologies: ["Data Collection & Management", "Correlation Analysis", "Report Writing", "MS Excel"],
      githubUrl: "https://github.com/RaphaelItotia/Kenyan-Government-Debt-and-Revenue-Analysis",
      liveUrl: "https://docs.google.com/presentation/d/11bjGyjBBWQfsyWfmaEtKz0uV_P3jWa5-/edit?usp=drivesdk&ouid=118121594836737568751&rtpof=true&sd=true",
    },
    
    {
      title: "Analysis of Water Tanks Prices in Kenya",
      description:
        "In this project, the objective was to understand the pricing patterns of water tanks in Kenya across different brands and sizes. This insights can help consumers make informed purchasing decisions.",
      image: watertanksImage,
      technologies: [
        "Web Scraping",
        "Hypothesis Testing",
        "Exploratory Data Analysis (EDA)",
        "Python"
      ],
      githubUrl: "https://github.com/RaphaelItotia/Water_Tanks_Prices_Kenya",
     // liveUrl: "",
    }
    
    {
      title: "Kenyan YouTubers Analysis",
      description:
        "The Head of Marketing seeks to identify the optimal Kenyan YouTubers for conducting marketing campaigns over the marketing period. The goal is to uncover the recommendable youtubers to work with",
      image: kenyaImage,
      technologies: [
        "SQL",
        "Power BI",
        "Data Cleaning & Transformation"
      ],
      githubUrl: "https://github.com/RaphaelItotia/Kenyan_Youtubers_Analysis",
     // liveUrl: "",
    } */
  ];
   
  const skillCategories = [
    {
      title: "ICT & Systems Support",
      icon: Wrench,
      skills: [
        "User Support & Training",
        "Hardware & Peripheral Support",
        "Software Installation & Troubleshooting"
      ],
    },
    {
      title: "Computer Applications Support",
      icon: Computer,
      skills: [
        "Google Workspace AI",
        "Application User Support"
      ],
    },
    {
      title: "Digital Productivity Tools",
      icon: Sparkles,
      skills: [
        "Task & Document Management",
        "Workflow Optimization"
      ],
    },
    {
      title: "AI-powered Solutions",
      icon: Bot,
      skills: [
        "AI for Documentation & Reporting",
        "AI-assisted Task Automation"
      ],
    }
  ];
/*
  const testimonials = [
    {
      name: "Peter Mbui",
      role: "Software Developer at Alis",
      image: maleImage,
      content:
        "He is one of the most talented analysts I've worked with. His ability to solve complex problems while maintaining clean code is remarkable.",
    },
    {
      name: "Judith Bitengo",
      role: "Revenue Officer at County Govt of Nakuru",
      image: femaleImage,
      content:
        "Raphael Itotia demonstrated strong analytical skills, attention to detail, and proficiency in data analysis and visualization using Excel, Power BI, and SQL. He was proactive, eager to learn, and a valuable team player.",
    }
  ];
*/
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-16 flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://dlcdnwebimgs.asus.com/files/media/8abcaa44-316f-4fb1-8579-5bbddbbb5612/v1/assets/image/proart/article_img_08.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-black/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              <AnimatedText
                texts={titles.map((t) => t.text)}
                className="min-h-[4rem] inline-block"
              />
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              <AnimatedText
                texts={titles.map((t) => t.description)}
                className="min-h-[3rem] inline-block"
              />
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a
                href="https://github.com/RaphaelItotia"
                target="_blank"
                className="text-gray-200 hover:text-indigo-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              {/*
              <a
                href="https://www.linkedin.com/in/itotia-g-raphael"
                target="_blank"
                className="text-gray-200 hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a> */}
              <a
                href="mailto:raphaelitotia@gmail.com"
                target="_blank"
                className="text-gray-200 hover:text-indigo-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <ArrowDown className="h-6 w-6 mx-auto text-gray-200 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                  I work with computer applications and AI-enabled tools to improve efficiency, streamline workflows, and support digital operations. My focus is on practical technology use - helping users get real value from everyday software, documentation systems, and AI-powered productivity tools.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-indigo-600" />
                  <span>ICT & Systems Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                  <span>Digital Productivity Tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-indigo-600" />
                  <span>AI-powered Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Computer className="h-5 w-5 text-indigo-600" />
                  <span>Computer Applications Support</span>
                </div>
              </div>
              <ResumeButton />
            </div>
            <div className="relative">
              <img
                src={profilePicture}
                alt="Raphael Itotia"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technologies and Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <SkillCard
                key={category.title}
                title={category.title}
                Icon={category.icon}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What People Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Testimonials from clients and colleagues
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section> */}
     
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Contact Me
          </h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
              <span className="ml-2 text-xl font-bold">Raphael Itotia</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/RaphaelItotia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              {/*
              <a
                href="https://www.linkedin.com/in/itotia-g-raphael"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a> */}
              <a
                href="mailto:raphaelitotia@gmail.com"
                className="hover:text-indigo-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
