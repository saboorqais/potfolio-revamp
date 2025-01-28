import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <Link href="#about" className="hover:text-blue-400 transition duration-300">
              About
            </Link>
            <Link href="#skills" className="hover:text-blue-400 transition duration-300">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-blue-400 transition duration-300">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-blue-400 transition duration-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer

