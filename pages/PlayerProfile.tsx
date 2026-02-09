
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { MOCK_PLAYERS } from '../constants';

const PlayerProfile: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const player = MOCK_PLAYERS.find(p => p.id === id) || MOCK_PLAYERS[0];

  const stats = [
    { label: 'Partidos', value: '14' },
    { label: 'Goles', value: '08' },
    { label: 'Asist.', value: '03' },
    { label: 'Minutos', value: '1120' },
  ];

  return (
    <Layout showHeader title="Perfil" subtitle={player.name} backUrl="/squad">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-red to-transparent z-10"></div>
        <img 
          src={player.photo} 
          className="w-full h-full object-cover scale-110 grayscale" 
          alt={player.name} 
        />
        <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-black font-oswald uppercase italic leading-none">{player.name}</h2>
            <p className="text-primary font-bold tracking-widest uppercase text-sm mt-1">{player.position}</p>
          </div>
          <div className="text-5xl font-black font-oswald text-white/20">#{player.number}</div>
        </div>
      </div>

      <div className="px-6 -mt-4 relative z-30">
        <div className="grid grid-cols-4 gap-2 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-brand-red-dark border border-white/10 p-3 rounded-2xl flex flex-col items-center justify-center shadow-lg">
              <span className="text-[10px] text-white/50 font-bold uppercase tracking-tighter mb-1">{stat.label}</span>
              <span className="text-xl font-bold font-oswald text-primary">{stat.value}</span>
            </div>
          ))}
        </div>

        <section className="space-y-6">
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
              <span className="material-icons text-sm">analytics</span> Rendimiento Reciente
            </h3>
            <div className="flex items-end gap-1.5 h-24 px-2">
              {[6, 8, 7, 9, 8, 7].map((val, i) => (
                <div key={i} className="flex-1 bg-white/10 rounded-t-lg relative group">
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg transition-all" 
                    style={{ height: `${val * 10}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[8px] text-white/30 uppercase font-bold px-2">
              <span>Hace 6 part.</span>
              <span>Último</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
              <span className="material-icons text-sm">info</span> Información Técnica
            </h3>
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Pie Hábil</p>
                <p className="font-semibold">Derecho</p>
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Altura</p>
                <p className="font-semibold">1.82 m</p>
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Edad</p>
                <p className="font-semibold">23 Años</p>
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Contrato</p>
                <p className="font-semibold">Jun 2025</p>
              </div>
            </div>
          </div>
        </section>

        <div className="py-12 flex gap-3">
          <button className="flex-1 bg-white/10 border border-white/10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs active:bg-white/20">
            Editar Perfil
          </button>
          <button className="w-14 h-14 bg-brand-red-light border border-white/10 rounded-xl flex items-center justify-center active:bg-brand-red-dark">
            <span className="material-icons">share</span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PlayerProfile;
