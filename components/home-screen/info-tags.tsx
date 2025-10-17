import { ThemedText } from '@/components/themed-text';
import { View } from 'react-native';
import { homeScreenStyles } from './styles';

interface InfoTagsProps {
  characterName: string;
  level: number;
  era: string;
}

export function InfoTags({ characterName, level, era }: InfoTagsProps) {
  return (
    <View style={homeScreenStyles.tagsContainer}>
      <View style={homeScreenStyles.tag}>
        <ThemedText style={homeScreenStyles.tagText}>{characterName}</ThemedText>
      </View>
      <View style={homeScreenStyles.tag}>
        <ThemedText style={homeScreenStyles.tagText}>Level {level}</ThemedText>
      </View>
      <View style={[homeScreenStyles.tag, homeScreenStyles.tagRight]}>
        <ThemedText style={homeScreenStyles.tagText}>{era}</ThemedText>
      </View>
    </View>
  );
}
