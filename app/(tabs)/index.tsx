import { default as HomeScreen } from '@/components/home-screen';
import { useRouter } from 'expo-router';

export default function HomeScreenPage() {
  const router = useRouter();

  const handleNavigateTo = (screen: 'growth' | 'stats' | 'garden') => {
    // Map bottom navigation IDs to actual route names
    const routeMap: Record<string, '/growth' | '/stats' | '/garden'> = {
      growth: '/growth',
      stats: '/stats',
      garden: '/garden',
    };

    router.replace(routeMap[screen]);
  };

  return (
    <HomeScreen
      characterName="Tyrling"
      currentStreak={14}
      level={14}
      era="Iron Era"
      onReviewToday={() => console.log('Review today clicked')}
      onNavigateTo={handleNavigateTo}
    />
  );
}
