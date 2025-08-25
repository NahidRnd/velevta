'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  duration?: number; 
}

const Counter = ({ target, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50); 
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#222' }}>
      {count}+
    </div>
  );
};

export default Counter;
