import { cssInterop } from 'nativewind';

import { cn } from '@/lib/utils';

type SvgProps = {
  as: React.FC<SvgProps>;
  className?: string;
  size?: number;
};

function SvgImpl({ as: Component, ...props }: any) {
  return <Component {...props} />;
}

cssInterop(SvgImpl, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      color: true,
      opacity: true,
      width: true,
      height: true,
    },
  },
});

export const Svg = ({ as: Component, className, size, ...props }: SvgProps) => {
  return (
    <SvgImpl as={Component} className={cn(className)} size={size} {...props} />
  );
};
