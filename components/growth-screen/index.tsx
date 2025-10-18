import { BottomNavigation } from '@/components/home-screen/bottom-navigation';
import { ThemedText } from '@/components/themed-text';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AddHabitButton } from './components/add-habit-button';
import { HabitCard } from './components/habit-card';
import { Header } from './components/header';
import { ProgressSummary } from './components/progress-summary';
import { getGreeting, getMotivationalMessage, MOCK_HABITS } from './constants';
import { growthScreenStyles } from './styles';
import { GrowthScreenProps, HabitCard as HabitCardType, ProgressSummary as ProgressSummaryType } from './types';

/**
 * Growth Screen - Daily Habit Manager
 * Users can view and manage their daily habits, mark them as complete, and track progress.
 */
export function GrowthScreen({ onNavigateTo, onNavigateHome }: GrowthScreenProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [habits, setHabits] = useState<HabitCardType[]>(MOCK_HABITS);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // Update habit
  const handleUpdateHabit = (id: string, updates: Partial<HabitCardType>) => {
    setHabits((prev) => prev.map((h) => (h.id === id ? { ...h, ...updates } : h)));
  };

  // Calculate progress summary
  const calculateSummary = (): ProgressSummaryType => {
    const completedCount = habits.filter((h) => h.status === 'completed').length;
    const totalCount = habits.length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    return {
      completedToday: completedCount,
      totalToday: totalCount,
      percentage,
      currentStreak: 14, // TODO: Get from actual data
      motivationalMessage: getMotivationalMessage(percentage),
    };
  };

  const handleAddHabit = () => {
    // TODO: Open modal to add new habit
    console.log('Add new habit');
  };

  const summary = calculateSummary();

  return (
    <SafeAreaView style={growthScreenStyles.container} edges={['top', 'left', 'right']}>
      <Animated.View style={[{ flex: 1, opacity: fadeAnim }]}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={growthScreenStyles.scrollContent}>
          {/* Header */}
          <Header date={new Date()} greeting={getGreeting()} />

          {/* Section Title */}
          <ThemedText style={growthScreenStyles.sectionTitle}>TODAY'S HABITS</ThemedText>

          {/* Habit Cards */}
          {habits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} onUpdate={handleUpdateHabit} />
          ))}

          {/* Add Habit Button */}
          <AddHabitButton onPress={handleAddHabit} />

          {/* Progress Summary */}
          <ThemedText style={growthScreenStyles.sectionTitle}>YOUR PROGRESS</ThemedText>
          <ProgressSummary summary={summary} />
        </ScrollView>
      </Animated.View>

      {/* Bottom Navigation */}
      <BottomNavigation onNavigate={onNavigateTo} onNavigateHome={onNavigateHome} activeScreen="growth" />
    </SafeAreaView>
  );
}

export default GrowthScreen;
