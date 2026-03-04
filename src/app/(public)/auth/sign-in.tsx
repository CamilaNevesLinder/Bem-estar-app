import { View } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { AuthRedirectText, SocialAuthSection } from '@/components/auth';
import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/shadcn/button';
import { Text } from '@/components/shadcn/text';
import { ScreenTemplate } from '@/components/templates';
import { AuthProvider } from '@/types';

const signInSchema = z.object({
  login: z.string().min(3, 'Informe um usuário ou e-mail válido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

type SignInFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
  };

  const handleSocialLogin = (provider: AuthProvider) => {
    console.log('handleSocialLogin', provider);
  };

  return (
    <ScreenTemplate
      navbar={{ title: 'Entrar' }}
      keyboardAware
      className="flex-1"
    >
      <View className="screen-content">
        <View className="gap-6">
          <View className="gap-2">
            <Text variant="h1">Bem vinda(o) de volta!</Text>
            <Text variant="small">
              Insira suas credenciais para entrar em {'\n'}
              uma conta já existente.
            </Text>
          </View>

          <View className="gap-4">
            <FormInput
              control={control}
              name="login"
              label="Usuário ou e-mail"
              placeholder="example@example.com"
              keyboardType="email-address"
            />

            <FormInput
              control={control}
              name="password"
              label="Senha"
              placeholder="********"
              secure
            />

            <View className="items-end">
              <Link href="/auth/recovery-password" asChild>
                <Button variant="link">
                  <Text>Esqueci a senha</Text>
                </Button>
              </Link>
            </View>
          </View>

          <Button
            className="mx-auto my-12"
            disabled={!isValid}
            onPress={handleSubmit(onSubmit)}
          >
            <Text>Entrar</Text>
          </Button>

          <SocialAuthSection onSocialPress={handleSocialLogin} />
        </View>

        <AuthRedirectText
          onPress={() => router.replace('/onboarding/sign-up')}
          label="Não possui uma conta?"
          actionText="Cadastre-se"
        />
      </View>
    </ScreenTemplate>
  );
};

export default SignIn;
