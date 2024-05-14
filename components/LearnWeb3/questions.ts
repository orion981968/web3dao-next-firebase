// questions.ts
export type Question = {
  id: number;
  questionText: string;
  options: Array<{ optionText: string; isCorrect: boolean }>;
};

export const questions: Question[] = [
  {
    id: 1,
    questionText: "What is Web3?",
    options: [
      {
        optionText: "A new version of HTML for web development.",
        isCorrect: false,
      },
      {
        optionText: "A marketing term for the latest web design trends.",
        isCorrect: false,
      },
      {
        optionText: "The latest update to the HTTP protocol.",
        isCorrect: false,
      },
      {
        optionText:
          "The third generation of the internet, focusing on decentralized applications and blockchain technologies.",
        isCorrect: true,
      },
    ],
  },
  {
    id: 2,
    questionText: "Which technology is most associated with Web3?",
    options: [
      { optionText: "Artificial Intelligence", isCorrect: false },
      { optionText: "Cloud Computing", isCorrect: false },
      { optionText: "Quantum Computing", isCorrect: false },
      { optionText: "Blockchain", isCorrect: true },
    ],
  },
  {
    id: 3,
    questionText: "What is a smart contract?",
    options: [
      {
        optionText: "A legal document that's signed electronically.",
        isCorrect: false,
      },

      {
        optionText:
          "A contract that automatically adjusts its terms based on external data.",
        isCorrect: false,
      },
      {
        optionText: "A digital contract protected by encryption.",
        isCorrect: false,
      },
      {
        optionText:
          "A self-executing contract with the terms of the agreement directly written into code.",
        isCorrect: true,
      },
    ],
  },
  {
    id: 4,
    questionText: "What does NFT stand for?",
    options: [
      { optionText: "Non-Fungible Token", isCorrect: true },
      { optionText: "New Financial Technology", isCorrect: false },
      { optionText: "Non-Financial Transaction", isCorrect: false },
      { optionText: "Next-Generation File Transfer", isCorrect: false },
    ],
  },
  {
    id: 5,
    questionText:
      "Which of the following is a characteristic of decentralized finance (DeFi)?",
    options: [
      {
        optionText: "Centralized control by financial institutions",
        isCorrect: false,
      },

      {
        optionText: "Transactions that require a third-party intermediary",
        isCorrect: false,
      },
      {
        optionText: "Peer-to-peer financial services on public blockchains",
        isCorrect: true,
      },
      {
        optionText:
          "Use of traditional bank accounts and financial instruments",
        isCorrect: false,
      },
    ],
  },
  {
    id: 6,
    questionText: "What is Ethereum commonly used for?",
    options: [
      { optionText: "Sending and receiving emails", isCorrect: false },
      { optionText: "Mining Bitcoin", isCorrect: false },
      { optionText: "Creating antivirus software", isCorrect: false },
      {
        optionText:
          "Developing decentralized applications (DApps) and smart contracts",
        isCorrect: true,
      },
    ],
  },
  {
    id: 7,
    questionText:
      "Which of the following is a popular use case for blockchain technology?",
    options: [
      { optionText: "Social media", isCorrect: false },
      { optionText: "Web hosting", isCorrect: false },
      { optionText: "Online gaming", isCorrect: false },
      { optionText: "Supply chain management", isCorrect: true },
    ],
  },

  {
    id: 8,
    questionText: "What is a DAO?",
    options: [
      { optionText: "Decentralized Autonomous Organization", isCorrect: true },
      { optionText: "Distributed Application Operation", isCorrect: false },
      { optionText: "Digital Asset Optimization", isCorrect: false },
      { optionText: "Data Analysis Outlet", isCorrect: false },
    ],
  },
  {
    id: 9,
    questionText:
      "Which token standard is commonly used for creating NFTs on Ethereum?",
    options: [
      { optionText: "ERC-20", isCorrect: false },
      { optionText: "ERC-721", isCorrect: true },
      { optionText: "ERC-1155", isCorrect: false },
      { optionText: "ERC-777", isCorrect: false },
    ],
  },
  {
    id: 10,
    questionText: "What does 'DeFi' stand for?",
    options: [
      { optionText: "Decentralized Finance", isCorrect: true },
      { optionText: "Direct Finance", isCorrect: false },
      { optionText: "Digital Finance", isCorrect: false },
      { optionText: "Distributed Finance", isCorrect: false },
    ],
  },
  {
    id: 11,
    questionText: "What is the main purpose of the IPFS in Web3?",
    options: [
      {
        optionText: "Improving the speed of traditional internet",
        isCorrect: false,
      },
      { optionText: "A consensus algorithm", isCorrect: false },
      { optionText: "A protocol for decentralized storage", isCorrect: true },
      { optionText: "A method for encrypting web traffic", isCorrect: false },
    ],
  },
  {
    id: 12,
    questionText: "Which of the following best describes a 'wallet' in Web3?",
    options: [
      {
        optionText: "A physical device that stores cryptocurrency",
        isCorrect: false,
      },
      {
        optionText:
          "Software or hardware that stores your digital currencies and assets",
        isCorrect: true,
      },
      { optionText: "A type of cryptocurrency", isCorrect: false },
      {
        optionText: "A financial service for exchanging digital currencies",
        isCorrect: false,
      },
    ],
  },
  {
    id: 13,
    questionText: "What is 'gas' in the context of Ethereum?",
    options: [
      {
        optionText:
          "The cost necessary to perform a transaction or execute a contract on the Ethereum network",
        isCorrect: true,
      },
      { optionText: "A type of cryptocurrency", isCorrect: false },
      {
        optionText: "A reward given to validators in a PoS blockchain",
        isCorrect: false,
      },
      {
        optionText: "A method for securing blockchain transactions",
        isCorrect: false,
      },
    ],
  },
  {
    id: 14,
    questionText: "Which of the following is a core feature of Web3?",
    options: [
      { optionText: "Centralized data storage", isCorrect: false },
      { optionText: "User anonymity and privacy", isCorrect: true },
      { optionText: "Single authority governance", isCorrect: false },
      { optionText: "Limited interoperability", isCorrect: false },
    ],
  },
  {
    id: 15,
    questionText: "What is 'staking' in the context of cryptocurrency?",
    options: [
      {
        optionText: "Selling all your cryptocurrency at once",
        isCorrect: false,
      },

      { optionText: "The process of creating new coins", isCorrect: false },
      {
        optionText: "Tracking the price of cryptocurrencies",
        isCorrect: false,
      },
      {
        optionText: "Locking cryptocurrencies to receive rewards",
        isCorrect: true,
      },
    ],
  },
  {
    id: 16,
    questionText: "What does the term 'metaverse' refer to in Web3?",
    options: [
      { optionText: "A new type of cryptocurrency", isCorrect: false },
      {
        optionText:
          "A virtual reality space where users can interact with a computer-generated environment and other users",
        isCorrect: true,
      },
      { optionText: "An advanced form of internet security", isCorrect: false },
      { optionText: "A consortium of major Web3 companies", isCorrect: false },
    ],
  },
  {
    id: 17,
    questionText: "Which of the following best describes 'Web3 wallets'?",
    options: [
      {
        optionText:
          "Physical wallets designed for keeping cryptocurrency paper keys",
        isCorrect: false,
      },

      {
        optionText:
          "A special type of web hosting service for blockchain applications",
        isCorrect: false,
      },
      {
        optionText: "Online platforms for trading cryptocurrencies",
        isCorrect: false,
      },
      {
        optionText:
          "Software or hardware that stores public and/or private keys for cryptocurrencies",
        isCorrect: true,
      },
    ],
  },
  {
    id: 18,
    questionText: "What is a 'dApp'?",
    options: [
      {
        optionText:
          "Decentralized Application that operates on a blockchain network",
        isCorrect: true,
      },
      {
        optionText: "A desktop application for managing digital assets",
        isCorrect: false,
      },

      { optionText: "A type of digital currency", isCorrect: false },
      {
        optionText:
          "A mobile app that provides detailed cryptocurrency market data",
        isCorrect: false,
      },
    ],
  },
  {
    id: 19,
    questionText:
      "What mechanism do blockchains primarily use to ensure security and integrity?",
    options: [
      { optionText: "Two-factor authentication", isCorrect: false },
      { optionText: "Cryptography", isCorrect: true },
      { optionText: "Password protection", isCorrect: false },
      { optionText: "Firewalls", isCorrect: false },
    ],
  },
  {
    id: 20,
    questionText: "Which of the following is true about 'smart contracts'?",
    options: [
      {
        optionText: "They are legal contracts reviewed by a lawyer",
        isCorrect: false,
      },
      {
        optionText:
          "They automatically execute, control, or document legally relevant events according to the terms of a contract or an agreement",
        isCorrect: true,
      },
      {
        optionText: "They require manual intervention to execute",
        isCorrect: false,
      },
      {
        optionText: "They can only be used for financial transactions",
        isCorrect: false,
      },
    ],
  },
  {
    id: 21,
    questionText:
      "What is the primary purpose of the Ethereum Virtual Machine (EVM)?",
    options: [
      { optionText: "To mine Bitcoin more efficiently", isCorrect: false },

      { optionText: "To create virtual reality experiences", isCorrect: false },
      {
        optionText: "To serve as a digital wallet for Ethereum tokens",
        isCorrect: false,
      },
      {
        optionText: "To execute smart contracts on the Ethereum blockchain",
        isCorrect: true,
      },
    ],
  },
  {
    id: 22,
    questionText:
      "Which project is often considered the first example of a decentralized autonomous organization (DAO)?",
    options: [
      { optionText: "Bitcoin", isCorrect: false },
      { optionText: "Ethereum", isCorrect: false },
      { optionText: "Filecoin", isCorrect: false },
      { optionText: "The DAO", isCorrect: true },
    ],
  },
  {
    id: 23,
    questionText: "What does 'DeFi' aim to replace with blockchain technology?",
    options: [
      { optionText: "Traditional gaming platforms", isCorrect: false },
      { optionText: "Email communication systems", isCorrect: false },
      { optionText: "Social media platforms", isCorrect: false },
      { optionText: "Traditional financial systems", isCorrect: true },
    ],
  },
  {
    id: 24,
    questionText: "Which of the following is NOT a characteristic of Web3?",
    options: [
      { optionText: "Decentralization", isCorrect: false },
      { optionText: "Trustlessness", isCorrect: false },
      { optionText: "Permission-based access", isCorrect: true },
      { optionText: "Interoperability", isCorrect: false },
    ],
  },
  {
    id: 25,
    questionText: "What is the significance of 'tokenization' in Web3?",
    options: [
      {
        optionText:
          "Converting physical assets into digital tokens on a blockchain",
        isCorrect: true,
      },
      {
        optionText: "Creating new tokens for every transaction",
        isCorrect: false,
      },
      { optionText: "Encrypting web traffic", isCorrect: false },
      {
        optionText: "Tokenizing programming code for better performance",
        isCorrect: false,
      },
    ],
  },

  {
    id: 26,
    questionText:
      "Which consensus mechanism allows for more energy-efficient transaction validation compared to Proof of Work (PoW)?",
    options: [
      { optionText: "Proof of Stake (PoS)", isCorrect: true },
      { optionText: "Proof of Authority (PoA)", isCorrect: false },
      { optionText: "Proof of Capacity (PoC)", isCorrect: false },
      { optionText: "Proof of Burn (PoB)", isCorrect: false },
    ],
  },
  {
    id: 27,
    questionText:
      "What is the primary purpose of the Ethereum Virtual Machine (EVM)?",
    options: [
      { optionText: "To mine Bitcoin more efficiently", isCorrect: false },
      {
        optionText: "To execute smart contracts on the Ethereum blockchain",
        isCorrect: true,
      },
      { optionText: "To create virtual reality experiences", isCorrect: false },
      {
        optionText: "To serve as a digital wallet for Ethereum tokens",
        isCorrect: false,
      },
    ],
  },

  {
    id: 28,
    questionText: "What does 'DeFi' aim to replace with blockchain technology?",
    options: [
      { optionText: "Traditional gaming platforms", isCorrect: false },
      { optionText: "Traditional financial systems", isCorrect: true },
      { optionText: "Email communication systems", isCorrect: false },
      { optionText: "Social media platforms", isCorrect: false },
    ],
  },
  {
    id: 29,
    questionText: "Which of the following is NOT a characteristic of Web3?",
    options: [
      { optionText: "Decentralization", isCorrect: false },
      { optionText: "Trustlessness", isCorrect: false },
      { optionText: "Permission-based access", isCorrect: true },
      { optionText: "Interoperability", isCorrect: false },
    ],
  },
  {
    id: 30,
    questionText: "What is the significance of 'tokenization' in Web3?",
    options: [
      {
        optionText:
          "Converting physical assets into digital tokens on a blockchain",
        isCorrect: true,
      },
      {
        optionText: "Creating new tokens for every transaction",
        isCorrect: false,
      },
      { optionText: "Encrypting web traffic", isCorrect: false },
      {
        optionText: "Tokenizing programming code for better performance",
        isCorrect: false,
      },
    ],
  },
  {
    id: 31,
    questionText:
      "What are 'oracles' in the context of blockchain and smart contracts?",
    options: [
      { optionText: "Ancient predictors of the future", isCorrect: false },
      {
        optionText: "Services that provide real-world data to smart contracts",
        isCorrect: true,
      },
      { optionText: "A type of cryptocurrency", isCorrect: false },
      { optionText: "Blockchain analysis tools", isCorrect: false },
    ],
  },
  {
    id: 32,
    questionText:
      "Which consensus mechanism allows for more energy-efficient transaction validation compared to Proof of Work (PoW)?",
    options: [
      { optionText: "Proof of Stake (PoS)", isCorrect: true },
      { optionText: "Proof of Authority (PoA)", isCorrect: false },
      { optionText: "Proof of Capacity (PoC)", isCorrect: false },
      { optionText: "Proof of Burn (PoB)", isCorrect: false },
    ],
  },
];
