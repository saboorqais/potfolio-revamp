"use client"
import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text, Line, Sphere } from "@react-three/drei"
import { motion } from "framer-motion-3d"

const Architecture3D = () => {
  return (
    <section id="architecture" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Global Server Architecture</h2>
        <div className="h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
          <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} />
            <GlobalArchitecture />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

const GlobalArchitecture = () => {
  const groupRef = useRef()

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.1
  })

  return (
    <group ref={groupRef}>
      <CentralServer />
      <CDNNodes />
      <KubernetesCluster />
      <Connections />
    </group>
  )
}

const CentralServer = () => (
  <group position={[0, 0, 0]}>
    <Sphere args={[0.5, 16, 16]}>
      <meshStandardMaterial color="blue" />
    </Sphere>
    <Text position={[0, 1, 0]} fontSize={0.5} color="black">
      Central Server
    </Text>
  </group>
)

const CDNNodes = () => {
  const cdnPositions = [
    [-4, 3, 0],
    [4, 3, 0],
    [-4, -3, 0],
    [4, -3, 0],
  ]

  return (
    <>
      {cdnPositions.map((position, index) => (
        <group key={index} position={position}>
          <motion.mesh
            animate={{ y: [0, 0.2, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshStandardMaterial color="green" />
          </motion.mesh>
          <Text position={[0, 0.8, 0]} fontSize={0.3} color="black">
            CDN Node
          </Text>
        </group>
      ))}
    </>
  )
}

const KubernetesCluster = () => {
  const clusterPositions = [
    [-2, 0, 2],
    [2, 0, 2],
    [0, 0, -2],
  ]

  return (
    <>
      {clusterPositions.map((position, index) => (
        <group key={index} position={position}>
          <motion.mesh
            animate={{ rotateY: [0, Math.PI * 2] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <cylinderGeometry args={[0.3, 0.3, 0.8, 16]} />
            <meshStandardMaterial color="orange" />
          </motion.mesh>
          <Text position={[0, 0.8, 0]} fontSize={0.25} color="black">
            K8s Pod
          </Text>
        </group>
      ))}
      <group position={[0, 0, 0]}>
        <Sphere args={[0.4, 16, 16]}>
          <meshStandardMaterial color="red" />
        </Sphere>
        <Text position={[0, 0.8, 0]} fontSize={0.3} color="black">
          Load Balancer
        </Text>
      </group>
    </>
  )
}

const Connections = () => {
  const cdnPositions = [
    [-4, 3, 0],
    [4, 3, 0],
    [-4, -3, 0],
    [4, -3, 0],
  ]

  const clusterPositions = [
    [-2, 0, 2],
    [2, 0, 2],
    [0, 0, -2],
  ]

  return (
    <>
      {cdnPositions.map((position, index) => (
        <Line key={`cdn-${index}`} points={[[0, 0, 0], position]} color="gray" lineWidth={1} />
      ))}
      {clusterPositions.map((position, index) => (
        <Line key={`cluster-${index}`} points={[[0, 0, 0], position]} color="gray" lineWidth={1} />
      ))}
    </>
  )
}

export default Architecture3D

