import { View } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/shadcn/button';
import { Text } from '@/components/shadcn/text';
import { ScreenTemplate } from '@/components/templates';

const RecoveryPasswordSchema = z.object({
  email: z.string().check(z.email('Informe um e-mail válido')),
});

type RecoveryPasswordFormData = z.infer<typeof RecoveryPasswordSchema>;

const RecoveryPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<RecoveryPasswordFormData>({
    resolver: zodResolver(RecoveryPasswordSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: RecoveryPasswordFormData) => {
    console.log('Recovery email:', data.email);
    router.push('/auth/recovery-password/code');
  };

  return (
    <ScreenTemplate
      navbar={{ title: 'Recuperar senha' }}
      keyboardAware
      className="flex-1"
    >
      <View className="screen-content flex-1 justify-between">
        <View className="gap-6">
          <View className="gap-2">
            <Text variant="h1">Esqueceu a senha?</Text>
            <Text variant="small">
              Insira seu endereço de e-mail para {'\n'} receber instruções de
              redefinição
            </Text>
          </View>

          <View className="gap-4">
            <FormInput
              control={control}
              name="email"
              label="E-mail"
              placeholder="example@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <Button
          className="mx-auto my-12"
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        >
          <Text>Continuar</Text>
        </Button>
      </View>
    </ScreenTemplate>
  );
};

export default RecoveryPassword;
