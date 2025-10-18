import { StyleSheet } from 'react-native';
import { COLORS } from './constants';

export const statsScreenStyles = StyleSheet.create({
  // Main Container
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100, // Space for bottom nav
  },

  // Section Spacing
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textSecondary,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // Growth Tree
  treeContainer: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  treeIcon: {
    fontSize: 80,
    marginBottom: 16,
  },
  treeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  treeProgress: {
    width: '100%',
    height: 8,
    backgroundColor: COLORS.heatmapEmpty,
    borderRadius: 4,
    marginTop: 12,
    marginBottom: 8,
    overflow: 'hidden',
  },
  treeProgressFill: {
    height: '100%',
    backgroundColor: COLORS.treeGreen,
    borderRadius: 4,
  },
  treeProgressText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },

  // Quick Stats
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statValue: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // Achievements
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  achievementCard: {
    width: '31%',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  achievementCardLocked: {
    backgroundColor: '#F5F5F5',
    opacity: 0.6,
  },
  achievementIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  achievementName: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 4,
  },
  achievementDate: {
    fontSize: 9,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  achievementProgress: {
    fontSize: 9,
    color: COLORS.textMuted,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  // Heatmap
  heatmapContainer: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  heatmapMonth: {
    marginBottom: 12,
  },
  heatmapMonthLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  heatmapDays: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  heatmapDay: {
    width: 8,
    height: 8,
    borderRadius: 2,
  },
  heatmapEmpty: {
    backgroundColor: COLORS.heatmapEmpty,
  },
  heatmapPartial: {
    backgroundColor: COLORS.heatmapPartial,
  },
  heatmapGood: {
    backgroundColor: COLORS.heatmapGood,
  },
  heatmapPerfect: {
    backgroundColor: COLORS.heatmapPerfect,
  },

  // Habit Performance
  performanceContainer: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  habitRow: {
    marginBottom: 16,
  },
  habitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  habitName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  habitEmoji: {
    fontSize: 16,
  },
  habitNameText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  habitPercentage: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  habitProgressBar: {
    height: 8,
    backgroundColor: COLORS.heatmapEmpty,
    borderRadius: 4,
    overflow: 'hidden',
  },
  habitProgressFill: {
    height: '100%',
    borderRadius: 4,
  },

  // Placeholder (for old design)
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B7355',
    letterSpacing: 0.3,
  },
});
