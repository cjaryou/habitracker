import { default as GardenScreen } from '@/components/garden-screen';
import { useRouter } from 'expo-router';

export default function GardenPage() {
  const router = useRouter();

  const handleNavigateTo = (screen: 'growth' | 'stats' | 'garden') => {
    const routeMap: Record<string, '/growth' | '/stats' | '/garden'> = {
      growth: '/growth',
      stats: '/stats',
      garden: '/garden',
    };

    router.replace(routeMap[screen]);
  };

  const handleNavigateHome = () => {
    router.replace('/');
  };

  return <GardenScreen onNavigateTo={handleNavigateTo} onNavigateHome={handleNavigateHome} />;
}
