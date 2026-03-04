import { useState } from 'react';
import { View } from 'react-native';

import { Button } from '@/components/shadcn/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/card';
import { Progress } from '@/components/shadcn/progress';
import { Svg } from '@/components/shadcn/svg';
import { Text } from '@/components/shadcn/text';
import { ScreenTemplate } from '@/components/templates';
import { cn } from '@/lib/utils';
import HorizontalBrand from 'assets/images/horizontal-brand.svg';

const Welcome = () => {
  const MOODS = [
    { id: 1, emoji: '😴', label: 'Exausto', value: 5 },
    { id: 2, emoji: '😔', label: 'Ruim', value: 25 },
    { id: 3, emoji: '😐', label: 'Neutro', value: 50 },
    { id: 4, emoji: '😊', label: 'Bem', value: 75 },
    { id: 5, emoji: '🤩', label: 'Excelente', value: 100 },
  ];

  const [selectedMood, setSelectedMood] = useState(MOODS[3]);
  const [step, setStep] = useState(1);

  return (
    <ScreenTemplate
      navbar={{
        leftContent: <Text variant="h2">Olá, Júlia!</Text>,
        rightContent: <Svg as={HorizontalBrand} className="w-24" />,
      }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Como você se sente hoje?</CardTitle>
          <CardDescription>
            Documente seu humor em uma {'\n'} seção de diário pessoal!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Text className="flex h-20 text-4xl shadow-md">
            {selectedMood.emoji}
          </Text>
          <Progress value={selectedMood.value} className="mb-5" />

          <View className="flex-row justify-between gap-4">
            {MOODS.map((mood) => {
              return (
                <Button
                  key={mood.id}
                  onPress={() => setSelectedMood(mood)}
                  className={cn('m-0 flex-row rounded-full bg-transparent p-0')}
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

                  <Text className="font-inter text-xs text-ring">
                    {mood.label}
                  </Text>
                </Button>
              );
            })}
          </View>
        </CardContent>
      </Card>
      <Button className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 rounded-full bg-primary px-8 py-4">
        <Text className="h-">Continuar</Text>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Quais hobbies já pratica?</CardTitle>
          <CardDescription className="mb-4">
            Selecione também os que {'\n'} gostaria de iniciar!
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Vamos organizar a sua rotina!</CardTitle>
          <CardDescription mb-4>
            Crie hábitos de organização alinhando intenções e afazeres!
          </CardDescription>
        </CardHeader>
      </Card>
    </ScreenTemplate>
  );
};

export default Welcome;
