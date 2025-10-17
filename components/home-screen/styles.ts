import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  // Container Styles - Softer background
  container: {
    flex: 1,
    backgroundColor: '#F9F6F1',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  // NEW: Compact Header - Softer colors
  compactHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 12,
    marginTop: 12,
    borderRadius: 20,
    shadowColor: '#C9B8A8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 2,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  smallAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8D5C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallAvatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#8B6F5C',
  },
  compactName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#6B5548',
  },
  compactLevel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#A89080',
  },
  compactStats: {
    flexDirection: 'row',
    gap: 8,
  },
  miniStatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFF5F0',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
  },
  miniStatText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#8B6F5C',
  },

  // NEW: Inline Week Calendar
  inlineWeek: {
    paddingVertical: 12,
    paddingHorizontal: 4,
  },

  // NEW: Flex Character Area - Takes remaining space
  flexCharacterArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },

  // NEW: Bottom Action Area - Fixed at bottom above nav
  bottomActionArea: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 12,
  },
  compactProgress: {
    alignItems: 'center',
    gap: 6,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#E89A6F',
    paddingVertical: 15,
    borderRadius: 20,
    shadowColor: '#E89A6F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4A5568',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
  },
  greeting: {
    flex: 1,
    marginLeft: 4,
  },
  greetingText: {
    fontSize: 13,
    color: '#8B7355',
    marginBottom: 2,
  },
  username: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2C3E50',
    letterSpacing: 0.3,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  // Timer & Streak Badge Styles
  timerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0E5D8',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0D5C7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  timerText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#5A4A3A',
    letterSpacing: 0.2,
  },
  streakBadge: {
    flexDirection: 'row',
    backgroundColor: '#FFD93D',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 16,
    minWidth: 48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FFD93D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  streakText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
  },

  // Days Calendar Styles - Cute & Soft
  daysContainer: {
    marginBottom: 0,
  },
  dayWrapper: {
    marginRight: 8,
  },
  dayBox: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: 'center',
    gap: 6,
    borderWidth: 2,
    borderColor: 'transparent',
    minWidth: 48,
    shadowColor: '#D4C4B4',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  dayBoxToday: {
    borderColor: '#F4C7A3',
    backgroundColor: '#FFF9F5',
    shadowColor: '#F4C7A3',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  dayBoxCompleted: {
    backgroundColor: '#FFF0E5',
    borderColor: '#FFD4B0',
  },
  dayText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#8B6F5C',
    letterSpacing: 0.5,
  },

  // Tags Styles
  tagsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 32,
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#1A2332',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  tagRight: {
    marginLeft: 'auto',
  },
  tagText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.3,
  },

  // Stats Cards (NEW - Unique design)
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0E5D8',
  },
  statCardWide: {
    flex: 1.2,
  },
  statValue: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2C3E50',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#8B7355',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // Character Card (NEW - Integrated design)
  characterCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#FFE8B3',
  },
  characterCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  characterName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A2332',
    letterSpacing: 0.3,
  },
  levelBadge: {
    backgroundColor: '#FFD93D',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
  },
  levelBadgeText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A2332',
  },
  progressBarContainer: {
    marginTop: 16,
  },
  progressBar: {
    height: 6,
    width: '100%',
    backgroundColor: '#F5EFE8',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#E89A6F',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 10,
    color: '#A89080',
    textAlign: 'center',
    fontWeight: '600',
  },

  // Weekly Section (NEW)
  weeklySection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 12,
    letterSpacing: 0.3,
  },

  // Character Container Styles - Flexible for no scroll
  characterContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    minHeight: 200,
  },
  characterPlaceholder: {
    alignItems: 'center',
    gap: 12,
    opacity: 0.3,
  },
  placeholderText: {
    fontSize: 14,
    color: '#A0826D',
    fontStyle: 'italic',
    fontWeight: '500',
  },

  // Button Styles (Updated - More prominent)
  reviewButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 2,
    borderColor: '#FF8C61',
  },
  reviewButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },

  // Bottom Navigation Styles - Soft & Rounded
  bottomNav: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 12,
    paddingTop: 16,
    paddingBottom: 8,
    shadowColor: '#C9B8A8',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
    borderTopWidth: 1,
    borderTopColor: '#F5EFE8',
  },
  navItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  centerGroup: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F9F3ED',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#E8DDD0',
  },
  navItem: {
    alignItems: 'center',
    gap: 5,
    paddingVertical: 4,
    paddingHorizontal: 12,
    minWidth: 70,
  },
  navItemActive: {
    transform: [{ scale: 1.05 }],
  },
  navIconWrapper: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#8B6F5C',
    letterSpacing: 0.3,
  },
  navLabelCenter: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A89080',
    letterSpacing: 0.3,
  },
  navLabelActive: {
    color: '#E89A6F',
    fontWeight: '800',
  },
});
