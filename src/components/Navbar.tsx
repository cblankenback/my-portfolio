import React, { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-gray-100/80 backdrop-blur-md shadow fixed top-0 left-0 z-50">
      <div className="w-full flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-2xl font-bold text-gray-900">Christian's Portfolio</a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.slice(1).map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-900 hover:text-blue-600 font-medium transition"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            <a href="https://github.com/cblankenback?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/christianblankenback" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:blan0218@algonquinlive.com" className="text-gray-700 hover:text-gray-900">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <button
          className="md:hidden text-gray-900 hover:text-blue-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 pb-4 pt-2">
          {navLinks.slice(1).map(link => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-900 hover:text-blue-600 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4 py-2">
            <a href="https://github.com/cblankenback?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/christianblankenback" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:blan0218@algonquinlive.com" className="text-gray-700 hover:text-gray-900">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
