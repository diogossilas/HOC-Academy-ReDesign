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
      className="flex flex-wrap gap-2 p-1.5 bg-[var(--color-muted-bg)] sharp-corner border border-[var(--color-muted)]"
      aria-label="Categorias de Exploração"
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`relative px-4 py-2 sharp-corner text-xs md:text-sm font-bold transition-all duration-200 select-none cursor-pointer ${
              isActive
                ? 'bg-[var(--color-primary)] text-white shadow-xs'
                : 'text-[var(--color-muted-text)] hover:text-[var(--color-text)] hover:bg-[var(--color-card)]'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
