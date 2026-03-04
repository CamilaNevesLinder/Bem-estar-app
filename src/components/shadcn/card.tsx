import { View, type ViewProps } from 'react-native';

import { Text, TextClassContext } from '@/components/shadcn/text';
import { cn } from '@/lib/utils';
import { SHADOWS } from '@/utils';

function Card({ className, ...props }: ViewProps & React.RefAttributes<View>) {
  return (
    <TextClassContext.Provider value="text-card-foreground">
      <View
        className={cn(
          'relative mb-[22px] flex flex-col gap-6 rounded-xl border-none bg-card py-6 shadow-black/5',
          className,
        )}
        style={SHADOWS.soft}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

function CardHeader({
  className,
  ...props
}: ViewProps & React.RefAttributes<View>) {
  return (
    <View className={cn('flex flex-col gap-1.5 px-6', className)} {...props} />
  );
}

function CardTitle({
  className,
  ...props
}: React.ComponentProps<typeof Text> & React.RefAttributes<Text>) {
  return (
    <Text
      role="heading"
      aria-level={3}
      className={cn(
        'h-8 font-inter-semibold text-lg leading-none text-primary',
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.ComponentProps<typeof Text> & React.RefAttributes<Text>) {
  return <Text className={cn('text-sm text-ring', className)} {...props} />;
}

function CardContent({
  className,
  ...props
}: ViewProps & React.RefAttributes<View>) {
  return <View className={cn('px-6', className)} {...props} />;
}

function CardFooter({
  className,
  ...props
}: ViewProps & React.RefAttributes<View>) {
  return (
    <View
      className={cn('flex flex-row items-center px-6', className)}
      {...props}
    />
  );
}

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
