import { default as StatsScreen } from '@/components/stats-screen';
import { useRouter } from 'expo-router';

export default function StatsPage() {
  const router = useRouter();

  const handleNavigateTo = (screen: 'timeline' | 'fossils' | 'rewards') => {
    const routeMap: Record<string, '/timeline' | '/stats' | '/garden'> = {
      timeline: '/timeline',
      fossils: '/stats',
      rewards: '/garden',
    };

    router.replace(routeMap[screen]);
  };

  const handleNavigateHome = () => {
    router.replace('/');
  };

  return <StatsScreen onNavigateTo={handleNavigateTo} onNavigateHome={handleNavigateHome} />;
}
