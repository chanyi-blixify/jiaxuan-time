import React, { useEffect, useState } from "react";

interface NumberCountProps {
  startValue: number; // Starting value of the countdown
  endValue: number; // Ending value of the countdown
  duration: number; // Duration of the countdown in milliseconds
}

const Counter: React.FC<NumberCountProps> = ({
  startValue,
  endValue,
  duration,
}) => {
  const [count, setCount] = useState<number>(startValue);

  useEffect(() => {
    let startTime: number;
    let requestId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const decrement = Math.floor(
        ((startValue - endValue) / duration) * progress
      );

      if (decrement >= startValue - endValue) {
        setCount(endValue);
        cancelAnimationFrame(requestId);
      } else {
        setCount(startValue - decrement);
        requestId = requestAnimationFrame(animateCount);
      }
    };

    requestId = requestAnimationFrame(animateCount);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [startValue, endValue, duration]);

  return <div className="text-l sm:text-3xl font-bold">{count}</div>;
};

export default Counter;
