import { motion } from 'motion/react';

export const EXPLORE_CATEGORIES = [
  '10 Melhores',
  'Novidades',
  'Em Alta',
  'Merece Destaque',
  'Continuar Assistindo',
  'Meus Favoritos',
] as const;

export type ExploreCategory = (typeof EXPLORE_CATEGORIES)[number];

interface CategoryPillsProps {
  categories: readonly ExploreCategory[];
  activeCategory: ExploreCategory;
  onSelect: (category: ExploreCategory) => void;
}

export default function CategoryPills({
  categories,
  activeCategory,
  onSelect,
}: CategoryPillsProps) {
  return (
    <div
      className="flex flex-wrap gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10"
      aria-label="Categorias de Exploração"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`relative px-5 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 readable select-none ${
              isActive
                ? 'bg-sky-400 text-black font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
