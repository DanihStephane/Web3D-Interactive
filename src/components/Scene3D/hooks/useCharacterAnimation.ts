import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { CHARACTER_CONFIG } from '../config/sceneConfig';

export const useCharacterAnimation = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    
    // Base rotation
    group.current.rotation.y += CHARACTER_CONFIG.rotationSpeed;
    
    // Mouse interaction
    const mouse = new THREE.Vector2(
      (state.mouse.x * Math.PI) / 5,
      (state.mouse.y * Math.PI) / 5
    );
    
    // Smooth animation towards mouse position
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.y * CHARACTER_CONFIG.mouseInfluence,
      CHARACTER_CONFIG.lerpFactor
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -mouse.x * CHARACTER_CONFIG.mouseInfluence,
      CHARACTER_CONFIG.lerpFactor
    );
  });

  return group;
};