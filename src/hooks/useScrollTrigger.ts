'use client';

import { useEffect, useState } from 'react';

export const useScrollTrigger = (triggerValue: number) => {
  const [returnValue, setReturnValue] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > triggerValue) {
        setReturnValue(true);
      } else {
        setReturnValue(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setReturnValue(false);
      });
    };
  }, [triggerValue]);

  return returnValue;
};
