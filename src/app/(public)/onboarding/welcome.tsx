import { useState } from 'react';
import { LayoutAnimation, View } from 'react-native';

import { ArrowRight } from 'lucide-react-native';

import { Button } from '@/components/shadcn/button';
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
      contentClassName="mt-2"
      keyboardAware
      variant="scroll"
      navbar={{
        leftContent: <Text variant="h2">Olá, Júlia!</Text>,
        rightContent: <Svg as={HorizontalBrand} className="w-24" />,
      }}
    >
      <View className="flex-1 justify-between">
        <View className="flex-1 items-center justify-center gap-6">
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
      </View>

      {activeStep === 3 && (
        <Button
          iconRight={ArrowRight}
          iconColor="#FFF"
          className="px-19 mb-12 w-[220px] self-center rounded-full bg-primary py-3"
        >
          <Text numberOfLines={1} className="text-4 text-white">
            Vamos lá
          </Text>
        </Button>
      )}

      {activeStep !== 3 && (
        <View className="bottom-0 w-full flex-row justify-between self-center bg-white">
          <Button variant="ghost" className="mb-12 mt-5 p-4 py-3">
            <Text className="text-base text-primary">Pular</Text>
          </Button>
          <Button
            variant="secondary"
            iconRight={ArrowRight}
            iconColor="#adadad"
            className="mb-12 mt-5 bg-[#F3F2F7] py-3 pl-4 pr-12"
          >
            <Text className="text-secondary-foreground-soft">Vamos lá!</Text>
          </Button>
        </View>
      )}
    </ScreenTemplate>
  );
};

export default Welcome;
