export interface GardenScreenProps {
  onNavigateTo?: (screen: 'growth' | 'stats' | 'garden') => void;
  onNavigateHome?: () => void;
}
