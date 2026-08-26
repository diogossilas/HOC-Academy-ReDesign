import { motion } from 'motion/react';
import { UserProfile } from '../../types';
import { Bell, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ProfileDropdownProps {
  profile: UserProfile;
  xpPercentage: number;
  onClose: () => void;
  onMarkRead?: (id: string) => void;
  onAddXpBonus?: () => void;
}

export default function ProfileDropdown({
  profile,
  xpPercentage,
  onClose,
  onMarkRead,
  onAddXpBonus,
}: ProfileDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="absolute top-14 right-0 w-80 sm:w-96 bg-[#0a0a0a]/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl z-50 border border-white/10"
      aria-label="Painel de Informações Pessoais"
    >
      {/* Header Profile */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-12 h-12 rounded-full border-2 border-sky-400 object-cover shadow-[0_0_15px_rgba(56,189,248,0.3)]"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-sky-400 rounded-full border-2 border-[#050505] flex items-center justify-center text-[10px] font-bold text-black">
            {profile.level}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-sm text-white truncate readable">{profile.name}</h4>
          <p className="text-[10px] text-white/50 uppercase tracking-widest readable">{profile.title}</p>
        </div>
      </div>

      {/* Experience Bar */}
      <div className="space-y-1.5 mb-4 p-3 bg-white/5 rounded-xl border border-white/5">
        <div className="flex justify-between items-center text-[11px] font-medium readable">
          <span className="text-white/70">
            XP: {profile.currentXp.toLocaleString()} / {profile.nextLevelXp.toLocaleString()}
          </span>
          <span className="text-sky-400 font-bold">{xpPercentage}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${xpPercentage}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-sky-400 h-full rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]"
          />
        </div>
        {onAddXpBonus && (
          <button
            onClick={onAddXpBonus}
            className="mt-2 text-[10px] text-sky-400 hover:text-sky-300 flex items-center gap-1 font-semibold transition-colors"
          >
            <Sparkles size={12} /> Reivindicar +250 XP diário
          </button>
        )}
      </div>

      {/* Subscription Info */}
      <div className="bg-sky-400/5 border border-sky-400/20 rounded-xl p-3 mb-4">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-sky-400" />
            <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider readable">
              {profile.subscription.plan}
            </span>
          </div>
          <span className="text-[9px] bg-sky-400 text-black px-2 py-0.5 rounded-full font-bold uppercase tracking-wider readable">
            {profile.subscription.status === 'active' ? 'Ativo' : 'Pendente'}
          </span>
        </div>
        <p className="text-[10px] text-white/60 readable">Renovação: {profile.subscription.renewalDate}</p>
      </div>

      {/* Notifications */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-sky-400 flex items-center gap-1.5 readable">
            <Bell size={12} />
            Transmissões do Bunker
          </h4>
          <span className="text-[10px] text-white/40">{profile.notifications.length} ativas</span>
        </div>
        <ul className="flex flex-col gap-2 max-h-44 overflow-y-auto custom-scrollbar pr-1">
          {profile.notifications.length === 0 ? (
            <li className="text-xs text-white/40 py-2 text-center">Nenhuma nova notificação.</li>
          ) : (
            profile.notifications.map((notif) => (
              <li
                key={notif.id}
                className={`p-2.5 bg-white/5 rounded-lg border-l-2 text-left transition-colors ${
                  notif.isUrgent ? 'border-sky-400 hover:bg-sky-500/10' : 'border-white/20 hover:bg-white/10'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <strong className="block text-white text-[11px] font-semibold readable">{notif.title}</strong>
                  {onMarkRead && (
                    <button
                      onClick={() => onMarkRead(notif.id)}
                      className="text-white/40 hover:text-sky-400"
                      title="Marcar como lida"
                    >
                      <CheckCircle2 size={12} />
                    </button>
                  )}
                </div>
                <span className="text-[10px] text-white/60 leading-snug block mt-1 readable">
                  {notif.message}
                </span>
                <span className="text-[9px] text-white/30 block mt-1">{notif.timestamp}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </motion.div>
  );
}
