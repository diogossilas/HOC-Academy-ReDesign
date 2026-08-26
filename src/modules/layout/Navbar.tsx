import { useState } from 'react';
import { Layers, Compass, Home, Shield, Menu, X, Terminal } from 'lucide-react';
import { ViewState } from '../../types';
import { useUserProfile } from '../../hooks/useUserProfile';
import ProfileDropdown from '../user/ProfileDropdown';
import SearchBar from './SearchBar';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  searchTerm?: string;
  onSearchChange?: (val: string) => void;
}

export default function Navbar({
  currentView,
  setView,
  searchTerm = '',
  onSearchChange,
}: NavbarProps) {
  const {
    profile,
    xpPercentage,
    isDropdownOpen,
    toggleDropdown,
    closeDropdown,
    markNotificationRead,
    addXp,
  } = useUserProfile();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as ViewState, label: 'Início', icon: Home },
    { id: 'explore' as ViewState, label: 'Explorar', icon: Compass },
    { id: 'bunker' as ViewState, label: 'Bunker', icon: Shield },
    { id: 'studio' as ViewState, label: 'Studio Modular', icon: Layers, badge: 'SoC' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#050608]/90 backdrop-blur-xl border-b border-white/10 px-4 md:px-6 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo with Cyber Neon Glow */}
        <div
          className="flex items-center gap-3 cursor-pointer group select-none"
          onClick={() => {
            setView('home');
            setMobileMenuOpen(false);
          }}
        >
          <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center font-black text-black text-xs shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:scale-105 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.9)] transition-all">
            HOC
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              HOC Academy
            </span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-400/80 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
              CORE // MODULAR
            </span>
          </div>
        </div>

        {/* Center Nav (Desktop) with Neon Futuristic Capsule */}
        <nav className="hidden md:flex items-center gap-1.5 bg-black/50 border border-white/10 p-1.5 rounded-xl shadow-inner" aria-label="Navegação Principal">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`relative flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-400 text-black font-bold shadow-[0_0_18px_rgba(34,211,238,0.4)]'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-white/[0.06]'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-black' : 'text-cyan-400/70'} />
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded font-mono uppercase font-bold ${
                      isActive ? 'bg-black text-cyan-400' : 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Search Bar (Optional desktop integration) */}
          {onSearchChange && (
            <div className="hidden lg:block">
              <SearchBar value={searchTerm} onChange={onSearchChange} />
            </div>
          )}

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-cyan-400/30 focus:outline-none cursor-pointer"
              aria-label="Abrir menu de perfil do usuário"
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-8 h-8 rounded-lg border-2 border-cyan-400 object-cover shadow-[0_0_10px_rgba(34,211,238,0.4)]"
              />
              <span className="hidden xl:inline text-xs font-mono font-semibold text-white/90 pr-1">
                {profile.name.split(' ')[0]}
              </span>
            </button>

            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={closeDropdown} />
                <ProfileDropdown
                  profile={profile}
                  xpPercentage={xpPercentage}
                  onClose={closeDropdown}
                  onMarkRead={markNotificationRead}
                  onAddXpBonus={() => addXp(250)}
                />
              </>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-cyan-400/10 hover:border-cyan-400/40"
            aria-label="Abrir menu mobile"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
          {onSearchChange && (
            <div className="mb-2">
              <SearchBar value={searchTerm} onChange={onSearchChange} />
            </div>
          )}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-mono font-medium transition-colors ${
                  isActive ? 'bg-cyan-400 text-black font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'text-white/80 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/30 text-current">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
