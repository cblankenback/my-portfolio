import { motion } from "framer-motion";
import christianImg from "../assets/christian.jpeg";
// import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Image Container */}
          <motion.div
            className="flex items-stretch"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={christianImg} alt="Christian Blankenback" className="w-full h-full object-cover rounded-2xl shadow-lg" />
          </motion.div>

          {/* Bio Section */}
          <motion.div className="md:col-span-2 flex flex-col justify-between space-y-6" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
            <motion.p className="text-lg text-gray-700" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
              Hello there, my name is <strong>Christian Blankenback</strong>. I am a recent graduate with a 4-year 
              <a href="https://www.algonquincollege.com/sat/program/bachelor-of-technology-in-business-systems-development/" 
                 target="_blank" rel="noopener noreferrer" className="text-blue-700 underline ml-1">
                Bachelor of Technology in Business Systems Development
              </a>{' '}
              from Algonquin College (GPA: <strong>3.77/4</strong>), based in Ottawa, Canada.<br/><br/>
              I am passionate about data and technology, and I am currently seeking opportunities in <strong>data science</strong>, <strong>data analytics</strong> and <strong>software engineering</strong>.<br/><br/>
              I am a lifelong learner, always exploring new tools and techniques in the world of software, data, machine learning, and AI. My portfolio showcases the practical knowledge and skills I have gained through my academic journey and personal projects.<br/><br/>
              Join me as I turn data into insightful action!
            </motion.p>

            {/* Experience & LinkedIn Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">2025</h3>
                <p className="text-gray-600">Graduated</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">Ottawa</h3>
                <p className="text-gray-600">Based in Canada</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 