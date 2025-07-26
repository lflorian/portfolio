'use client';

import { useIntersectionObserver } from '@/lib/useIntersectionObserver';
import { ReactNode } from 'react';

interface AnimatedProjectRowProps {
  children: ReactNode;
  delay?: number;
}

export function AnimatedProjectRow({ children, delay = 0 }: AnimatedProjectRowProps) {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-400 ease-in-out ${
        hasIntersected
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-90'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
