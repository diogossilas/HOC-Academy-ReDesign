import { ArrowLeft, Search } from 'lucide-react';
import ContentCard from '../catalog/ContentCard';
import { CardData } from '../../types';

interface GlobalSearchOverlayProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchedCards: CardData[];
}

export default function GlobalSearchOverlay({
  searchTerm,
  setSearchTerm,
  searchedCards,
}: GlobalSearchOverlayProps) {
  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchTerm('')}
            className="p-2 sharp-corner bg-[var(--color-muted-bg)] border border-[var(--color-muted)] hover:border-[var(--color-primary)] text-[var(--color-text)] flex items-center gap-1.5 text-xs font-semibold cursor-pointer transition-colors"
          >
            <ArrowLeft size={14} /> Voltar
          </button>
          <h2 className="text-sm font-bold text-[var(--color-text)] flex items-center gap-2">
            <Search size={16} className="text-[var(--color-primary)]" />
            Resultados para "{searchTerm}" ({searchedCards.length})
          </h2>
        </div>
      </div>

      {searchedCards.length === 0 ? (
        <div className="py-16 text-center text-[var(--color-muted-text)] text-sm">
          Nenhum conteúdo encontrado para o termo pesquisado.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5 sm:gap-6 md:gap-6 lg:gap-7 xl:gap-8 w-full">
          {searchedCards.map((card, idx) => (
            <ContentCard
              key={card.id}
              card={card}
              index={idx}
              variant="grid"
            />
          ))}
        </div>
      )}
    </div>
  );
}
