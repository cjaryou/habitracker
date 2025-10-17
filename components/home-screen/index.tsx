import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
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
  return (
    <SafeAreaView style={homeScreenStyles.container} edges={['top', 'left', 'right']}>
      <View style={homeScreenStyles.mainContainer}>
        {/* Terrarium Lid - Top decorative element */}
        <View style={homeScreenStyles.terrariumLid}>
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
                <Ionicons name="flame" size={16} color="#5DADE2" />
                <ThemedText style={homeScreenStyles.miniStatText}>{currentStreak}</ThemedText>
              </View>
              <View style={homeScreenStyles.miniStatBox}>
                <Ionicons name="water" size={16} color="#5DADE2" />
                <ThemedText style={homeScreenStyles.miniStatText}>98%</ThemedText>
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

          {/* Progress Bar - Growth timeline */}
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
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
