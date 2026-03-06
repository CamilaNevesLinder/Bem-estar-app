import { useState } from 'react';
import { Text, View } from 'react-native';

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
import Vector from '../../../../assets/icons/Vector.svg';

interface StepTwoProps {
  isActive: boolean;
  onContinue: () => void;
}

const FACTORS = [
  { id: 1, label: 'Ciclismo', icon: Bike },
  { id: 2, label: 'Academia', icon: Dumbbell },
  { id: 3, label: 'Corrida', icon: Heart },
  { id: 4, label: 'Natação', icon: Waves },
  { id: 5, label: 'Yoga', svg: Vector },
  { id: 6, label: 'Música', icon: Music },
  { id: 7, label: 'Arte e pintura', icon: Palette },
  { id: 8, label: 'Leitura', icon: BookOpen },
  { id: 9, label: 'Fotografia', icon: Camera },
];

export const StepTwo = ({ isActive, onContinue }: StepTwoProps) => {
  return (
    <OnboardingCard
      title="Quais hobbies já pratica?"
      description={'Selecione também os que \n gostaria de iniciar!'}
      isActive={isActive}
      onContinue={onContinue}
    >
      <View className="flex flex-row flex-wrap justify-between gap-4">
        {FACTORS.map((factor) => (
          <SelectedButton
            key={factor.id}
            label={factor.label}
            icon={factor.icon}
            svg={factor.svg}
          />
        ))}
      </View>
    </OnboardingCard>
  );
};

const SelectedButton = ({
  label,
  icon,
  svg: SvgIcon,
}: {
  label: string;
  icon?: any;
  svg?: any;
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View
      className={cn(
        'h-[89.12px] w-[84.06px] items-center justify-center rounded-md border-[2px]',
        isActive ? 'border-primary' : 'border-border',
      )}
    >
      <View className="flex-col items-center">
        <Button
          onPress={() => setIsActive(!isActive)}
          className="h-[36px] w-[36px] items-center rounded-sm bg-[#ffd4a3]/30 p-0"
        >
          {icon && <Icon as={icon} size={18} color={'#ff8c00'} />}

          {SvgIcon && <SvgIcon width={18} height={18} />}
        </Button>

        <Text numberOfLines={1} className="mt-2 text-center text-[10px]">
          {label}
        </Text>
      </View>
    </View>
  );
};
