import React from "react";
import {
  FaCode,
  FaCss3,
  FaDigitalTachograph,
  FaGamepad,
  FaGlobe,
  FaRobot,
} from "react-icons/fa";

export default function Section2() {
  return (
    <div className="relative flex overflow-x-hidden">
      <div
        className="mt-5 flex animate-slide items-center
        whitespace-nowrap p-4 text-black dark:text-white"
      >
        <div className="mx-8 flex items-center gap-2">
          <FaGlobe size={25} className="text-red-900" />
          <span className="text-lg font-medium">Web Development</span>
        </div>

        <div className="mx-8 flex items-center gap-2">
          <FaCode size={25} className="text-red-900" />
          <span className="text-lg font-medium">Software Architecture</span>
        </div>

        <div className="mx-8 flex items-center gap-2">
          <FaCss3 size={25} className="text-red-900" />
          <span className="text-lg font-medium">UI/UX Design</span>
        </div>

        <div className="mx-8 flex items-center gap-2">
          <FaDigitalTachograph size={25} className="text-red-900" />
          <span className="text-lg font-medium">3D Modelling</span>
        </div>

        <div className="mx-8 flex items-center gap-2">
          <FaGamepad size={25} className="text-red-900" />
          <span className="text-lg font-medium">Game Development</span>
        </div>

        <div className="mx-8 flex items-center gap-2">
          <FaRobot size={25} className="text-red-900" />
          <span className="text-lg font-medium">AI & Machine learning</span>
        </div>
      </div>

      <div
        className="absolute top-0 mt-5 flex animate-slide2 items-center
         whitespace-nowrap p-4 text-black dark:text-white"
      >
        <div className="mx-8 flex items-center gap-2">
          <FaGlobe size={25} className="text-red-900" />
          <span className="text-lg font-medium">Web Development</span>
        </div>

        <div className="mx-8 flex items-center gap-2">
          <FaCode size={25} className="text-red-900" />
          <span className="text-lg font-medium">Software Architecture</span>
        </div>

        <div className="mx-8 flex items-center gap-2">
          <FaCss3 size={25} className="text-red-900" />
          <span className="text-lg font-medium">UI/UX Design</span>
        </div>

        <div className="mx-8 flex items-center gap-2">
          <FaDigitalTachograph size={25} className="text-red-900" />
          <span className="text-lg font-medium">3D Modelling</span>
        </div>

        <div className="mx-8 flex items-center gap-2">
          <FaGamepad size={25} className="text-red-900" />
          <span className="text-lg font-medium">Game Development</span>
        </div>

        <div className="mx-8 flex items-center gap-2">
          <FaRobot size={25} className="text-red-900" />
          <span className="text-lg font-medium">AI & Machine learning</span>
        </div>
      </div>
    </div>
  );
}
