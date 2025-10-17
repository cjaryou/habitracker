import { ThemedText } from '@/components/themed-text';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { homeScreenStyles } from './styles';

interface BottomNavigationProps {
  onNavigate?: (screen: 'timeline' | 'fossils' | 'rewards') => void;
  onNavigateHome?: () => void;
  activeScreen?: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: string;
  isSvg?: boolean;
}

const CROP_GROWTH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M26 13a4.005 4.005 0 0 0 4-4V6h-3a3.98 3.98 0 0 0-2.747 1.106A6 6 0 0 0 19 4h-3v3a6.007 6.007 0 0 0 6 6h1v13H11v-5h1a4.005 4.005 0 0 0 4-4v-3h-3a3.98 3.98 0 0 0-2.747 1.106A6 6 0 0 0 5 12H2v3a6.007 6.007 0 0 0 6 6h1v5H2v2h28v-2h-5V13Zm-1-3a2 2 0 0 1 2-2h1v1a2 2 0 0 1-2 2h-1Zm-14 8a2 2 0 0 1 2-2h1v1a2 2 0 0 1-2 2h-1Zm-2 1H8a4.005 4.005 0 0 1-4-4v-1h1a4.005 4.005 0 0 1 4 4Zm14-8h-1a4.005 4.005 0 0 1-4-4V6h1a4.005 4.005 0 0 1 4 4Z"/></svg>`;

const STUMP_REGROWTH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M340.49 22.054c-17.788 7.15-49.024 20.552-59.064 35.639c-1.838 7.23-1.993 13.487-1.36 20.338c10.617 2.524 36.557 6.219 44.83.57c12.503-17.52 14.686-36.73 15.594-56.547M153.275 93.203c4.617 11.008 16.711 33.779 26.684 38.125c14.197.584 25.654-3.953 37.809-10.043c-.31-6.472-1.23-12.832-4.317-18.946c-19.943-10.169-39.284-10.39-60.176-9.136m113.065-.178c3.292 13.352 4.73 28.28 4.869 43.781c-9.808-7.078-21.754-12.323-35.424-16.719c.576 12.254 1.829 11.19-8.064 16.323c20.091 6.216 34.09 13.638 42.785 24.087c-1.709 26.314-6.236 52.816-11.033 74.891c-29.017.858-66.277 4.96-98.692 11.578l31.555 15.778l-62.787-8.067c-15.631 2.586-37.94 11.115-39.885 21.535c4.597 25.662 46.115 37.152 66.242 42.44c39.935 10.325 89.41 14.715 123.266 13.758c15.999-.453 36.857-3.302 58.262-7.807l-36.838-37.246l60.752 31.558c23.759-7.108 48.944-13.873 69.228-28.002c3.263-2.909 11.892-8.346 10.266-13.416c-1.992-6.049-8.55-12.537-19.824-18.252s-26.65-10.443-43.696-14.013c-25.801-5.405-55.427-8.25-81.365-9.399l-9.307 46.688c-24.265 22.16-60.971 9.42-65.855-9.73l17.82-2.516c8.81 9.717 23.65 8.05 31.668 2.299c2.728-18.037 8.29-37.814 11.41-54.38c19.514-3.23 34.898-12.69 47.414-25.718c-6.781-1.972-8.843-8.857-10.908-14.852c-9.091 10.011-20.836 18.766-33.308 21.82c4.99-32.922 7.16-69.553.896-101.86c-6.572-1.124-13.045-2.717-19.447-4.56zm66.334 63.795c-1.605 16.293 6.397 20.5 21.117 22.713c6.624-9.055 8.818-18.113 10.29-28.23c-9.608 1.337-24.542-2.709-31.407 5.517m0 0c-.01.002-.03.025-.069.078c.017-.023.05-.054.069-.078m107.15 149.574c-21.391 12.958-40.529 20.195-62.119 26.635l-10.562 45.209l-18.586-37.576c-24.69 5.623-49.317 9.184-68.877 9.738c-35.856 1.014-86.094-3.416-128.278-14.322c-21.541-7.093-42.932-12.835-59.435-25.18l-13.315 97.834l-57.873 60.295c28.18-1.896 55.714 11.198 79.494 5.6c10.158-2.454 24.265-7.616 44.838-17.016l48.213-39.643l-25.574 41.69c47.098 21.387 91.582 11.977 133.459-5.725l-13.03-70.729l40.928 65.342c44.79 36.762 98.077 49.681 151.114 36.184c4.427-1.15 8.003-2.35 11-3.483l-33.825-48.962l-22.216 23.923l12.277-64.838z"/></svg>`;

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'leaf' },
  { id: 'timeline', label: 'Growth', icon: CROP_GROWTH_SVG, isSvg: true },
  { id: 'fossils', label: 'Stats', icon: 'bar-chart' },
  { id: 'rewards', label: 'Garden', icon: STUMP_REGROWTH_SVG, isSvg: true },
];

interface IconProps {
  icon: string;
  isSvg?: boolean;
  size: number;
  color: string;
}

function NavIcon({ icon, isSvg, size, color }: IconProps) {
  if (isSvg) {
    return <SvgXml xml={icon} width={size} height={size} color={color} />;
  }
  return <Ionicons name={icon as any} size={size} color={color} />;
}

export function BottomNavigation({ onNavigate, onNavigateHome, activeScreen = 'home' }: BottomNavigationProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[homeScreenStyles.bottomNav, { paddingBottom: Math.max(insets.bottom, 8) }]}>
      <View style={homeScreenStyles.navItemsContainer}>
        {NAV_ITEMS.map((item) => {
          const isActive = activeScreen === item.id;
          const isGrowth = item.id === 'timeline';

          // Unified color system: Active = vibrant green, Inactive = muted gray
          const iconColor = isActive ? '#6B9B6B' : '#B8A898';

          return (
            <TouchableOpacity
              key={item.id}
              style={homeScreenStyles.navItem}
              onPress={() => {
                if (item.id === 'home' && onNavigateHome) {
                  onNavigateHome();
                } else if (item.id !== 'home' && onNavigate) {
                  onNavigate(item.id as 'timeline' | 'fossils' | 'rewards');
                }
              }}>
              <View style={homeScreenStyles.navIconWrapper}>
                <NavIcon
                  icon={item.icon}
                  isSvg={item.isSvg}
                  size={isGrowth ? 32 : 24}
                  color={iconColor}
                />
              </View>
              <ThemedText style={[
                homeScreenStyles.navLabel,
                isActive && homeScreenStyles.navLabelActive
              ]}>
                {item.label}
              </ThemedText>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
