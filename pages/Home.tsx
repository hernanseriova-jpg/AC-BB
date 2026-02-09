
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { MOCK_SQUADS, MOCK_COMPETITIONS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleSquadClick = (squadName: string) => {
    navigate('/squad', { state: { squadName } });
  };

  return (
    <Layout showHeader={false}>
      <header className="bg-brand-red-dark/95 backdrop-blur-md border-b border-white/10 pt-12 pb-8 px-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="font-oswald text-4xl tracking-tighter font-black uppercase italic text-white leading-none">
              AC Balonpié<br/>Bolívar
            </h1>
            <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform self-start mt-1">
              <span className="material-icons text-white">notifications_none</span>
            </button>
          </div>
        </div>
      </header>

      <div className="px-6 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-black font-oswald uppercase italic tracking-tighter">Panel de Gestión</h2>
        </div>

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Planteles</h3>
          </div>
          <div className="flex flex-col gap-4">
            {MOCK_SQUADS.map((squad) => (
              <button
                key={squad.id}
                onClick={() => handleSquadClick(squad.name)}
                className="flex items-center justify-center p-4 bg-primary text-brand-red-dark rounded-2xl shadow-[0_8px_16px_rgba(152,212,241,0.2)] active:scale-[0.97] transition-all h-24 w-full border border-white/10"
              >
                <span className="font-oswald font-black text-2xl leading-tight uppercase tracking-wide">{squad.name}</span>
              </button>
            ))}
            <button 
              onClick={() => handleSquadClick('Femenino')}
              className="flex items-center justify-center p-4 bg-primary text-brand-red-dark rounded-2xl shadow-[0_8px_16px_rgba(152,212,241,0.2)] active:scale-[0.97] transition-all h-24 w-full border border-white/10"
            >
              <span className="font-oswald font-black text-2xl leading-tight uppercase tracking-wide">Femenino</span>
            </button>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Competiciones</h3>
          </div>
          <div className="space-y-3">
            {MOCK_COMPETITIONS.map((comp) => (
              <button
                key={comp.id}
                onClick={() => navigate('/add-match', { state: { competitionName: comp.name } })}
                className="w-full flex items-center p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 active:scale-[0.98] transition-all group min-h-[70px]"
              >
                <div className="text-left flex-grow">
                  <p className="font-bold font-oswald text-base uppercase tracking-tight text-white leading-snug">
                    {comp.name} <span className="text-white/30 font-light px-0.5">/</span> <span className="text-primary font-medium">{comp.season}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-primary/20 text-primary text-[10px] font-black py-1 px-2 rounded-lg uppercase tracking-widest">+ PARTIDO</span>
                  <span className="material-icons text-white/20 group-hover:text-primary transition-colors shrink-0">chevron_right</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
