import { View } from 'react-native';

import { Button } from '@/components/shadcn/button';
import { Svg } from '@/components/shadcn/svg';
import { AuthProvider } from '@/types';
import appleSvg from 'assets/icons/apple.svg';
import facebookSvg from 'assets/icons/facebook.svg';
import googleSvg from 'assets/icons/google.svg';

type Props = {
  onPress: (provider: AuthProvider) => void;
};

export const SocialButtons = ({ onPress }: Props) => {
  return (
    <View className="mt-2 flex-row items-center justify-center gap-4">
      <Button
        variant="ghost"
        size="icon"
        className="size-12 bg-black"
        onPress={() => onPress('apple')}
      >
        <Svg as={appleSvg} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="size-12 bg-[#0078FF]"
        onPress={() => onPress('facebook')}
      >
        <Svg as={facebookSvg} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="size-12 bg-[#F4F6F7]"
        onPress={() => onPress('google')}
      >
        <Svg as={googleSvg} />
      </Button>
    </View>
  );
};
