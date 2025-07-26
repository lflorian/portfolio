'use client';

import { useIntersectionObserver } from '@/lib/useIntersectionObserver';
import { ReactNode } from 'react';

type AnimationType = 
  | 'fade' 
  | 'fadeUp' 
  | 'fadeDown' 
  | 'fadeLeft' 
  | 'fadeRight'
  | 'scale' 
  | 'scaleAndFade'
  | 'slideUp'
  | 'slideDown';

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  animation?: AnimationType;
  className?: string;
}

const animationClasses = {
  fade: {
    initial: 'opacity-0',
    final: 'opacity-100'
  },
  fadeUp: {
    initial: 'opacity-0 translate-y-8',
    final: 'opacity-100 translate-y-0'
  },
  fadeDown: {
    initial: 'opacity-0 -translate-y-8',
    final: 'opacity-100 translate-y-0'
  },
  fadeLeft: {
    initial: 'opacity-0 translate-x-8',
    final: 'opacity-100 translate-x-0'
  },
  fadeRight: {
    initial: 'opacity-0 -translate-x-8',
    final: 'opacity-100 translate-x-0'
  },
  scale: {
    initial: 'scale-90',
    final: 'scale-100'
  },
  scaleAndFade: {
    initial: 'opacity-0 scale-90',
    final: 'opacity-100 scale-100'
  },
  slideUp: {
    initial: 'translate-y-full',
    final: 'translate-y-0'
  },
  slideDown: {
    initial: '-translate-y-full',
    final: 'translate-y-0'
  }
};

export function AnimatedElement({ 
  children, 
  delay = 0, 
  duration = 400,
  animation = 'scaleAndFade',
  className = ''
}: AnimatedElementProps) {
  const { ref, hasIntersected } = useIntersectionObserver();
  const animClasses = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-${duration} ease-in-out ${
        hasIntersected ? animClasses.final : animClasses.initial
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
}
