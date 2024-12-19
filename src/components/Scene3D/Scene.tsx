import React, { Suspense } from 'react';
import SimpleCharacter from './models/SimpleCharacter';
import Lights from './Lights';
import Controls from './Controls';
import LoadingFallback from './LoadingFallback';

const Scene = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Lights />
      <SimpleCharacter />
      <Controls />
    </Suspense>
  );
};

export default Scene;