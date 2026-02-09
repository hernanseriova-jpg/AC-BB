
import React from 'react';
import Layout from '../components/Layout';

const Settings: React.FC = () => {
  const sections = [
    { title: 'Club', items: ['Información Institucional', 'Escudos y Colores', 'Sedes Deportivas'] },
    { title: 'Aplicación', items: ['Notificaciones', 'Seguridad', 'Idioma (Español)'] },
    { title: 'Cuenta', items: ['Mi Perfil', 'Cerrar Sesión'] },
  ];

  return (
    <Layout showHeader title="Ajustes" subtitle="AC Balonpié Bolívar">
      <div className="px-6 py-8 space-y-8">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxgs675KvOWmO6xHLjmsjQtcrTbIRcUOfRvm0eRJGnZm-xmVOUQB_31zmigobkE8Kl_B_uBb1oL14UHiFdt7TMNTm4hLjDkYbHyfX8H6mARPx7OT_i1OLCAN2_McD61RQQDqmIdROBO4H1lwOCJQPO7QuPR5h937B2fdBK2JZLc-5Lh3smbCJmAkNx2bW_p8mJVFyAGCg1aX2kzNV4UqhMGk1S7YAp2vAwTwx8jKq6iKCXyB6UGGhrw1IjYj1fanNn6OoYV3VsUz7t" 
              className="w-14 h-14 object-contain"
              alt="Club Logo"
            />
          </div>
          <div>
            <h2 className="text-2xl font-black font-oswald uppercase italic">Administrador</h2>
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Acceso Total • Bolívar</p>
          </div>
        </div>

        {sections.map((section, idx) => (
          <section key={idx}>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-3 pl-1">{section.title}</h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              {section.items.map((item, i) => (
                <button 
                  key={i} 
                  className={`w-full flex items-center justify-between p-4 text-left active:bg-white/10 transition-colors ${i !== section.items.length - 1 ? 'border-b border-white/5' : ''}`}
                >
                  <span className="font-medium text-sm text-white/90">{item}</span>
                  <span className="material-icons text-white/20">chevron_right</span>
                </button>
              ))}
            </div>
          </section>
        ))}

        <div className="pt-10 text-center opacity-20">
          <p className="text-[10px] uppercase font-black tracking-widest">Versión 2.1.0 Beta</p>
          <p className="text-[8px] mt-1 uppercase">Powered by Gemini AI Studio</p>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
