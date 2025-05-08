import { useState } from 'react';
import { Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import hackathonImg from "../assets/hackathon.png";
import ossoImg from "../assets/osso.png";
import dash1Img from "../assets/powerbi.png";
import studygroupImg from "../assets/studygroup.png";
import hackathonMeImg from "../assets/hackathonme.jpeg";
import androidImg from "../assets/android.png";
import amazonImg from "../assets/amazon.png";
import portfolioImg from "../assets/profolio.png";

// TypeScript type for a project
interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  video?: string;
  details: string[];
  image: string;
  modalImage?: string;
}

// Type for ProjectModal props
interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const projectsData: Project[] = [
  {
    title: 'KellerApp (uOttaHack 7 Hackathon Winner 🥇 850+ participants)',
    description: 'Real-time British Sign Language (BSL) translator web app.',
    tech: ['Python', 'Streamlit', 'MediaPipe', 'Groq AI API', 'REST APIs'],
    github: 'https://github.com/cblankenback/KellerApp',
    video: 'https://dorahacks.io/buidl/21663/',
    details: [
      'Problem: Communication barriers for individuals using British Sign Language.',
      'Solution: Developed an interactive, real-time translator using gesture recognition and AI.',
      'Key Features: Real-time gesture-to-text translation, video demonstrations from SignBSL.com, interactive practice mode.',
      'Impact: Won 1st place and Best Use of Streamlit out of 850+ participants at uOttaHack 7.'
    ],
    image: hackathonMeImg,
    modalImage: hackathonImg,
  },
  {
    title: 'OSSO Automation Project',
    description: 'Script to automate manual data entry for a local organization, saving ~16 hours/month.',
    tech: ['Python', 'Pandas', 'Excel Automation'],
    details: [
      'Problem: Manual Excel data entry into accounting software took 2 days/month and required thousands of repetitive clicks.',
      'Solution: Automated the process with a Python script using Pandas.',
      'Key Features:',
      '- Excel parsing and transformation',
      '- Auto-formatting and validation',
      '- Integration with data input system',
      '- Reduced manual effort from thousands of clicks to just a few',
      'Impact: Saved OSSO ~16 hours of manual work monthly; reduced human error; process time dropped from 2 days to only 30 minutes.'
    ],
    image: ossoImg,
  },
  {
    title: 'Power BI and Machine Learning on Video Game Sales',
    description: 'Power BI dashboard and ML model to predict video game genres using sales data.',
    tech: ['Python', 'Pandas', 'Random Forest', 'Power BI', 'Jupyter Notebook'],
    github: 'https://github.com/cblankenback/Database-Power-BI-dashboard-Machine-learning-group-project',
    details: [
      "Problem: Wanted to understand if sales data could predict a game's genre.",
      'Solution: Trained a random forest classifier on a dataset of 35,000+ entries.',
      'Key Features: Exploratory data analysis in Jupyter, Python data preparation, Random forest with ~50% accuracy, Power BI visuals showing key patterns.',
      'Impact: Gained insights into features affecting game genres; supported learning in predictive analytics.'
    ],
    image: dash1Img,
  },
  {
    title: 'Study Group Finder (WebApp + Restful API)',
    description: 'Web app that helps students organize and join study groups.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'Azure', 'Thymeleaf', 'CRUD', 'RestFul APIs'],
    github: 'https://github.com/cblankenback/study.group.finder',
    details: [
      'Problem: Students struggled to find and organize study partners.',
      'Solution: Created a platform where users can join or create groups by course.',
      'Key Features: Group creation/joining system, secure login with Spring Security, deployed on Azure using Docker.',
      'Impact: Helped improve peer collaboration; publicly hosted for student use.'
    ],
    image: studygroupImg,
  },
  {
    title: 'Employee Task Manager (Android + Restful API)',
    description: 'Android app and RESTful backend to manage employee tasks.',
    tech: ['Java', 'Spring Boot', 'Android', 'Spring Security', 'GitHub', 'CRUD', 'RestFul APIs'],
    github: 'https://github.com/cblankenback/TaskManager',
    details: [
      'Problem: Wanted to make a secure, mobile-friendly task management system.',
      'Solution: Built both an Android app and secure API backend.',
      'Key Features: Token-based authentication, CRUD operations for managing tasks, unit testing for backend reliability.',
      'Impact: Delivered a working prototype that could scale for small teams.'
    ],
    image: androidImg,
  },
  {
    title: 'Amazon Delivery Performance Analysis',
    description: 'Tableau dashboard analyzing Canada Post delivery data for Amazon.',
    tech: ['Tableau', 'SQL', 'Data Visualization', 'Delivery KPIs'],
    details: [
      "Problem: We wanted to evaluate Canada Post's delivery performance on Amazon's delivery data.",
      'Solution: As a team, we cleaned and analyzed the data and built a Tableau dashboard.',
      'Key Features: Regional breakdown of delays and on-time deliveries, visual drill-downs for late package trends, SQL-based and python data preparation and filtering.',
      'Impact: Helped identify key regions causing delays; supported discussions on improving logistics.'
    ],
    image: amazonImg,
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Modern, interactive portfolio built with React, TypeScript, Tailwind CSS, and Cursor.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide', 'Cursor'],
    github: 'https://github.com/cblankenback/my-portfolio',
    details: [
      'Problem: Needed a professional, visually appealing way to showcase my projects and skills online.',
      'Solution: Built a custom portfolio using a modern React stack, with a focus on clean design and interactivity.',
      'Key Features:',
      '- Responsive, mobile-friendly layout',
      '- Animated sections and modals (Framer Motion)',
      '- Tailwind CSS for rapid, utility-first styling',
      '- Lucide icons for a modern look',
      '- Project data-driven rendering and modals',
      '- Built and iterated using Cursor for AI-powered coding',
      'Impact: Improved my online presence and made it easy for recruiters and collaborators to view my work.'
    ],
    image: portfolioImg,
  },
];

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  // Helper to extract expanded view sections from details
  const getSection = (label: string) => {
    const found = project.details.find((d) => d.toLowerCase().startsWith(label.toLowerCase() + ':'));
    return found ? found.replace(new RegExp(label + ':', 'i'), '').trim() : '';
  };
  const getKeyFeatures = () => {
    // Find the index of 'Key Features:'
    const startIdx = project.details.findIndex((d) => d.toLowerCase().startsWith('key features:'));
    if (startIdx === -1) return [];
    // Collect all lines after 'Key Features:' until next section or end
    const features: string[] = [];
    for (let i = startIdx + 1; i < project.details.length; i++) {
      const line = project.details[i];
      // Stop if we hit another section
      if (/^(problem|solution|impact):/i.test(line)) break;
      features.push(line.replace(/^[-•\s]+/, '').trim());
    }
    // If no lines after, try to split the Key Features line itself
    if (features.length === 0) {
      const keyLine = project.details[startIdx];
      const split = keyLine.split(':')[1]?.split(/,|\n/).map(f => f.trim()).filter(Boolean) || [];
      return split;
    }
    return features;
  };

  const problem = getSection('Problem');
  const solution = getSection('Solution');
  const impact = getSection('Impact');
  const keyFeatures = getKeyFeatures();

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-4 relative min-h-[50vh] max-h-[80vh] overflow-y-auto text-left"
            initial={{ scale: 0.95, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            {(project.modalImage || project.image) && (
              <img
                src={project.modalImage || project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech: string, i: number) => (
                <span key={i} className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">{tech}</span>
              ))}
            </div>
            <div className="space-y-4">
              {problem && (
                <div>
                  <h4 className="font-bold text-base mb-1">Problem</h4>
                  <p className="text-gray-900">{problem}</p>
                </div>
              )}
              {solution && (
                <div>
                  <h4 className="font-bold text-base mb-1">Solution</h4>
                  <p className="text-gray-900">{solution}</p>
                </div>
              )}
              {keyFeatures.length > 0 && (
                <div>
                  <h4 className="font-bold text-base mb-1">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {keyFeatures.map((feature, i) => (
                      <li key={i} className="text-gray-900">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {impact && (
                <div>
                  <h4 className="font-bold text-base mb-1">Impact</h4>
                  <p className="text-gray-900">{impact}</p>
                </div>
              )}
            </div>
            <div className="flex gap-6 mt-10">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-black text-white font-semibold shadow hover:bg-gray-900 transition"
                >
                  <Github className="w-5 h-5" />
                  Code
                </a>
              )}
              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0v10.5A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V9m7.5 0h.75A2.25 2.25 0 0121 11.25v1.5A2.25 2.25 0 0118.75 15H17.5m-11-6h-.75A2.25 2.25 0 003 11.25v1.5A2.25 2.25 0 005.25 15H6.5m0-6V5.25A2.25 2.25 0 018.75 3h6.5A2.25 2.25 0 0117.5 5.25V9" /></svg>
                  Submission & Video
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-gray-400">No image</span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 mt-auto pt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-black text-white font-semibold shadow hover:bg-gray-900 transition"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                  )}
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0v10.5A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V9m7.5 0h.75A2.25 2.25 0 0121 11.25v1.5A2.25 2.25 0 0118.75 15H17.5m-11-6h-.75A2.25 2.25 0 003 11.25v1.5A2.25 2.25 0 005.25 15H6.5m0-6V5.25A2.25 2.25 0 018.75 3h6.5A2.25 2.25 0 0117.5 5.25V9" /></svg>
                      Submission & Video
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-16 text-center">
          <p className="text-gray-700">
            For more projects and code repositories, click{' '}
            <a
              href="https://github.com/cblankenback?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 hover:underline"
            >
              here
            </a>.
          </p>
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
} 