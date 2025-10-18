import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { statsScreenStyles as styles } from '../styles';
import { AchievementsGridProps } from '../types';

export function AchievementsGrid({ achievements, onAchievementPress }: AchievementsGridProps) {
  const formatDate = (date?: Date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <View style={styles.achievementsGrid}>
      {achievements.map((achievement) => (
        <TouchableOpacity
          key={achievement.id}
          style={[styles.achievementCard, !achievement.unlocked && styles.achievementCardLocked]}
          onPress={() => onAchievementPress?.(achievement)}
          activeOpacity={0.7}
        >
          {/* Icon */}
          <Text style={styles.achievementIcon}>{achievement.unlocked ? achievement.icon : '◯'}</Text>

          {/* Name */}
          <Text style={styles.achievementName} numberOfLines={2}>
            {achievement.name}
          </Text>

          {/* Date or Progress */}
          {achievement.unlocked ? (
            <Text style={styles.achievementDate}>{formatDate(achievement.unlockedDate)}</Text>
          ) : (
            <Text style={styles.achievementProgress}>
              {achievement.progress !== undefined ? `${achievement.progress}% there` : 'Locked'}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}
