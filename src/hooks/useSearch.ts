import { useState, useMemo } from 'react';
import { CardData } from '../types';

export function useSearch(allCards: CardData[]) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = useMemo(() => {
    if (!searchTerm.trim()) return allCards;
    const query = searchTerm.toLowerCase();
    return allCards.filter(
      (card) =>
        card.title.toLowerCase().includes(query) ||
        (card.category && card.category.toLowerCase().includes(query)) ||
        (card.tag && card.tag.toLowerCase().includes(query))
    );
  }, [allCards, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredCards,
    hasResults: filteredCards.length > 0,
    clearSearch: () => setSearchTerm(''),
  };
}
