
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { MOCK_PLAYERS } from '../constants';

const SquadDetail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const squadName = location.state?.squadName || "Plantilla";
  const hasPlayers = MOCK_PLAYERS.length > 0;

  return (
    <Layout title={squadName} subtitle="AC Balonpié Bolívar" backUrl="/">
      <main className="px-4 py-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold uppercase italic font-oswald">Plantel Actual</h2>
            <p className="font-display text-sm opacity-80">{MOCK_PLAYERS.length} Jugadores inscritos</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white/10 p-2 rounded-lg">
              <span className="material-icons text-white">filter_list</span>
            </button>
            <button className="bg-white/10 p-2 rounded-lg">
              <span className="material-icons text-white">search</span>
            </button>
          </div>
        </div>

        <div className="space-y-3 mb-40">
          {hasPlayers ? (
            <>
              {MOCK_PLAYERS.map((player) => (
                <div 
                  key={player.id} 
                  onClick={() => navigate(`/player/${player.id}`)}
                  className={`player-card flex items-center p-3 rounded-xl active:bg-white/10 transition-colors cursor-pointer ${player.isCaptain ? 'border-l-4 border-l-primary' : ''}`}
                >
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden mr-4 bg-white/5 border border-white/10">
                    <img 
                      className="w-full h-full object-cover grayscale brightness-110" 
                      src={player.photo} 
                      alt={player.name}
                    />
                    <div className="absolute bottom-0 right-0 bg-primary px-1.5 py-0.5 rounded-tl-md shadow-md">
                      <span className="text-black font-bold text-[10px]">{player.number}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold uppercase leading-tight tracking-wide font-oswald">{player.name}</h3>
                      {player.isCaptain && <span className="material-icons text-primary text-xs">stars</span>}
                    </div>
                    <div className="flex items-center mt-0.5">
                      <span className="bg-primary/10 text-primary font-display text-[9px] font-black px-2 py-0.5 rounded-full border border-primary/20 uppercase tracking-wider">
                        {player.position}
                      </span>
                    </div>
                  </div>
                  <button className="text-white/20">
                    <span className="material-icons">chevron_right</span>
                  </button>
                </div>
              ))}
              <div className="py-10 text-center opacity-30">
                <p className="font-display italic text-sm tracking-widest uppercase">Fin de la lista</p>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
              <span className="material-symbols-outlined text-6xl text-white/10 mb-4">group_add</span>
              <p className="font-oswald text-lg font-bold uppercase tracking-widest text-white/40">Sin jugadores</p>
              <p className="text-[10px] uppercase font-bold tracking-tighter text-white/20 mt-1">Empieza a cargar tu plantilla oficial</p>
            </div>
          )}
        </div>
      </main>

      <div className="fixed bottom-24 left-0 right-0 p-6 bg-gradient-to-t from-brand-red via-brand-red/80 to-transparent pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <button 
            onClick={() => navigate('/add-player', { state: { squadName } })}
            className="w-full bg-primary hover:bg-primary/90 text-brand-red-dark font-display font-bold py-4 rounded-xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform duration-150 uppercase tracking-widest text-lg ring-4 ring-brand-red/50"
          >
            <span className="material-icons">person_add</span>
            AGREGAR JUGADOR
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SquadDetail;
