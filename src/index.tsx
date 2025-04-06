import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app'; // O './app' si es en minúscula

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('reactMountPoint');
  if (mount) {
    createRoot(mount).render(<App />);
  } else {
    console.error('No se encontró el div de montaje');
  }
});