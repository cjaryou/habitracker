import { ThemedText } from '@/components/themed-text';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { growthScreenStyles } from '../styles';
import { AddHabitButtonProps } from '../types';

export function AddHabitButton({ onPress }: AddHabitButtonProps) {
  return (
    <TouchableOpacity style={growthScreenStyles.addHabitButton} onPress={onPress}>
      <ThemedText style={growthScreenStyles.addHabitText}>+ Add New Habit</ThemedText>
    </TouchableOpacity>
  );
}
