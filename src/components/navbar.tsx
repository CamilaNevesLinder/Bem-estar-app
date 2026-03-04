import * as React from 'react';
import { Platform, Pressable, View } from 'react-native';

import { cva, type VariantProps } from 'class-variance-authority';
import { useNavigation } from 'expo-router';
import { ChevronLeft, User } from 'lucide-react-native';

import { Icon } from '@/components/shadcn/icon';
import { Text } from '@/components/shadcn/text';
import { cn } from '@/lib/utils';
import { SHADOWS } from '@/utils';

const navbarVariants = cva(
  'h-16 w-full flex-row items-center justify-between bg-background px-4',
  {
    variants: {
      variant: {
        default: '',
        home: '',
      },
      size: {
        default: 'py-3',
        sm: 'py-2',
        lg: 'py-4',
      },
      shadow: {
        default: '',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shadow: 'default',
    },
  },
);

export type NavbarProps = VariantProps<typeof navbarVariants> & {
  title?: string;
  showBack?: boolean;
  centerContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  onLeftPress?: () => void;
};

export const Navbar = ({
  variant = 'default',
  size = 'default',
  shadow = 'default',
  title,
  showBack,
  leftContent,
  rightContent,
  centerContent,
  onLeftPress,
}: NavbarProps) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  const iconColor = variant === 'home' ? 'text-neutral-500' : 'text-primary';

  function handleBack() {
    if (onLeftPress) return onLeftPress();
    if (canGoBack) navigation.goBack();
  }

  return (
    <View className="z-10">
      {shadow !== 'none' && Platform.OS === 'ios' && (
        <View className="absolute -top-[20px] left-0 right-0 z-[20] h-[20px] bg-background" />
      )}

      <View
        className={cn(navbarVariants({ variant, size, shadow }))}
        style={shadow !== 'none' ? SHADOWS.bottomOnly : undefined}
      >
        <View className="mx-4 min-w-[48px] items-start justify-center">
          {leftContent ? (
            leftContent
          ) : variant === 'home' ? (
            <Pressable onPress={onLeftPress}>
              <Icon as={User} size={24} className={iconColor} />
            </Pressable>
          ) : (showBack ?? canGoBack) ? (
            <Pressable onPress={handleBack}>
              <Icon as={ChevronLeft} size={24} className={iconColor} />
            </Pressable>
          ) : null}
        </View>

        <View className="flex-1 items-center justify-center">
          {centerContent ??
            (title && (
              <Text variant="h1" className="text-primary">
                {title}
              </Text>
            ))}
        </View>

        <View className="mx-4 min-w-[48px] items-end justify-center">
          {rightContent}
        </View>
      </View>
    </View>
  );
};
