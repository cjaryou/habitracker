import { ThemedText } from '@/components/themed-text';
import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { BottomNavigation } from './bottom-navigation';
import { CharacterContainer } from './character-container';
import { DEFAULT_DAYS_OF_WEEK, TODAY_INDEX } from './constants';
import { DaysCalendar } from './days-calendar';
import { Header } from './header';
import { InfoTags } from './info-tags';
import { homeScreenStyles } from './styles';
import { HomeScreenProps } from './types';

export function HomeScreen({
  characterName = 'Your Pet',
  currentStreak = 14,
  level = 14,
  era = 'Iron Era',
  onReviewToday,
  onNavigateTo,
}: HomeScreenProps) {
  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <ScrollView style={homeScreenStyles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header characterName={characterName} currentStreak={currentStreak} />

        {/* Weekly Days Calendar */}
        <DaysCalendar daysOfWeek={DEFAULT_DAYS_OF_WEEK} todayIndex={TODAY_INDEX} />

        {/* Info Tags */}
        <InfoTags characterName={characterName} level={level} era={era} />

        {/* Character Container */}
        <CharacterContainer />

        {/* Review Today Button */}
        <TouchableOpacity style={homeScreenStyles.reviewButton} onPress={onReviewToday}>
          <ThemedText style={homeScreenStyles.reviewButtonText}>Review Today</ThemedText>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation onNavigate={onNavigateTo} />
    </SafeAreaView>
  );
}

export default HomeScreen;
