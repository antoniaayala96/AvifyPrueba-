import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

export interface FuelMix {
  fuel: string;
  perc: number;
}

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('reactMountPoint');
  if (mount) {
    createRoot(mount).render(<App />);
  }
});