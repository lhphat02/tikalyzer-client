import React, { useState, useRef, useEffect } from 'react';

/**
 * Animation hook for dynamic placeholder display
 *
 * @param {*} textArray
 * @param {*} interval
 * @returns
 */
const useDynamicPlaceholder = (textArray, interval = 150) => {
  const [currentText, setCurrentText] = useState(textArray[0]);
  const currentIndexRef = useRef(0); // hold the index of current string
  const currentLoadedIndexRef = useRef(0); // hold the index of current string's character
  const timerIdRef = useRef(null);

  useEffect(() => {
    timerIdRef.current = setInterval(() => {
      if (currentText.length === 0) {
        let nextIndex = currentIndexRef.current + 1;
        currentIndexRef.current = nextIndex >= textArray.length ? 0 : nextIndex; // then reset to first string
        currentLoadedIndexRef.current = 0; // Reset to first char
      }
      if (
        currentLoadedIndexRef.current !==
        textArray[currentIndexRef.current].length
      ) {
        currentLoadedIndexRef.current = currentLoadedIndexRef.current + 1;
        setCurrentText(
          textArray[currentIndexRef.current].slice(
            0,
            currentLoadedIndexRef.current
          )
        );
      } else {
        setCurrentText((text) => text.slice(0, -1)); // Once reaching the full text, decrease it until length is 0
      }
    }, interval);

    return () => {
      if (timerIdRef.current) clearInterval(timerIdRef.current);
    };
  }, [textArray, interval, currentText]);

  return currentText;
};

export default useDynamicPlaceholder;
