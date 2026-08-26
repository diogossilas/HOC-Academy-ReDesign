import { motion } from 'motion/react';
import { Bookmark, Clock, Edit3, Shield, Terminal, DownloadCloud, Radio } from 'lucide-react';
import { ViewState } from '../../types';
import BunkerResourceCard from './BunkerResourceCard';
import BunkerStats from './BunkerStats';

interface BunkerViewProps {
  key?: string;
  onNavigate: (v: ViewState) => void;
}

export default function BunkerView({ onNavigate }: BunkerViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="min-h-[75vh] p-4 md:p-6 max-w-7xl mx-auto flex flex-col w-full"
    >
      <header className="mb-6">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h1 className="text-xs font-bold uppercase tracking-widest text-sky-400 flex items-center gap-2 readable">
            <span className="w-1 h-4 bg-sky-400 rounded-full" />
            O Bunker · Central de Operações & Inteligência
          </h1>
          <div className="flex items-center gap-2 bg-sky-400/10 border border-sky-400/30 px-3 py-1 rounded-full text-[10px] text-sky-400 font-mono">
            <Radio size={12} className="animate-pulse text-sky-400" />
            FREQUÊNCIA CRIPTOGRAFADA: ATIVA
          </div>
        </div>
        <p className="text-xs md:text-sm text-white/70 max-w-3xl leading-relaxed readable">
          Ambiente restrito com recursos pedagógicos estratégicos, notas de briefing, relatórios táticos e trilhas personalizadas para sua evolução contínua.
        </p>
      </header>

      {/* Intelligence Performance Stats */}
      <BunkerStats />

      {/* Primary Actions Grid */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4 flex items-center gap-2 readable">
          <span className="w-1 h-3.5 bg-sky-400 rounded-full" />
          Recursos Pedagógicos & Operacionais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <BunkerResourceCard
            icon={Clock}
            title="Assistir Mais Tarde"
            description="Acesse sua fila de aulas salvas, gravações de emergência e análises táticas pendentes."
            countBadge="8 itens salvos"
            onClick={() => onNavigate('blank')}
          />

          <BunkerResourceCard
            icon={Bookmark}
            title="Relatos do Bunker Salvos"
            description="Coleção de dossiês estratégicos, notas de campo e transcrições de encontros a portas fechadas."
            countBadge="14 relatórios"
            onClick={() => onNavigate('blank')}
          />

          <BunkerResourceCard
            icon={Edit3}
            title="Minhas Publicações & Notas"
            description="Caderno de campo e anotações pessoais registradas durante as masterclasses da academia."
            countBadge="23 anotações"
            onClick={() => onNavigate('blank')}
          />
        </div>
      </section>

      {/* Quick Tactical Feed */}
      <section className="p-5 rounded-2xl bg-white/5 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Terminal size={16} className="text-sky-400" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-white readable">
              Log de Transmissões Recentes
            </h3>
          </div>
          <span className="text-[10px] text-white/40 font-mono">Sync: 100% Ok</span>
        </div>

        <div className="space-y-2.5 text-xs text-white/80">
          <div className="p-3 bg-black/40 rounded-xl border border-white/5 flex items-center justify-between">
            <div>
              <strong className="text-sky-400">[Briefing 48]</strong> Cenário Geopolítico Ásia-Pacífico
              e impacto em cadeias de semicondutores.
            </div>
            <button
              onClick={() => onNavigate('blank')}
              className="text-[10px] text-sky-400 hover:underline flex items-center gap-1"
            >
              <DownloadCloud size={12} /> Acessar PDF
            </button>
          </div>

          <div className="p-3 bg-black/40 rounded-xl border border-white/5 flex items-center justify-between">
            <div>
              <strong className="text-sky-400">[Áudio Tático #12]</strong> Tomada de decisão sob
              incerteza com professor convidado.
            </div>
            <button
              onClick={() => onNavigate('blank')}
              className="text-[10px] text-sky-400 hover:underline flex items-center gap-1"
            >
              <DownloadCloud size={12} /> Ouvir Agora
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
