import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import GlobalNetwork from "./components/GlobalNetwork"
import Contact from "./components/Contact"
import Services from "./components/Services"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services/>
      <Projects />
      <Contact />
    </>
  )
}

