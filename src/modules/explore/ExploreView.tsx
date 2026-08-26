import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { generateCategoryCards } from '../../data/catalogData';
import CategoryPills, { EXPLORE_CATEGORIES, ExploreCategory } from './CategoryPills';
import { Play, Sparkles, Filter, Clock } from 'lucide-react';

export default function ExploreView() {
  const [activeCategory, setActiveCategory] = useState<ExploreCategory>('10 Melhores');

  // Dynamic cards for the active category
  const cards = generateCategoryCards(12, activeCategory, activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full"
    >
      <header className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <h1 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                [ ARQUIVO // EXPLORAÇÃO ESTRATÉGICA ]
              </h1>
            </div>
            <p className="text-sm text-gray-300">
              Acervo de guerras, ciências políticas, grandes nomes e filosofia na dimensão 3D e 0D.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3.5 py-1.5 rounded-lg border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] self-start sm:self-auto">
            <Filter size={13} className="text-cyan-400" />
            <span>CATEGORIA: {activeCategory}</span>
          </div>
        </div>

        {/* Sub-navbar / Category selector */}
        <CategoryPills
          categories={EXPLORE_CATEGORIES}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
      </header>

      {/* Grid of Cards - Clean images without overlays, descriptions below */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(idx * 0.04, 0.4), duration: 0.35 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col cursor-pointer select-none"
            >
              {/* Pure Photographic Canvas */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#090b10] border border-white/10 group-hover:border-cyan-400/70 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition-all duration-400">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Minimalist Corner Reticles */}
                <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400 transition-colors" />
                <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400 transition-colors" />

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.8)] transform scale-75 group-hover:scale-100 transition-transform">
                    <Play size={18} className="fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Information Below the Card */}
              <div className="pt-3.5 pb-1 px-1 flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2 text-[10px] font-mono tracking-wider">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-semibold uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <span>{card.angleLabel || card.category || 'Estratégia'}</span>
                  </div>

                  {card.duration && (
                    <span className="text-gray-400 flex items-center gap-1 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                      <Clock size={10} className="text-cyan-400" />
                      {card.duration}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug line-clamp-1">
                  {card.title}
                </h3>

                <p className="text-xs text-gray-300/85 leading-relaxed line-clamp-2 font-normal">
                  {card.description || 'Análise da geopolítica e do poder.'}
                </p>

                <div className="pt-1 flex items-center justify-between text-[9px] font-mono text-gray-500">
                  <span className="text-gray-400/60 uppercase">#{idx + 1} // {card.tag || 'HOC'}</span>
                  <span className="text-cyan-400/50 group-hover:text-cyan-400 transition-colors flex items-center gap-1">
                    <Sparkles size={9} />
                    EXPLORAR
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
