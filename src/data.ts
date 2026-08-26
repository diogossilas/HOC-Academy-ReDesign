// Re-export all modularized data files
export * from './data/heroData';
export * from './data/catalogData';
export * from './data/architectureData';

// Legacy compatibility helper
import { generateCategoryCards } from './data/catalogData';
export const generateCards = (count: number, prefix: string, specialText?: string) => {
  return generateCategoryCards(count, prefix, 'Geral', specialText);
};
