import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Scene3D = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { nodes } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/robot/model.gltf');

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Rotation de base
    meshRef.current.rotation.y += 0.005;
    
    // Position de la souris pour l'interaction
    const mouse = new THREE.Vector2(
      (state.mouse.x * Math.PI) / 5,
      (state.mouse.y * Math.PI) / 5
    );
    
    // Animation fluide vers la position de la souris
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
    <mesh ref={meshRef} scale={[2, 2, 2]} position={[0, -1, 0]}>
      <primitive object={nodes.Scene} />
    </mesh>
  );
};

export default Scene3D;