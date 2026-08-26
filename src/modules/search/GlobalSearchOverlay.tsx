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
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white flex items-center gap-1.5 text-xs font-semibold"
          >
            <ArrowLeft size={14} /> Voltar
          </button>
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <Search size={16} className="text-sky-400" />
            Resultados para "{searchTerm}" ({searchedCards.length})
          </h2>
        </div>
      </div>

      {searchedCards.length === 0 ? (
        <div className="py-16 text-center text-white/50 text-sm">
          Nenhum conteúdo encontrado para o termo pesquisado.
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
          {searchedCards.map((card, idx) => (
            <ContentCard key={card.id} card={card} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
}
