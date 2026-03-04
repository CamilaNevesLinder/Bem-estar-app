import * as React from 'react';
import { Text as RNText, type Role } from 'react-native';

import * as Slot from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const textVariants = cva(
  cn(
    'text-center font-inter text-sm font-normal leading-[16px] tracking-[0px]',
  ),
  {
    variants: {
      variant: {
        default: 'text-base text-neutral-500',
        primary: 'font-inter-semibold text-xl text-primary',

        label: 'font-inter-semibold text-xs text-[#8C8C8C]',
        small: 'text-sm leading-4 text-zinc-400',
        h1: 'text-center font-inter-semibold text-lg text-neutral-600',
        h2: 'text-center font-inter-medium text-lg text-zinc-400',

        subtle:
          'text-center font-inter-medium text-[11.5px] text-semantic-fg-subtle',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type TextVariantProps = VariantProps<typeof textVariants>;
type TextVariant = NonNullable<TextVariantProps['variant']>;

const ROLE: Partial<Record<TextVariant, Role>> = {
  h1: 'heading',
};

const ARIA_LEVEL: Partial<Record<TextVariant, string>> = {
  h1: '1',
};

const TextClassContext = React.createContext<string | undefined>(undefined);

function Text({
  className,
  asChild = false,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof RNText> &
  TextVariantProps &
  React.RefAttributes<RNText> & {
    asChild?: boolean;
  }) {
  const textClass = React.useContext(TextClassContext);
  const Component = asChild ? Slot.Text : RNText;

  return (
    <Component
      className={cn(textVariants({ variant }), textClass, className)}
      role={variant ? ROLE[variant] : undefined}
      aria-level={variant ? ARIA_LEVEL[variant] : undefined}
      {...props}
    />
  );
}

export { Text, TextClassContext };
