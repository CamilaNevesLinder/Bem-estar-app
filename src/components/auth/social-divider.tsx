import { View } from 'react-native';

import { Separator } from '@/components/shadcn/separator';
import { Text } from '@/components/shadcn/text';

type Props = {
  label?: string;
};

export const SocialDivider = ({ label = 'OU CONTINUE COM' }: Props) => {
  return (
    <View className="flex-row items-center gap-3">
      <Separator className="flex-1" />
      <Text variant="subtle">{label}</Text>
      <Separator className="flex-1" />
    </View>
  );
};
