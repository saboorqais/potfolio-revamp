"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Full-Screen Image for Mobile UI
const fullImage = (
  <img 
    src="/maps.png" 
    alt="Mobile App Screen" 
    className="w-full h-full object-cover rounded-lg"
  />
);

const FullStackCodeAnimation = () => {
  const [isDeployment, setIsDeployment] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState('success'); // success or failure
  const codeLines = [
    'const express = require("express");',
    'const app = express();',
    'app.get("/api/data", (req, res) => {',
    '  res.json({ message: "Hello from the server!" });', // API endpoint
    '});'
  ];

  // Function to toggle between success and failure states
  useEffect(() => {
    const interval = setInterval(() => {
      setDeploymentStatus((prevStatus) => (prevStatus === 'success' ? 'failure' : 'success'));
      setIsDeployment(false); // Reset the deployment animation
      setTimeout(() => setIsDeployment(true), 2000); // Start a new deployment after 2 seconds
    }, 5000); // Toggle every 5 seconds
    
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-56 bg-gray-900 text-green-500 p-4 font-mono text-xs overflow-auto rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-lg text-gray-400">// Full Stack Development</div>
      </motion.div>
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 1.5 }}
        >
          {line}
        </motion.div>
      ))}

      {/* Deployment section */}
      {isDeployment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 text-blue-400"
        >
          <p>{deploymentStatus === 'success' ? 'Deploying...' : 'Deploying (Failed)...'}</p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: deploymentStatus === 'success' ? '100%' : '50%' }}
            transition={{ duration: 3 }}
            className={`w-full h-1 mt-2 ${deploymentStatus === 'success' ? 'bg-blue-300' : 'bg-red-300'}`}
          ></motion.div>
          <p className="mt-4">{deploymentStatus === 'success' ? 'Deployment Successful!' : 'Deployment Failed'}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

// Mobile App Animation Component with Deployment Animation
const MobileAppAnimation = () => {
  const [deploymentProgress, setDeploymentProgress] = useState(0);

  useEffect(() => {
    if (deploymentProgress < 100) {
      const interval = setInterval(() => {
        setDeploymentProgress((prev) => prev + 1);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [deploymentProgress]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-32 h-60 bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* iPhone Frame */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 flex justify-center items-center p-1 bg-gray-100"
      >
        <div className="w-full h-full bg-white border-2 border-gray-300 rounded-lg relative">
          {/* Display Full-Screen Image in the mobile UI */}
          <div className="w-full h-full flex justify-center items-center">
            {fullImage}
          </div>

          {/* Deployment Progress Bar */}
        </div>
      </motion.div>
    </motion.div>
  );
};

const services = [
  {
    title: "Full Stack Development",
    description:
      "We provide end-to-end web solutions by integrating front-end and back-end technologies to create scalable and secure applications.",
    id: "full-stack",
  },
  {
    title: "Mobile App Development",
    description:
      "We design and develop cross-platform mobile apps that offer smooth user experiences and optimal performance on both Android and iOS.",
    id: "mobile-app",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-r from-blue-50 via-indigo-100 to-blue-200">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12"
        >
          Our Premium Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl p-8"
            >
              <div className="flex justify-center items-center mb-8">
                {/* Display appropriate animations */}
                {service.id === "mobile-app" ? <MobileAppAnimation /> : <FullStackCodeAnimation />}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-lg text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
