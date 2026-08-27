import { useState } from 'react';
import { motion } from 'motion/react';
import ArchitecturePipeline from './ArchitecturePipeline';
import ModuleDependencyGraph from './ModuleDependencyGraph';
import { Cpu, ShieldCheck, GitPullRequest, Boxes } from 'lucide-react';

export default function StudioModularView() {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'modules' | 'principles'>('pipeline');

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen p-4 md:p-6 max-w-7xl mx-auto w-full space-y-8"
    >
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--color-muted)]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-4 bg-[var(--color-primary)] rounded-full" />
            <h1 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
              Studio · Arquitetura & Modularização
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] tracking-tight">
            Brief → Sketch → Studio → Modularização
          </h2>
          <p className="text-xs md:text-sm text-[var(--color-muted-text)] mt-1 max-w-2xl leading-relaxed">
            Arquitetura orientada à separação de responsabilidades (Separation of Concerns). Cada módulo é uma unidade coesa, independente e responsável por um aspecto bem definido.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-[var(--color-muted-bg)] p-1 rounded-2xl border border-[var(--color-muted)] self-start md:self-auto">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'pipeline'
                ? 'bg-[var(--color-card)] text-[var(--color-primary)] shadow-sm font-bold'
                : 'text-[var(--color-muted-text)] hover:text-[var(--color-text)]'
            }`}
          >
            Pipeline
          </button>

          <button
            onClick={() => setActiveTab('modules')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'modules'
                ? 'bg-[var(--color-card)] text-[var(--color-primary)] shadow-sm font-bold'
                : 'text-[var(--color-muted-text)] hover:text-[var(--color-text)]'
            }`}
          >
            Módulos (SoC)
          </button>

          <button
            onClick={() => setActiveTab('principles')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'principles'
                ? 'bg-[var(--color-card)] text-[var(--color-primary)] shadow-sm font-bold'
                : 'text-[var(--color-muted-text)] hover:text-[var(--color-text)]'
            }`}
          >
            Princípios
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      {activeTab === 'pipeline' && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] flex items-center gap-2">
              <GitPullRequest size={14} />
              Fluxo Evolutivo de Engenharia
            </h3>
            <span className="text-xs font-medium text-[var(--color-muted-text)]">4 Estágios Implementados</span>
          </div>

          <ArchitecturePipeline />
        </section>
      )}

      {activeTab === 'modules' && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] flex items-center gap-2">
              <Boxes size={14} />
              Catálogo de Módulos & Análise de Acoplamento
            </h3>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Loose Coupling · High Cohesion</span>
          </div>

          <ModuleDependencyGraph />
        </section>
      )}

      {activeTab === 'principles' && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 md:p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-muted)] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-[var(--color-primary)] flex items-center justify-center border border-sky-200 dark:border-sky-800/40">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text)]">Separation of Concerns (SoC)</h3>
            <p className="text-xs text-[var(--color-muted-text)] leading-relaxed">
              Princípio fundamental onde a aplicação é dividida em seções distintas, com limites claros de responsabilidade. A interface do usuário é desacoplada de regras de domínio e chamadas de API.
            </p>
            <ul className="space-y-2 text-xs text-[var(--color-text)] pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full" />
                <strong>Camada de Apresentação:</strong> Componentes de UI puros
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <strong>Camada de Serviços:</strong> Acessibilidade e orquestração
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full" />
                <strong>Camada de Estado:</strong> Hooks customizados e reativos
              </li>
            </ul>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-muted)] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/40">
              <Cpu size={20} />
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text)]">Modular Programming & Encapsulamento</h3>
            <p className="text-xs text-[var(--color-muted-text)] leading-relaxed">
              Modularização garante que cada componente possa ser desenvolvido, testado e mantido de forma autônoma e segura.
            </p>
            <ul className="space-y-2 text-xs text-[var(--color-text)] pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <strong>Alta Coesão:</strong> Funções correlatas agrupadas em cada domínio
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full" />
                <strong>Baixo Acoplamento:</strong> Comunicação restrita via contratos TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <strong>Reusabilidade:</strong> Módulos e carrosséis com controle independente
              </li>
            </ul>
          </div>
        </section>
      )}
    </motion.div>
  );
}
