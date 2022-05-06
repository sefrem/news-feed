import { useCallback, useLayoutEffect, useRef, useState } from "react";

const getTimeDiff = (date: number) =>
  Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);

export const useTimePassed = (date: number, isToday: boolean) => {
  const [timePassed, setTimePassed] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clear = useCallback(() => {
    if (intervalRef.current) {
      intervalRef && clearInterval(intervalRef.current);
    }
  }, []);

  useLayoutEffect(() => {
    if (isToday) {
      setTimePassed(getTimeDiff(date));
      intervalRef.current = setInterval(() => {
        setTimePassed(getTimeDiff(date));
      }, 1000);
    }
  }, [date, isToday]);

  return { timePassed, clear };
};
