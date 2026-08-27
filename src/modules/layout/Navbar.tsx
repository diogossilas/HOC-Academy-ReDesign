import { useState, useEffect } from 'react';
import { Compass, Home, Shield, Menu, X, Sun, Moon, User } from 'lucide-react';
import { ViewState } from '../../types';
import { useUserProfile } from '../../hooks/useUserProfile';
import ProfileDropdown from '../user/ProfileDropdown';
import SearchBar from './SearchBar';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  searchTerm?: string;
  onSearchChange?: (val: string) => void;
  profileState?: ReturnType<typeof useUserProfile>;
}

export default function Navbar({
  currentView,
  setView,
  searchTerm = '',
  onSearchChange,
  profileState,
}: NavbarProps) {
  const localProfileState = useUserProfile();
  const {
    profile,
    xpPercentage,
    isDropdownOpen,
    toggleDropdown,
    closeDropdown,
    markNotificationRead,
    addXp,
  } = profileState || localProfileState;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const navItems = [
    { id: 'home' as ViewState, label: 'Início', icon: Home },
    { id: 'explore' as ViewState, label: 'Explorar', icon: Compass },
    { id: 'bunker' as ViewState, label: 'Bunker', icon: Shield },
    { id: 'profile' as ViewState, label: 'Perfil Pessoal', icon: User },
  ];

  const handleOpenProfile = () => {
    setView('profile');
    closeDropdown();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-muted)] px-4 md:px-6 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group select-none"
          onClick={() => {
            setView('home');
            setMobileMenuOpen(false);
          }}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-deep)] sharp-corner flex items-center justify-center font-bold text-white text-sm shadow-sm group-hover:shadow-md transition-shadow">
            HOC
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-[var(--color-text)]">
              HOC Academy
            </span>
            <div className="flex items-center gap-1.5 text-[10px] text-[var(--color-muted-text)] font-medium">
              <span className="w-1.5 h-1.5 sharp-corner bg-emerald-500" />
              <span>Academia de Estratégia</span>
            </div>
          </div>
        </div>

        {/* Center Nav (Desktop) with Sharp Aesthetic */}
        <nav
          className="hidden md:flex items-center gap-1 bg-[var(--color-muted-bg)] border border-[var(--color-muted)] p-1 sharp-corner"
          aria-label="Navegação Principal"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setView(item.id)}
                className={`relative flex items-center gap-2 px-4 py-2 sharp-corner text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[var(--color-card)] text-[var(--color-primary)] shadow-xs font-bold border border-[var(--color-muted)]'
                    : 'text-[var(--color-muted-text)] hover:text-[var(--color-text)] hover:bg-[var(--color-card)]/50'
                }`}
              >
                <Icon
                  size={15}
                  className={isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted-text)]'}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Search Bar (Desktop) */}
          {onSearchChange && (
            <div className="hidden lg:block">
              <SearchBar value={searchTerm} onChange={onSearchChange} />
            </div>
          )}

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-1.5 sharp-corner border border-[var(--color-muted)] bg-[var(--color-card)] hover:border-[var(--color-primary)] transition-all text-xs font-medium text-[var(--color-text)] cursor-pointer"
            aria-label="Alternar Tema Claro / Escuro"
            title={theme === 'light' ? 'Tema Claro (Deep Blue)' : 'Tema Noturno'}
          >
            {theme === 'light' ? (
              <>
                <div className="w-5 h-5 sharp-corner bg-[var(--color-primary)] text-white flex items-center justify-center shadow-xs">
                  <Sun size={13} />
                </div>
                <span className="hidden sm:inline font-semibold text-[var(--color-primary)]">
                  Tema Claro
                </span>
              </>
            ) : (
              <>
                <div className="w-5 h-5 sharp-corner bg-slate-800 text-amber-300 flex items-center justify-center">
                  <Moon size={13} />
                </div>
                <span className="hidden sm:inline font-semibold text-[var(--color-text)]">
                  Noturno
                </span>
              </>
            )}
          </button>

          {/* User Profile Button - Directly clickable to open Profile Page, plus options */}
          <div className="relative flex items-center gap-1">
            <button
              onClick={handleOpenProfile}
              className="flex items-center gap-2 p-1.5 sharp-corner hover:bg-[var(--color-muted-bg)] transition-colors border border-transparent hover:border-[var(--color-muted)] focus:outline-none cursor-pointer group"
              aria-label="Abrir página de perfil pessoal do usuário"
              title="Clique para abrir seu Perfil Pessoal"
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-8 h-8 rounded-full border border-[var(--color-primary)] object-cover shadow-xs group-hover:scale-105 transition-transform"
              />
              <span className="hidden xl:inline text-xs font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors pr-1">
                {profile.name.split(' ')[0]}
              </span>
            </button>

            <button
              onClick={toggleDropdown}
              className="p-1 sharp-corner text-[var(--color-muted-text)] hover:text-[var(--color-text)] hover:bg-[var(--color-muted-bg)] cursor-pointer"
              aria-label="Abrir menu rápido de notificações e status"
              title="Menu Rápido"
            >
              <span className="text-[10px] font-bold px-1 py-0.5 bg-[var(--color-muted-bg)] border border-[var(--color-muted)] sharp-corner">
                LVL {profile.level}
              </span>
            </button>

            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={closeDropdown} />
                <ProfileDropdown
                  profile={profile}
                  xpPercentage={xpPercentage}
                  onClose={closeDropdown}
                  onOpenFullProfile={handleOpenProfile}
                  onMarkRead={markNotificationRead}
                  onAddXpBonus={() => addXp(250)}
                />
              </>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 sharp-corner bg-[var(--color-card)] border border-[var(--color-muted)] text-[var(--color-text)] hover:bg-[var(--color-muted-bg)]"
            aria-label="Abrir menu mobile"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-[var(--color-muted)] flex flex-col gap-2">
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
                className={`flex items-center justify-between p-3 sharp-corner text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[var(--color-primary)] text-white font-bold'
                    : 'text-[var(--color-text)] hover:bg-[var(--color-muted-bg)]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} />
                  <span>{item.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
