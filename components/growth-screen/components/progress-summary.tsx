import { ThemedText } from '@/components/themed-text';
import React from 'react';
import { Text, View } from 'react-native';
import { growthScreenStyles } from '../styles';
import { ProgressSummaryProps } from '../types';

export function ProgressSummary({ summary }: ProgressSummaryProps) {
  const { completedToday, totalToday, percentage, currentStreak, motivationalMessage } = summary;

  // Emoji based on progress
  const getProgressEmojis = (percentage: number): string => {
    if (percentage === 100) return '🌿🌿🌿';
    if (percentage >= 75) return '🌿🌿';
    if (percentage >= 50) return '🌿';
    if (percentage >= 25) return '🌱';
    return '🌱';
  };

  return (
    <View style={growthScreenStyles.progressSummary}>
      <ThemedText style={growthScreenStyles.summaryTitle}>YOUR PROGRESS TODAY</ThemedText>

      <Text style={growthScreenStyles.summaryEmojis}>{getProgressEmojis(percentage)}</Text>

      <ThemedText style={growthScreenStyles.summaryProgress}>
        {completedToday}/{totalToday} habits done!
      </ThemedText>

      <ThemedText style={growthScreenStyles.summaryMessage}>{motivationalMessage}</ThemedText>

      <View style={growthScreenStyles.summaryStreak}>
        <Text style={{ fontSize: 20 }}>🔥</Text>
        <ThemedText style={growthScreenStyles.summaryStreakText}>{currentStreak} day streak</ThemedText>
      </View>

      <View style={growthScreenStyles.summaryProgressBar}>
        <View style={[growthScreenStyles.summaryProgressFill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
}
