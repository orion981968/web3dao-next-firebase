// Web3Roadmap.tsx
/* eslint-disable */

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define a type for milestones
type Milestone = {
  id: string;
  title: string;
  date: string;
  description: string;
};

// Define a type for white paper sections
type WhitePaperSection = {
  id: string;
  title: string;
  content: string[];
};

const mockMilestones: Milestone[] = [
  {
    id: "0",
    title: "Initial Launch: First 1000 NFTs Unveiled",
    date: "2024-03-01",
    description:
      "Exclusive early access for our OG adopters! Unleash the power of AI with our innovative social utility, a state-of-the-art sniping/trading bot, and a groundbreaking AI content creation tool.",
  },
  {
    id: "1",
    title: "Phase 2 Expansion: Unleashing 2000 Elite NFTs",
    date: "2024-03-15",
    description:
      "Elevating the experience with our second-tier release. Gain exclusive access to high-end restaurants and elite function venues, reserved only for our top-tier NFT holders.",
  },
  {
    id: "2",
    title: "Exclusive NFT Coin Claim Gateway",
    date: "2024-04-25",
    description:
      "Unlock the potential to claim coins through our specialized token dashboard, exclusively available for our NFT owners.",
  },
  {
    id: "3",
    title: "Loyalty Airdrop: Rewards for HODL'ers",
    date: "2024-05-25",
    description:
      "Loyalty pays off! If you've held onto your NFTs, get ready for a lucrative airdrop of our exclusive token.",
  },
  {
    id: "4",
    title: "Token Halving Event & Exclusive NFT Reward",
    date: "2024-06-25",
    description:
      "Join us in a strategic halving of our coin, boosting its value. As a reward, our faithful users will receive one of 1000 new, limited-edition NFTs.",
  },
  {
    id: "5",
    title: "Grand NFT Giveaway Extravaganza",
    date: "2025-07-25",
    description:
      "Get ready for a massive giveaway! We're distributing the remaining NFTs through exciting social media contests and giveaways.",
  },
];

const whitePaperSections: WhitePaperSection[] = [
  {
    id: "1",
    title: "Nomad Tiger NFTs: A Unique Ecosystem",
    content: [
      "1. Nomad Tiger Collection:",
      "- The heart of our ecosystem, the Nomad Tiger NFT collection, represents a limited series of digital art pieces with distinct value and exclusivity. These NFTs serve as a cornerstone, offering holders access to exclusive benefits and experiences within the Nomad Tiger NFT ecosystem.",
      "",
      "2. Unique Features and Utility:",
      "- Each Nomad Tiger NFT comes with unique features, unlocking specific functionalities within our platform. Holders gain access to premium content, early releases, and exclusive events, creating a dynamic ecosystem where ownership extends beyond the digital realm.",
    ],
  },
  {
    id: "2",
    title: "Token Distribution Strategy",
    content: [
      "1. Pre-Sale of Solana Token:",
      "- Nomad Tiger NFT initiates its token distribution with a pre-sale of the Solana token. This exclusive event allows early supporters and enthusiasts to secure their position in the ecosystem, laying the foundation for the project's growth.",
      "",
      "2. Nomad Tiger NFT Collection Phases:",
      "- The Nomad Tiger NFT collection is released in phases, each phase featuring a limited number of NFTs. The phased approach adds an element of scarcity and exclusivity, fostering anticipation and value appreciation for the Nomad Tiger NFT holders.",
      "",
      "3. Loyalty Airdrop:",
      "- To reward loyalty and encourage long-term engagement, Nomad Tiger NFT introduces a loyalty airdrop. Holders who retain their Nomad Tiger NFTs receive a lucrative airdrop of the Solana token, enhancing the value proposition for committed community members.",
      "",
      "4. Token Halving Event:",
      "- A strategic token halving event is implemented to boost the value of the Solana token. As a reward for faithful users, 1000 new, limited-edition Nomad Tiger NFTs are distributed, further intertwining the utility of the NFTs with the overall project economy.",
    ],
  },
  {
    id: "3",
    title: "Token Allocation",
    content: [
      "1. Nomad Tiger NFT Holders:",
      "- A significant portion of the Solana tokens is allocated to Nomad Tiger NFT holders, aligning with our commitment to reward and empower the community actively engaged in the Nomad Tiger NFT ecosystem.",
      "",
      "2. Project Development and Innovation:",
      "- A portion of the token allocation is dedicated to project development, ensuring continuous innovation, upgrades, and the introduction of new features to enhance the Nomad Tiger NFT platform.",
      "",
      "3. Marketing and Community Engagement:",
      "- Token allocation is earmarked for marketing initiatives and community engagement. This ensures widespread awareness, user acquisition, and the establishment of a vibrant and participative community around Nomad Tiger NFTs.",
      "",
      "4. Ecosystem Growth and Partnerships:",
      "- A strategic allocation supports the growth of the ecosystem through partnerships, collaborations, and the exploration of new opportunities that contribute to the overall expansion of Nomad Tiger NFTs.",
    ],
  },
  {
    id: "4",
    title: "Fueling the Project's Economy",
    content: [
      "Nomad Tiger NFTs and the associated Solana token collectively fuel the project's economy, creating a symbiotic relationship between digital art, blockchain, and community engagement. The tokenomics not only provide value to NFT holders through exclusive benefits but also incentivize active participation, ensuring the sustained growth and success of the Nomad Tiger NFT ecosystem. As we embark on this journey, our tokenomics serve as a blueprint for a thriving, dynamic, and community-driven NFT ecosystem.",
    ],
  },
  // ... Add any additional sections as needed ...
];

function NftPage() {
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setMilestones(mockMilestones);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const pulseAnimation = {
    animation: "pulseBorder 2s infinite",
    border: "1px solid maroon",
    boxShadow: "0 0 0 0 rgba(128, 0, 0, 0.7)",
  };

  const renderWhitePaperSections = () => {
    return whitePaperSections.map((section) => (
      <div key={section.id}>
        <h2>{section.title}</h2>
        {section.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    ));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {/* Add the banner image here */}
      <div className="pt-20">
        <Image
          src="/images/nomadbanner-2.png" // Assuming the image is in the public folder
          alt="NomadBanner"
          width={1200} // Set the desired width
          height={300} // Set the desired height
        />
      </div>
      <h1 className="mb-11 pt-20 text-center text-5xl font-bold text-red-700">
        Our NFT collection Roadmap
      </h1>
      <div className="w-full max-w-6xl px-4  ">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`mb-8 flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center gap-4`}
          >
            <div className="md:flex-1 ">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="border-maroon flex h-16 w-16 items-center justify-center rounded-full border-2"
              >
                <span className="text-maroon text-xl font-bold">
                  {index + 1}
                </span>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="bg-maroon-light flex-1 rounded-lg px-8 py-6 shadow-lg"
              style={{
                animation: "pulseBorder 2s infinite",
                border: "1px solid maroon",
                boxShadow: "0 0 0 0 rgba(128, 0, 0, 0.7)",
              }}
            >
              <h3 className="text-2xl font-semibold text-red-900">
                {milestone.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-300">
                {milestone.date}
              </p>
              <p className="mt-4 text-gray-400">{milestone.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="whitepaper my-10 w-full max-w-6xl px-4">
        <h1 className="mb-6 text-center text-4xl font-bold">White Paper</h1>

        <div className="whitepaper-navigation">
          <ul className="mb-6 flex justify-center gap-4">
            {whitePaperSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-red-900 hover:text-blue-700"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 text-center">
          <a
            href="https://docs.google.com/document/d/1DCQ2DBdXZOEVF3HFwa19Kc2r4E1etvQe9iqT3hmmcXM/edit" // Replace with the actual URL of your PDF file
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 underline hover:text-blue-900"
          >
            Click here to download full white paper and roadmap for this project
          </a>
        </div>

        {whitePaperSections.map((section) => (
          <div key={section.id} id={section.id} className="mb-8">
            <h2 className="mb-2 pt-5 text-3xl font-semibold text-red-900">
              {section.title}
            </h2>
            <div className="content border-l-4 border-red-600 pl-4">
              {section.content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default NftPage;
