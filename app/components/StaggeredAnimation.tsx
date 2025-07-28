'use client';

import { AnimatedElement } from './AnimatedElement';
import { ReactNode, Children } from 'react';

interface StaggeredAnimationProps {
  children: ReactNode;
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
  const childrenArray = Children.toArray(children);
  
  return (
    <>
      {childrenArray.map((child, index) => (
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
