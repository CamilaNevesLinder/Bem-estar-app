import { View } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormInput } from '@/components/form/form-input';
import { Button } from '@/components/shadcn/button';
import { Text } from '@/components/shadcn/text';
import { ScreenTemplate } from '@/components/templates';

const ResetPasswordSchema = z
  .object({
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

type ResetPasswordFormData = z.infer<typeof ResetPasswordSchema>;

const ResetPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    console.log('New password:', data.password);
    router.replace('/(tabs)');
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
            <Text variant="h1">Configure uma nova senha</Text>
          </View>

          <View className="gap-4">
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
        </View>

        <Button
          className="mx-auto my-12 w-full"
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)}
        >
          <Text>Vamos lá!</Text>
        </Button>
      </View>
    </ScreenTemplate>
  );
};

export default ResetPassword;
