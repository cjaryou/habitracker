export interface GardenScreenProps {
  onNavigateTo?: (screen: 'timeline' | 'fossils' | 'rewards') => void;
  onNavigateHome?: () => void;
}
