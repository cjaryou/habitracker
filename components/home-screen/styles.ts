import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
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

  // Days Calendar Styles
  daysContainer: {
    marginBottom: 24,
  },
  dayWrapper: {
    marginRight: 10,
  },
  dayBox: {
    backgroundColor: '#FFF8DC',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    gap: 6,
    borderWidth: 2.5,
    borderColor: 'transparent',
    minWidth: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  dayBoxToday: {
    borderColor: '#FFC947',
    backgroundColor: '#FFFAEC',
    shadowColor: '#FFC947',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  dayBoxCompleted: {
    backgroundColor: '#FFE8B3',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2C3E50',
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

  // Character Container Styles
  characterContainer: {
    height: 340,
    backgroundColor: 'transparent',
    borderRadius: 0,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    marginTop: 10,
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

  // Button Styles
  reviewButton: {
    backgroundColor: '#1A2734',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#1A2734',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  reviewButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // Bottom Navigation Styles
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#F5F5DC',
    borderTopWidth: 1.5,
    borderTopColor: '#D4C4A8',
    paddingHorizontal: 8,
    paddingVertical: 10,
    paddingBottom: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
    paddingVertical: 4,
  },
  navLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#5A4A3A',
    letterSpacing: 0.2,
  },
});
