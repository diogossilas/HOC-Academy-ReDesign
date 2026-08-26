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
        size={16}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 text-white text-xs rounded-full pl-9 pr-8 py-2 focus:outline-none focus:border-sky-400 focus:bg-white/10 transition-all readable"
        aria-label="Pesquisar conteúdos"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-0.5 rounded-full"
          aria-label="Limpar pesquisa"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
