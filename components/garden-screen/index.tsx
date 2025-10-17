import { ThemedText } from '@/components/themed-text';
import { BottomNavigation } from '@/components/home-screen/bottom-navigation';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PLACEHOLDER_TEXT } from './constants';
import { gardenScreenStyles } from './styles';
import { GardenScreenProps } from './types';

/**
 * Garden Screen - User's Garden Collection
 * Displays collected plants, decorations, and rewards earned through habits
 */
export function GardenScreen({ onNavigateTo, onNavigateHome }: GardenScreenProps) {
  return (
    <SafeAreaView style={gardenScreenStyles.container} edges={['top', 'left', 'right']}>
      {/* Main Content Area */}
      <View style={gardenScreenStyles.centerContent}>
        <ThemedText style={gardenScreenStyles.placeholderText}>
          {PLACEHOLDER_TEXT}
        </ThemedText>
      </View>

      {/* Bottom Navigation */}
      <BottomNavigation onNavigate={onNavigateTo} onNavigateHome={onNavigateHome} activeScreen="rewards" />
    </SafeAreaView>
  );
}

export default GardenScreen;
