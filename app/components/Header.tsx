"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll" // Import react-scroll Link
import NextLink   from "next/link" // Import Next.js Link for home navigation

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NextLink href="/" className="text-2xl font-bold">
          Abdul Saboor
        </NextLink>
        <nav className="hidden md:flex space-x-4">
          {/* Use react-scroll Link for smooth scrolling and active link */}
          <NavLink to="about">About</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white py-2"
        >
          <NavLink to="about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink to="projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </motion.nav>
      )}
    </header>
  )
}

const NavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    spy={true} // This allows tracking the active section
    activeClass="text-blue-500 font-bold" // Active class for the active section
    className="block py-2 px-4 hover:bg-gray-100 transition duration-300"
    onClick={onClick}
    offset={-70} // Adjust for fixed navbar height
  >
    {children}
  </Link>
)

export default Header
