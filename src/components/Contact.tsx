import React from 'react'

const Contact = () => (
  <section className="py-20 bg-blue-50 text-center" id="contact">
    <h2 className="text-4xl font-bold text-blue-700 mb-4">Contact</h2>
    <p className="text-lg text-gray-700 mb-8">Feel free to reach out for collaborations or just a friendly hello!</p>
    <form className="max-w-md mx-auto flex flex-col gap-4">
      <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <textarea placeholder="Your Message" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} />
      <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Send Message</button>
    </form>
  </section>
)

export default Contact 