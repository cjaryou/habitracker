import { ThemedText } from '@/components/themed-text';
import { BottomNavigation } from '@/components/home-screen/bottom-navigation';
import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PLACEHOLDER_TEXT } from './constants';
import { gardenScreenStyles } from './styles';
import { GardenScreenProps } from './types';

/**
 * Garden Screen - User's Garden Collection
 * Displays collected plants, decorations, and rewards earned through habits
 */
export function GardenScreen({ onNavigateTo, onNavigateHome }: GardenScreenProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <SafeAreaView style={gardenScreenStyles.container} edges={['top', 'left', 'right']}>
      <Animated.View style={[{ flex: 1, opacity: fadeAnim }]}>
        {/* Main Content Area */}
        <View style={gardenScreenStyles.centerContent}>
          <ThemedText style={gardenScreenStyles.placeholderText}>
            {PLACEHOLDER_TEXT}
          </ThemedText>
        </View>
      </Animated.View>

      {/* Bottom Navigation */}
      <BottomNavigation onNavigate={onNavigateTo} onNavigateHome={onNavigateHome} activeScreen="garden" />
    </SafeAreaView>
  );
}

export default GardenScreen;
