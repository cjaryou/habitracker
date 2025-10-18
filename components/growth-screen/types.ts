// ============================================
// GROWTH SCREEN TYPES - Daily Habit Manager
// ============================================

// Main Screen Props
export interface GrowthScreenProps {
  onNavigateTo: (screen: 'growth' | 'stats' | 'garden') => void;
  onNavigateHome: () => void;
}

// Habit Types
export type HabitType = 'boolean' | 'count' | 'duration';
export type HabitStatus = 'pending' | 'in-progress' | 'completed' | 'skipped';

// Habit Card
export interface HabitCard {
  id: string;
  name: string;
  emoji: string;
  type: HabitType;
  status: HabitStatus;

  // For count/duration types
  current?: number;
  goal?: number;
  unit?: string; // "pages", "glasses", "minutes", "reps"

  // Completion info
  completedAt?: Date;
  note?: string;
}

// Progress Summary
export interface ProgressSummary {
  completedToday: number;
  totalToday: number;
  percentage: number;
  currentStreak: number;
  motivationalMessage: string;
}

// Component Props
export interface HeaderProps {
  date: Date;
  userName?: string;
  greeting: string;
}

export interface HabitCardProps {
  habit: HabitCard;
  onUpdate: (id: string, updates: Partial<HabitCard>) => void;
}

export interface ProgressSummaryProps {
  summary: ProgressSummary;
}

export interface AddHabitButtonProps {
  onPress: () => void;
}
