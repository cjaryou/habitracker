// ============================================
// GROWTH SCREEN CONSTANTS - Daily Habit Manager
// ============================================

import { HabitCard } from './types';

export const GROWTH_TITLE = 'Growth';

// Design System - Colors
export const HABIT_COLORS = {
  // Status colors
  completed: '#66BB6A',      // Green
  inProgress: '#FFB74D',     // Orange
  pending: '#E0E0E0',        // Gray
  skipped: '#BDBDBD',        // Dark Gray

  // Card backgrounds
  cardWhite: '#FFFFFF',
  cardCompleted: '#E8F5E9',  // Light green
  cardInProgress: '#FFF3E0', // Light orange
  cardSkipped: '#F5F5F5',    // Light gray

  // Text
  textPrimary: '#2C2C2C',
  textSecondary: '#757575',
  textSuccess: '#388E3C',

  // Accent
  accentPrimary: '#6B9B6B',
  accentSecondary: '#8B7355',

  // Background
  background: '#F9F6F1',
};

// Design System - Typography
export const TYPOGRAPHY = {
  habitTitle: { fontSize: 16, fontWeight: '600' as const },
  habitStatus: { fontSize: 14, fontWeight: '400' as const },
  progressNumber: { fontSize: 20, fontWeight: '700' as const },
  sectionTitle: { fontSize: 14, fontWeight: '700' as const, textTransform: 'uppercase' as const },
};

// Design System - Spacing
export const SPACING = {
  cardPadding: 16,
  cardMargin: 12,
  sectionMargin: 20,
  buttonHeight: 44,
};

// Motivational Messages based on progress
export const MOTIVATIONAL_MESSAGES = {
  0: "Ready to start? You got this! 🌱",
  25: "Good beginning! Keep going! 💪",
  50: "Halfway there! 🎯",
  75: "Almost done! Finish strong! ⚡",
  100: "Perfect day! You're amazing! 🎉",
};

export function getMotivationalMessage(percentage: number): string {
  if (percentage === 0) return MOTIVATIONAL_MESSAGES[0];
  if (percentage <= 25) return MOTIVATIONAL_MESSAGES[25];
  if (percentage <= 50) return MOTIVATIONAL_MESSAGES[50];
  if (percentage <= 75) return MOTIVATIONAL_MESSAGES[75];
  return MOTIVATIONAL_MESSAGES[100];
}

// Time-based greeting
export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning!";
  if (hour < 18) return "Good afternoon!";
  return "Good evening!";
}

// Mock Data for Development
export const MOCK_HABITS: HabitCard[] = [
  {
    id: '1',
    name: 'Morning Meditation',
    emoji: '🧘',
    type: 'boolean',
    status: 'completed',
    completedAt: new Date('2025-10-18T07:30:00'),
    note: 'Great start to the day!',
  },
  {
    id: '2',
    name: 'Daily Exercise',
    emoji: '🏃',
    type: 'boolean',
    status: 'pending',
  },
  {
    id: '3',
    name: 'Read 10 Pages',
    emoji: '📚',
    type: 'count',
    status: 'in-progress',
    current: 5,
    goal: 10,
    unit: 'pages',
  },
  {
    id: '4',
    name: 'Drink 8 Glasses Water',
    emoji: '💧',
    type: 'count',
    status: 'in-progress',
    current: 4,
    goal: 8,
    unit: 'glasses',
  },
];
