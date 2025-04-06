import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { createRoot } from 'react-dom/client';


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