import { motion } from 'motion/react';
import { UserProfile } from '../../types';
import { Bell, Sparkles, ShieldCheck, CheckCircle2, User, ArrowRight } from 'lucide-react';

interface ProfileDropdownProps {
  profile: UserProfile;
  xpPercentage: number;
  onClose: () => void;
  onOpenFullProfile?: () => void;
  onMarkRead?: (id: string) => void;
  onAddXpBonus?: () => void;
}

export default function ProfileDropdown({
  profile,
  xpPercentage,
  onClose: _onClose,
  onOpenFullProfile,
  onMarkRead,
  onAddXpBonus,
}: ProfileDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.18 }}
      className="absolute top-14 right-0 w-80 sm:w-96 bg-[var(--color-card)] backdrop-blur-xl sharp-corner p-4 shadow-xl z-50 border border-[var(--color-muted)]"
      aria-label="Painel de Informações Pessoais"
    >
      {/* Header Profile - Clicking avatar or name opens full Profile */}
      <div
        onClick={onOpenFullProfile}
        className="flex items-center gap-3 mb-4 p-2 bg-[var(--color-muted-bg)] border border-transparent hover:border-[var(--color-primary)] sharp-corner transition-colors cursor-pointer group"
      >
        <div className="relative">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-12 h-12 rounded-full border-2 border-[var(--color-primary)] object-cover shadow-xs group-hover:scale-105 transition-transform"
          />
          <div className="absolute -bottom-1 -right-1 bg-[var(--color-primary)] text-white text-[10px] font-bold px-1 sharp-corner border border-[var(--color-card)]">
            {profile.level}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors truncate">
            {profile.name}
          </h4>
          <p className="text-xs text-[var(--color-muted-text)] truncate">{profile.title}</p>
          <span className="text-[10px] text-[var(--color-primary)] font-semibold flex items-center gap-1 mt-0.5">
            <User size={11} /> Ver Perfil Pessoal Completo <ArrowRight size={10} />
          </span>
        </div>
      </div>

      {/* Button To Open Full Profile */}
      <button
        onClick={onOpenFullProfile}
        className="w-full mb-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-deep)] text-white text-xs font-bold sharp-corner transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
      >
        <User size={13} />
        <span>Abrir Página de Perfil Pessoal</span>
      </button>

      {/* Experience Bar */}
      <div className="space-y-1.5 mb-4 p-3 bg-[var(--color-muted-bg)] sharp-corner border border-[var(--color-muted)]">
        <div className="flex justify-between items-center text-xs font-medium">
          <span className="text-[var(--color-muted-text)]">
            XP: {profile.currentXp.toLocaleString()} / {profile.nextLevelXp.toLocaleString()}
          </span>
          <span className="text-[var(--color-primary)] font-bold font-mono">{xpPercentage}%</span>
        </div>
        <div className="h-2 w-full bg-[var(--color-muted)] sharp-corner overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${xpPercentage}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-emerald-500 h-full"
          />
        </div>
        {onAddXpBonus && (
          <button
            onClick={onAddXpBonus}
            className="mt-2 text-xs text-[var(--color-primary)] hover:underline flex items-center gap-1 font-semibold transition-colors cursor-pointer"
          >
            <Sparkles size={12} className="text-amber-500" /> Resgatar +250 XP diário
          </button>
        )}
      </div>

      {/* Subscription Info */}
      <div className="bg-[var(--color-muted-bg)] border border-[var(--color-muted)] sharp-corner p-3 mb-4">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-[var(--color-primary)]" />
            <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
              {profile.subscription.plan}
            </span>
          </div>
          <span className="text-[10px] bg-[var(--color-primary)] text-white px-2 py-0.5 sharp-corner font-bold uppercase tracking-wider">
            {profile.subscription.status === 'active' ? 'Ativo' : 'Pendente'}
          </span>
        </div>
        <p className="text-[11px] text-[var(--color-muted-text)]">Renovação: {profile.subscription.renewalDate}</p>
      </div>

      {/* Notifications */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] flex items-center gap-1.5">
            <Bell size={13} />
            Transmissões & Notificações
          </h4>
          <span className="text-[11px] text-[var(--color-muted-text)]">{profile.notifications.length} ativas</span>
        </div>
        <ul className="flex flex-col gap-2 max-h-40 overflow-y-auto pr-1">
          {profile.notifications.length === 0 ? (
            <li className="text-xs text-[var(--color-muted-text)] py-2 text-center">Nenhuma nova notificação.</li>
          ) : (
            profile.notifications.map((notif) => (
              <li
                key={notif.id}
                className={`p-2.5 sharp-corner border text-left transition-colors ${
                  notif.isUrgent
                    ? 'bg-sky-50 dark:bg-sky-950/30 border-sky-300 dark:border-sky-800/60'
                    : 'bg-[var(--color-muted-bg)] border-[var(--color-muted)]'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <strong className="block text-[var(--color-text)] text-xs font-semibold">{notif.title}</strong>
                  {onMarkRead && (
                    <button
                      onClick={() => onMarkRead(notif.id)}
                      className="text-[var(--color-muted-text)] hover:text-[var(--color-primary)]"
                      title="Marcar como lida"
                    >
                      <CheckCircle2 size={13} />
                    </button>
                  )}
                </div>
                <span className="text-[11px] text-[var(--color-muted-text)] leading-snug block mt-1">
                  {notif.message}
                </span>
                <span className="text-[10px] text-[var(--color-muted-text)]/70 block mt-1 font-mono">{notif.timestamp}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </motion.div>
  );
}
