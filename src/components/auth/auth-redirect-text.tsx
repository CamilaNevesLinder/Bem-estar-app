import { Text } from '@/components/shadcn/text';
import { cn } from '@/lib/utils';

type Props = {
  label: string;
  actionText: string;
  onPress: () => void;
  className?: string;
};

export const AuthRedirectText = ({
  label,
  actionText,
  onPress,
  className,
}: Props) => {
  return (
    <Text className={cn('pb-12 text-[14px]', className)}>
      {label}{' '}
      <Text
        className="font-inter-semibold text-[14px] text-primary"
        onPress={onPress}
      >
        {actionText}
      </Text>
    </Text>
  );
};
