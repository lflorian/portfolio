'use client';

import { AnimatedElement } from './AnimatedElement';
import { ReactNode } from 'react';

interface StaggeredAnimationProps {
  children: ReactNode[];
  staggerDelay?: number;
  animation?: 'fade' | 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'scaleAndFade' | 'slideUp' | 'slideDown';
  duration?: number;
  className?: string;
}

export function StaggeredAnimation({ 
  children, 
  staggerDelay = 75, 
  animation = 'scaleAndFade',
  duration = 400,
  className = ''
}: StaggeredAnimationProps) {
  return (
    <>
      {children.map((child, index) => (
        <AnimatedElement
          key={index}
          delay={index * staggerDelay}
          animation={animation}
          duration={duration}
          className={className}
        >
          {child}
        </AnimatedElement>
      ))}
    </>
  );
}
