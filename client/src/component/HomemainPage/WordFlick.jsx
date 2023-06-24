import React, { useEffect, useState } from 'react';
import style from "./Winnow.module.css"
const WordFlick = () => {
  const words = [
    'Real Estate',
    'Venture Capital',
    'Corporate Bonds',
    'Alternate Investments'
  ];
  const [part, setPart] = useState('');
  const [i, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 20;
  const speed = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setIndex((i + 1) % words.length);
          setOffset(0);
        }
      }
      const newPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          setOffset(offset + 1);
        } else {
          setOffset(offset - 1);
        }
      }
      setPart(newPart);
    }, speed);

    return () => clearInterval(interval);
  }, [i, offset, forwards, skipCount, words]);

  return <span>{part}</span>;
};

export default WordFlick;
