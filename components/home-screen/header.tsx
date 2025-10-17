import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { homeScreenStyles } from './styles';

interface HeaderProps {
  characterName: string;
  currentStreak: number;
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning,';
  if (hour < 18) return 'Good afternoon,';
  return 'Good evening,';
}

function formatTimeRemaining(): string {
  const now = new Date();
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);
  const diff = endOfDay.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}:${minutes.toString().padStart(2, '0')}`;
}

export function Header({ characterName, currentStreak }: HeaderProps) {
  return (
    <View style={homeScreenStyles.header}>
      {/* Profile Avatar */}
      <View style={homeScreenStyles.profileAvatar}>
        <ThemedText style={homeScreenStyles.avatarText}>
          {characterName.charAt(0).toUpperCase()}
        </ThemedText>
      </View>

      {/* Greeting Section */}
      <View style={homeScreenStyles.greeting}>
        <ThemedText style={homeScreenStyles.greetingText}>{getGreeting()}</ThemedText>
        <ThemedText style={homeScreenStyles.username}>{characterName}</ThemedText>
      </View>

      {/* Right Side Stats */}
      <View style={homeScreenStyles.headerRight}>
        <View style={homeScreenStyles.timerBox}>
          <Ionicons name="time-outline" size={14} color="#5A4A3A" style={{ marginRight: 4 }} />
          <ThemedText style={homeScreenStyles.timerText}>{formatTimeRemaining()}</ThemedText>
        </View>
        <View style={homeScreenStyles.streakBadge}>
          <Ionicons name="flame" size={18} color="#FF6B35" style={{ marginRight: 2 }} />
          <ThemedText style={homeScreenStyles.streakText}>{currentStreak}</ThemedText>
        </View>
      </View>
    </View>
  );
}
