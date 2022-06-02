import { useCallback, useLayoutEffect, useRef, useState } from "react";

const SECONDMS = 1000;
const MINUTEMS = 60000;
const MINUTE = 60;
const HOUR = 3600;

const getTimeDiff = (date: number) =>
  Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);

export const useTimePassed = (date: number) => {
  const [tick, setTick] = useState(SECONDMS);
  const [timePassed, setTimePassed] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isToday = new Date(date).getDate() === new Date().getDate();

  const clear = useCallback(() => {
    if (intervalRef.current) {
      intervalRef && clearInterval(intervalRef.current);
    }
  }, []);

  const handleCount = useCallback(
    (date: number) => {
      if (!isToday) {
        clear();
        setTimePassed("");
        return;
      }
      const diff = getTimeDiff(date);
      if (diff < MINUTE) {
        setTimePassed(`${diff}s`);
      }
      if (diff === MINUTE || (diff > MINUTE && diff < HOUR)) {
        setTimePassed(`${Math.trunc(diff / MINUTE)}m`);
        setTick(MINUTEMS);
      }
      if (diff > HOUR) {
        setTimePassed(`${Math.trunc(diff / MINUTE)}m`);
        setTick(MINUTEMS);
      }
    },
    [clear, isToday]
  );

  useLayoutEffect(() => {
    if (!isToday) {
      clear();
      return;
    }
    handleCount(date);
    intervalRef.current = setInterval(() => {
      handleCount(date);
    }, tick);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [clear, date, handleCount, isToday, tick]);

  return { timePassed, clear };
};
