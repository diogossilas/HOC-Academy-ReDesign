import { useState } from 'react';
import { systemModules } from '../../data/architectureData';
import { SystemModule } from '../../types';
import { Layers, Box, GitFork, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function ModuleDependencyGraph() {
  const [activeModule, setActiveModule] = useState<SystemModule>(systemModules[0]);

  return (
    <div className="w-full space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-[var(--color-card)] border border-[var(--color-muted)] rounded-2xl shadow-xs">
          <span className="text-[11px] text-[var(--color-muted-text)] font-semibold block mb-1">
            Total de Módulos Independentes
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--color-text)]">{systemModules.length}</span>
            <span className="text-xs text-[var(--color-primary)] font-medium">Unidades Coesas</span>
          </div>
        </div>

        <div className="p-4 bg-[var(--color-card)] border border-[var(--color-muted)] rounded-2xl shadow-xs">
          <span className="text-[11px] text-[var(--color-muted-text)] font-semibold block mb-1">
            Nível Médio de Acoplamento
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Baixo / Isolado</span>
            <span className="text-xs text-[var(--color-muted-text)]">Loose Coupling</span>
          </div>
        </div>

        <div className="p-4 bg-[var(--color-card)] border border-[var(--color-muted)] rounded-2xl shadow-xs">
          <span className="text-[11px] text-[var(--color-muted-text)] font-semibold block mb-1">
            Separação de Responsabilidades
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[var(--color-primary)]">100% SoC</span>
            <span className="text-xs text-[var(--color-muted-text)]">Single Problem Domain</span>
          </div>
        </div>
      </div>

      {/* Module Selector & Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Module List */}
        <div className="lg:col-span-5 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-3 flex items-center gap-2">
            <Layers size={14} />
            Módulos do Sistema
          </h4>

          <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">
            {systemModules.map((mod) => {
              const isSelected = activeModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--color-card)] border-sky-400 text-[var(--color-text)] shadow-sm ring-1 ring-sky-400'
                      : 'bg-[var(--color-card)] border-[var(--color-muted)] text-[var(--color-muted-text)] hover:bg-[var(--color-muted-bg)] hover:text-[var(--color-text)]'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[var(--color-text)] truncate">{mod.name}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                          mod.coupling === 'Isolado'
                            ? 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300'
                            : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                        }`}
                      >
                        {mod.coupling}
                      </span>
                    </div>
                    <span className="text-xs text-[var(--color-muted-text)] block truncate">{mod.domain}</span>
                  </div>

                  <ArrowUpRight
                    size={14}
                    className={`shrink-0 ml-2 transition-transform ${
                      isSelected ? 'text-[var(--color-primary)] translate-x-0.5 -translate-y-0.5' : 'text-[var(--color-muted-text)]/50'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Module Deep Dive */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-muted)] shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[var(--color-muted)] mb-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-primary)] block mb-1">
                  Domínio: {activeModule.domain}
                </span>
                <h3 className="text-xl font-bold text-[var(--color-text)]">{activeModule.name}</h3>
              </div>

              <div className="flex items-center gap-1.5 bg-[var(--color-muted-bg)] border border-[var(--color-muted)] px-3 py-1.5 rounded-xl text-xs">
                <span className="text-[var(--color-muted-text)]">Coesão:</span>
                <span className="font-bold text-[var(--color-primary)]">{activeModule.cohesion}</span>
              </div>
            </div>

            {/* Responsibility description */}
            <div className="mb-5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-text)] mb-1.5">
                Aspecto Bem Definido / Responsabilidade Única
              </h5>
              <p className="text-xs text-[var(--color-text)] leading-relaxed bg-[var(--color-muted-bg)] p-3 rounded-xl border border-[var(--color-muted)]">
                {activeModule.responsibility}
              </p>
            </div>

            {/* Files in this module */}
            <div className="mb-5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-text)] mb-2 flex items-center gap-1.5">
                <Box size={13} className="text-[var(--color-primary)]" />
                Arquivos do Módulo (Unidade Coesa)
              </h5>
              <div className="space-y-1.5">
                {activeModule.files.map((file, i) => (
                  <div
                    key={i}
                    className="text-xs font-mono text-[var(--color-text)] bg-[var(--color-muted-bg)] px-3 py-2 rounded-lg border border-[var(--color-muted)] flex items-center justify-between"
                  >
                    <span>{file}</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold uppercase">Encapsulado</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dependencies & Coupling */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-text)] mb-2 flex items-center gap-1.5">
                <GitFork size={13} className="text-[var(--color-primary)]" />
                Dependências Contratuais (Loose Coupling)
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {activeModule.dependencies.map((dep, i) => (
                  <span
                    key={i}
                    className="text-xs bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/40 px-2.5 py-1 rounded-lg font-medium"
                  >
                    {dep}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--color-muted)] flex items-center justify-between text-xs text-[var(--color-muted-text)]">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle size={14} /> Princípio SoC: Atendido
            </span>
            <span className="font-mono text-xs text-[var(--color-primary)]">ID: {activeModule.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
