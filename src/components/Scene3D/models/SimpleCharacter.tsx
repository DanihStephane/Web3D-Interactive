import React from 'react';
import { useCharacterAnimation } from '../hooks/useCharacterAnimation';
import { CHARACTER_CONFIG } from '../config/sceneConfig';

const SimpleCharacter = () => {
  const group = useCharacterAnimation();

  return (
    <group ref={group} position={CHARACTER_CONFIG.position} scale={CHARACTER_CONFIG.scale}>
      {/* Body */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <capsuleGeometry args={[0.3, 1, 4, 16]} />
        <meshPhysicalMaterial 
          color="#4f46e5"
          roughness={0.2}
          metalness={0.7}
          clearcoat={0.8}
        />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshPhysicalMaterial 
          color="#4f46e5"
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
        />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.4, 0.8, 0]} castShadow>
        <capsuleGeometry args={[0.08, 0.7, 4, 16]} />
        <meshPhysicalMaterial color="#4f46e5" roughness={0.2} metalness={0.7} />
      </mesh>
      <mesh position={[0.4, 0.8, 0]} castShadow>
        <capsuleGeometry args={[0.08, 0.7, 4, 16]} />
        <meshPhysicalMaterial color="#4f46e5" roughness={0.2} metalness={0.7} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.2, 0.1, 0]} castShadow>
        <capsuleGeometry args={[0.1, 0.7, 4, 16]} />
        <meshPhysicalMaterial color="#4f46e5" roughness={0.2} metalness={0.7} />
      </mesh>
      <mesh position={[0.2, 0.1, 0]} castShadow>
        <capsuleGeometry args={[0.1, 0.7, 4, 16]} />
        <meshPhysicalMaterial color="#4f46e5" roughness={0.2} metalness={0.7} />
      </mesh>
    </group>
  );
};

export default SimpleCharacter;