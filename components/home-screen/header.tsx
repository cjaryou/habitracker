import { ThemedText } from '@/components/themed-text';
import { View } from 'react-native';
import { homeScreenStyles } from './styles';

interface HeaderProps {
  characterName: string;
  currentStreak: number;
}

export function Header({ characterName, currentStreak }: HeaderProps) {
  return (
    <View style={homeScreenStyles.header}>
      <View style={homeScreenStyles.greeting}>
        <ThemedText style={homeScreenStyles.greetingText}>Good evening,</ThemedText>
        <ThemedText style={homeScreenStyles.username}>{characterName}</ThemedText>
      </View>
      <View style={homeScreenStyles.headerRight}>
        <View style={homeScreenStyles.timerBox}>
          <ThemedText style={homeScreenStyles.timerText}>2:57</ThemedText>
        </View>
        <View style={homeScreenStyles.streakBadge}>
          <ThemedText style={homeScreenStyles.streakText}>🔥{currentStreak}</ThemedText>
        </View>
      </View>
    </View>
  );
}
