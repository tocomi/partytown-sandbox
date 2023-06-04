import { useEffect, useMemo, useState } from 'react';

export const MovingPartyFace = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((elapsedTime) => elapsedTime + 2);
    }, 4);
    return () => clearInterval(timer);
  }, []);

  const y = useMemo(() => {
    const toBottom = Math.floor(elapsedTime / window.innerHeight) % 2 === 0;
    const position = elapsedTime % window.innerHeight;
    return toBottom ? position : window.innerHeight - position;
  }, [elapsedTime]);

  const x = useMemo(() => {
    const toRight = Math.floor(elapsedTime / window.innerWidth) % 2 === 0;
    const position = elapsedTime % window.innerWidth;
    return toRight ? position : window.innerWidth - position;
  }, [elapsedTime]);

  return (
    <p style={{ position: 'fixed', fontSize: 120, top: y - 150, left: x }}>
      🥳
    </p>
  );
};
