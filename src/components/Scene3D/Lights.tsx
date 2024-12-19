import React from 'react';
import { LIGHTS_CONFIG } from './config/sceneConfig';

const Lights = () => {
  return (
    <>
      <ambientLight intensity={LIGHTS_CONFIG.ambientIntensity} />
      <directionalLight
        position={LIGHTS_CONFIG.directionalPosition}
        intensity={LIGHTS_CONFIG.directionalIntensity}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight 
        position={LIGHTS_CONFIG.pointPosition}
        intensity={LIGHTS_CONFIG.pointIntensity}
        color="#ffffff"
      />
      <hemisphereLight
        intensity={LIGHTS_CONFIG.hemisphereIntensity}
        color="#ffffff"
        groundColor="#bbbbff"
      />
    </>
  );
};

export default Lights;