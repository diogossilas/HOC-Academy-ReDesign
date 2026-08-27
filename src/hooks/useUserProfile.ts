import { useState } from 'react';
import { UserProfile } from '../types';

const INITIAL_USER: UserProfile = {
  id: 'usr-042',
  name: 'Alexandre Costa',
  title: 'Explorador Veterano & Analista Estratégico',
  email: 'alexandre.costa@hoc.academy',
  memberCode: 'HOC-ELEM-042',
  joinedDate: 'Março de 2024',
  bio: 'Pesquisador de relações internacionais, história militar e teoria de tomada de decisão estratégica.',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
  level: 42,
  currentXp: 14250,
  nextLevelXp: 20000,
  readinessScore: 'Alpha-94%',
  studyHours: '184.5h',
  completedLessons: 62,
  dossiersCount: 48,
  badgesCount: 12,
  subscription: {
    plan: 'Premium Master Pass',
    status: 'active',
    renewalDate: '14 de Outubro, 2026',
  },
  notifications: [
    {
      id: 'notif-1',
      title: 'Aviso: Transmissão #104',
      message: 'Novo módulo de Geopolítica & Análise Estratégica liberado em seu Perfil Pessoal.',
      timestamp: 'Há 12 minutos',
      isUrgent: true,
    },
    {
      id: 'notif-2',
      title: 'Relatório Semanal de Evolução',
      message: 'Seu índice de retenção aumentou 18% no módulo de Liderança.',
      timestamp: 'Ontem',
      isUrgent: false,
    },
    {
      id: 'notif-3',
      title: 'Novo Certificado Disponível',
      message: 'Parabéns pela conclusão da trilha de Inteligência Competitiva.',
      timestamp: 'Há 2 dias',
      isUrgent: false,
    },
  ],
};

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile>(INITIAL_USER);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const xpPercentage = Math.round((profile.currentXp / profile.nextLevelXp) * 100);

  const addXp = (amount: number) => {
    setProfile((prev) => {
      const newXp = prev.currentXp + amount;
      if (newXp >= prev.nextLevelXp) {
        return {
          ...prev,
          level: prev.level + 1,
          currentXp: newXp - prev.nextLevelXp,
          nextLevelXp: Math.round(prev.nextLevelXp * 1.25),
        };
      }
      return {
        ...prev,
        currentXp: newXp,
      };
    });
  };

  const markNotificationRead = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      notifications: prev.notifications.filter((n) => n.id !== id),
    }));
  };

  return {
    profile,
    xpPercentage,
    isDropdownOpen,
    setIsDropdownOpen,
    toggleDropdown: () => setIsDropdownOpen((prev) => !prev),
    closeDropdown: () => setIsDropdownOpen(false),
    addXp,
    markNotificationRead,
  };
}
