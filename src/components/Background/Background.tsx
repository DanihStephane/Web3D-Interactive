import React, { useEffect, useRef } from 'react';
import { ParticleSystem } from './ParticleSystem';

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (particleSystemRef.current) {
        particleSystemRef.current.resize(canvas.width, canvas.height);
      } else {
        particleSystemRef.current = new ParticleSystem(ctx, canvas.width, canvas.height);
      }
    };

    const animate = () => {
      if (particleSystemRef.current) {
        particleSystemRef.current.draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default Background;