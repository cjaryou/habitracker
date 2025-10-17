import { View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { homeScreenStyles } from './styles';

interface BottomNavigationProps {
  onNavigate?: (screen: 'timeline' | 'fossils' | 'campfire') => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'timeline', label: 'Timeline', icon: '📅' },
  { id: 'fossils', label: 'Fossils', icon: '🦴' },
  { id: 'campfire', label: 'Campfire', icon: '🔥' },
];

export function BottomNavigation({ onNavigate }: BottomNavigationProps) {
  return (
    <View style={homeScreenStyles.bottomNav}>
      {NAV_ITEMS.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={homeScreenStyles.navItem}
          onPress={() => {
            if (item.id !== 'home' && onNavigate) {
              onNavigate(item.id as 'timeline' | 'fossils' | 'campfire');
            }
          }}>
          <ThemedText style={homeScreenStyles.navIcon}>{item.icon}</ThemedText>
          <ThemedText style={homeScreenStyles.navLabel}>{item.label}</ThemedText>
        </TouchableOpacity>
      ))}
    </View>
  );
}
