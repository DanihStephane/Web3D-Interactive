import React from 'react';
import { useGLTF } from '@react-three/drei';
import { CHARACTER_CONFIG } from './config/sceneConfig';
import { useCharacterAnimation } from './hooks/useCharacterAnimation';

const Character = () => {
  const group = useCharacterAnimation();
  const { scene } = useGLTF('https://models.readyplayer.me/64c8a2f6d9eb32d2ac661e07.glb');

  return (
    <group 
      ref={group} 
      position={CHARACTER_CONFIG.position} 
      scale={CHARACTER_CONFIG.scale}
    >
      <primitive object={scene} />
    </group>
  );
};

export default Character;