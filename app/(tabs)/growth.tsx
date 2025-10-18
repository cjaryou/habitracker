import { default as GrowthScreen } from '@/components/growth-screen';
import { useRouter } from 'expo-router';

export default function GrowthPage() {
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

  return <GrowthScreen onNavigateTo={handleNavigateTo} onNavigateHome={handleNavigateHome} />;
}
