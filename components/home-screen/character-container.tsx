import { View } from 'react-native';
import { homeScreenStyles } from './styles';

interface CharacterContainerProps {
  characterImage?: React.ReactNode;
}

export function CharacterContainer({ characterImage }: CharacterContainerProps) {
  return (
    <View style={homeScreenStyles.characterContainer}>
      {characterImage}
      {/* Character will be added here based on theme */}
    </View>
  );
}
