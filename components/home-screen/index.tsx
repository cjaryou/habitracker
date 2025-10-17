import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomNavigation } from './bottom-navigation';
import { CharacterContainer } from './character-container';
import { DEFAULT_DAYS_OF_WEEK, TODAY_INDEX } from './constants';
import { DaysCalendar } from './days-calendar';
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
    <SafeAreaView style={homeScreenStyles.container} edges={['top', 'left', 'right']}>
      <View style={homeScreenStyles.mainContainer}>
        {/* Compact Header - All info in one line */}
        <View style={homeScreenStyles.compactHeader}>
          <View style={homeScreenStyles.userInfo}>
            <View style={homeScreenStyles.smallAvatar}>
              <ThemedText style={homeScreenStyles.smallAvatarText}>
                {characterName.charAt(0).toUpperCase()}
              </ThemedText>
            </View>
            <View>
              <ThemedText style={homeScreenStyles.compactName}>{characterName}</ThemedText>
              <ThemedText style={homeScreenStyles.compactLevel}>Lv.{level} • {era}</ThemedText>
            </View>
          </View>
          <View style={homeScreenStyles.compactStats}>
            <View style={homeScreenStyles.miniStatBox}>
              <Ionicons name="flame" size={16} color="#FF6B35" />
              <ThemedText style={homeScreenStyles.miniStatText}>{currentStreak}</ThemedText>
            </View>
            <View style={homeScreenStyles.miniStatBox}>
              <Ionicons name="time-outline" size={16} color="#8B7355" />
              <ThemedText style={homeScreenStyles.miniStatText}>2:57</ThemedText>
            </View>
          </View>
        </View>

        {/* Week Calendar - Horizontal inline */}
        <View style={homeScreenStyles.inlineWeek}>
          <DaysCalendar daysOfWeek={DEFAULT_DAYS_OF_WEEK} todayIndex={TODAY_INDEX} />
        </View>

        {/* Character Display - Flex space */}
        <View style={homeScreenStyles.flexCharacterArea}>
          <CharacterContainer />
        </View>

        {/* Bottom Action Area - Fixed at bottom */}
        <View style={homeScreenStyles.bottomActionArea}>
          {/* Compact Progress */}
          <View style={homeScreenStyles.compactProgress}>
            <View style={homeScreenStyles.progressBar}>
              <View style={[homeScreenStyles.progressFill, { width: `${(currentStreak / 30) * 100}%` }]} />
            </View>
            <ThemedText style={homeScreenStyles.progressText}>
              {currentStreak}/30 days to evolve
            </ThemedText>
          </View>

          {/* Action Button */}
          <TouchableOpacity 
            style={homeScreenStyles.actionButton} 
            onPress={onReviewToday}
            activeOpacity={0.8}>
            <Ionicons name="checkmark-circle" size={24} color="#FFF" />
            <ThemedText style={homeScreenStyles.actionButtonText}>Complete Habits</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation */}
        <BottomNavigation onNavigate={onNavigateTo} />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
