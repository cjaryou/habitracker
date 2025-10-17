export interface StatsScreenProps {
  onNavigateTo?: (screen: 'timeline' | 'fossils' | 'rewards') => void;
  onNavigateHome?: () => void;
}
