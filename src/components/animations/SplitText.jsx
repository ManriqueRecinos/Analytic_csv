import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = 'easeOutCubic',
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const words = text.split(' ').map(word => word.split(''));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  const [springs, api] = useSprings(letters.length, i => ({
    from: animationFrom,
    to: animationFrom,
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      api.start(i => ({
        to: animationTo,
        delay: i * delay,
        config: { easing },
        onRest: () => {
          animatedCount.current++;
          if (animatedCount.current === letters.length && onLetterAnimationComplete) {
            onLetterAnimationComplete();
          }
        },
      }));
    }
  }, [inView]);

  let count = 0;

  return (
    <div
      className={`split-text ${className}`}
      ref={ref}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: textAlign }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ marginRight: '0.25em', display: 'inline-flex' }}>
          {word.map((letter, j) => {
            const index = count++;
            return (
              <animated.span key={index} style={springs[index]}>
                {letter}
              </animated.span>
            );
          })}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
