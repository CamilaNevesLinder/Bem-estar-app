import { Text } from 'react-native';

import { Link } from 'expo-router';

import { Button } from '@/components/shadcn/button';
import { ScreenTemplate } from '@/components/templates';

const Profile = () => {
  return (
    <ScreenTemplate navbar={{ title: 'Perfil', showBack: false }}>
      <Link href="/onboarding/welcome" asChild>
        <Button>
          <Text>Sair</Text>
        </Button>
      </Link>
    </ScreenTemplate>
  );
};

export default Profile;
