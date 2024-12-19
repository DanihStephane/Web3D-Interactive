import React from 'react';
import { Html } from '@react-three/drei';

const LoadingFallback = () => {
  return (
    <Html center>
      <div className="text-gray-800">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800 mx-auto mb-2" />
        <p>Loading...</p>
      </div>
    </Html>
  );
};

export default LoadingFallback;