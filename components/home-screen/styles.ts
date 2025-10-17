import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
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
    marginBottom: 20,
  },
  greeting: {
    flex: 1,
  },
  greetingText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },

  // Timer & Streak Badge Styles
  timerBox: {
    backgroundColor: '#FFFACD',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  timerText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  streakBadge: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    minWidth: 50,
    alignItems: 'center',
  },
  streakText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },

  // Days Calendar Styles
  daysContainer: {
    marginBottom: 20,
  },
  dayWrapper: {
    marginRight: 12,
  },
  dayBox: {
    backgroundColor: '#FFF8DC',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    gap: 4,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  dayBoxToday: {
    borderColor: '#FFD700',
    backgroundColor: '#FFFACD',
  },
  dayBoxCompleted: {
    backgroundColor: '#FFEAA7',
  },
  dayText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#333',
  },
  dayEmoji: {
    fontSize: 20,
  },

  // Tags Styles
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#2C3E50',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tagRight: {
    marginLeft: 'auto',
  },
  tagText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
  },

  // Character Container Styles
  characterContainer: {
    height: 280,
    backgroundColor: '#FFFACD',
    borderRadius: 16,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFE4B5',
  },
  characterPlaceholder: {
    alignItems: 'center',
    gap: 12,
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
    fontStyle: 'italic',
  },

  // Button Styles
  reviewButton: {
    backgroundColor: '#2C3E50',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 80,
  },
  reviewButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },

  // Bottom Navigation Styles
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#F5F5DC',
    borderTopWidth: 1,
    borderTopColor: '#E0D5B7',
    paddingHorizontal: 12,
    paddingVertical: 8,
    paddingBottom: 16,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  navIcon: {
    fontSize: 24,
  },
  navLabel: {
    fontSize: 11,
    color: '#666',
  },
});
