import * as React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  ViewStyle,
} from 'react-native';

import { cva, type VariantProps } from 'class-variance-authority';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Navbar, NavbarProps } from '@/components/navbar';
import { cn } from '@/lib/utils';

const screenVariants = cva('flex-1', {
  variants: {
    variant: {
      default: '',
      centered: 'items-center justify-center',
      scroll: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface ScreenTemplateProps extends VariantProps<typeof screenVariants> {
  children: React.ReactNode;
  navbar?: NavbarProps | false;
  className?: string;
  contentClassName?: string;
  hideTopSafeArea?: boolean;
  hideBottomSafeArea?: boolean;
  keyboardAware?: boolean;
}

export const ScreenTemplate = ({
  children,
  navbar,
  variant,
  className,
  contentClassName,
  hideTopSafeArea = false,
  hideBottomSafeArea = true,
  keyboardAware = false,
}: ScreenTemplateProps) => {
  const insets = useSafeAreaInsets();

  const safeAreaStyle: ViewStyle = {
    paddingTop: hideTopSafeArea ? 0 : insets.top,
    paddingBottom: hideBottomSafeArea ? 0 : insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  const ContentWrapper = keyboardAware ? ScrollView : View;

  return (
    <View
      className={cn('flex-1 bg-background', className)}
      style={[safeAreaStyle]}
    >
      {navbar !== false && <Navbar {...navbar} />}

      <KeyboardAvoidingView
        style={{ flex: 1, zIndex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ContentWrapper
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
          className={cn(
            'flex-1 bg-background px-6',
            screenVariants({ variant }),
            contentClassName,
          )}
        >
          {children}
        </ContentWrapper>
      </KeyboardAvoidingView>
    </View>
  );
};
