"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "./qnas";

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-red-700">
      <motion.button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={onClick}
        initial={false}
        animate={{ backgroundColor: isOpen ? "" : "transparent" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-medium">{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </motion.button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-4 pb-5 pt-2">{answer}</p>
      </motion.div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [showFaqs, setShowFaqs] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h2 className="mb-5 mt-6 text-center text-2xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="mb-5 flex justify-center">
        <button
          className="rounded bg-red-500 px-6 py-2 text-white hover:bg-red-700"
          onClick={() => setShowFaqs(!showFaqs)}
        >
          {showFaqs ? "Hide FAQs" : "Show FAQs"}
        </button>
      </div>
      {showFaqs && (
        <div className="divide-y divide-red-700">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default FaqSection;
