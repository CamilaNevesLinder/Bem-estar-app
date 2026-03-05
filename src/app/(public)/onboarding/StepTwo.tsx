import { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';

import {
  Bike,
  BookOpen,
  Camera,
  Dumbbell,
  Heart,
  Music,
  Palette,
  Waves,
} from 'lucide-react-native';

import { Button } from '@/components/shadcn/button';
import { Icon } from '@/components/shadcn/icon';
import { cn } from '@/lib/utils';

import { OnboardingCard } from './OnboardingCard';

interface stepTwoProps {
  isActive: boolean;
  onContinue: () => void;
}

const FACTORS = [
  { id: 1, label: 'Ciclismo', icon: Bike },
  { id: 2, label: 'Academia', icon: Dumbbell },
  { id: 3, label: 'Corrida', icon: Heart },
  { id: 4, label: 'Natação', icon: Waves },
  { id: 5, label: 'Yoga' },
  { id: 6, label: 'Música', icon: Music },
  { id: 7, label: 'Arte e pintura', icon: Palette },
  { id: 8, label: 'Leitura', icon: BookOpen },
  { id: 9, label: 'Fotografia', icon: Camera },
];

export const StepTwo = ({ isActive, onContinue }: stepTwoProps) => {
  return (
    <OnboardingCard
      title="Quais hobbies já pratica?"
      description="Selecione também os que gostaria de iniciar!"
      isActive={isActive}
      onContinue={onContinue}
    >
      <View className="flex flex-row flex-wrap justify-between gap-[13px]">
        {FACTORS.map((factor) => (
          <SelectedButton
            key={factor.id}
            label={factor.label}
            icon={factor.icon}
          ></SelectedButton>
        ))}
      </View>
    </OnboardingCard>
  );
};

const SelectedButton = ({ label, icon }: { label: string; icon: any }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View
      className={cn(
        'mb-[12px] h-[89.12px] w-[84.06px] items-center justify-center rounded-md border-[1px]',
        isActive ? 'border-primary' : 'border-border',
      )}
    >
      <View className="flex-col items-center">
        <Button
          onPress={() => setIsActive(!isActive)}
          className="h-[36px] w-[36px] items-center rounded-sm bg-[#FFD4A3]/30 p-0"
        >
          {icon && (
            <Icon
              as={icon}
              size={18}
              color={!isActive ? '#ff8c00' : '#000'}
              className="p-[9px]"
            />
          )}
        </Button>
        <Text numberOfLines={1} className="mt-2 text-center text-[12px]">
          {label}
        </Text>
      </View>
    </View>
  );
};
