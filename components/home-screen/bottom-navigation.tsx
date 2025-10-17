import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { homeScreenStyles } from './styles';

interface BottomNavigationProps {
  onNavigate?: (screen: 'timeline' | 'fossils' | 'campfire') => void;
  activeScreen?: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: 'home' as const },
  { id: 'timeline', label: 'History', icon: 'time' as const },
  { id: 'fossils', label: 'Stats', icon: 'stats-chart' as const },
  { id: 'campfire', label: 'Social', icon: 'people' as const },
];

export function BottomNavigation({ onNavigate, activeScreen = 'home' }: BottomNavigationProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[homeScreenStyles.bottomNav, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      <View style={homeScreenStyles.navItemsContainer}>
        {NAV_ITEMS.map((item, index) => {
          const isCenter = index === 1 || index === 2;

          // For center items (index 1 & 2), we'll render a special layout
          if (isCenter && index === 1) {
            return (
              <View key="center-group" style={homeScreenStyles.centerGroup}>
                {/* Timeline button */}
                <TouchableOpacity
                  key={NAV_ITEMS[1].id}
                  style={homeScreenStyles.navItem}
                  onPress={() => {
                    if (onNavigate) onNavigate('timeline');
                  }}>
                  <View style={homeScreenStyles.navIconWrapper}>
                    <Ionicons
                      name={NAV_ITEMS[1].icon}
                      size={22}
                      color="#C4B5A0"
                    />
                  </View>
                  <ThemedText style={homeScreenStyles.navLabel}>
                    {NAV_ITEMS[1].label}
                  </ThemedText>
                </TouchableOpacity>

                {/* Fossils/Stats button */}
                <TouchableOpacity
                  key={NAV_ITEMS[2].id}
                  style={homeScreenStyles.navItem}
                  onPress={() => {
                    if (onNavigate) onNavigate('fossils');
                  }}>
                  <View style={homeScreenStyles.navIconWrapper}>
                    <Ionicons
                      name={NAV_ITEMS[2].icon}
                      size={22}
                      color="#C4B5A0"
                    />
                  </View>
                  <ThemedText style={homeScreenStyles.navLabel}>
                    {NAV_ITEMS[2].label}
                  </ThemedText>
                </TouchableOpacity>
              </View>
            );
          }

          if (isCenter && index === 2) {
            return null; // Already rendered in center group
          }

          return (
            <TouchableOpacity
              key={item.id}
              style={homeScreenStyles.navItem}
              onPress={() => {
                if (item.id !== 'home' && onNavigate) {
                  onNavigate(item.id as 'timeline' | 'fossils' | 'campfire');
                }
              }}>
              <View style={homeScreenStyles.navIconWrapper}>
                <Ionicons
                  name={item.icon}
                  size={24}
                  color="#C4B5A0"
                />
              </View>
              <ThemedText style={homeScreenStyles.navLabel}>
                {item.label}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
