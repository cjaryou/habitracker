import { ThemedText } from '@/components/themed-text';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
  const insets = useSafeAreaInsets();

  return (
    <View style={[homeScreenStyles.bottomNav, { paddingBottom: Math.max(insets.bottom, 8) }]}>
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
