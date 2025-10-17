import { default as TimelineScreen } from '@/components/timeline-screen';
import { useRouter } from 'expo-router';

export default function TimelinePage() {
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

  return <TimelineScreen onNavigateTo={handleNavigateTo} onNavigateHome={handleNavigateHome} />;
}
