import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CountUp = ({
  start = 1,
  end = 34,
  time = 2000,
  suffix = 'M Videos',
  className,
}) => {
  const [count, setCount] = useState(start);
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust the threshold as needed
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const totalSteps = 60; // Number of steps to animate
      const stepDuration = time / totalSteps;
      const stepSize = (end - start) / totalSteps;
      let currentCount = start;

      const counter = setInterval(() => {
        currentCount += stepSize;
        if (currentCount >= end) {
          currentCount = end;
          clearInterval(counter);
        }
        setCount(currentCount);
      }, stepDuration);

      return () => clearInterval(counter);
    }
  }, [inView, start, end, time]);

  return (
    <div ref={ref} className={['text-4xl', className].join(' ')}>
      {Math.round(count)}
      {suffix}
    </div>
  );
};

export default CountUp;
