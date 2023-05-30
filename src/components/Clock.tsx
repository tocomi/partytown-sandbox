import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

/**
 * 動作の差分がわかりやすいように 10ms ごとに更新される時刻を表示する
 */
export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <h1 style={{ width: 'fit-content', paddingLeft: 40 }}>
      {dayjs(date).format('hh:mm:ss.SSS').slice(0, 10)}
    </h1>
  );
};
