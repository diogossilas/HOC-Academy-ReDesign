import { useState } from 'react';
import { motion } from 'motion/react';
import ArchitecturePipeline from './ArchitecturePipeline';
import ModuleDependencyGraph from './ModuleDependencyGraph';
import { Layers, Cpu, ShieldCheck, GitPullRequest, Boxes, Sparkles } from 'lucide-react';

export default function StudioModularView() {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'modules' | 'principles'>('pipeline');

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen p-4 md:p-6 max-w-7xl mx-auto w-full space-y-8"
    >
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-5 bg-sky-400 rounded-full" />
            <h1 className="text-xs font-bold uppercase tracking-widest text-sky-400 readable">
              Studio · Engenharia & Modularização
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight readable">
            Brief → Sketch → Studio → Modularização
          </h2>
          <p className="text-xs md:text-sm text-white/70 mt-1 max-w-2xl leading-relaxed readable">
            Arquitetura orientada à separação de responsabilidades (Separation of Concerns). Cada módulo é uma unidade coesa, independente e responsável por um único aspecto do comportamento da aplicação.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-2xl border border-white/10 self-start md:self-auto">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'pipeline'
                ? 'bg-sky-400 text-black shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Pipeline do Projeto
          </button>

          <button
            onClick={() => setActiveTab('modules')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'modules'
                ? 'bg-sky-400 text-black shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Mapa de Módulos (SoC)
          </button>

          <button
            onClick={() => setActiveTab('principles')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'principles'
                ? 'bg-sky-400 text-black shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Princípios Arquiteturais
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      {activeTab === 'pipeline' && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400 flex items-center gap-2">
              <GitPullRequest size={14} />
              Fluxo Evolutivo de Engenharia (Brief → Sketch → Studio → Modularização)
            </h3>
            <span className="text-[11px] font-mono text-white/40">4 Estágios Implementados</span>
          </div>

          <ArchitecturePipeline />
        </section>
      )}

      {activeTab === 'modules' && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-widest text-sky-400 flex items-center gap-2">
              <Boxes size={14} />
              Catálogo de Módulos & Análise de Acoplamento
            </h3>
            <span className="text-[11px] font-mono text-sky-400">Loose Coupling · High Cohesion</span>
          </div>

          <ModuleDependencyGraph />
        </section>
      )}

      {activeTab === 'principles' && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl glass border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-sky-400/20 text-sky-400 flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">Separation of Concerns (SoC)</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Princípio fundamental onde o programa é dividido em seções distintas, de modo que cada seção aborde uma preocupação separada. A interface do usuário não lida com orquestração de áudio, a camada de acesso a dados não gerencia animações e o estado do usuário permanece encapsulado em hooks especializados.
            </p>
            <ul className="space-y-2 text-xs text-white/80 pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                <strong>Camada de Apresentação:</strong> Componentes de UI puros
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                <strong>Camada de Serviços:</strong> Acessibilidade / Web Speech API
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                <strong>Camada de Estado:</strong> Hooks customizados reativos
              </li>
            </ul>
          </div>

          <div className="p-6 md:p-8 rounded-2xl glass border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-sky-400/20 text-sky-400 flex items-center justify-center">
              <Cpu size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">Modular Programming & Encapsulamento</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Modularização significa que cada componente pode ser desenvolvido, testado, atualizado ou substituído de forma autônoma, sem risco de quebrar outras partes do ecossistema.
            </p>
            <ul className="space-y-2 text-xs text-white/80 pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                <strong>Alta Coesão:</strong> Funções intimamente relacionadas agrupadas juntas
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                <strong>Baixo Acoplamento:</strong> Comunicação unicamente através de tipos e contratos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                <strong>Reusabilidade:</strong> Componentes de layout e scrollers independentes
              </li>
            </ul>
          </div>
        </section>
      )}
    </motion.div>
  );
}
