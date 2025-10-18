import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants';
import { statsScreenStyles as styles } from '../styles';
import { HabitPerformanceProps } from '../types';

export function HabitPerformance({ habits, onHabitPress }: HabitPerformanceProps) {
  const getPerformanceColor = (rate: number): string => {
    if (rate >= 90) return COLORS.performanceExcellent;
    if (rate >= 70) return COLORS.performanceGood;
    if (rate >= 50) return COLORS.performanceFair;
    return COLORS.performancePoor;
  };

  // Sort habits by success rate (highest first)
  const sortedHabits = [...habits].sort((a, b) => b.successRate - a.successRate);

  return (
    <View style={styles.performanceContainer}>
      {sortedHabits.map((habit) => (
        <TouchableOpacity
          key={habit.habitId}
          style={styles.habitRow}
          onPress={() => onHabitPress?.(habit)}
          activeOpacity={0.7}
        >
          {/* Header: Name and Percentage */}
          <View style={styles.habitHeader}>
            <View style={styles.habitName}>
              <Text style={styles.habitEmoji}>{habit.emoji}</Text>
              <Text style={styles.habitNameText}>{habit.habitName}</Text>
            </View>
            <Text style={styles.habitPercentage}>{habit.successRate}%</Text>
          </View>

          {/* Progress Bar */}
          <View style={styles.habitProgressBar}>
            <View
              style={[
                styles.habitProgressFill,
                {
                  width: `${habit.successRate}%`,
                  backgroundColor: getPerformanceColor(habit.successRate),
                },
              ]}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
