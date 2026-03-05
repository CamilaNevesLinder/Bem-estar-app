import { View } from 'react-native';

import { Button } from '@/components/shadcn/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/card';
import { Text } from '@/components/shadcn/text';

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
    <View>
      <Card className="mt-[24px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>

        {isActive && (
          <>
            <CardContent>{children}</CardContent>

            {onContinue && (
              <Button
                onPress={onContinue}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full px-8 py-4"
              >
                <Text>Continuar</Text>
              </Button>
            )}
          </>
        )}
      </Card>
    </View>
  );
};
