import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Pesquisar conteúdos...',
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xs">
      <Search
        size={15}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[var(--color-muted-bg)] border border-[var(--color-muted)] text-[var(--color-text)] text-xs sharp-corner pl-9 pr-8 py-2 focus:outline-none focus:border-[var(--color-primary)] focus:bg-[var(--color-card)] transition-all readable"
        aria-label="Pesquisar conteúdos"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-text)] p-0.5 sharp-corner cursor-pointer"
          aria-label="Limpar pesquisa"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
