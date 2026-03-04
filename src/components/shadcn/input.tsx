import React, { forwardRef } from 'react';
import { TextInput, type TextInputProps } from 'react-native';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  'h-12 rounded-md border-2 pl-4 pr-12 font-inter-medium text-neutral-900 placeholder:text-secondary-foreground-soft disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-neutral-100 focus:border-primary',
        primary: 'border-primary bg-white focus:border-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type InputProps = TextInputProps & VariantProps<typeof inputVariants>;

const Input = forwardRef<TextInput, InputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        className={cn(inputVariants({ variant }), className)}
        selectionColor="#FF8C00"
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export { Input };
export type { InputProps };
