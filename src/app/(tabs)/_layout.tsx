import { Pressable, View } from 'react-native';

import { Href, router, Tabs, usePathname } from 'expo-router';
import { Calendar, House, LucideIcon, Sprout, User } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { cn } from '@/lib/utils';
import { SHADOWS } from '@/utils/shadows';

type Tab = {
  name: string;
  href: Href;
  Icon: LucideIcon;
};

const TABS: Tab[] = [
  { name: 'index', href: '/(tabs)', Icon: House },
  { name: 'planner', href: '/(tabs)/planner', Icon: Calendar },
  { name: 'practices', href: '/(tabs)/practices', Icon: Sprout },
  { name: 'profile', href: '/(tabs)/profile', Icon: User },
];

const isFocused = (name: string, pathname: string): boolean => {
  if (name === 'index') return pathname === '/' || pathname === '/index';
  return pathname.includes(name);
};

const TabItem = ({
  name,
  href,
  Icon,
  pathname,
}: Tab & { pathname: string }) => {
  const focused = isFocused(name, pathname);

  return (
    <Pressable
      onPress={() => router.navigate(href)}
      className="h-full flex-1 items-center justify-center"
    >
      <View
        className={cn(
          'h-12 w-12 items-center justify-center rounded-full',
          focused && 'bg-accent',
        )}
      >
        <Icon size={22} color={focused ? '#FF8C00' : '#A1A1AA'} />
      </View>
    </Pressable>
  );
};

const FloatingTabBar = () => {
  const { bottom } = useSafeAreaInsets();
  const pathname = usePathname();

  return (
    <View
      className={cn(
        'absolute left-[34px] right-[34px] h-16 flex-row items-center justify-around rounded-[32px] bg-background',
      )}
      style={[{ bottom }, SHADOWS.tabs]}
    >
      {TABS.map((tab) => (
        <TabItem key={tab.name} {...tab} pathname={pathname} />
      ))}
    </View>
  );
};

const TabsLayout = () => (
  <Tabs
    tabBar={() => <FloatingTabBar />}
    screenOptions={{ headerShown: false }}
  >
    <Tabs.Screen name="index" />
    <Tabs.Screen name="planner" />
    <Tabs.Screen name="practices" />
    <Tabs.Screen name="profile" />
  </Tabs>
);

export default TabsLayout;
