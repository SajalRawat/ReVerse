import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Timer = () => {
  return (
    <div className="mt-10">
    <div>
        <p className="mainfont text-white text-[16px] sm:text-[26px]" >Time is Running!</p>
    </div>
    <FlipClockCountdown

      to={new Date().getTime() + 24 * 3600 * 1000}
      digitBlockStyle={{
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
      dividerStyle={{
        color: "#000000",
      }}
    />
    </div>
  );
};

export default Timer;
