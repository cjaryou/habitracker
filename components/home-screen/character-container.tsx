import { ThemedText } from '@/components/themed-text';
import { View } from 'react-native';
import { homeScreenStyles } from './styles';

interface CharacterContainerProps {
  characterImage?: React.ReactNode;
}

export function CharacterContainer({ characterImage }: CharacterContainerProps) {
  return (
    <View style={homeScreenStyles.characterContainer}>
      {characterImage ? (
        characterImage
      ) : (
        <View style={homeScreenStyles.characterPlaceholder}>
          <ThemedText style={homeScreenStyles.placeholderText}>Your Character Here</ThemedText>
        </View>
      )}
    </View>
  );
}
