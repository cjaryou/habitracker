export interface DayData {
  day: string;
  completed: boolean;
}

export interface HomeScreenProps {
  characterName?: string;
  currentStreak?: number;
  level?: number;
  era?: string;
  onReviewToday?: () => void;
  onNavigateTo?: (screen: 'timeline' | 'fossils' | 'rewards') => void;
}
