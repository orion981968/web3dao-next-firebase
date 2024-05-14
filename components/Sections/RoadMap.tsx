"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Roadmap.module.css";
interface Milestone {
  date: string;
  title: string;
  description: string;
}

interface Web3RoadmapProps {
  milestones: Milestone[];
}
const RoadMap = ({ Roadmap }: { Roadmap: string }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    // Here you might add logic to animate the milestones based on scroll position or other triggers
  }, []);

  const handleMilestoneClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  const RoadMap: React.FC<Web3RoadmapProps> = ({ milestones }) => {
    return (
      <div className="roadmap-container">
        <h2 className="roadmap-title">Web3 Roadmap</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`milestone ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleMilestoneClick(index)}
            >
              <div className="milestone-header">
                <h3>{milestone.title}</h3>
                <span className="date">{milestone.date}</span>
              </div>
              <p
                className={`description ${index === activeIndex ? "show" : ""}`}
              >
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
};
export default RoadMap;
