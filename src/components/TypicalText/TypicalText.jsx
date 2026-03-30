import React, { useState, useEffect, useMemo } from 'react';

/**
 * Same props as react-typical's Typical: loop, wrapper, steps.
 * steps: [string, delayMs, string, delayMs, ...]
 */
export default function Typical({ loop = Infinity, wrapper: W = 'span', steps = [], className, ...rest }) {
  const stepsKey = JSON.stringify(steps);
  const pairs = useMemo(() => {
    const list = JSON.parse(stepsKey);
    const out = [];
    for (let j = 0; j < list.length; j += 2) {
      out.push({ text: list[j], delay: list[j + 1] ?? 1500 });
    }
    return out;
  }, [stepsKey]);

  const [i, setI] = useState(0);

  useEffect(() => {
    setI(0);
  }, [stepsKey]);

  useEffect(() => {
    if (!pairs.length) return undefined;
    if (!loop && i >= pairs.length - 1) return undefined;

    const { delay } = pairs[i];
    const t = setTimeout(() => {
      setI((prev) => {
        if (prev + 1 >= pairs.length) return loop ? 0 : prev;
        return prev + 1;
      });
    }, delay);
    return () => clearTimeout(t);
  }, [i, pairs, loop]);

  const text = pairs[i]?.text ?? '';

  return (
    <W className={className} {...rest}>
      {text}
    </W>
  );
}
