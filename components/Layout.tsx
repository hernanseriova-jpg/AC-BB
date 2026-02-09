
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  title?: string;
  subtitle?: string;
  backUrl?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, showHeader = true, title, subtitle, backUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: '/', label: 'Inicio', icon: 'dashboard' },
    { id: '/squad', label: 'Plantilla', icon: 'groups' },
    { id: '/tournaments', label: 'Agenda', icon: 'calendar_today' },
    { id: '/profile', label: 'Ajustes', icon: 'settings' },
  ];

  return (
    <div className="min-h-screen pb-32">
      {showHeader && (
        <header className="sticky top-0 z-50 bg-brand-red-dark/95 ios-blur border-b border-white/10 px-4 pt-10 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center min-w-[40px]">
              {backUrl ? (
                <button onClick={() => navigate(backUrl)} className="flex items-center text-primary active:opacity-50">
                  <span className="material-icons text-3xl">chevron_left</span>
                </button>
              ) : (
                <button className="w-10 h-10 flex items-center justify-start text-white">
                  <span className="material-icons">menu</span>
                </button>
              )}
            </div>
            
            <div className="text-center flex-grow px-2 flex flex-col items-center">
              <h1 className="text-lg font-bold uppercase tracking-wider font-oswald truncate leading-none">{title || "1° División"}</h1>
              <p className="text-[9px] opacity-60 font-display font-medium tracking-widest uppercase truncate mt-1">{subtitle || "AC Balonpié Bolívar"}</p>
            </div>

            <div className="min-w-[40px] flex justify-end">
              <button className="w-10 h-10 flex items-center justify-end text-white">
                <span className="material-icons">{backUrl ? 'person_add' : 'more_horiz'}</span>
              </button>
            </div>
          </div>
        </header>
      )}

      <main>{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 bg-brand-red-dark border-t border-white/10 flex justify-around items-center pt-3 pb-8 z-40">
        {navItems.map((item) => {
          const isActive = location.pathname === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex flex-col items-center transition-colors ${isActive ? 'text-primary' : 'text-white/40 active:text-primary'}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-[10px] mt-1 uppercase font-medium tracking-tighter">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Layout;
