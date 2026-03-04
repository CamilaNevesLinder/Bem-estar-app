import { Link } from 'expo-router';

import { Text } from '@/components/shadcn/text';

type TermsAgreementTextProps = {
  className?: string;
};

export const TermsAgreementText = ({ className }: TermsAgreementTextProps) => {
  return (
    <Text variant="small" className={className ?? 'text-center text-[13px]'}>
      Ao continuar, você concorda com nossos{'\n'}
      <Link href="/" asChild>
        <Text className="text-[13px] text-primary">Termos de Uso</Text>
      </Link>
      {' e '}
      <Link href="/" asChild>
        <Text className="text-[13px] text-primary">
          Política de Privacidade
        </Text>
      </Link>
      {'.'}
    </Text>
  );
};
