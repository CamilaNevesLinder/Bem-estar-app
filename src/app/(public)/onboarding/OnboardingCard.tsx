import { Button } from '@/components/shadcn/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/card';
import { Text } from '@/components/shadcn/text';
import { cn } from '@/lib/utils';

interface OnboardingCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  isActive: boolean;
  onContinue?: () => void;
}

export const OnboardingCard = ({
  title,
  description,
  children,
  isActive,
  onContinue,
}: OnboardingCardProps) => {
  return (
    <Card className={cn('w-full', isActive && 'mb-4')}>
      <CardHeader className="gap-2.5">
        <CardTitle numberOfLines={2}>{title}</CardTitle>
        {description && (
          <CardDescription numberOfLines={2}>{description}</CardDescription>
        )}
      </CardHeader>

      {isActive && (
        <>
          <CardContent>{children}</CardContent>

          {onContinue && (
            <Button
              onPress={onContinue}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full px-3 py-2"
            >
              <Text>Continuar</Text>
            </Button>
          )}
        </>
      )}
    </Card>
  );
};
