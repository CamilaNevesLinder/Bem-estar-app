import { Text, View } from 'react-native';

import { Button } from '@/components/shadcn/button';
import { Checkbox } from '@/components/shadcn/checkbox';

import { OnboardingCard } from './OnboardingCard';

interface StepThreeProps {
  isActive: boolean;
}

const TODOS = [
  { id: 1, label: 'Rotina diária, semanal e mensal' },
  { id: 2, label: 'Projetos' },
  { id: 3, label: 'Vida financeira' },
  { id: 4, label: 'Saúde' },
  { id: 5, label: 'Sonhos' },
];

export const StepThree = ({ isActive }: StepThreeProps) => {
  return (
    <View>
      <OnboardingCard
        title="Vamos organizar a sua rotina!"
        description="Crie hábitos de organização alinhando intenções e afazeres!"
        isActive={isActive}
      >
        <View className="flex flex-col gap-[16px]">
          {TODOS.map((item) => (
            <View key={item.id} className="flex-row items-center">
              <Checkbox
                checked={true}
                disabled={true}
                className="mr-2 h-[20px] w-[20px] rounded-full bg-primary"
              />

              <Text className="text-[13px] text-[#737373]">{item.label}</Text>
            </View>
          ))}
        </View>
      </OnboardingCard>
      <Button className="mt-[19px]">
        <Text className="text-[16px] text-white">Vamos lá!</Text>
      </Button>
    </View>
  );
};
