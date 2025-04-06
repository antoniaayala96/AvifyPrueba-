import React, { useEffect, useState } from 'react';
import { EnergyGrid } from './components/EnergyGrid';
import { getEnergyMix } from './services/api';
import { FuelMix } from './types';



export const App = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-red-200 to-pink-100">
      <h1 className="text-4xl font-bold text-gray-800">🔥 ¡Tailwind + React funcionando! 🔥</h1>
    </div>
  );
  const [mix, setMix] = useState(() => [] as FuelMix[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEnergyMix();
        setMix(data);
      } catch {
        setError('Error al cargar los datos.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="bg-white rounded-3xl shadow-2xl border border-rose-300 w-full max-w-4xl p-10">
        <h1 className="text-4xl font-extrabold text-center text-rose-900 mb-8 flex items-center justify-center gap-3">
          <span className="text-5xl">🔋</span> UK Energy Generation Dashboard
        </h1>

        {loading && <p className="text-center text-gray-600">Cargando datos...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && <EnergyGrid mix={mix} />}
      </div>
    </div>
  );
};
