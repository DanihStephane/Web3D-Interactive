import { Vector3 } from 'three';

export const CAMERA_CONFIG = {
  position: new Vector3(0, 0, 5),
  fov: 75,
};

export const RENDERER_CONFIG = {
  antialias: true,
  toneMapping: 3,
  toneMappingExposure: 1.2,
};

export const CHARACTER_CONFIG = {
  position: [0, -0.5, 0] as [number, number, number],
  scale: [1, 1, 1] as [number, number, number],
  rotationSpeed: 0.005,
  mouseInfluence: 0.2,
  lerpFactor: 0.1,
};

export const LIGHTS_CONFIG = {
  ambientIntensity: 1,
  directionalIntensity: 1.5,
  directionalPosition: [5, 5, 5] as [number, number, number],
  pointIntensity: 0.8,
  pointPosition: [-5, -5, -5] as [number, number, number],
  hemisphereIntensity: 0.7,
};