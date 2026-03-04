import { View } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  AuthRedirectText,
  SocialAuthSection,
  TermsAgreementText,
} from '@/components/auth';
import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/shadcn/button';
import { Text } from '@/components/shadcn/text';
import { ScreenTemplate } from '@/components/templates';
import { AuthProvider } from '@/types';

const signUpSchema = z
  .object({
    email: z.string().check(z.email('Informe um e-mail válido')),
    username: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z
      .string()
      .min(6, 'A confirmação deve ter no mínimo 6 caracteres'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas não coincidem',
        path: ['confirmPassword'],
      });
    }
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  const handleSocialLogin = (provider: AuthProvider) => {
    console.log('handleSocialLogin', provider);
  };

  return (
    <ScreenTemplate navbar={{ title: 'Criar conta' }} keyboardAware>
      <View className="screen-content">
        <View className="gap-6">
          <View className="gap-4">
            <FormInput
              control={control}
              name="email"
              label="E-mail"
              placeholder="julia@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <FormInput
              control={control}
              name="username"
              label="Nome"
              placeholder="username"
              autoCapitalize="none"
            />

            <FormInput
              control={control}
              name="password"
              label="Senha"
              placeholder="********"
              secure
            />

            <FormInput
              control={control}
              name="confirmPassword"
              label="Confirmar senha"
              placeholder="********"
              secure
            />
          </View>

          <TermsAgreementText />

          <Button
            className="mx-auto mb-2 mt-4"
            disabled={!isValid}
            onPress={handleSubmit(onSubmit)}
          >
            <Text>Cadastre-se</Text>
          </Button>

          <SocialAuthSection onSocialPress={handleSocialLogin} />
        </View>

        <AuthRedirectText
          onPress={() => router.replace('/auth/sign-in')}
          label="Já possui uma conta?"
          actionText="Entrar"
        />
      </View>
    </ScreenTemplate>
  );
};

export default SignUp;
