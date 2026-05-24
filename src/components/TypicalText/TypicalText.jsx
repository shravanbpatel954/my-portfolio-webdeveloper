import React, { useState, useEffect, useMemo } from 'react';
import './TypicalText.css';

/**
 * Typewriter animation compatible with react-typical-style steps:
 * [string, pauseMs, string, pauseMs, ...]
 */
export default function Typical({
  loop = Infinity,
  wrapper: W = 'span',
  steps = [],
  className = '',
  typeSpeed = 65,
  deleteSpeed = 35,
  cursor = true,
  ...rest
}) {
  const stepsKey = JSON.stringify(steps);

  const phrases = useMemo(() => {
    const list = JSON.parse(stepsKey);
    const out = [];
    for (let j = 0; j < list.length; j += 2) {
      if (typeof list[j] === 'string') {
        out.push({ text: list[j], pause: list[j + 1] ?? 1800 });
      }
    }
    return out;
  }, [stepsKey]);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    setPhraseIndex(0);
    setDisplayText('');
    setIsDeleting(false);
  }, [stepsKey]);

  useEffect(() => {
    if (!phrases.length) return undefined;

    if (reducedMotion) {
      setDisplayText(phrases[phraseIndex]?.text ?? '');
      return undefined;
    }

    const target = phrases[phraseIndex]?.text ?? '';
    const pauseAfterType = phrases[phraseIndex]?.pause ?? 1800;

    if (!isDeleting && displayText === target) {
      const hold = setTimeout(() => setIsDeleting(true), pauseAfterType);
      return () => clearTimeout(hold);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => {
        const next = prev + 1;
        if (next >= phrases.length) {
          return loop ? 0 : prev;
        }
        return next;
      });
      return undefined;
    }

    const tick = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(target.slice(0, displayText.length - 1));
      } else {
        setDisplayText(target.slice(0, displayText.length + 1));
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(tick);
  }, [
    displayText,
    isDeleting,
    phraseIndex,
    phrases,
    loop,
    typeSpeed,
    deleteSpeed,
    reducedMotion,
  ]);

  const wrapperClass = [
    className,
    cursor && !reducedMotion ? 'typical-typewriter' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <W className={wrapperClass} aria-live="polite" {...rest}>
      {displayText}
    </W>
  );
}
