
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { CLUB_LOGO_URL } from '../constants';

const AddMatch: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialCompetition = location.state?.competitionName || '';

  const [formData, setFormData] = useState({
    competition: initialCompetition,
    date: '',
    jornada: '',
    homeTeam: 'AC Balonpié Bolívar',
    awayTeam: '',
    location: '',
    time: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.competition) newErrors.competition = 'Requerido';
    if (!formData.date) newErrors.date = 'Requerido';
    if (!formData.homeTeam) newErrors.homeTeam = 'Requerido';
    if (!formData.awayTeam) newErrors.awayTeam = 'Requerido';
    if (!formData.time) newErrors.time = 'Requerido';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        alert('¡Partido guardado exitosamente!');
        navigate('/tournaments');
      }, 800);
    }
  };

  return (
    <Layout showHeader title="Agregar Partido" subtitle="AC Balonpié Bolívar" backUrl="/tournaments">
      <main className="px-5 py-8 pb-40">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/20 mb-4 overflow-hidden">
            <img src={CLUB_LOGO_URL} alt="Logo Club" className="w-12 h-12 object-contain" />
          </div>
          <h2 className="text-2xl font-black font-oswald uppercase italic tracking-tight">Configurar Partido</h2>
          <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mt-1">Ingreso de datos de competición</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
          {/* Equipos Section - Solo Nombres */}
          <div className="bg-white/5 rounded-3xl p-6 shadow-xl border border-white/10 space-y-5">
            <h2 className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-4 font-oswald flex items-center gap-2">
              <span className="material-icons text-sm">groups</span> Equipos
            </h2>
            
            <div className="space-y-1.5">
              <label className="text-[10px] text-white/40 font-black px-1 uppercase tracking-widest">Equipo Local</label>
              <input 
                name="homeTeam"
                value={formData.homeTeam}
                onChange={handleChange}
                className={`w-full bg-black/40 border ${errors.homeTeam ? 'border-red-500' : 'border-white/10'} rounded-xl py-4 px-5 focus:outline-none focus:border-primary text-sm font-medium transition-all`} 
                placeholder="Nombre del equipo local" 
                type="text" 
              />
            </div>

            <div className="flex items-center justify-center py-2">
              <span className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase">VS</span>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] text-white/40 font-black px-1 uppercase tracking-widest">Equipo Visitante</label>
              <input 
                name="awayTeam"
                value={formData.awayTeam}
                onChange={handleChange}
                className={`w-full bg-black/40 border ${errors.awayTeam ? 'border-red-500' : 'border-white/10'} rounded-xl py-4 px-5 focus:outline-none focus:border-primary text-sm font-medium transition-all`} 
                placeholder="Nombre del equipo rival" 
                type="text" 
              />
            </div>
          </div>

          {/* Detalles del Encuentro */}
          <div className="bg-white/5 rounded-3xl p-6 shadow-xl border border-white/10 space-y-5">
            <h2 className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-4 font-oswald flex items-center gap-2">
              <span className="material-icons text-sm">event_note</span> Detalles
            </h2>
            
            <div className="space-y-1.5">
              <label className="text-[10px] text-white/40 font-black px-1 uppercase tracking-widest">Nombre del Torneo</label>
              <input 
                name="competition"
                value={formData.competition}
                onChange={handleChange}
                className={`w-full bg-black/40 border ${errors.competition ? 'border-red-500' : 'border-white/10'} rounded-xl py-4 px-5 focus:outline-none focus:border-primary text-sm font-medium transition-all`} 
                placeholder="Ej. Torneo Interligas" 
                type="text" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] text-white/40 font-black px-1 uppercase tracking-widest">Fecha</label>
                <input 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full bg-black/40 border ${errors.date ? 'border-red-500' : 'border-white/10'} rounded-xl py-4 px-5 focus:outline-none focus:border-primary text-sm transition-all appearance-none`} 
                  type="date" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] text-white/40 font-black px-1 uppercase tracking-widest">Hora</label>
                <input 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full bg-black/40 border ${errors.time ? 'border-red-500' : 'border-white/10'} rounded-xl py-4 px-5 focus:outline-none focus:border-primary text-sm transition-all appearance-none`} 
                  type="time" 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] text-white/40 font-black px-1 uppercase tracking-widest">Jornada</label>
                <input 
                  name="jornada"
                  value={formData.jornada}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-primary text-sm font-medium transition-all" 
                  placeholder="Ej. Fecha 5" 
                  type="text" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] text-white/40 font-black px-1 uppercase tracking-widest">Cancha / Predio</label>
                <input 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-primary text-sm font-medium transition-all" 
                  placeholder="Ej. Cancha 2" 
                  type="text" 
                />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-brand-red-dark font-black py-5 rounded-2xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all duration-150 uppercase tracking-[0.2em] text-lg font-oswald"
            >
              <span className="material-icons font-black">save</span>
              {isSubmitting ? 'GUARDANDO...' : 'GUARDAR PARTIDO'}
            </button>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default AddMatch;
