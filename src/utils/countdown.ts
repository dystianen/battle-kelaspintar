import { useEffect, useRef, useState } from 'react';

const useCountdown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());
  const intvl = useRef<any>(null);

  useEffect(() => {
    intvl.current = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(intvl.current);
  }, [countDownDate]);

  // calculate time left
  let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    days = 0; hours = 0; minutes = 0; seconds = 0
    clearInterval(intvl.current)
  }

  return [days, hours, minutes, seconds];
};

export default useCountdown;