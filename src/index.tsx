import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';


export interface FuelMix {
  fuel: string;
  perc: number;
}

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('reactMountPoint');
  if (mount) {
    ReactDOM.createRoot(mount).render(<App />);
  }
});