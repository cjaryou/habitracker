import { StyleSheet } from 'react-native';
import { HABIT_COLORS, SPACING, TYPOGRAPHY } from './constants';

export const growthScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HABIT_COLORS.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },

  // Header
  header: {
    paddingVertical: SPACING.sectionMargin,
  },
  dateText: {
    fontSize: 18,
    fontWeight: '700',
    color: HABIT_COLORS.textPrimary,
    marginBottom: 4,
  },
  greetingText: {
    fontSize: 16,
    fontWeight: '400',
    color: HABIT_COLORS.textSecondary,
  },

  // Section Title
  sectionTitle: {
    ...TYPOGRAPHY.sectionTitle,
    color: HABIT_COLORS.textSecondary,
    marginTop: SPACING.sectionMargin,
    marginBottom: SPACING.cardMargin,
  },

  // Habit Card
  habitCard: {
    backgroundColor: HABIT_COLORS.cardWhite,
    borderRadius: 16,
    padding: SPACING.cardPadding,
    marginBottom: SPACING.cardMargin,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  habitCardCompleted: {
    backgroundColor: HABIT_COLORS.cardCompleted,
  },
  habitCardInProgress: {
    backgroundColor: HABIT_COLORS.cardInProgress,
  },
  habitCardSkipped: {
    backgroundColor: HABIT_COLORS.cardSkipped,
  },
  habitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  habitEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  habitName: {
    ...TYPOGRAPHY.habitTitle,
    color: HABIT_COLORS.textPrimary,
    flex: 1,
  },
  habitStatus: {
    ...TYPOGRAPHY.habitStatus,
    color: HABIT_COLORS.textSecondary,
    marginBottom: 8,
  },
  habitNote: {
    ...TYPOGRAPHY.habitStatus,
    color: HABIT_COLORS.textSuccess,
    fontStyle: 'italic',
    marginTop: 4,
  },

  // Progress Bar (for count habits)
  progressContainer: {
    marginVertical: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: HABIT_COLORS.pending,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: HABIT_COLORS.completed,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: HABIT_COLORS.textSecondary,
    textAlign: 'center',
  },

  // Visual Tracker (for water/glasses)
  visualTracker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  trackerSquare: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginRight: 4,
  },
  trackerFilled: {
    backgroundColor: '#5DADE2',
  },
  trackerEmpty: {
    backgroundColor: HABIT_COLORS.pending,
  },
  trackerCount: {
    fontSize: 14,
    fontWeight: '600',
    color: HABIT_COLORS.textPrimary,
    marginLeft: 8,
  },

  // Buttons
  buttonRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  button: {
    height: SPACING.buttonHeight,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  buttonPrimary: {
    backgroundColor: HABIT_COLORS.accentPrimary,
    flex: 1,
  },
  buttonSecondary: {
    backgroundColor: HABIT_COLORS.pending,
    flex: 1,
  },
  buttonSmall: {
    height: 36,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  buttonTextSecondary: {
    color: HABIT_COLORS.textPrimary,
  },

  // Add Habit Button
  addHabitButton: {
    backgroundColor: HABIT_COLORS.cardWhite,
    borderRadius: 16,
    padding: SPACING.cardPadding,
    marginVertical: SPACING.cardMargin,
    borderWidth: 2,
    borderColor: HABIT_COLORS.pending,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addHabitText: {
    fontSize: 16,
    fontWeight: '600',
    color: HABIT_COLORS.accentPrimary,
  },

  // Progress Summary
  progressSummary: {
    backgroundColor: HABIT_COLORS.cardWhite,
    borderRadius: 16,
    padding: SPACING.cardPadding + 4,
    marginVertical: SPACING.sectionMargin,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    alignItems: 'center',
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: HABIT_COLORS.textPrimary,
    marginBottom: 12,
  },
  summaryEmojis: {
    fontSize: 32,
    marginBottom: 8,
  },
  summaryProgress: {
    fontSize: 24,
    fontWeight: '700',
    color: HABIT_COLORS.accentPrimary,
    marginBottom: 4,
  },
  summaryMessage: {
    fontSize: 14,
    color: HABIT_COLORS.textSecondary,
    marginBottom: 12,
  },
  summaryStreak: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  summaryStreakText: {
    fontSize: 16,
    fontWeight: '600',
    color: HABIT_COLORS.textPrimary,
    marginLeft: 4,
  },
  summaryProgressBar: {
    width: '100%',
    height: 12,
    backgroundColor: HABIT_COLORS.pending,
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: 12,
  },
  summaryProgressFill: {
    height: '100%',
    backgroundColor: HABIT_COLORS.completed,
    borderRadius: 6,
  },

  // Increment Buttons
  incrementRow: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 8,
  },
  incrementButton: {
    height: 32,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: HABIT_COLORS.accentPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 44,
  },
  incrementButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // Undo Button
  undoButton: {
    marginTop: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  undoButtonText: {
    fontSize: 14,
    color: HABIT_COLORS.textSecondary,
    textDecorationLine: 'underline',
  },

  // Empty State
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyStateEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyStateText: {
    fontSize: 16,
    color: HABIT_COLORS.textSecondary,
    textAlign: 'center',
  },
});
