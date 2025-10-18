import { BottomNavigation } from '@/components/home-screen/bottom-navigation';
import React, { useEffect, useRef } from 'react';
import { Animated, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  MOCK_ACHIEVEMENTS,
  MOCK_GROWTH_DATA,
  MOCK_HABIT_PERFORMANCE,
  MOCK_HEATMAP_DATA,
} from './constants';
import { statsScreenStyles as styles } from './styles';
import {
  Achievement,
  HabitPerformance as HabitPerformanceType,
  HeatmapDay,
  StatsScreenProps,
} from './types';

// Import sub-components
import { AchievementsGrid } from './components/achievements-grid';
import { GrowthTree } from './components/growth-tree';
import { HabitPerformance } from './components/habit-performance';
import { MonthHeatmap } from './components/month-heatmap';
import { QuickStats } from './components/quick-stats';

/**
 * Stats Screen - User Statistics
 * Displays user's habit tracking statistics, charts, and analytics
 */
export function StatsScreen({ onNavigateTo, onNavigateHome }: StatsScreenProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // Mock data (in real app, fetch from database)
  const growthData = MOCK_GROWTH_DATA;
  const achievements = MOCK_ACHIEVEMENTS;
  const heatmapData = MOCK_HEATMAP_DATA;
  const habitPerformance = MOCK_HABIT_PERFORMANCE;

  // Handlers
  const handleAchievementPress = (achievement: Achievement) => {
    console.log('Achievement pressed:', achievement.name);
    // TODO: Show achievement detail modal
  };

  const handleDayPress = (day: HeatmapDay) => {
    console.log('Day pressed:', day.date.toDateString());
    // TODO: Show day detail modal
  };

  const handleHabitPress = (habit: HabitPerformanceType) => {
    console.log('Habit pressed:', habit.habitName);
    // TODO: Navigate to habit detail or show stats
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Animated.View style={[{ flex: 1, opacity: fadeAnim }]}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Section 1: Growth Tree */}
          <View style={styles.section}>
            <GrowthTree
              stage={growthData.treeStage}
              totalDays={growthData.totalDays}
              nextMilestone={growthData.nextMilestone}
            />
          </View>

          {/* Section 2: Quick Stats */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📊 Overview</Text>
            <QuickStats
              totalDays={growthData.totalDays}
              successRate={growthData.successRate}
              currentStreak={growthData.currentStreak}
            />
          </View>

          {/* Section 3: Achievements */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🏆 Achievements</Text>
            <AchievementsGrid achievements={achievements} onAchievementPress={handleAchievementPress} />
          </View>

          {/* Section 4: Month Heatmap */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📅 Last 3 Months</Text>
            <MonthHeatmap months={heatmapData} onDayPress={handleDayPress} />
          </View>

          {/* Section 5: Habit Performance */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📊 Habit Performance</Text>
            <HabitPerformance habits={habitPerformance} onHabitPress={handleHabitPress} />
          </View>
        </ScrollView>
      </Animated.View>

      {/* Bottom Navigation */}
      <BottomNavigation onNavigate={onNavigateTo} onNavigateHome={onNavigateHome} activeScreen="stats" />
    </SafeAreaView>
  );
}

export default StatsScreen;
