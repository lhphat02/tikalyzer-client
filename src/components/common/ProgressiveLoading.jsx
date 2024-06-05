import React, { useState, useEffect } from 'react';

const getRandomInterval = (min = 2000, max = 7000) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ProgressiveLoading = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentInterval, setCurrentInterval] = useState(getRandomInterval());

  useEffect(() => {
    const changeText = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % texts.length;
        setCurrentInterval(getRandomInterval());
        return nextIndex;
      });
    };

    const intervalId = setInterval(changeText, currentInterval);
    return () => clearInterval(intervalId);
  }, [currentInterval, texts]);

  return (
    <div className="flex items-center justify-center">
      <div className="text-xl font-semibold text-prim-1">
        {texts[currentIndex]}
      </div>
    </div>
  );
};

export default ProgressiveLoading;
