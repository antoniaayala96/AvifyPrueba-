import { render, screen } from '@testing-library/react';
import { EnergyGrid } from '../components/EnergyGrid';
import { FuelMix } from '../types';
import '@testing-library/jest-dom';
import React from 'react';



const mockData: FuelMix[] = [
  { fuel: 'solar', perc: 10.5 },
  { fuel: 'wind', perc: 15.2 }
];
describe('EnergyGrid', () => {
  it('muestra los nombres y porcentajes de las fuentes de energía', () => {
    render(<EnergyGrid mix={mockData} />);

    expect(screen.getByText(/solar/i)).toBeInTheDocument();
    expect(screen.getByText(/10.5%/i)).toBeInTheDocument();
    expect(screen.getByText(/wind/i)).toBeInTheDocument();
    expect(screen.getByText(/15.2%/i)).toBeInTheDocument();
  });
});
