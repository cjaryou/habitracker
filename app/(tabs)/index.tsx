import { default as HomeScreen } from '@/components/home-screen';

export default function HomeScreenPage() {
  return (
    <HomeScreen
      characterName="Tyrling"
      currentStreak={14}
      level={14}
      era="Iron Era"
      onReviewToday={() => console.log('Review today clicked')}
      onNavigateTo={(screen) => console.log(`Navigate to ${screen}`)}
    />
  );
}
