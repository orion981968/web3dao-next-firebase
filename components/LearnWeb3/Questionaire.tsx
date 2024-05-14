"use client";
import React, { useState, useEffect } from "react";
import { questions } from "./questions";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import { MarketAddress, MarketAddressABI } from "../../context/constants";
import { ethers } from "ethers";
import Swal from "sweetalert2";
import {
  getDatabase,
  ref,
  set,
  push,
  DataSnapshot,
  onValue,
  update,
} from "firebase/database";
import { database1 } from "@/firebase/firebase";

const Questionnaire: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false); // For testing, you might want to ignore this state
  const { address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  useEffect(() => {
    console.log("User's current address:", address);
    if (
      currentQuestionIndex === questions.length - 1 &&
      selectedOption !== null
    ) {
      console.log("Questionnaire completed");
      setHasCompleted(true);
      Swal.fire({
        title: "All done!",
        text: "You have completed the questionnaire. Now you can claim your NFT!",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }
  }, [address, currentQuestionIndex, selectedOption]);

  const awardNFT = async () => {
    if (!walletProvider || !isConnected) {
      console.error("Wallet not connected");
      Swal.fire({
        title: "Error!",
        text: "Please connect your wallet to claim your NFT.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    try {
      const signer = new ethers.providers.Web3Provider(
        walletProvider,
      ).getSigner();
      const questionnaireContract = new ethers.Contract(
        MarketAddress, // Assuming MarketAddress is a string constant holding the contract address
        MarketAddressABI, // Assuming MarketAddressABI is an array constant holding the contract ABI
        signer,
      );

      console.log("Awarding NFT...");
      const transaction = await questionnaireContract.awardItem(
        address,
        "QmS6Rzemp7SKGokju66q44EwrrhRXaDx58a1F9Zm5EvTaH",
      );
      await transaction.wait();

      console.log("NFT awarded successfully");
      Swal.fire({
        title: "Congratulations!",
        text: "NFT awarded successfully.",
        icon: "success",
        confirmButtonText: "Great!",
      });
    } catch (error) {
      console.error("Failed to award NFT:", error);
      Swal.fire({
        title: "Failed!",
        text: "Failed to award NFT. Please try again.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const handleOptionClick = (isCorrect: boolean, optionText: string) => {
    setSelectedOption(optionText);
    setIsAnswerCorrect(isCorrect);
    console.log(`Option selected: ${optionText}, Correct: ${isCorrect}`);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
      setIsAnswerCorrect(null);
      console.log(`Moving to next question: ${currentQuestionIndex + 2}`);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-lg border-red-800 px-4 py-8 shadow-lg sm:max-w-lg sm:border-2 md:max-w-xl lg:max-w-2xl">
      <h2 className="mb-4 text-center text-xl font-semibold sm:text-2xl">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      <div className="mb-4 text-center">
        Progress:{" "}
        {(((currentQuestionIndex + 1) / questions.length) * 100).toFixed(0)}%
      </div>
      <div className="mb-4 h-2 rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-green-500"
          style={{
            width: `${(((currentQuestionIndex + 1) / questions.length) * 100).toFixed(0)}%`,
          }}
        ></div>
      </div>
      <h3 className="mb-4 text-center text-lg font-medium sm:text-xl">
        {questions[currentQuestionIndex].questionText}
      </h3>
      <ul className="mt-4">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <li
            key={index}
            onClick={() =>
              handleOptionClick(option.isCorrect, option.optionText)
            }
            className={`mt-2 cursor-pointer rounded border p-2 text-center ${selectedOption === option.optionText ? (isAnswerCorrect ? "border-green-600 bg-green-500 text-white" : "border-red-600 bg-red-200") : "border-gray-300"}`}
          >
            {option.optionText}
          </li>
        ))}
      </ul>
      {isAnswerCorrect != null && (
        <div
          className={`mt-2 text-center text-sm font-semibold ${isAnswerCorrect ? "text-green-500" : "text-red-600"}`}
        >
          {isAnswerCorrect ? "Correct Answer!" : "Incorrect Answer"}
        </div>
      )}
      <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row">
        <button
          onClick={handleNextQuestion}
          disabled={
            currentQuestionIndex >= questions.length - 1 ||
            selectedOption === null
          }
          className="w-full rounded bg-green-600 px-2 py-2 text-white hover:bg-green-700 disabled:bg-green-500 sm:w-auto"
        >
          Next Question
        </button>

        <button onClick={awardNFT} className="...">
          Claim NFT
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;

//        {/*{hasCompleted && (
//          <button
//            onClick={awardNFT}
//            className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 sm:w-auto"
//          >
//            Claim NFT
//          </button>
//        )} */}
