import { useState } from 'react';
import { View } from 'react-native';

import { Button } from '@/components/shadcn/button';
import { Progress } from '@/components/shadcn/progress';
import { Text } from '@/components/shadcn/text';
import { cn } from '@/lib/utils';

import { OnboardingCard } from './OnboardingCard';

const MOODS = [
  { id: 1, emoji: '😴', label: 'Exausto', value: 5 },
  { id: 2, emoji: '😔', label: 'Ruim', value: 25 },
  { id: 3, emoji: '😐', label: 'Neutro', value: 50 },
  { id: 4, emoji: '😊', label: 'Bem', value: 75 },
  { id: 5, emoji: '🤩', label: 'Excelente', value: 100 },
];

interface StepOneProps {
  isActive: boolean;
  onContinue: () => void;
}

export const StepOne = ({ isActive, onContinue }: StepOneProps) => {
  const [selectedMood, setSelectedMood] = useState(MOODS[2]);

  return (
    <OnboardingCard
      title="Como você se sente hoje?"
      description="Documente seu humor em uma seção de diário pessoal!"
      isActive={isActive}
      onContinue={onContinue}
    >
      <Text className="flex h-20 text-4xl shadow-md">{selectedMood.emoji}</Text>

      <Progress value={selectedMood.value} className="mb-5" />

      <View className="flex-row justify-between gap-4">
        {MOODS.map((mood) => (
          <Button
            key={mood.id}
            variant="ghost"
            onPress={() => setSelectedMood(mood)}
            className={cn('m-0 mb-4 flex-row rounded-full bg-transparent p-0')}
          >
            <View
              className={cn(
                'h-12 items-center justify-center',
                selectedMood.id === mood.id &&
                  'jus h-12 w-12 rounded-full bg-[#FFD4A3]',
              )}
            >
              <Text className="text-xl">{mood.emoji}</Text>
            </View>

            <Text className="font-inter text-xs text-ring">{mood.label}</Text>
          </Button>
        ))}
      </View>
    </OnboardingCard>
  );
};
