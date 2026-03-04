import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import { router } from 'expo-router';

import { InputOtp } from '@/components/form';
import { Button } from '@/components/shadcn/button';
import { Text } from '@/components/shadcn/text';
import { ScreenTemplate } from '@/components/templates';

const OTP_COUNT = 5;
const RESEND_TIME = 60;

const RecoveryCode = () => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_COUNT).fill(''));
  const [seconds, setSeconds] = useState(RESEND_TIME);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isComplete = otp.every((digit) => digit !== '');

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleValidateCode = useCallback(() => {
    if (!isComplete) return;
    setIsSubmitting(true);
    router.push('/auth/recovery-password/reset');
  }, [isComplete]);

  useEffect(() => {
    if (isComplete && !isSubmitting) {
      handleValidateCode();
    }
  }, [handleValidateCode, isComplete, isSubmitting]);

  const handleResendCode = () => {
    if (seconds > 0) return;
    setSeconds(RESEND_TIME);
  };

  return (
    <ScreenTemplate
      navbar={{ title: 'Recuperar senha' }}
      keyboardAware
      className="flex-1"
    >
      <View className="screen-content flex-1 justify-between">
        <View className="items-center gap-6">
          <View className="items-center gap-2">
            <Text variant="h1">Informe o código recebido</Text>
            <Text variant="small">
              Insira abaixo o código enviado para o {'\n'}endereço de e-mail
              informado
            </Text>
          </View>

          <InputOtp count={OTP_COUNT} value={otp} onChange={setOtp} />
        </View>

        <View className="mb-12">
          <Button disabled={seconds > 0} onPress={handleResendCode}>
            <Text numberOfLines={1} ellipsizeMode="clip">
              {seconds > 0
                ? `Reenviar código em ${seconds}s...`
                : 'Reenviar código'}
            </Text>
          </Button>
        </View>
      </View>
    </ScreenTemplate>
  );
};

export default RecoveryCode;
