import { Code, Database, BrainCircuit, Cloud, BarChart3, Wand2, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const skills = [
  {
    category: 'Software Development',
    icon: Code,
    skills: [
      'Java', 'Kotlin', 'JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'Spring Boot', 'Spring Security', 'Node.js', 'Git', 'GitHub', 'Docker', 'Maven', 'Gradle', 'Postman', 'Cursor (AI coding)', 'CRUD', 'RestFul APIs', 'Power Pages', 'Power Automate', 'Power Apps', 'Dynamics 365'
    ],
  },
  {
    category: 'Data & Analytics',
    icon: BrainCircuit,
    skills: [
      'Python', 'R', 'Pandas', 'NumPy', 'Jupyter Notebook', 'SQL', 'A/B Testing', 'Data Cleaning', 'Data Pipeline Automation', 'Exploratory Data Analysis', 'Statistical Analysis'
    ],
  },
  {
    category: 'Data Engineering',
    icon: Database,
    skills: [
      'Azure Data Lake', 'Azure Data Factory', 'Azure Databricks', 'Azure Synapse', 'Azure Key Vault', 'ETL/ELT', 'Data Warehousing', 'Data Modeling', 'Data Governance', 'Data Security', 'Data Quality', 'PySpark', 'Data Pipeline Design'
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      'Azure','Azure DevOps', 'Github', 'Git', 'AWS', 'CI/CD', 'Agile (Scrum)', 'Power Automate'
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    skills: [
      'MySQL', 'SQL Server', 'Database Design', 'Advanced SQL', 'Database Queries', 'BigQuery', "CTE's", 'Billion row Datasets'
    ],
  },
  {
    category: 'Visualization & BI',
    icon: BarChart3,
    skills: [
      'Power BI', 'Tableau', 'SAS Viya', 'Data Visualization', 'Dashboarding', 'Reporting'
    ],
  },
  {
    category: 'Machine Learning & AI',
    icon: Wand2,
    skills: [
      'Random Forest', 'Classification Models', 'Predictive Analytics', 'Supervised/Unsupervised Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'MediaPipe', 'Gen AI', 'OpenAI', 'Prompt Engineering', 'MLOps', 'Cursor (AI coding)'
    ],
  },
  {
    category: 'Professional Skills',
    icon: Users,
    skills: [
      'Teamwork', 'Communication', 'Problem Solving', 'Object-Oriented Design', 'Authentication & Authorization', 'Unit Testing', 'QA', 'UAT', 'Project Management', 'Stakeholder Management', 'Technical Documentation', 'User Story Refinement'
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-1"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.h3 className="text-center mb-6" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          My technical and professional toolkit
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 