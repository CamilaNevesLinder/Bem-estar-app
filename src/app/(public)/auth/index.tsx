import { Image, View } from 'react-native';

import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthRedirectText } from '@/components/auth/auth-redirect-text';
import { SocialAuthSection } from '@/components/auth/social-auth-section';
import { Button } from '@/components/shadcn/button';
import { Svg } from '@/components/shadcn/svg';
import { Text } from '@/components/shadcn/text';
import { AuthProvider } from '@/types';
import { SHADOWS } from '@/utils/shadows';
import horizontalBrandSvg from 'assets/images/horizontal-brand.svg';

const AuthLanding = () => {
  const handleSocialLogin = (provider: AuthProvider) => {
    console.log('handleSocialLogin', provider);
  };

  return (
    <View className="screen-content mt-0">
      <View style={SHADOWS.soft} className="absolute left-0 top-0 w-full">
        <Image
          source={require('assets/images/auth-top-container.png')}
          className="h-[375px] w-full"
          resizeMode="cover"
        />
      </View>

      <SafeAreaView className="flex-1 justify-between px-6 pb-6 pt-[360px]">
        <View className="gap-4">
          <Svg as={horizontalBrandSvg} className="mx-auto" />

          <Text>
            Organize sua rotina e hábitos, explore novos hobbies registrando
            cada descoberta.
          </Text>

          <Button
            className="mx-auto my-6"
            onPress={() => router.push('/onboarding/sign-up')}
          >
            <Text>Criar Conta</Text>
          </Button>

          <SocialAuthSection onSocialPress={handleSocialLogin} />
        </View>
      </SafeAreaView>

      <AuthRedirectText
        onPress={() => router.replace('/auth/sign-in')}
        label="Já possui uma conta?"
        actionText="Entrar"
      />
    </View>
  );
};

export default AuthLanding;
