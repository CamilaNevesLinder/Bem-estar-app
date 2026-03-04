import { Text } from 'react-native';

import { Bell, User } from 'lucide-react-native';

import { Icon } from '@/components/shadcn/icon';
import { Svg } from '@/components/shadcn/svg';
import { ScreenTemplate } from '@/components/templates';
import HorizontalBrand from 'assets/images/horizontal-brand.svg';

const Homepage = () => {
  return (
    <ScreenTemplate
      navbar={{
        leftContent: <Icon as={User} size={24} variant="neutral" />,
        rightContent: <Icon as={Bell} size={24} variant="neutral" />,
        centerContent: <Svg as={HorizontalBrand} className="w-24" />,
      }}
    >
      <Text>Homepage</Text>
    </ScreenTemplate>
  );
};

export default Homepage;
