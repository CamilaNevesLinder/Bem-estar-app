import { Text } from 'react-native';

import { ScreenTemplate } from '@/components/templates';

const Practices = () => {
  return (
    <ScreenTemplate
      navbar={{
        title: 'Práticas',
        showBack: false,
      }}
    >
      <Text>Práticas</Text>
    </ScreenTemplate>
  );
};

export default Practices;
