import { useState } from 'react';
import { LayoutAnimation, ScrollView, View } from 'react-native';

import { Svg } from '@/components/shadcn/svg';
import { Text } from '@/components/shadcn/text';
import { ScreenTemplate } from '@/components/templates';
import HorizontalBrand from 'assets/images/horizontal-brand.svg';

import { StepOne } from './StepOne';
import { StepThree } from './StepThree';
import { StepTwo } from './StepTwo';

const Welcome = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepChange = (step: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveStep(step);
  };
  return (
    <ScreenTemplate
      variant="scroll"
      navbar={{
        leftContent: <Text variant="h2">Olá, Júlia!</Text>,
        rightContent: <Svg as={HorizontalBrand} className="w-24" />,
      }}
    >
      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="space-y-6 pb-20">
          <StepOne
            isActive={activeStep === 1}
            onContinue={() => handleStepChange(2)}
          />

          <StepTwo
            isActive={activeStep === 2}
            onContinue={() => handleStepChange(3)}
          />

          <StepThree isActive={activeStep === 3} />
        </View>
      </ScrollView>
    </ScreenTemplate>
  );
};

export default Welcome;
