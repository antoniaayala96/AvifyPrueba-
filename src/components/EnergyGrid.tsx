import React from 'react';
import { FuelMix } from '../types';
import { icons } from './icons';

interface Props {
  mix: FuelMix[];
}

export const EnergyGrid = ({ mix }: Props) => {
  return (
    
      <div className="overflow-x-auto">
  <table className="w-full border-separate border-spacing-y-4 border-spacing-x-10 text-base sm:text-lg md:text-xl lg:text-2xl">

        <thead>
          <tr className="text-left text-rose-700 text-2xl font-bold border-b border-rose-200">
            <th className="w-1/3">Fuente de energía</th>
            <th className="text-center w-1/3">Ícono</th>
            <th className="text-right w-1/3">Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          {mix.map((item) => (
            <tr key={item.fuel} className="text-gray-700">
              <td>
                <span className="bg-gray-100 px-6 py-2 rounded-full inline-block capitalize text-lg font-semibold shadow-sm">
                  {item.fuel}
                </span>
              </td>
              <td className="text-center text-3xl">{icons[item.fuel] || '⚡'}</td>
              <td className="text-right font-bold">{item.perc}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
