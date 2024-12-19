import React from 'react';
import { Canvas } from '@react-three/fiber';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background/Background';
import Scene from './components/Scene3D/Scene';
import ErrorBoundary from './components/ErrorBoundary';
import { CAMERA_CONFIG, RENDERER_CONFIG } from './components/Scene3D/config/sceneConfig';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
      <Background />
      <Header />
      
      <main className="h-screen w-full">
        <ErrorBoundary>
          <Canvas
            shadows
            camera={{ position: CAMERA_CONFIG.position, fov: CAMERA_CONFIG.fov }}
            style={{ height: '100vh' }}
            gl={RENDERER_CONFIG}
          >
            <color attach="background" args={['#f8fafc']} />
            <fog attach="fog" args={['#f8fafc', 5, 15]} />
            <Scene />
          </Canvas>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}

export default App;