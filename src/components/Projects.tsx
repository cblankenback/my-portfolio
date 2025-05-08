import React from 'react'

const Projects = () => (
  <section className="py-20 bg-white text-center" id="projects">
    <h2 className="text-4xl font-bold text-blue-700 mb-8">Projects</h2>
    <div className="flex flex-wrap justify-center gap-8">
      <div className="w-80 bg-blue-100 rounded-lg shadow p-6">
        <h3 className="text-2xl font-semibold mb-2">Project One</h3>
        <p className="text-gray-700 mb-4">A brief description of your project goes here.</p>
        <a href="#" className="text-blue-600 hover:underline">View Project</a>
      </div>
      <div className="w-80 bg-blue-100 rounded-lg shadow p-6">
        <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
        <p className="text-gray-700 mb-4">A brief description of your project goes here.</p>
        <a href="#" className="text-blue-600 hover:underline">View Project</a>
      </div>
    </div>
  </section>
)

export default Projects 