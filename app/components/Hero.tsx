"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Hero = () => {
  const nodes = [
    { x: 200, y: 50, z: 1 }, // Top center
    { x: 300, y: 100, z: 2 },
    { x: 350, y: 200, z: 3 },
    { x: 300, y: 300, z: 2 },
    { x: 200, y: 350, z: 1 },
    { x: 100, y: 300, z: 2 },
    { x: 50, y: 200, z: 3 },
    { x: 100, y: 100, z: 2 },
  ]

  const [messages, setMessages] = useState([])

  useEffect(() => {
    // Fire a new message every 5 seconds
    const interval = setInterval(() => {
      const sourceIndex = Math.floor(Math.random() * nodes.length)
      const targetIndex = Math.floor(Math.random() * nodes.length)
      if (sourceIndex !== targetIndex) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: Date.now(),
            source: nodes[sourceIndex],
            target: nodes[targetIndex],
          },
        ])
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [nodes])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm Abdul Saboor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Building seamless user experiences and scalable solutions, one line of code at a time.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Get in touch
          </motion.a>
        </div>

        {/* Animated Global Network */}
        <div className="md:w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-200 to-purple-300 flex items-center justify-center"
          >
            <motion.svg
              className="absolute"
              width="100%"
              height="100%"
              viewBox="0 0 400 400"
            >
              {/* Nodes */}
              {nodes.map((node, index) => (
                <motion.circle
                  key={index}
                  cx={node.x}
                  cy={node.y}
                  r="10"
                  fill="#3B82F6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
              ))}
              {/* Connections */}
              {nodes.map((nodeA, i) =>
                nodes.map((nodeB, j) => {
                  if (i !== j) {
                    return (
                      <motion.line
                        key={`${i}-${j}`}
                        x1={nodeA.x}
                        y1={nodeA.y}
                        x2={nodeB.x}
                        y2={nodeB.y}
                        stroke={`rgba(59, 130, 246, ${Math.random() * 0.5 + 0.5})`}
                        strokeWidth={1 + Math.abs(nodeA.z - nodeB.z)}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + i * 0.2 + j * 0.1,
                        }}
                      />
                    )
                  }
                  return null
                })
              )}
              {/* Messages */}
              {messages.map((message) => (
                <motion.circle
                  key={message.id}
                  cx={message.source.x}
                  cy={message.source.y}
                  r="5"
                  fill="yellow"
                  animate={{
                    cx: message.target.x,
                    cy: message.target.y,
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  onAnimationComplete={() => {
                    // Remove the message after animation
                    setMessages((prevMessages) =>
                      prevMessages.filter((m) => m.id !== message.id)
                    )
                  }}
                />
              ))}
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
