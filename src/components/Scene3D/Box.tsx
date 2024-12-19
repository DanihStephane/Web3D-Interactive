import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';

const Box = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Base rotation
    meshRef.current.rotation.y += 0.005;
    
    // Mouse interaction
    const mouse = new THREE.Vector2(
      (state.mouse.x * Math.PI) / 5,
      (state.mouse.y * Math.PI) / 5
    );
    
    // Smooth animation towards mouse position
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouse.y,
      0.1
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      -mouse.x,
      0.1
    );
  });

  return (
    <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]} position={[0, 0, 0]} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial 
        color="#4f46e5"
        roughness={0.2}
        metalness={0.9}
        reflectivity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
};

export default Box;