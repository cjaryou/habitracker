import { default as GardenScreen } from '@/components/garden-screen';
import { useRouter } from 'expo-router';

export default function GardenPage() {
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

  return <GardenScreen onNavigateTo={handleNavigateTo} onNavigateHome={handleNavigateHome} />;
}
