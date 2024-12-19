import React from 'react';
import { OrbitControls } from '@react-three/drei';

const Controls = () => {
  return (
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      maxPolarAngle={Math.PI / 1.5}
      minPolarAngle={Math.PI / 3}
      maxAzimuthAngle={Math.PI / 4}
      minAzimuthAngle={-Math.PI / 4}
    />
  );
};

export default Controls;