import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { homeScreenStyles } from './styles';

interface BottomNavigationProps {
  onNavigate?: (screen: 'timeline' | 'fossils' | 'campfire') => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: 'home' as const },
  { id: 'timeline', label: 'Timeline', icon: 'calendar' as const },
  { id: 'fossils', label: 'Fossils', icon: 'paw' as const },
  { id: 'campfire', label: 'Campfire', icon: 'bonfire' as const },
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
          <Ionicons
            name={item.icon}
            size={26}
            color={item.id === 'home' ? '#2C3E50' : '#8B7355'}
          />
          <ThemedText
            style={[
              homeScreenStyles.navLabel,
              item.id === 'home' && { color: '#2C3E50', fontWeight: '700' },
            ]}>
            {item.label}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </View>
  );
}
