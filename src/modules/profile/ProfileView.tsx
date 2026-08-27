import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  ShieldCheck,
  Award,
  BookOpen,
  Clock,
  Bookmark,
  Edit3,
  DownloadCloud,
  Bell,
  Sparkles,
  CheckCircle2,
  Calendar,
  FileText,
  TrendingUp,
  Headphones,
  Check,
  Share2,
} from 'lucide-react';
import { UserProfile, ViewState } from '../../types';

interface ProfileViewProps {
  key?: string;
  profile: UserProfile;
  xpPercentage: number;
  onNavigate: (view: ViewState) => void;
  onAddXpBonus?: () => void;
  onMarkNotificationRead?: (id: string) => void;
}

type ProfileTab = 'overview' | 'studies' | 'notifications' | 'subscription';

export default function ProfileView({
  profile,
  xpPercentage,
  onNavigate,
  onAddXpBonus,
  onMarkNotificationRead,
}: ProfileViewProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(profile.memberCode || 'HOC-ELEM-042');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const personalDossiers = [
    {
      id: 'dos-1',
      title: 'Dossiê 48: Cenário Geopolítico Ásia-Pacífico & Semicondutores',
      date: 'Atualizado há 2 dias',
      tag: 'Geopolítica Tática',
      type: 'pdf',
      size: '4.2 MB',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&h=400&q=85',
    },
    {
      id: 'dos-2',
      title: 'Masterclass Áudio: Tomada de Decisão sob Incerteza Crítica',
      date: 'Disponível há 5 dias',
      tag: 'Liderança Estratégica',
      type: 'audio',
      size: '28 min',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=400&q=85',
    },
    {
      id: 'dos-3',
      title: 'Guia Analítico: Mapeamento de Cadeias Globais de Suprimentos',
      date: 'Concluído em 12/08',
      tag: 'Geoeconomia',
      type: 'pdf',
      size: '6.8 MB',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=85',
    },
    {
      id: 'dos-4',
      title: 'Transcrição Executiva: Duelo de Impérios EUA vs China',
      date: 'Salvo nos favoritos',
      tag: 'Relações Internacionais',
      type: 'doc',
      size: '1.4 MB',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400&q=85',
    },
  ];

  const quickStudyCards = [
    {
      id: 'quick-1',
      title: 'Assistir Mais Tarde',
      badge: '8 pendentes',
      description: 'Sua fila com gravações de emergência e análises táticas salvas para revisão.',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1506744626753-1fa28f67c9bf?auto=format&fit=crop&w=600&h=300&q=85',
    },
    {
      id: 'quick-2',
      title: 'Dossiês & Relatos Salvos',
      badge: '14 documentos',
      description: 'Coleção de relatórios analíticos, notas de campo e transcrições de masterclasses.',
      icon: Bookmark,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&h=300&q=85',
    },
    {
      id: 'quick-3',
      title: 'Caderno de Anotações Pessoais',
      badge: '23 notas',
      description: 'Reflexões, insights e resumos pessoais registrados durante as aulas da academia.',
      icon: Edit3,
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&h=300&q=85',
    },
  ];

  const personalNotes = [
    {
      id: 'note-1',
      title: 'Princípios de Sun Tzu aplicados à Negociação Corporativa',
      excerpt: 'A vitória antes da batalha consiste no conhecimento prévio das vulnerabilidades do interlocutor.',
      date: '24 de Agosto, 2026',
      course: 'Estratégia Militar Aplicada',
    },
    {
      id: 'note-2',
      title: 'Dicotomia do Controle em Gestão de Crises',
      excerpt: 'Separar variáveis internas (decisão, postura) das externas (reações de mercado, choques exógenos).',
      date: '18 de Agosto, 2026',
      course: 'Filosofia Prática',
    },
    {
      id: 'note-3',
      title: 'Pontos de Estrangulamento (Choke Points) no Mar Vermelho',
      excerpt: 'Impacto direto no frete marítimo e inflação de insumos industriais.',
      date: '10 de Agosto, 2026',
      course: 'Geopolítica Naval',
    },
  ];

  const certificates = [
    {
      title: 'Especialista em Análise de Inteligência Estratégica',
      issued: 'Julho de 2026',
      code: 'CERT-HOC-88921',
      grade: 'Distinção Máxima (9.8/10)',
    },
    {
      title: 'Trilha Avançada de Filosofia Política & Tomada de Decisão',
      issued: 'Maio de 2026',
      code: 'CERT-HOC-74302',
      grade: 'Aprovado com Excelência',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full min-h-[85vh] flex flex-col gap-6"
    >
      {/* Top Banner / Identity Header */}
      <section className="relative bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner shadow-sm overflow-hidden p-6 md:p-8">
        {/* Deep Blue Angular Accent Top Right */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-primary)]/15 via-[var(--color-primary)]/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[var(--color-primary)] pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          {/* Avatar & User Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative shrink-0">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[var(--color-primary)] object-cover shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 bg-[var(--color-primary)] text-white text-xs font-bold px-2 py-0.5 sharp-corner border border-[var(--color-card)] shadow-xs">
                LVL {profile.level}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--color-text)]">
                  {profile.name}
                </h1>
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 bg-[var(--color-primary)] text-white sharp-corner">
                  {profile.subscription.plan}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-[var(--color-primary)]">
                {profile.title}
              </p>

              <p className="text-xs text-[var(--color-muted-text)] max-w-xl leading-relaxed mt-0.5">
                {profile.bio}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-muted-text)] pt-1">
                <span className="flex items-center gap-1 font-mono">
                  <span className="text-[var(--color-primary)] font-bold">ID:</span> {profile.memberCode}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-[var(--color-primary)]" /> Membro desde {profile.joinedDate}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action / Member ID Button */}
          <div className="flex flex-row md:flex-col items-center md:items-end gap-2.5 w-full md:w-auto">
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[var(--color-muted-bg)] border border-[var(--color-muted)] hover:border-[var(--color-primary)] sharp-corner text-xs font-semibold text-[var(--color-text)] transition-colors cursor-pointer"
            >
              {copiedCode ? (
                <>
                  <Check size={14} className="text-emerald-500" />
                  <span>Código Copiado!</span>
                </>
              ) : (
                <>
                  <Share2 size={14} className="text-[var(--color-primary)]" />
                  <span>Copiar ID de Membro</span>
                </>
              )}
            </button>

            <span className="text-[11px] text-[var(--color-muted-text)] flex items-center gap-1 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Sessão Ativa & Sincronizada
            </span>
          </div>
        </div>

        {/* Level Progression Bar */}
        <div className="mt-6 pt-5 border-t border-[var(--color-muted)] grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          <div className="lg:col-span-2 space-y-1.5">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[var(--color-text)] flex items-center gap-1.5">
                <Award size={14} className="text-[var(--color-primary)]" />
                Progressão de Experiência Tática
              </span>
              <span className="text-[var(--color-primary)] font-bold font-mono">
                {profile.currentXp.toLocaleString()} / {profile.nextLevelXp.toLocaleString()} XP ({xpPercentage}%)
              </span>
            </div>
            <div className="h-2.5 w-full bg-[var(--color-muted-bg)] border border-[var(--color-muted)] sharp-corner overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${xpPercentage}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-500 h-full"
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            {onAddXpBonus && (
              <button
                onClick={onAddXpBonus}
                className="w-full lg:w-auto px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-deep)] text-white sharp-corner font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles size={14} className="text-amber-300" />
                <span>Resgatar Bônus Diário (+250 XP)</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-1 bg-[var(--color-card)] p-1.5 border border-[var(--color-muted)] sharp-corner">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold sharp-corner transition-colors cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-[var(--color-primary)] text-white'
              : 'text-[var(--color-muted-text)] hover:text-[var(--color-text)] hover:bg-[var(--color-muted-bg)]'
          }`}
        >
          <User size={14} />
          <span>Visão Geral do Perfil</span>
        </button>

        <button
          onClick={() => setActiveTab('studies')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold sharp-corner transition-colors cursor-pointer ${
            activeTab === 'studies'
              ? 'bg-[var(--color-primary)] text-white'
              : 'text-[var(--color-muted-text)] hover:text-[var(--color-text)] hover:bg-[var(--color-muted-bg)]'
          }`}
        >
          <BookOpen size={14} />
          <span>Meus Estudos & Dossiês Salvos</span>
        </button>

        <button
          onClick={() => setActiveTab('notifications')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold sharp-corner transition-colors cursor-pointer ${
            activeTab === 'notifications'
              ? 'bg-[var(--color-primary)] text-white'
              : 'text-[var(--color-muted-text)] hover:text-[var(--color-text)] hover:bg-[var(--color-muted-bg)]'
          }`}
        >
          <Bell size={14} />
          <span>Transmissões & Notificações</span>
          {profile.notifications.length > 0 && (
            <span className="text-[10px] px-1.5 py-0.2 bg-emerald-500 text-white font-bold sharp-corner">
              {profile.notifications.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('subscription')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold sharp-corner transition-colors cursor-pointer ${
            activeTab === 'subscription'
              ? 'bg-[var(--color-primary)] text-white'
              : 'text-[var(--color-muted-text)] hover:text-[var(--color-text)] hover:bg-[var(--color-muted-bg)]'
          }`}
        >
          <ShieldCheck size={14} />
          <span>Assinatura & Segurança</span>
        </button>
      </div>

      {/* Tab Contents */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="p-4 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner flex flex-col justify-between">
                <span className="text-[11px] text-[var(--color-muted-text)] font-semibold">Índice de Prontidão</span>
                <span className="text-xl font-bold text-[var(--color-primary)] tracking-tight mt-2 font-mono">
                  {profile.readinessScore || 'Alpha-94%'}
                </span>
              </div>

              <div className="p-4 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner flex flex-col justify-between">
                <span className="text-[11px] text-[var(--color-muted-text)] font-semibold">Horas de Estudo</span>
                <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400 tracking-tight mt-2 font-mono">
                  {profile.studyHours || '184.5h'}
                </span>
              </div>

              <div className="p-4 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner flex flex-col justify-between">
                <span className="text-[11px] text-[var(--color-muted-text)] font-semibold">Aulas Concluídas</span>
                <span className="text-xl font-bold text-[var(--color-text)] tracking-tight mt-2 font-mono">
                  {profile.completedLessons || 62} aulas
                </span>
              </div>

              <div className="p-4 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner flex flex-col justify-between">
                <span className="text-[11px] text-[var(--color-muted-text)] font-semibold">Dossiês Analisados</span>
                <span className="text-xl font-bold text-[var(--color-primary)] tracking-tight mt-2 font-mono">
                  {profile.dossiersCount || 48} itens
                </span>
              </div>

              <div className="p-4 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner flex flex-col justify-between">
                <span className="text-[11px] text-[var(--color-muted-text)] font-semibold">Insígnias Conquistadas</span>
                <span className="text-xl font-bold text-amber-600 dark:text-amber-400 tracking-tight mt-2 font-mono">
                  {profile.badgesCount || 12} distintivos
                </span>
              </div>

              <div className="p-4 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner flex flex-col justify-between">
                <span className="text-[11px] text-[var(--color-muted-text)] font-semibold">Retenção de Conteúdo</span>
                <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400 tracking-tight mt-2 font-mono">
                  88% (+18%)
                </span>
              </div>
            </div>

            {/* Quick Access Study Cards with Photographs & Responsive Gaps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
              {quickStudyCards.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => onNavigate('blank')}
                    className="bg-[var(--color-card)] border border-[var(--color-muted)] hover:border-[var(--color-primary)] sharp-corner transition-all cursor-pointer group flex flex-col overflow-hidden hover:shadow-md"
                  >
                    {/* Card Photo */}
                    <div className="relative w-full aspect-[16/9] sharp-corner overflow-hidden bg-[var(--color-muted-bg)]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-deep)]/80 via-transparent to-transparent flex items-end justify-between p-3">
                        <div className="w-8 h-8 bg-[var(--color-primary)] text-white sharp-corner flex items-center justify-center shadow-xs">
                          <IconComponent size={15} />
                        </div>
                        <span className="text-[10px] px-2 py-0.5 bg-[var(--color-card)]/90 backdrop-blur-xs text-[var(--color-primary)] font-bold sharp-corner border border-[var(--color-muted)]">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 flex flex-col flex-1 gap-1">
                      <h3 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[var(--color-muted-text)] leading-relaxed line-clamp-2 mt-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recent Materials & Certifications Dual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Materials */}
              <div className="p-5 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-[var(--color-muted)] pb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] flex items-center gap-2">
                    <FileText size={15} />
                    Documentos Pessoais Recentes
                  </h3>
                  <button
                    onClick={() => setActiveTab('studies')}
                    className="text-xs font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    Ver todos ({personalDossiers.length})
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {personalDossiers.slice(0, 3).map((doc) => (
                    <div
                      key={doc.id}
                      className="p-2.5 bg-[var(--color-muted-bg)] border border-[var(--color-muted)] sharp-corner flex items-center gap-3 text-xs group hover:border-[var(--color-primary)] transition-colors"
                    >
                      {/* Photo Thumbnail */}
                      <div className="w-16 h-12 sharp-corner overflow-hidden shrink-0 border border-[var(--color-muted)]">
                        <img
                          src={doc.image}
                          alt={doc.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold text-[var(--color-text)] truncate block">
                          {doc.title}
                        </span>
                        <span className="text-[10px] text-[var(--color-muted-text)]">
                          {doc.tag} · {doc.size} · {doc.date}
                        </span>
                      </div>
                      <button
                        onClick={() => onNavigate('blank')}
                        className="px-2.5 py-1.5 sharp-corner bg-[var(--color-card)] border border-[var(--color-muted)] hover:border-[var(--color-primary)] text-[var(--color-primary)] font-semibold shrink-0 cursor-pointer transition-colors"
                      >
                        Abrir
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Badges */}
              <div className="p-5 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-[var(--color-muted)] pb-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] flex items-center gap-2">
                    <Award size={15} />
                    Certificados & Insígnias de Excelência
                  </h3>
                  <span className="text-xs text-[var(--color-muted-text)] font-semibold">2 emitidos</span>
                </div>

                <div className="flex flex-col gap-2.5">
                  {certificates.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[var(--color-muted-bg)] border border-[var(--color-muted)] sharp-corner flex flex-col gap-1 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <strong className="font-semibold text-[var(--color-text)]">{cert.title}</strong>
                        <span className="text-[10px] px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono font-bold sharp-corner">
                          {cert.grade}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[var(--color-muted-text)]">
                        <span>Emitido em: {cert.issued}</span>
                        <span className="font-mono">{cert.code}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'studies' && (
          <motion.div
            key="studies"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Dossiers List with Photos & Responsive Desktop Gaps */}
            <div className="p-6 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-primary)] mb-4 flex items-center gap-2">
                <FileText size={16} />
                Dossiês & Transcrições Pessoais Salvas ({personalDossiers.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {personalDossiers.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 bg-[var(--color-muted-bg)] border border-[var(--color-muted)] hover:border-[var(--color-primary)] sharp-corner flex flex-col justify-between gap-3 text-xs transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      {/* Photo Thumbnail */}
                      <div className="w-20 h-16 sharp-corner overflow-hidden shrink-0 border border-[var(--color-muted)] bg-[var(--color-card)]">
                        <img
                          src={doc.image}
                          alt={doc.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)] truncate">
                            {doc.tag}
                          </span>
                          <span className="text-[10px] text-[var(--color-muted-text)] font-mono shrink-0">{doc.size}</span>
                        </div>
                        <h4 className="font-bold text-sm text-[var(--color-text)] mb-1 line-clamp-1">{doc.title}</h4>
                        <p className="text-[11px] text-[var(--color-muted-text)]">{doc.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-[var(--color-muted)]">
                      <button
                        onClick={() => onNavigate('blank')}
                        className="px-3 py-1.5 bg-[var(--color-primary)] text-white sharp-corner text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-[var(--color-primary-deep)] transition-colors"
                      >
                        {doc.type === 'audio' ? <Headphones size={13} /> : <DownloadCloud size={13} />}
                        <span>{doc.type === 'audio' ? 'Reproduzir Áudio' : 'Baixar Documento'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Notes List */}
            <div className="p-6 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-primary)] mb-4 flex items-center gap-2">
                <Edit3 size={16} />
                Caderno de Notas de Estudo & Campo
              </h3>
              <div className="flex flex-col gap-3">
                {personalNotes.map((note) => (
                  <div
                    key={note.id}
                    className="p-4 bg-[var(--color-muted-bg)] border border-[var(--color-muted)] sharp-corner flex flex-col gap-2 text-xs"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-[var(--color-text)]">{note.title}</h4>
                      <span className="text-[10px] text-[var(--color-muted-text)]">{note.date}</span>
                    </div>
                    <p className="text-xs text-[var(--color-muted-text)] leading-relaxed italic">
                      "{note.excerpt}"
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-[var(--color-muted)] text-[11px]">
                      <span className="text-[var(--color-primary)] font-medium">Curso: {note.course}</span>
                      <button
                        onClick={() => onNavigate('blank')}
                        className="text-[var(--color-primary)] hover:underline font-semibold"
                      >
                        Editar Anotação
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'notifications' && (
          <motion.div
            key="notifications"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="p-6 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner flex flex-col gap-4"
          >
            <div className="flex items-center justify-between border-b border-[var(--color-muted)] pb-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-primary)] flex items-center gap-2">
                  <Bell size={16} />
                  Transmissões & Notificações Ativas
                </h3>
                <p className="text-xs text-[var(--color-muted-text)] mt-1">
                  Atualizações prioritárias sobre novas masterclasses, relatórios de inteligência e avisos de evolução.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-[var(--color-muted-text)]">
                {profile.notifications.length} mensagens
              </span>
            </div>

            {profile.notifications.length === 0 ? (
              <div className="py-12 text-center text-xs text-[var(--color-muted-text)]">
                Você não possui nenhuma transmissão pendente no momento.
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {profile.notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-4 border sharp-corner flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs transition-colors ${
                      notif.isUrgent
                        ? 'bg-sky-50 dark:bg-sky-950/30 border-sky-300 dark:border-sky-800/60'
                        : 'bg-[var(--color-muted-bg)] border-[var(--color-muted)]'
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        {notif.isUrgent && (
                          <span className="px-1.5 py-0.5 bg-red-500 text-white text-[9px] font-bold uppercase tracking-wider sharp-corner">
                            Urgente
                          </span>
                        )}
                        <strong className="font-bold text-sm text-[var(--color-text)]">{notif.title}</strong>
                      </div>
                      <p className="text-xs text-[var(--color-muted-text)]">{notif.message}</p>
                      <span className="text-[10px] text-[var(--color-muted-text)]/80 font-mono">{notif.timestamp}</span>
                    </div>

                    {onMarkNotificationRead && (
                      <button
                        onClick={() => onMarkNotificationRead(notif.id)}
                        className="px-3 py-1.5 bg-[var(--color-card)] border border-[var(--color-muted)] hover:border-emerald-500 hover:text-emerald-600 sharp-corner text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer self-end sm:self-auto"
                      >
                        <CheckCircle2 size={13} className="text-emerald-500" />
                        <span>Marcar como lida</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'subscription' && (
          <motion.div
            key="subscription"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Plan Info */}
            <div className="p-6 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] flex items-center gap-1.5">
                    <ShieldCheck size={16} />
                    Plano Vigente
                  </span>
                  <span className="px-2.5 py-0.5 bg-emerald-500 text-white text-xs font-bold sharp-corner uppercase">
                    {profile.subscription.status === 'active' ? 'Ativo & Regular' : 'Pendente'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-1">
                  {profile.subscription.plan}
                </h3>
                <p className="text-xs text-[var(--color-muted-text)] mb-4">
                  Acesso ilimitado ao catálogo de cursos, masterclasses, dossiês de geopolítica e corpo docente.
                </p>

                <div className="p-3.5 bg-[var(--color-muted-bg)] border border-[var(--color-muted)] sharp-corner text-xs flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-muted-text)]">Data da Próxima Renovação:</span>
                    <strong className="text-[var(--color-text)]">{profile.subscription.renewalDate}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-muted-text)]">Forma de Pagamento:</span>
                    <strong className="text-[var(--color-text)]">Cartão de Crédito Corporativo (•••• 4092)</strong>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => onNavigate('blank')}
                  className="w-full py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-deep)] text-white text-xs font-bold sharp-corner transition-colors cursor-pointer text-center"
                >
                  Gerenciar Assinatura
                </button>
              </div>
            </div>

            {/* Plan Benefits */}
            <div className="p-6 bg-[var(--color-card)] border border-[var(--color-muted)] sharp-corner flex flex-col justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-primary)] mb-3 flex items-center gap-2">
                  <TrendingUp size={16} />
                  Privilégios Inclusos no seu Acesso
                </h3>

                <ul className="flex flex-col gap-2.5 text-xs text-[var(--color-text)]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>Acesso completo e irrestrito a todos os cursos e masterclasses estratégicas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>Dossiês quinzenais confidenciais e transcrições em alta resolução</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>Certificados verificados com registro digital de conclusão</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>Canal prioritário de transmissão de avisos e suporte pedagógico</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[var(--color-muted)] text-[11px] text-[var(--color-muted-text)]">
                Segurança com criptografia de ponta a ponta nas transmissões do perfil pessoal.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
