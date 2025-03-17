import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/style.css';
import { getRandomGradient } from './assets/scripts/randomGradient';
import { PreloadDecals } from './PreloadDecals';
import Canvas from './ThreeDScene';
import Overlay from './Overlay';


// Wait until the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const bgElement = document.querySelector('.bg')
  if (bgElement) {
    // Set the intial background style to a random gradient.
    bgElement.style.background = getRandomGradient()
  }
})

createRoot(document.getElementById('root')).render(
  <>
    <PreloadDecals />
    <Canvas />
    <Overlay />
  </>
)
