// ============================================
// STATS SCREEN TYPES
// ============================================

export interface StatsScreenProps {
  onNavigateTo?: (screen: 'growth' | 'stats' | 'garden') => void;
  onNavigateHome?: () => void;
}

// Growth Data
export interface GrowthData {
  totalDays: number;
  currentStreak: number;
  longestStreak: number;
  successRate: number; // 0-100
  treeStage: 1 | 2 | 3 | 4 | 5;
  nextMilestone: {
    days: number;
    progress: number; // 0-100
  };
}

// Achievement
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: number | 'special';
  unlocked: boolean;
  unlockedDate?: Date;
  progress?: number; // 0-100 for locked achievements
}

// Heatmap Entry
export interface HeatmapDay {
  date: Date;
  completionRate: number; // 0-100
  habitsCompleted: number;
  totalHabits: number;
  status: 'empty' | 'partial' | 'good' | 'perfect';
}

// Habit Performance
export interface HabitPerformance {
  habitId: string;
  habitName: string;
  emoji: string;
  successRate: number; // 0-100
  totalAttempts: number;
  successfulAttempts: number;
}

// Component Props
export interface GrowthTreeProps {
  stage: 1 | 2 | 3 | 4 | 5;
  totalDays: number;
  nextMilestone: {
    days: number;
    progress: number;
  };
}

export interface QuickStatsProps {
  totalDays: number;
  successRate: number;
  currentStreak: number;
}

export interface AchievementsGridProps {
  achievements: Achievement[];
  onAchievementPress?: (achievement: Achievement) => void;
}

export interface MonthHeatmapProps {
  months: HeatmapDay[][];
  onDayPress?: (day: HeatmapDay) => void;
}

export interface HabitPerformanceProps {
  habits: HabitPerformance[];
  onHabitPress?: (habit: HabitPerformance) => void;
}
