export interface TimelineScreenProps {
  onNavigateTo?: (screen: 'timeline' | 'fossils' | 'rewards') => void;
  onNavigateHome?: () => void;
}
