import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './modules/layout/Navbar';
import Footer from './modules/layout/Footer';
import HomeView from './modules/home/HomeView';
import ExploreView from './modules/explore/ExploreView';
import BunkerView from './modules/bunker/BunkerView';
import StudioModularView from './modules/studio/StudioModularView';
import GlobalSearchOverlay from './modules/search/GlobalSearchOverlay';
import { ViewState } from './types';
import { accessibilityService } from './services/accessibility.service';
import { useSearch } from './hooks/useSearch';
import { allCatalogCards } from './data/catalogData';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const { searchTerm, setSearchTerm, filteredCards: searchedCards } = useSearch(allCatalogCards);

  useEffect(() => {
    const cleanup = accessibilityService.init();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-gray-100 font-sans selection:bg-sky-400 selection:text-black">
      {/* Decoupled Shell Navigation Module */}
      <Navbar
        currentView={currentView}
        setView={(v) => {
          setCurrentView(v);
          setSearchTerm('');
        }}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
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
            {currentView === 'studio' && <StudioModularView key="studio" />}
            {currentView === 'blank' && (
              <motion.div
                key="blank"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-[70vh] flex flex-col items-center justify-center gap-6 p-4 text-center"
              >
                <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-sky-400 animate-spin" />
                <div>
                  <h2 className="text-xl font-bold text-white mb-1 readable">
                    Recurso em Processamento
                  </h2>
                  <p className="text-gray-400 text-sm font-light max-w-sm readable">
                    O módulo solicitado está em fase de compilação ou sincronização na rede do Bunker.
                  </p>
                </div>
                <button
                  onClick={() => setCurrentView('bunker')}
                  className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-white hover:bg-sky-400 hover:text-black font-semibold text-xs transition-all readable"
                >
                  Retornar ao Bunker
                </button>
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

