import { useEffect, useMemo, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

import { Input } from '../shadcn/input';

type KeyPressEvent = Parameters<
  NonNullable<React.ComponentProps<typeof TextInput>['onKeyPress']>
>[0];

export interface InputOtpProps {
  count?: number;
  value?: string[];
  isDisabled?: boolean;
  onChange?: (value: string[]) => void;
}

export const InputOtp = ({
  count = 5,
  value,
  isDisabled = false,
  onChange,
}: InputOtpProps) => {
  const emptyValue = useMemo(() => Array(count).fill(''), [count]);

  const [internalValue, setInternalValue] = useState<string[]>(
    value && value.length === count ? value : emptyValue,
  );

  const inputsRef = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (!value || value.length !== count) return;
    setInternalValue(value);
  }, [value, count]);

  const updateValue = (newValue: string[]) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleChangeText = (text: string, index: number) => {
    if (isDisabled) return;

    const onlyNumbers = text.replace(/[^0-9]/g, '');

    if (onlyNumbers.length > 1) {
      const pasted = onlyNumbers.slice(0, count).split('');
      const filled = Array(count)
        .fill('')
        .map((_, i) => pasted[i] ?? '');

      updateValue(filled);

      const lastIndex = Math.min(pasted.length - 1, count - 1);
      inputsRef.current[lastIndex]?.focus();
      return;
    }

    const digit = onlyNumbers.slice(0, 1);

    const newValue = [...internalValue];
    newValue[index] = digit;
    updateValue(newValue);

    if (digit && index < count - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: KeyPressEvent, index: number) => {
    if (e.nativeEvent.key !== 'Backspace') return;

    const newValue = [...internalValue];

    if (newValue[index]) {
      newValue[index] = '';
      updateValue(newValue);
      return;
    }

    if (index > 0) {
      newValue[index - 1] = '';
      updateValue(newValue);
      inputsRef.current[index - 1]?.focus();
    }
  };
  const slots = useMemo(() => Array.from({ length: count }), [count]);

  return (
    <View className="flex-row justify-center gap-3">
      {slots.map((_, index) => {
        const digit = internalValue[index];

        return (
          <Input
            key={`otp-slot-${index}`}
            ref={(ref) => {
              inputsRef.current[index] = ref;
            }}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
            editable={!isDisabled}
            variant="primary"
            className="h-12 w-12 p-0 text-center"
          />
        );
      })}
    </View>
  );
};
