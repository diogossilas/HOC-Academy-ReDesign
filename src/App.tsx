import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './modules/layout/Navbar';
import Footer from './modules/layout/Footer';
import HomeView from './modules/home/HomeView';
import ExploreView from './modules/explore/ExploreView';
import BunkerView from './modules/bunker/BunkerView';
import ProfileView from './modules/profile/ProfileView';
import GlobalSearchOverlay from './modules/search/GlobalSearchOverlay';
import { ViewState } from './types';
import { accessibilityService } from './services/accessibility.service';
import { useSearch } from './hooks/useSearch';
import { useUserProfile } from './hooks/useUserProfile';
import { allCatalogCards } from './data/catalogData';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const { searchTerm, setSearchTerm, filteredCards: searchedCards } = useSearch(allCatalogCards);
  const userProfileState = useUserProfile();

  useEffect(() => {
    const cleanup = accessibilityService.init();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-sans selection:bg-[var(--color-primary)] selection:text-white transition-colors duration-300">
      {/* Decoupled Shell Navigation Module */}
      <Navbar
        currentView={currentView}
        setView={(v) => {
          setCurrentView(v);
          setSearchTerm('');
        }}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        profileState={userProfileState}
      />

      {/* Main Content Router / Viewport */}
      <main className="flex-1 w-full overflow-hidden relative">
        {searchTerm.trim() ? (
          <GlobalSearchOverlay 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchedCards={searchedCards}
          />
        ) : (
          <AnimatePresence mode="wait">
            {currentView === 'home' && (
              <HomeView key="home" onNavigate={setCurrentView} />
            )}
            {currentView === 'explore' && <ExploreView key="explore" />}
            {currentView === 'bunker' && (
              <BunkerView key="bunker" onNavigate={setCurrentView} />
            )}
            {currentView === 'profile' && (
              <ProfileView
                key="profile"
                profile={userProfileState.profile}
                xpPercentage={userProfileState.xpPercentage}
                onNavigate={setCurrentView}
                onAddXpBonus={() => userProfileState.addXp(250)}
                onMarkNotificationRead={userProfileState.markNotificationRead}
              />
            )}
            {currentView === 'blank' && (
              <motion.div
                key="blank"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-[70vh] flex flex-col items-center justify-center gap-6 p-6 text-center max-w-xl mx-auto"
              >
                <div className="w-12 h-12 sharp-corner border-2 border-[var(--color-primary)] border-t-transparent animate-spin" />
                <div>
                  <h2 className="text-xl font-bold text-[var(--color-text)] mb-2">
                    Recurso Acadêmico em Processamento
                  </h2>
                  <p className="text-[var(--color-muted-text)] text-xs leading-relaxed">
                    O módulo selecionado está sendo carregado com excelência pedagógica e sincronização de dados.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentView('profile')}
                    className="px-5 py-2.5 bg-[var(--color-primary)] text-white sharp-corner hover:bg-[var(--color-primary-deep)] font-semibold text-xs transition-all cursor-pointer shadow-xs"
                  >
                    Ir ao Perfil Pessoal
                  </button>
                  <button
                    onClick={() => setCurrentView('home')}
                    className="px-5 py-2.5 bg-[var(--color-muted-bg)] border border-[var(--color-muted)] text-[var(--color-text)] sharp-corner font-semibold text-xs transition-all cursor-pointer"
                  >
                    Voltar ao Início
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </main>

      {/* Decoupled Shell Footer Module */}
      <Footer />
    </div>
  );
}
