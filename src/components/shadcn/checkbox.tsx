import { Platform } from 'react-native';

import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { Check } from 'lucide-react-native';

import { Icon } from '@/components/shadcn/icon';
import { cn } from '@/lib/utils';

const DEFAULT_HIT_SLOP = 24;

interface CheckboxProps
  extends
    CheckboxPrimitive.RootProps,
    React.RefAttributes<CheckboxPrimitive.RootRef> {
  checkedClassName?: string;
  indicatorClassName?: string;
  iconClassName?: string;
  className?: string;
}

function Checkbox({
  className,
  checkedClassName,
  indicatorClassName,
  iconClassName,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      {...props}
      className={cn(
        // Estilo base do checkbox
        'dark:bg-input/30 size-4 shrink-0 rounded-[4px] border border-input shadow-sm shadow-black/5',
        // Ajustes específicos para web e mobile
        Platform.select({
          web: 'focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive peer cursor-default outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] disabled:cursor-not-allowed',
          native: 'overflow-hidden',
        }),
        // Estilo quando marcado
        props.checked && cn('border-primary', checkedClassName),
        // Estilo quando desabilitado
        props.disabled && 'opacity-50',
        // Classe extra do usuário
        className,
      )}
      hitSlop={DEFAULT_HIT_SLOP}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          'h-full w-full items-center justify-center bg-primary',
          indicatorClassName,
        )}
      >
        <Icon
          as={Check}
          size={12}
          strokeWidth={Platform.OS === 'web' ? 2.5 : 3.5}
          className={cn('text-primary-foreground', iconClassName)}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
