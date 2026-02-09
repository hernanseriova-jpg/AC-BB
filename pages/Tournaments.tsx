
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { MOCK_MATCHES } from '../constants';

const Tournaments: React.FC = () => {
  const [activeTab, setActiveTab] = useState('PRÓXIMOS');
  const navigate = useNavigate();

  return (
    <Layout showHeader={false}>
      {/* Header Estilo Captura */}
      <header className="px-6 pt-10 pb-6 bg-brand-red-dark">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate(-1)} className="flex items-center text-white font-black text-sm tracking-tighter">
            <span className="material-icons text-xl mr-1">chevron_left</span>
            <span className="font-oswald uppercase">REGRESAR</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
            <span className="material-icons text-xl">share</span>
          </button>
        </div>
        
        <div className="relative inline-block mb-1">
          <h1 className="text-4xl font-black tracking-tight text-white font-oswald uppercase leading-none">
            Agenda Deportiva
          </h1>
          <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primary"></div>
        </div>
        <p className="text-white/80 text-sm mt-3 font-medium">Torneos y Encuentros Programados</p>
      </header>

      {/* Tabs / Separador */}
      <div className="px-6 mt-8 flex gap-8 border-b border-white/10 mb-6 overflow-x-auto no-scrollbar">
        {['PRÓXIMOS', 'RESULTADOS', 'POSICIONES'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-xs whitespace-nowrap uppercase tracking-widest font-oswald transition-all ${
              activeTab === tab ? 'text-primary font-bold' : 'text-white/40 font-medium'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <main className="px-4 space-y-6 pb-32">
        {MOCK_MATCHES.map((match) => (
          <div key={match.id} className="bg-white/5 rounded-[32px] border border-white/10 overflow-hidden shadow-2xl">
            {/* Top Row: Fecha y Jornada */}
            <div className="px-6 py-3 flex justify-between items-center border-b border-white/5">
              <span className="text-[10px] font-black tracking-widest text-primary uppercase font-oswald">
                FECHA {match.fecha}
              </span>
              <span className="text-[10px] font-bold text-white/40 font-oswald uppercase tracking-wider">
                {match.date}
              </span>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between">
                {/* Local */}
                <div className="flex flex-col items-center flex-1">
                  <span className="text-sm font-black text-center leading-tight font-oswald uppercase tracking-wide text-white">
                    {match.homeTeam}
                  </span>
                </div>
                
                {/* VS / Time */}
                <div className="flex flex-col items-center px-4">
                  <span className="text-[10px] font-black text-white/30 tracking-[0.2em] mb-2 uppercase">VS</span>
                  <div className="px-4 py-1.5 bg-white/10 rounded-full text-sm font-black font-oswald text-primary border border-white/5 whitespace-nowrap">
                    {match.time}
                  </div>
                </div>

                {/* Visitante */}
                <div className="flex flex-col items-center flex-1">
                  <span className="text-sm font-black text-center leading-tight font-oswald uppercase tracking-wide text-white">
                    {match.awayTeam}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="mt-8 flex items-center justify-center gap-2 text-white/40">
                <span className="material-icons text-base">location_on</span>
                <span className="text-[10px] font-black font-oswald uppercase tracking-[0.1em]">
                  {match.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-10 right-6 z-50">
        <button 
          onClick={() => navigate('/add-match')}
          className="w-16 h-16 bg-primary text-brand-red-dark rounded-full shadow-[0_8px_32px_rgba(152,212,241,0.4)] flex items-center justify-center active:scale-90 transition-transform ring-4 ring-brand-red-dark"
        >
          <span className="material-icons text-4xl font-black">add</span>
        </button>
      </div>
    </Layout>
  );
};

export default Tournaments;
