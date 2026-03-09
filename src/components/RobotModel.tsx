import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center, OrbitControls } from "@react-three/drei";
import type { Mesh, Group } from "three";
import * as THREE from "three";

function Robot() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  const neonMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#00ff41",
        emissive: "#00ff41",
        emissiveIntensity: 0.6,
        metalness: 0.8,
        roughness: 0.2,
      }),
    []
  );

  const darkMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#0a0a0f",
        metalness: 0.9,
        roughness: 0.1,
      }),
    []
  );

  const blueMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#00d4ff",
        emissive: "#00d4ff",
        emissiveIntensity: 0.5,
        metalness: 0.8,
        roughness: 0.2,
      }),
    []
  );

  return (
    <group ref={groupRef}>
      {/* Body */}
      <mesh position={[0, 0, 0]} material={darkMaterial}>
        <boxGeometry args={[1.2, 1.6, 0.8]} />
      </mesh>
      {/* Chest plate glow */}
      <mesh position={[0, 0.1, 0.41]}>
        <boxGeometry args={[0.8, 0.3, 0.02]} />
        <meshStandardMaterial color="#00ff41" emissive="#00ff41" emissiveIntensity={1} />
      </mesh>
      {/* Chest lines */}
      {[-0.15, 0, 0.15].map((y, i) => (
        <mesh key={i} position={[0, -0.2 + y * 2, 0.41]}>
          <boxGeometry args={[0.6, 0.02, 0.01]} />
          <meshStandardMaterial color="#00ff41" emissive="#00ff41" emissiveIntensity={0.4} />
        </mesh>
      ))}

      {/* Head */}
      <mesh position={[0, 1.2, 0]} material={darkMaterial}>
        <boxGeometry args={[0.9, 0.8, 0.7]} />
      </mesh>
      {/* Visor */}
      <mesh position={[0, 1.25, 0.36]} material={neonMaterial}>
        <boxGeometry args={[0.7, 0.2, 0.02]} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.2, 1.25, 0.37]} material={blueMaterial}>
        <sphereGeometry args={[0.06, 16, 16]} />
      </mesh>
      <mesh position={[0.2, 1.25, 0.37]} material={blueMaterial}>
        <sphereGeometry args={[0.06, 16, 16]} />
      </mesh>
      {/* Antenna */}
      <mesh position={[0, 1.75, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.35, 8]} />
        <meshStandardMaterial color="#00ff41" emissive="#00ff41" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0, 1.95, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#00ff41" emissive="#00ff41" emissiveIntensity={1.5} />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.85, 0.1, 0]} material={darkMaterial}>
        <boxGeometry args={[0.3, 1.2, 0.35]} />
      </mesh>
      <mesh position={[0.85, 0.1, 0]} material={darkMaterial}>
        <boxGeometry args={[0.3, 1.2, 0.35]} />
      </mesh>
      {/* Arm joints */}
      <mesh position={[-0.85, 0.7, 0]} material={neonMaterial}>
        <sphereGeometry args={[0.12, 16, 16]} />
      </mesh>
      <mesh position={[0.85, 0.7, 0]} material={neonMaterial}>
        <sphereGeometry args={[0.12, 16, 16]} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.35, -1.2, 0]} material={darkMaterial}>
        <boxGeometry args={[0.35, 1.0, 0.4]} />
      </mesh>
      <mesh position={[0.35, -1.2, 0]} material={darkMaterial}>
        <boxGeometry args={[0.35, 1.0, 0.4]} />
      </mesh>
      {/* Knee joints */}
      <mesh position={[-0.35, -0.75, 0.21]} material={blueMaterial}>
        <boxGeometry args={[0.25, 0.05, 0.02]} />
      </mesh>
      <mesh position={[0.35, -0.75, 0.21]} material={blueMaterial}>
        <boxGeometry args={[0.25, 0.05, 0.02]} />
      </mesh>
      {/* Feet */}
      <mesh position={[-0.35, -1.8, 0.1]} material={darkMaterial}>
        <boxGeometry args={[0.4, 0.15, 0.55]} />
      </mesh>
      <mesh position={[0.35, -1.8, 0.1]} material={darkMaterial}>
        <boxGeometry args={[0.4, 0.15, 0.55]} />
      </mesh>
    </group>
  );
}

function NameTag() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = -2.3 + Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2.3, 0]}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.35}
          height={0.08}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.01}
        >
          BILAL MADNI
          <meshStandardMaterial
            color="#00ff41"
            emissive="#00ff41"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
          />
        </Text3D>
      </Center>
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00ff41" />
      <pointLight position={[-5, 3, 5]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[0, -3, 3]} intensity={0.3} color="#b400ff" />
      <spotLight
        position={[0, 8, 4]}
        angle={0.3}
        penumbra={0.8}
        intensity={1.5}
        color="#00ff41"
      />
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Robot />
        <NameTag />
      </Float>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export default function RobotModel() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
