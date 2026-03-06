import { Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Check } from 'lucide-react-native';

import { Icon } from '@/components/shadcn/icon';

import { OnboardingCard } from './OnboardingCard';

interface StepThreeProps {
  isActive: boolean;
  onContinue?: () => void;
}

const TODOS = [
  { id: 1, label: 'Rotina diária, semanal e mensal' },
  { id: 2, label: 'Projetos' },
  { id: 3, label: 'Vida financeira' },
  { id: 4, label: 'Saúde' },
  { id: 5, label: 'Sonhos' },
];

export const StepThree = ({ isActive, onContinue }: StepThreeProps) => {
  return (
    <View>
      <OnboardingCard
        title="Vamos organizar a sua rotina!"
        description="Crie hábitos de organização alinhando intenções e afazeres!"
        isActive={isActive}
      >
        <View className="flex flex-col gap-5">
          {TODOS.map((item) => (
            <View key={item.id} className="flex-row items-center gap-2">
              <LinearGradient
                colors={['#ff8c00', '#ffd4a3']}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 999,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon as={Check} size={14} color="#FFF" />
              </LinearGradient>
              <Text className="text-[13px] text-neutral-500">{item.label}</Text>
            </View>
          ))}
        </View>
      </OnboardingCard>
    </View>
  );
};
