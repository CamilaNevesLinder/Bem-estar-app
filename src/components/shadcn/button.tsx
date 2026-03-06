import { Pressable, View } from 'react-native';

import { cva, type VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react-native';

import { Icon } from '@/components/shadcn/icon';
import { TextClassContext } from '@/components/shadcn/text';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'group relative shrink-0 flex-row items-center justify-center rounded-full disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary active:opacity-90',
        ghost: '',
        secondary: 'bg-secondary-soft active:opacity-90',
        link: '',
      },
      size: {
        default: 'px-20 py-4',
        sm: 'px-4 py-2',
        lg: 'px-8 py-4',
        icon: 'p-2.5',
        link: 'm-0 px-0 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const buttonTextVariants = cva(
  'font-inter font-inter-semibold text-[16px] leading-[16px]',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground',
        secondary: 'text-secondary-foreground-soft',
        ghost: 'text-primary-foreground',
        link: 'font-inter-semibold text-xs text-primary',
      },
      size: {
        default: '',
        sm: 'text-[15px]',
        lg: 'text-[17px]',
        icon: '',
        link: '',
      },
      disabled: {
        true: 'text-secondary-foreground-soft',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonProps = React.ComponentProps<typeof Pressable> &
  VariantProps<typeof buttonVariants> & {
    iconLeft?: LucideIcon;
    iconRight?: LucideIcon;
    iconColor?: string;
  };

function Button({
  className,
  variant,
  size,
  iconLeft,
  iconRight,
  iconColor,
  children,
  ...props
}: ButtonProps) {
  const resolvedSize =
    variant === 'link' ? (size ?? 'link') : (size ?? 'default');

  return (
    <TextClassContext.Provider
      value={buttonTextVariants({
        variant,
        size: resolvedSize,
        disabled: props.disabled,
      })}
    >
      <Pressable
        accessibilityRole="button"
        className={cn(
          'relative flex-row items-center justify-center',
          buttonVariants({ variant, size: resolvedSize }),
          props.disabled && 'bg-secondary-soft',
          (iconLeft || iconRight) && 'px-16',
          className,
        )}
        {...props}
      >
        {(state) => {
          const content =
            typeof children === 'function' ? children(state) : children;

          return (
            <>
              {iconLeft && (
                <View className="absolute bottom-0 left-4 top-0 justify-center">
                  <Icon as={iconLeft} className="size-5 text-white" />
                </View>
              )}

              <View className="items-center justify-center">{content}</View>

              {iconRight && (
                <View className="absolute bottom-0 right-4 top-0 justify-center">
                  <Icon as={iconRight} color={iconColor} className="size-5" />
                </View>
              )}
            </>
          );
        }}
      </Pressable>
    </TextClassContext.Provider>
  );
}

export { Button };
export type { ButtonProps };
