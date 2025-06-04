
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  compact?: boolean;
}

export const CountdownTimer = ({ targetDate, compact = false }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (compact) {
    return (
      <div className="text-sm font-mono text-slate-700">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-2">
            <div className="text-lg font-bold">{item.value.toString().padStart(2, '0')}</div>
          </div>
          <div className="text-xs text-slate-600 mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
};
