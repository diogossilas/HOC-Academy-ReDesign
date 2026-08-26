export interface CardData {
  id: string;
  title: string;
  image: string;
  category?: string;
  tag?: string;
  duration?: string;
  description?: string;
  angle?: 'aereo' | 'retrato' | 'close' | 'superior';
  angleLabel?: string;
  isSpecial?: boolean;
}

export type ViewState = 'home' | 'explore' | 'bunker' | 'studio' | 'blank';

export interface UserProfile {
  id: string;
  name: string;
  title: string;
  avatar: string;
  level: number;
  currentXp: number;
  nextLevelXp: number;
  subscription: {
    plan: string;
    status: 'active' | 'expiring' | 'canceled';
    renewalDate: string;
  };
  notifications: NotificationItem[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  isUrgent?: boolean;
}

export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tag: string;
  ctaText: string;
  type?: 'standard' | 'list' | 'triangle' | 'metatron';
  itemsList?: string[];
  accentColor?: string;
  badgeBg?: string;
  badgeText?: string;
}

export interface ArchitectureStage {
  id: 'brief' | 'sketch' | 'studio' | 'modularization';
  name: string;
  stepNumber: string;
  title: string;
  description: string;
  responsibilities: string[];
  artifacts: string[];
  status: 'completed' | 'active' | 'future';
  principle: string;
}

export interface SystemModule {
  id: string;
  name: string;
  domain: string;
  responsibility: string;
  coupling: 'Baixo' | 'Médio' | 'Isolado';
  cohesion: 'Alta' | 'Muito Alta';
  files: string[];
  dependencies: string[];
  tags: string[];
}


