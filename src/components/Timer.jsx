import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(2026, 2, 24).getTime(); // March 24, 2026
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      <div className="bg-yellow-300 text-black rounded-lg px-2 sm:px-4 py-1 sm:py-3 min-w-14 sm:min-w-20 text-center">
        <span className="font-bold text-lg sm:text-4xl mainfont">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-white text-xs sm:text-xs mainfont uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="mt-8 sm:mt-16 px-4">
      <div className="text-center mb-6 sm:mb-12">
        <p className="mainfont text-white text-lg sm:text-3xl font-bold">
           Time is Running!
        </p>
      </div>
      <div className="flex justify-center items-center gap-1 sm:gap-3 flex-nowrap">
        <TimeBox value={timeLeft.days} label="Days" />
        <div className="text-yellow-300 text-xl sm:text-3xl font-bold self-start mt-2 sm:mt-1">:</div>
        <TimeBox value={timeLeft.hours} label="Hours" />
        <div className="text-yellow-300 text-xl sm:text-3xl font-bold self-start mt-2 sm:mt-1">:</div>
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <div className="text-yellow-300 text-xl sm:text-3xl font-bold self-start mt-2 sm:mt-1">:</div>
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default Timer;
