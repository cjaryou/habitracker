import { ThemedText } from '@/components/themed-text';
import { BottomNavigation } from '@/components/home-screen/bottom-navigation';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PLACEHOLDER_TEXT } from './constants';
import { statsScreenStyles } from './styles';
import { StatsScreenProps } from './types';

/**
 * Stats Screen - User Statistics
 * Displays user's habit tracking statistics, charts, and analytics
 */
export function StatsScreen({ onNavigateTo, onNavigateHome }: StatsScreenProps) {
  return (
    <SafeAreaView style={statsScreenStyles.container} edges={['top', 'left', 'right']}>
      {/* Main Content Area */}
      <View style={statsScreenStyles.centerContent}>
        <ThemedText style={statsScreenStyles.placeholderText}>
          {PLACEHOLDER_TEXT}
        </ThemedText>
      </View>

      {/* Bottom Navigation */}
      <BottomNavigation onNavigate={onNavigateTo} onNavigateHome={onNavigateHome} activeScreen="fossils" />
    </SafeAreaView>
  );
}

export default StatsScreen;
