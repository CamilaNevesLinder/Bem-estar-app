import { Text } from 'react-native';

import { CalendarCheck2, User } from 'lucide-react-native';

import { Icon } from '@/components/shadcn/icon';
import { ScreenTemplate } from '@/components/templates';

const Planner = () => {
  return (
    <ScreenTemplate
      navbar={{
        title: 'Planner',
        leftContent: <Icon as={User} size={24} variant="neutral" />,
        rightContent: <Icon as={CalendarCheck2} size={24} variant="neutral" />,
      }}
    >
      <Text>Planner</Text>
    </ScreenTemplate>
  );
};

export default Planner;
