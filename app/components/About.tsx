"use client"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg"
        >
          <p className="mb-4">
            I'm a passionate software engineer with expertise in JavaScript, React, Next.js, and Express.js. I
            specialize in developing scalable architectures and implementing robust CI/CD pipelines for efficient
            project deployment.
          </p>
          <p className="mb-4">
            With a strong foundation in front-end and back-end technologies, I strive to create seamless user
            experiences while ensuring high performance and maintainability of the applications I build.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            sharing my knowledge through tech blogs and community events.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

