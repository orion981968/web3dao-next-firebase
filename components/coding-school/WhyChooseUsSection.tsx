import React, { useState } from "react";

const WhyChooseUsSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section
      className="my-6 rounded-lg p-4 shadow-md transition-opacity delay-500 duration-1000 ease-in-out"
      style={{ opacity: fadeIn ? 1 : 0 }}
    >
      <h3 className="mt-6 text-center text-2xl font-semibold text-red-600">
        Why Choose Our School?
      </h3>
      <div className="flex justify-center">
        <ul className="mt-4 max-w-xs list-disc text-left md:max-w-md lg:max-w-lg">
          <li>
            Practical, Project-Based Learning: Build real-world DApps and get
            hands-on experience.
          </li>
          <li>
            Expert Faculty: Learn from industry leaders with a wealth of
            knowledge and experience.
          </li>
          <li>
            Career Support: We help you get hired after you qualify and get your
            certificate.
          </li>
          <li>
            Dynamic Community: Join a network of budding developers, innovators,
            and entrepreneurs.
          </li>
          <li>
            Flexible Learning: Learn at your own pace, this course is 3 months,
            attend the live sessions with Q&A or watch it later.
          </li>
          <li>
            Prerequisites: Basic understanding of blockchain technology,
            Ethereum, Solidity, and JavaScript.
          </li>
          <li>
            Tech Stack: Learn with the latest technologies like Solidity,
            Ethereum, React, NEXT.js, Hardhat, and TypeScript.
          </li>
          <li>
            Live Q&A: The sessions are given live and also have Live Q&A, not to
            worry if you cannot make it in time, all sessions are recorded.
          </li>
          <li>
            Tools Of The Trade: Learn to use tools that seniors use to
            fast-track development.
          </li>
          <li>
            Learn Hiring Tactics: Learn the skills needed to get your social
            media inline with getting hired.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
