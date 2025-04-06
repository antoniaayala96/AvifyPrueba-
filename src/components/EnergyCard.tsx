import React from 'react';
import { FuelMix } from '../types';

interface Props {
  data: FuelMix;
}

const icons: { [key: string]: string } = {
  solar: '☀️',
  wind: '💨',
  gas: '🔥',
  nuclear: '⚛️',
  hydro: '🌊',
  biomass: '🌿',
  coal: '🪨',
  imports: '🌐',
  other: '❓'
};

const colors: { [key: string]: string } = {
  solar: 'bg-yellow-100 text-yellow-800',
  wind: 'bg-blue-100 text-blue-800',
  gas: 'bg-orange-100 text-orange-800',
  nuclear: 'bg-purple-100 text-purple-800',
  hydro: 'bg-cyan-100 text-cyan-800',
  biomass: 'bg-green-100 text-green-800',
  coal: 'bg-stone-200 text-stone-800',
  imports: 'bg-gray-100 text-gray-700',
  other: 'bg-pink-100 text-pink-800'
};

export const EnergyCard: React.FC<Props> = ({ data }) => {
  const icon = icons[data.fuel] || '⚡';
  const color = colors[data.fuel] || 'bg-white text-gray-800';

  return (
<div className="bg-white border-l-4 border-blue-500 p-5 rounded-md shadow-sm hover:shadow-lg transition">
  <div className="flex items-center justify-between">
    <h3 className="capitalize font-medium text-gray-700">{data.fuel}</h3>
    <div className="text-2xl">{icon}</div>
  </div>
  <p className="mt-2 text-3xl font-bold text-gray-900">{data.perc}%</p>
</div>
  );
};