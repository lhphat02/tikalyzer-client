import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex =
      (currentIndex - 1 + React.Children.count(children)) %
      React.Children.count(children);
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % React.Children.count(children);
    setCurrentIndex(newIndex);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      handlePrevClick();
    } else if (event.key === 'ArrowRight') {
      handleNextClick();
    }
  };

  return (
    <div
      className="relative w-full h-full mx-auto border focus:outline-prim-1"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative h-full overflow-hidden">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${
              index === currentIndex
                ? 'translate-x-0'
                : index > currentIndex
                ? 'translate-x-full'
                : '-translate-x-full'
            }`}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute p-2 text-white transform -translate-y-1/2 rounded-full left-8 bg-prim-1 hover:bg-prim-2 top-1/2"
      >
        <ArrowLeftIcon class="h-6 w-6 text-white" />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute p-2 text-white transform -translate-y-1/2 rounded-full right-8 bg-prim-1 hover:bg-prim-2 top-1/2"
      >
        <ArrowRightIcon class="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Carousel;
