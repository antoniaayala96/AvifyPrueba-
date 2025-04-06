import { FuelMix } from '../types';
export const getEnergyMix = async () => {
  const res = await fetch('https://api.carbonintensity.org.uk/generation');
  const json = await res.json();
  return json.data.generationmix;
};

