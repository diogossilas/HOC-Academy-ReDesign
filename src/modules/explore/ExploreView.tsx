import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { generateCategoryCards } from '../../data/catalogData';
import CategoryPills, { EXPLORE_CATEGORIES, ExploreCategory } from './CategoryPills';
import ContentCard from '../catalog/ContentCard';
import { Sparkles, Layers } from 'lucide-react';
import { CardData } from '../../types';

interface ExploreViewProps {
  key?: string;
  onCardClick?: (card: CardData) => void;
}

export default function ExploreView({ onCardClick }: ExploreViewProps) {
  const [activeCategory, setActiveCategory] = useState<ExploreCategory>('10 Melhores');

  // Dynamic cards for the active category (all unique non-repeating images)
  const cards = generateCategoryCards(12, activeCategory, activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-8 xl:p-10 max-w-7xl 2xl:max-w-[1600px] mx-auto w-full flex flex-col gap-6 md:gap-8"
    >
      <header className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 sharp-corner bg-emerald-500" />
              <h1 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] flex items-center gap-1.5">
                <Layers size={13} />
                Acervo de Exploração Estratégica
              </h1>
            </div>
            <p className="text-sm text-[var(--color-muted-text)] max-w-3xl leading-relaxed">
              Imersão completa em relações internacionais, ciência política, diplomacia, defesa tática e os maiores estrategistas da história global.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-muted-bg)] px-3.5 py-2 sharp-corner border border-[var(--color-muted)] self-start md:self-auto shrink-0 shadow-2xs">
            <Sparkles size={13} className="text-amber-500" />
            <span>Exibindo: <strong className="text-[var(--color-text)]">{activeCategory}</strong> ({cards.length} conteúdos)</span>
          </div>
        </div>

        {/* Sub-navbar / Category selector */}
        <CategoryPills
          categories={EXPLORE_CATEGORIES}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
      </header>

      {/* Grid of Cards - Fluid desktop responsiveness with balanced gaps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5 sm:gap-6 md:gap-6 lg:gap-7 xl:gap-8 w-full"
        >
          {cards.map((card, idx) => (
            <ContentCard
              key={card.id}
              card={card}
              index={idx}
              variant="grid"
              onClick={onCardClick}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
