import { View } from 'react-native';

import { AuthProvider } from '@/types';

import { SocialButtons } from './social-buttons';
import { SocialDivider } from './social-divider';

type Props = {
  onSocialPress: (provider: AuthProvider) => void;
  dividerLabel?: string;
};

export const SocialAuthSection = ({ onSocialPress, dividerLabel }: Props) => {
  return (
    <View className="gap-5">
      <SocialDivider label={dividerLabel} />
      <SocialButtons onPress={onSocialPress} />
    </View>
  );
};
