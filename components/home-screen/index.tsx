import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomNavigation } from './bottom-navigation';
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
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <SafeAreaView style={homeScreenStyles.container} edges={['top', 'left', 'right']}>
      <Animated.View style={[homeScreenStyles.mainContainer, { opacity: fadeAnim }]}>
        {/* Modern Header Card */}
        <View style={homeScreenStyles.modernHeader}>
          <View style={homeScreenStyles.headerContent}>
            {/* Avatar & Name Section */}
            <View style={homeScreenStyles.avatarSection}>
              <View style={homeScreenStyles.avatarContainer}>
                <ThemedText style={homeScreenStyles.avatarText}>
                  {characterName.charAt(0).toUpperCase()}
                </ThemedText>
              </View>
              <View style={homeScreenStyles.nameSection}>
                <ThemedText style={homeScreenStyles.characterName}>{characterName}</ThemedText>
                <View style={homeScreenStyles.levelBadgeSmall}>
                  <ThemedText style={homeScreenStyles.levelText}>Lv.{level}</ThemedText>
                  <View style={homeScreenStyles.eraDot} />
                  <ThemedText style={homeScreenStyles.eraText}>{era}</ThemedText>
                </View>
              </View>
            </View>

            {/* Stats Section */}
            <View style={homeScreenStyles.statsSection}>
              <View style={homeScreenStyles.statItem}>
                <Ionicons name="water-outline" size={18} color="#5DADE2" />
                <ThemedText style={homeScreenStyles.statNumber}>{currentStreak}</ThemedText>
              </View>
              <View style={homeScreenStyles.statDivider} />
              <View style={homeScreenStyles.statItem}>
                <Ionicons name="leaf-outline" size={18} color="#6B9B6B" />
                <ThemedText style={homeScreenStyles.statNumber}>98%</ThemedText>
              </View>
            </View>
          </View>
        </View>

        {/* Main Terrarium Glass Container */}
        <View style={homeScreenStyles.terrariumGlassContainer}>
          {/* Glass Reflection Effect */}
          <View style={homeScreenStyles.glassReflection} />

          {/* Week Calendar - Inside terrarium */}
          <View style={homeScreenStyles.inlineWeek}>
            <DaysCalendar daysOfWeek={DEFAULT_DAYS_OF_WEEK} todayIndex={TODAY_INDEX} />
          </View>

          {/* Ecosystem Area - Empty for custom content */}
          <View style={homeScreenStyles.flexCharacterArea}>
            {/* Boş alan - Ekosfer öğeleri buraya eklenecek */}
          </View>

          {/* Soil Layers - Bottom of terrarium */}
          <View style={homeScreenStyles.soilLayers}>
            <View style={homeScreenStyles.soilLayerLight} />
            <View style={homeScreenStyles.soilLayerMedium} />
            <View style={homeScreenStyles.soilLayerDark} />
          </View>

          {/* Progress Bar - Growth progress */}
          <View style={homeScreenStyles.bottomActionArea}>
            <View style={homeScreenStyles.compactProgress}>
              <View style={homeScreenStyles.progressBar}>
                <View style={[homeScreenStyles.progressFill, { width: `${(currentStreak / 30) * 100}%` }]} />
              </View>
              <ThemedText style={homeScreenStyles.progressText}>
                {currentStreak}/30 days • Growing ecosystem
              </ThemedText>
            </View>
          </View>
        </View>

        {/* Action Button - Outside terrarium */}
        <View style={{ paddingHorizontal: 16, paddingBottom: 12 }}>
          <TouchableOpacity
            style={homeScreenStyles.actionButton}
            onPress={onReviewToday}
            activeOpacity={0.8}>
            <Ionicons name="leaf" size={24} color="#FFF" />
            <ThemedText style={homeScreenStyles.actionButtonText}>Nurture Today</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation - Wooden base */}
        <BottomNavigation onNavigate={onNavigateTo} />
      </Animated.View>
    </SafeAreaView>
  );
}

export default HomeScreen;
