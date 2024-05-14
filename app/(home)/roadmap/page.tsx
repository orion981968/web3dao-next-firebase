// Web3Roadmap.tsx
/* eslint-disable */

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define a type for milestones
type Milestone = {
  id: string;
  title: string;
  date: string;
  description: string;
};

const mockMilestones: Milestone[] = [
  {
    id: "0",
    title:
      "AI-Powered Content Creation Tool for SEO and Autonomous Website Integration",
    date: "2024-01-03",
    description:
      "Harness the power of artificial intelligence with our cutting-edge content creation tool. Create high-quality content for any website autonomously to generate traffic and seamlessly push it to your website, enhancing your online presence effortlessly.",
  },

  {
    id: "1",
    title: "NFT Marketplace BETA Launch",
    date: "2024-01-05",
    description:
      "Embark on an exciting journey with the debut of our NFT Marketplace BETA. This initial phase, hosted on a testnet, invites community engagement and feedback, setting the stage for an innovative future.",
  },
  {
    id: "2",
    title: "Discord Credit Cash Bot Launch",
    date: "2024-01-25",
    description:
      "Introducing our Discord Credit Cash Bot! Invite friends to eligible servers, earn real tokens with liquidity, and enjoy advanced features such as fraud detection for new accounts and various invite types. Tokens can be awarded directly on Discord and claimed through our website.",
  },

  {
    id: "3",
    title: "Smart Contract Hackathon: Strengthening the Marketplace",
    date: "2024-01-10",
    description:
      "Join us in fortifying the security of our smart contracts. We're launching an engaging hackathon, inviting brilliant minds to scrutinize and enhance our system, ensuring unmatched security and reliability.",
  },
  {
    id: "4",
    title: "Revolutionary Social Utility Launch: Bridging Web2 and Web3",
    date: "2024-01-30",
    description:
      "Prepare for an unprecedented social utility tool that bridges Web2 and Web3. This innovative launch promises to unveil functionalities and experiences previously unseen, leveraging multi-chain technology for a holistic digital interaction.",
  },
  {
    id: "5",
    title: "AI-Powered HR/Job Matching Utility Launch",
    date: "2025-01-31",
    description:
      "Experience the future of employment with our AI-driven job utility. This pioneering tool expertly matches employees with ideal employers, revolutionizing the hiring landscape with cutting-edge artificial intelligence.",
  },
  {
    id: "6",
    title:
      "Exclusive NFT Marketplace Collaboration with a Renowned Restaurant Chain",
    date: "2024-02-28",
    description:
      "In a groundbreaking partnership with a prestigious restaurant chain boasting over 15 locations, we're thrilled to unveil our partnered NFT marketplace. This pioneering venture marks our foray into merging the culinary world with digital art.",
  },
  {
    id: "7",
    title: "Nomad Tigers NFT Collection: Phase One Release",
    date: "2024-03-01",
    description:
      "Get ready for the launch of the 'Nomad Tigers' NFT collection. This exclusive series, limited to 1,000 NFTs in its first phase, promises to be a captivating addition to any digital art portfolio. Release dates for subsequent phases will be announced.",
  },
  {
    id: "8",
    title: "Innovative AI-Powered Trading and Sniping Bot for Mobile",
    date: "2024-03-28",
    description:
      "Dive into the future of trading with our AI-powered bot, designed for mobile platforms. This trailblazing application brings never-before-seen features to the world of Web3, offering an exhilarating beta experience.",
  },
  {
    id: "9",
    title: "Beta Launch of Our Multi-Chain Mobile Wallet",
    date: "2024-04-28",
    description:
      "We're excited to introduce the beta version of our versatile crypto/NFT wallet. This multi-chain platform is tailored for seamless mobile integration, offering a sophisticated yet user-friendly experience.",
  },
  {
    id: "10",
    title: "ERC20 Crypto Token Pre-Sale",
    date: "2024-03-01",
    description:
      "Mark your calendars for the much-anticipated pre-sale of our ERC20 crypto token. This launch represents a significant milestone in our journey, offering an exclusive opportunity to be part of our expanding ecosystem.",
  },
  {
    id: "11",
    title:
      "AI-Powered Home Automation for Earning Devices and Robotics BETA Release",
    date: "2024-03-25",
    description:
      "Experience the future of home automation with our AI-driven tool that allows you to earn devices and robotics. This pioneering release revolutionizes the way you interact with smart technology, driven by cutting-edge artificial intelligence.",
  },
];

const Timeline: React.FC = () => {
  // Function to determine the side of the timeline
  const isEven = (index: number) => index % 2 === 0;
  const segmentHeight = `calc((100% - ${mockMilestones.length * 48}px) / ${mockMilestones.length})`; // 48px approx height of the dot

  const pulseAnimation = {
    position: "absolute",
    top: 0,
    left: "50%",
    x: "-50%",
    width: "14px",
    height: "14px",
    backgroundColor: "red",
    borderRadius: "50%",
    boxShadow: "0 0 0 0 rgba(255,0,0, 0.7)",
    transformOrigin: "center",
    zIndex: 10,
    animate: {
      scale: [1, 2, 1],
      boxShadow: [
        "0 0 0 0 rgba(255,0,0, 0.7)",
        "0 0 0 10px rgba(255,0,0, 0)",
        "0 0 0 0 rgba(255,0,0, 0.7)",
      ],
      y: [0, `calc(100% - ${mockMilestones.length * 48}px)`], // Adjust based on total height minus the sum of dot heights
    },
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 4,
        ease: "linear",
      },
      scale: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
        ease: "easeInOut",
      },
      boxShadow: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="p-4">
      <h2 className="mb-12 text-center text-3xl font-bold">Our Roadmap</h2>
      <div className="mx-auto flex grid-cols-9 flex-col p-2 md:grid">
        {mockMilestones.map((milestone, index) => (
          <React.Fragment key={milestone.id}>
            {isEven(index) ? (
              // For even indices
              <div className="flex flex-row-reverse md:contents">
                <div className="relative col-start-1 col-end-5 my-6 mr-auto rounded-xl border-2 border-red-500  p-4  md:ml-auto md:mr-0">
                  <h3 className="text-lg font-semibold lg:text-xl">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 leading-6">{milestone.description}</p>
                  <span className="absolute -top-5 left-2 whitespace-nowrap text-sm mt-[-10px]">
                    {milestone.date}
                  </span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex h-full w-6 items-center justify-center">
                    <div className="h-full w-1 bg-red-400"></div>
                  </div>
                  <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full border-4 border-red-400 bg-white"></div>
                </div>
              </div>
            ) : (
              // For odd indices
              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex h-full w-6 items-center justify-center">
                    <div className="h-full w-1 bg-red-400"></div>
                  </div>
                  <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full border-4 border-red-400 bg-white"></div>
                </div>
                <div className="relative col-start-6 col-end-10 my-6 mr-auto rounded-xl border-2 border-red-500  p-4 ">
                  <h3 className="text-lg font-semibold lg:text-xl">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 leading-6">{milestone.description}</p>
                  <span className="absolute -top-5 left-2 whitespace-nowrap text-sm mt-[-10px] ">
                    {milestone.date}
                  </span>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
