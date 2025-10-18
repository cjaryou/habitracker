import React from 'react';
import { Text, View } from 'react-native';
import { statsScreenStyles as styles } from '../styles';
import { QuickStatsProps } from '../types';

export function QuickStats({ totalDays, successRate, currentStreak }: QuickStatsProps) {
  return (
    <View style={styles.statsContainer}>
      {/* Total Days */}
      <View style={styles.statBox}>
        <Text style={styles.statValue}>{totalDays}</Text>
        <Text style={styles.statLabel}>Days</Text>
      </View>

      {/* Success Rate */}
      <View style={styles.statBox}>
        <Text style={styles.statValue}>{successRate}%</Text>
        <Text style={styles.statLabel}>Success</Text>
      </View>

      {/* Current Streak */}
      <View style={styles.statBox}>
        <Text style={styles.statValue}>{currentStreak}</Text>
        <Text style={styles.statLabel}>Streak</Text>
      </View>
    </View>
  );
}
