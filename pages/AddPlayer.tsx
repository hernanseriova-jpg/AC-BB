
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const AddPlayer: React.FC = () => {
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar a este jugador? Esta acción no se puede deshacer.')) {
      // Aquí iría la lógica para eliminar del estado/API
      alert('Jugador eliminado correctamente');
      navigate('/squad');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Jugador guardado exitosamente');
    navigate('/squad');
  };

  return (
    <Layout showHeader title="Nuevo Jugador" subtitle="AC Balonpié Bolívar" backUrl="/squad">
      <main className="px-5 py-8 pb-64">
        <div className="flex flex-col items-center mb-10">
          <div className="relative group">
            <div className="w-28 h-28 rounded-full bg-brand-red-light border-4 border-primary/30 flex items-center justify-center overflow-hidden shadow-2xl">
              <span className="material-symbols-outlined text-6xl text-white/30">person</span>
            </div>
            <button className="absolute bottom-0 right-0 bg-primary text-brand-red-dark w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform" type="button">
              <span className="material-icons text-xl">photo_camera</span>
            </button>
          </div>
          <p className="text-[11px] text-white/60 mt-4 uppercase font-medium tracking-widest">Subir Foto de Perfil</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
          {/* Personal Data */}
          <div className="bg-brand-red-dark/40 rounded-2xl p-6 shadow-xl border border-white/10 space-y-5 backdrop-blur-sm">
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.15em] flex items-center gap-2 mb-2 font-oswald">
              <span className="material-symbols-outlined text-lg">badge</span> Datos Personales
            </h2>
            <div className="space-y-1.5">
              <label className="text-[11px] text-white/50 font-semibold px-1 uppercase tracking-wider">Nombre Completo</label>
              <input className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all" placeholder="Ej. Juan Pérez" type="text" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] text-white/50 font-semibold px-1 uppercase tracking-wider">Fecha de Nacimiento</label>
                <input className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all appearance-none" type="date" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] text-white/50 font-semibold px-1 uppercase tracking-wider">Pasaporte / ID</label>
                <input className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all" placeholder="Nº Documento" type="text" />
              </div>
            </div>
          </div>

          {/* Sports Profile */}
          <div className="bg-brand-red-dark/40 rounded-2xl p-6 shadow-xl border border-white/10 space-y-5 backdrop-blur-sm">
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.15em] flex items-center gap-2 mb-2 font-oswald">
              <span className="material-symbols-outlined text-lg">sports_soccer</span> Perfil Deportivo
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] text-white/50 font-semibold px-1 uppercase tracking-wider">Posición Natural</label>
                <input className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all" placeholder="Ej. Delantero" type="text" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] text-white/50 font-semibold px-1 uppercase tracking-wider">Dorsal / Número</label>
                <input className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all" placeholder="Ej. 10" type="number" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] text-white/50 font-semibold px-1 uppercase tracking-wider">Pie Hábil</label>
              <div className="relative">
                <select className="w-full bg-black/20 border border-white/10 rounded-xl py-3.5 px-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all appearance-none text-white">
                  <option value="" disabled selected>Seleccionar...</option>
                  <option value="derecho">Derecho</option>
                  <option value="izquierdo">Izquierdo</option>
                  <option value="ambidiestro">Ambidiestro</option>
                </select>
                <span className="material-icons absolute right-4 top-3.5 text-primary pointer-events-none">expand_more</span>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-4">
            <button 
              type="submit"
              className="w-full bg-primary text-brand-red-dark font-black py-4 rounded-2xl shadow-[0_12px_24px_rgba(152,212,241,0.3)] flex items-center justify-center gap-3 active:scale-95 transition-all duration-150 uppercase tracking-widest text-lg font-oswald"
            >
              <span className="material-symbols-outlined font-bold">save</span>
              GUARDAR JUGADOR
            </button>
            
            <button 
              type="button"
              onClick={handleDelete}
              className="w-full bg-transparent border border-red-500/30 text-red-500 font-bold py-4 rounded-2xl flex items-center justify-center gap-3 active:bg-red-500/10 transition-all duration-150 uppercase tracking-widest text-sm font-oswald"
            >
              <span className="material-icons text-lg">delete_forever</span>
              ELIMINAR JUGADOR
            </button>
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default AddPlayer;
