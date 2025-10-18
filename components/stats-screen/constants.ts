// ============================================
// STATS SCREEN CONSTANTS
// ============================================

import { Achievement, GrowthData, HabitPerformance, HeatmapDay } from './types';

export const STATS_TITLE = 'Statistics';
export const PLACEHOLDER_TEXT = 'This page will be updated';

// Tree Stage Thresholds
export const TREE_STAGES = {
  SEEDLING: { min: 0, max: 14, icon: '🌱', name: 'Seedling' },
  SMALL_PLANT: { min: 15, max: 30, icon: '🌿', name: 'Small Plant' },
  YOUNG_TREE: { min: 31, max: 60, icon: '🌳', name: 'Young Tree' },
  MATURE_TREE: { min: 61, max: 90, icon: '🌳🌳', name: 'Mature Tree' },
  ANCIENT_TREE: { min: 91, max: Infinity, icon: '🌳🌳🌳', name: 'Ancient Tree' },
} as const;

// Achievement Definitions
export const ACHIEVEMENT_DEFINITIONS: Omit<Achievement, 'unlocked' | 'unlockedDate' | 'progress'>[] = [
  {
    id: '7day',
    name: '7-Day Warrior',
    description: 'Complete habits for 7 days in a row',
    icon: '🎖️',
    requirement: 7,
  },
  {
    id: '14day',
    name: 'Week Master',
    description: 'Complete habits for 14 days in a row',
    icon: '🏅',
    requirement: 14,
  },
  {
    id: '30day',
    name: 'Month Legend',
    description: 'Complete habits for 30 days in a row',
    icon: '🏆',
    requirement: 30,
  },
  {
    id: '60day',
    name: 'Iron Will',
    description: 'Complete habits for 60 days in a row',
    icon: '⭐',
    requirement: 60,
  },
  {
    id: '100day',
    name: 'Century Club',
    description: 'Complete habits for 100 days in a row',
    icon: '💎',
    requirement: 100,
  },
  {
    id: 'perfect',
    name: 'Perfect Week',
    description: 'Complete all habits for 7 days',
    icon: '✨',
    requirement: 'special',
  },
];

// Color Palette
export const COLORS = {
  // Tree & Growth
  treeGreen: '#66BB6A',
  leafGreen: '#81C784',
  darkGreen: '#388E3C',

  // Stats
  statBackground: '#FFFFFF',
  statBorder: '#E0E0E0',

  // Heatmap
  heatmapEmpty: '#E0E0E0',
  heatmapPartial: '#FFE082',
  heatmapGood: '#A5D6A7',
  heatmapPerfect: '#66BB6A',

  // Achievements
  achievementGold: '#FFD54F',
  achievementSilver: '#BDBDBD',
  achievementLocked: '#E0E0E0',

  // Performance
  performanceExcellent: '#66BB6A',
  performanceGood: '#FFB74D',
  performanceFair: '#FF9800',
  performancePoor: '#EF5350',

  // Background
  background: '#F9F6F1',
  cardBackground: '#FFFFFF',

  // Text
  textPrimary: '#2C2C2C',
  textSecondary: '#757575',
  textMuted: '#9E9E9E',
};

// Mock Data for Development
export const MOCK_GROWTH_DATA: GrowthData = {
  totalDays: 45,
  currentStreak: 14,
  longestStreak: 28,
  successRate: 89,
  treeStage: 3,
  nextMilestone: {
    days: 60,
    progress: 75,
  },
};

export const MOCK_ACHIEVEMENTS: Achievement[] = [
  {
    id: '7day',
    name: '7-Day Warrior',
    description: 'Complete habits for 7 days in a row',
    icon: '🎖️',
    requirement: 7,
    unlocked: true,
    unlockedDate: new Date('2025-10-08'),
  },
  {
    id: '14day',
    name: 'Week Master',
    description: 'Complete habits for 14 days in a row',
    icon: '🏅',
    requirement: 14,
    unlocked: true,
    unlockedDate: new Date('2025-10-15'),
  },
  {
    id: '30day',
    name: 'Month Legend',
    description: 'Complete habits for 30 days in a row',
    icon: '🏆',
    requirement: 30,
    unlocked: false,
    progress: 47, // 14/30 = 47%
  },
  {
    id: '60day',
    name: 'Iron Will',
    description: 'Complete habits for 60 days in a row',
    icon: '⭐',
    requirement: 60,
    unlocked: false,
    progress: 23, // 14/60 = 23%
  },
  {
    id: '100day',
    name: 'Century Club',
    description: 'Complete habits for 100 days in a row',
    icon: '💎',
    requirement: 100,
    unlocked: false,
    progress: 14, // 14/100 = 14%
  },
  {
    id: 'perfect',
    name: 'Perfect Week',
    description: 'Complete all habits for 7 days',
    icon: '✨',
    requirement: 'special',
    unlocked: true,
    unlockedDate: new Date('2025-10-12'),
  },
];

export const MOCK_HABIT_PERFORMANCE: HabitPerformance[] = [
  {
    habitId: '1',
    habitName: 'Morning Meditation',
    emoji: '🧘',
    successRate: 95,
    totalAttempts: 45,
    successfulAttempts: 43,
  },
  {
    habitId: '2',
    habitName: 'Daily Exercise',
    emoji: '🏃',
    successRate: 87,
    totalAttempts: 45,
    successfulAttempts: 39,
  },
  {
    habitId: '3',
    habitName: 'Read 10 Pages',
    emoji: '📚',
    successRate: 65,
    totalAttempts: 45,
    successfulAttempts: 29,
  },
  {
    habitId: '4',
    habitName: 'Drink Water',
    emoji: '💧',
    successRate: 72,
    totalAttempts: 45,
    successfulAttempts: 32,
  },
];

// Generate mock heatmap data (last 3 months)
const generateMockHeatmap = (): HeatmapDay[][] => {
  const months: HeatmapDay[][] = [];
  const today = new Date(2025, 9, 18); // October 18, 2025

  // Generate 3 months
  for (let m = 2; m >= 0; m--) {
    const month: HeatmapDay[] = [];
    const currentMonth = new Date(today.getFullYear(), today.getMonth() - m, 1);
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d);

      // Don't show future dates
      if (date > today) break;

      // Random completion rate for demo
      const completionRate = Math.random() > 0.2 ? Math.floor(Math.random() * 100) : 0;
      const habitsCompleted = Math.floor((completionRate / 100) * 4);

      let status: 'empty' | 'partial' | 'good' | 'perfect';
      if (completionRate === 0) status = 'empty';
      else if (completionRate < 50) status = 'partial';
      else if (completionRate < 100) status = 'good';
      else status = 'perfect';

      month.push({
        date,
        completionRate,
        habitsCompleted,
        totalHabits: 4,
        status,
      });
    }

    months.push(month);
  }

  return months;
};

export const MOCK_HEATMAP_DATA = generateMockHeatmap();
