"use client";
import React, { useState, useEffect } from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";

const LearningJourneySection: React.FC = () => {
  const [slideIn, setSlideIn] = useState(false);
  const [deadline, setDeadline] = useState<number | null>(null);

  useEffect(() => {
    setSlideIn(true);
    const savedDeadline = localStorage.getItem("deadline");
    if (savedDeadline) {
      setDeadline(parseInt(savedDeadline, 10));
    } else {
      const newDeadline = Date.now() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem("deadline", newDeadline.toString());
      setDeadline(newDeadline);
    }
  }, []);

  const Completionist: React.FC = () => (
    <span className="text-lg font-semibold">Offer has ended!</span>
  );

  const renderer: CountdownRendererFn = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="flex items-center justify-center space-x-4">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-600">{days}</span>
            <span className="text-sm font-semibold">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-600">{hours}</span>
            <span className="text-sm font-semibold">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-600">{minutes}</span>
            <span className="text-sm font-semibold">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-blue-600">{seconds}</span>
            <span className="text-sm font-semibold">Seconds</span>
          </div>
        </div>
      );
    }
  };

  if (deadline === null) {
    return null;
  }

  return (
    <section
      className={`mx-auto my-6 w-3/4 transition-all duration-1000 ease-in-out ${
        slideIn ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <h2 className="mb-4 text-center text-3xl font-semibold text-red-500">
        Start Your Learning Journey NOW at 50% off, offer ends in{" "}
        <Countdown date={deadline} renderer={renderer} />
      </h2>
    </section>
  );
};

export default LearningJourneySection;
