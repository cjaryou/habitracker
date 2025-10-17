import { ThemedText } from '@/components/themed-text';
import { BottomNavigation } from '@/components/home-screen/bottom-navigation';
import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PLACEHOLDER_TEXT } from './constants';
import { timelineScreenStyles } from './styles';
import { TimelineScreenProps } from './types';

/**
 * Timeline Screen - Growth Timeline
 * Displays user's habit growth timeline and progress over time
 */
export function TimelineScreen({ onNavigateTo, onNavigateHome }: TimelineScreenProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <SafeAreaView style={timelineScreenStyles.container} edges={['top', 'left', 'right']}>
      <Animated.View style={[{ flex: 1, opacity: fadeAnim }]}>
        {/* Main Content Area */}
        <View style={timelineScreenStyles.centerContent}>
          <ThemedText style={timelineScreenStyles.placeholderText}>
            {PLACEHOLDER_TEXT}
          </ThemedText>
        </View>
      </Animated.View>

      {/* Bottom Navigation */}
      <BottomNavigation onNavigate={onNavigateTo} onNavigateHome={onNavigateHome} activeScreen="timeline" />
    </SafeAreaView>
  );
}

export default TimelineScreen;
