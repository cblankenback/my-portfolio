import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';


const timelineData = [
  {
    year: 'Sep 2025 - Present',
    title: 'Data Engineer',
    company: 'Transport Canada',
    description: [
      'Migrating legacy Oracle pipelines to Azure Databricks for rail safety data, achieving 15x performance improvement (reduced runtime from 30 minutes to 2 minutes).',
      'Building 30+ reference and transaction tables (5M+ rows) using PySpark, Delta Lake, and medallion architecture with bronze/silver/gold layers.',
      'Built automated data quality testing framework to validate null values and referential integrity, preventing errors from reaching production dashboards.',
      'Creating comprehensive documentation for migrated pipelines and replacing static mapping tables with dynamic transformations, eliminating monthly manual maintenance.',
      'Managing Unity Catalog permissions (5+ schemas) and collaborating in Agile sprints using Azure DevOps for Git version control, pull requests, code reviews, and bi-weekly sprint planning.',
    ],
    icon: 'work',
    skills: [
      'Azure Databricks',
      'PySpark',
      'Delta Lake',
      'Unity Catalog',
      'Data Pipelines',
      'Data Engineering',
      'Python (Programming Language)',
      'Oracle',
      'SQL',
      'Data Quality',
      'Azure DevOps Services',
      'Git',
      'Medallion Architecture',
      'ETL (Extract, Transform, Load)',
      'Pipeline Migration',
      'Agile Methodologies',
    ],
  },
  {
    year: 'May - Sep 2025',
    title: 'Software Developer (Co-op)',
    company: 'Natural Resources Canada',
    description: [
      'Helped develop 3 full-stack public-facing web applications using Power Pages for front-end interfaces and Power Automate/Dynamics 365 for backend CRM workflows',
      'Built auto-save functionality using REST APIs to prevent data loss on lengthy government forms, automatically saving user progress after typing inactivity',
      'Assisted in creating internal tools and documentation to extract CRM data for reporting purposes',
      'Participated in Agile Scrums over 4 months, contributing to user story management and task tracking through Azure DevOps',
      'Customized user interfaces and business logic using Power Apps / Power Automate to improve usability for government staff',
      'Contributed to writing user stories and technical requirements in Azure DevOps to support sprint development',
      'Performed comprehensive regression testing across multiple applications to ensure system reliability',
      'Researched Playwright implementation for automated testing and created documentation and demo for potential team adoption',
      'Supported UAT issue resolution by collaborating with senior developers to identify and implement fixes',
      'Documented technical procedures including Playwright setup guides and auto-save implementation steps',
    ],
    icon: 'work',
    skills: [
      'Agile Methodologies',
      'Microsoft Power Apps',
      'Microsoft Power Automate',
      'Power Pages',
      'Dynamics 365',
      'Microsoft Power BI',
      'Azure DevOps Services',
      'SQL',
      'User Story Development',
      'Unit Testing',
      'Quality Assurance (QA)',
      'User Acceptance Testing (UAT)',
      'Technical Writing',
      'JavaScript',
    ],
  },
  {
    year: 'May 2024 - Aug 2024',
    title: 'Data Analyst / Jr. Quantitative Analyst (Co-op)',
    company: 'Canada Revenue Agency',
    description: [
      'Created a data pipeline and automation script to import and clean third-party vendor data into SQL databases, enabling daily processing of 5K+ records that couldn\'t be handled manually.',
      'Developed SQL queries and designed Power BI dashboards to visualize data sets of 100M+ rows.',
      'Built 2 reusable Python and R scripts that remain in active use by the team.',
      'Found inconsistencies affecting ~15% of records in large datasets and suggested fixes which were then implemented.',
    ],
    icon: 'work',
    skills: [
      'SQL',
      'Power BI',
      'Python',
      'R',
      'Data Pipelines',
      'Data Cleaning',
      'Large Dataset Analysis',
      'Machine Learning',
      'Business Intelligence',
      'Agile Methodologies',
      'Pandas',
      'Jupyter',
      'SAS Viya',
    ],
  },
  {
    year: 'Sep 2021 - Dec 2025',
    title: 'Bachelor of Technology (Honours), Business Systems Development',
    company: 'Algonquin College of Applied Arts and Technology',
    description: `GPA of 3.77/4. Focused on business systems, data, and technology.\n` +
      `\n` +
      `Learn more: https://www.algonquincollege.com/sat/program/bachelor-of-technology-in-business-systems-development/`,
    icon: 'education',
    skills: [
      'Data Analytics & BI',
      'Advanced SQL',
      'Software Development (Java, Spring Boot)',
      'Data Structures & Algorithms',
      'Database Design',
      'Enterprise Application Development',
      'Strategic Business Intelligence',
      'Project Management & Agile',
    ],
  },
  {
    year: 'May 2023 - Aug 2023',
    title: 'Info Tech User Support Assistant (Internship)',
    company: 'City of Ottawa',
    description: [
      'Created training documents and videos for future new hires onboarding.',
      'Provided technical assistance and support to customers via phone, email, and online chat.',
      'Troubleshoot and resolve technical issues, answered employee questions, and provided training and guidance as needed.',
      'Documented customer interactions and technical issues in a fast-paced, deadline-driven environment.',
    ],
    icon: 'work',
    skills: [
      'User Support',
      'Troubleshooting',
      'Documentation',
      'Communication',
      'Time Management',
      'Self-Motivation',
      'Remote Tools',
      'Project Management',
    ],
  },
  {
    year: 'May 2022 - Aug 2022',
    title: 'Info Tech User Support Assistant (Internship)',
    company: 'City of Ottawa',
    description: [
      'Worked in a team of 10-15 professionals whose mandate was to provide innovative and strategic technology solutions to City of Ottawa employees.',
      'Responsible for providing technical assistance and support to customers via phone, email, and online chat. Duties included troubleshooting and resolving technical issues, answering employee questions, and providing training and guidance as needed.',
      'Documented customer interactions and technical issues in a detailed/accurate manner in a fast-paced, deadline-driven environment.',
    ],
    icon: 'work',
    skills: [
      'User Support',
      'Teamwork',
      'Troubleshooting',
      'Documentation',
      'Communication',
    ],
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          {/* centre line only on desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  flex flex-col items-center
                  md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                `}
              >
                {/* content */}
                <div className="w-full md:w-1/2 px-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`
                      bg-white p-6 rounded-lg shadow-md
                      text-center
                      ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}
                    `}
                  >
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-indigo-600 font-medium">{item.company}</p>

                    <p className="text-gray-600 mt-2 text-left">
                      {item.icon === 'education' ? (
                        <>
                          GPA of <strong>3.77/4</strong>. Focused on business systems,
                          data, and technology.
                          <br />
                          <a
                            href="https://www.algonquincollege.com/sat/program/bachelor-of-technology-in-business-systems-development/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 underline"
                          >
                            Learn more
                          </a>
                        </>
                      ) : (Array.isArray(item.description) ? (
                        <ul className="list-disc list-inside space-y-1 text-left">
                          {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        item.description
                      ))}
                    </p>

                    {item.skills?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                        {item.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10 my-4 md:my-0"
                >
                  {item.icon === 'work' ? (
                    <Briefcase className="w-6 h-6 text-white" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-white" />
                  )}
                </motion.div>

                {/* placeholder for opposite side (desktop only) */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}