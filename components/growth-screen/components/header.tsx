import { ThemedText } from '@/components/themed-text';
import React from 'react';
import { View } from 'react-native';
import { growthScreenStyles } from '../styles';
import { HeaderProps } from '../types';

export function Header({ date, userName, greeting }: HeaderProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const greetingMessage = userName ? `${greeting} ${userName}` : greeting;

  return (
    <View style={growthScreenStyles.header}>
      <ThemedText style={growthScreenStyles.dateText}>
        TODAY - {formatDate(date)}
      </ThemedText>
      <ThemedText style={growthScreenStyles.greetingText}>
        {greetingMessage} Time to grow 🌱
      </ThemedText>
    </View>
  );
}
