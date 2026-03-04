import { useEffect, useRef, useState } from 'react';
import { Pressable, TextInputProps, View } from 'react-native';

import { Eye, EyeOff } from 'lucide-react-native';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Icon } from '@/components/shadcn/icon';
import { Input } from '@/components/shadcn/input';
import { Text } from '@/components/shadcn/text';

type FormInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  secure?: boolean;
} & TextInputProps;

export const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  secure,
  ...inputProps
}: FormInputProps<T>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <View className="items-start gap-2">
      <Text variant="label">{label}</Text>

      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value = '' },
          fieldState: { error },
        }) => {
          const maskedValue = value
            .split('')
            .map((char, index) => {
              if (isVisible) return char;
              if (index === visibleIndex) return char;
              return '*';
            })
            .join('');

          const handleChange = (text: string) => {
            const previousLength = value.length;
            const newLength = text.length;

            if (newLength > previousLength) {
              const newChar = text.slice(-1);
              const updatedValue = value + newChar;

              onChange(updatedValue);

              const newIndex = updatedValue.length - 1;
              setVisibleIndex(newIndex);

              if (timeoutRef.current) clearTimeout(timeoutRef.current);

              timeoutRef.current = setTimeout(() => {
                setVisibleIndex(null);
              }, 1500) as unknown as NodeJS.Timeout;
            } else {
              onChange(value.slice(0, newLength));
            }
          };

          return (
            <>
              <View className="relative w-full">
                <Input
                  placeholder={placeholder}
                  value={secure && !isVisible ? maskedValue : value}
                  onBlur={onBlur}
                  onChangeText={secure ? handleChange : onChange}
                  {...inputProps}
                />

                {secure && (
                  <Pressable
                    onPress={() => setIsVisible((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <Icon
                      as={isVisible ? Eye : EyeOff}
                      className="size-5 text-secondary-foreground-soft"
                    />
                  </Pressable>
                )}
              </View>

              {error && (
                <Text className="text-xs text-red-500">{error.message}</Text>
              )}
            </>
          );
        }}
      />
    </View>
  );
};
