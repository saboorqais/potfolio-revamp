"use client"
import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, Line } from "@react-three/drei"
import * as THREE from "three"

const GlobalNetwork = () => {
  return (
    <section id="global-network" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Global Server Network</h2>
        <div className="h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} />
            <Servers />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

const Servers = () => {
  const groupRef = useRef()
  const serverCount = 8
  const radius = 4

  const serverPositions = useMemo(() => {
    return Array.from({ length: serverCount }, (_, i) => {
      const angle = (i / serverCount) * Math.PI * 2
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      const z = (Math.random() - 0.5) * 2
      return new THREE.Vector3(x, y, z)
    })
  }, [serverCount]) // Removed radius from dependencies

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.1
  })

  return (
    <group ref={groupRef}>
      <Sphere args={[3, 64, 64]}>
        <meshBasicMaterial color="#4299e1" transparent opacity={0.2} />
      </Sphere>
      {serverPositions.map((position, index) => (
        <Server key={index} position={position} />
      ))}
      <Connections serverPositions={serverPositions} />
    </group>
  )
}

const Server = ({ position }) => {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#48bb78" />
    </mesh>
  )
}

const Connections = ({ serverPositions }) => {
  const lineRef = useRef()

  useFrame((state, delta) => {
    lineRef.current.material.dashOffset -= delta * 0.5
  })

  return (
    <group>
      {serverPositions.map((start, i) =>
        serverPositions
          .slice(i + 1)
          .map((end, j) => (
            <Line
              key={`${i}-${j}`}
              ref={lineRef}
              points={[start, end]}
              color="#e53e3e"
              lineWidth={1}
              dashed
              dashScale={50}
              dashSize={0.5}
              dashOffset={0}
            />
          )),
      )}
    </group>
  )
}

export default GlobalNetwork

