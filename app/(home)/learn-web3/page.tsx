import React from "react";
import Image from "next/image";
import Questionnaire from "../../../components/LearnWeb3/Questionaire";

const LearnWeb3: React.FC = () => {
  return (
    <div className="mb-10 mt-20 flex flex-col items-center px-4 pb-60 sm:px-6 lg:px-8">
      {/* Flex container for image and message to ensure centering and responsiveness */}
      <div className="mb-8 flex flex-col items-center px-2">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/web3-dao-agency-articles.appspot.com/o/Meaty.webp?alt=media&token=e502ec82-e4e1-480b-ab85-3028fbca1d94"
          alt="Complete Questionnaire"
          width={400} // Specify width
          height={300} // Specify height
          priority // Prioritize loading
          placeholder="blur" // Use a blur placeholder
          blurDataURL="data:image/webp;base64,..." // Base64-encoded placeholder image
          className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
        <div className="mx-auto mt-4 w-3/4 text-center sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3">
          <p className="sm:text-md text-sm md:text-lg lg:text-xl">
            Finish this questionnaire to get WL access to multiple projects, the
            NFT is called MEAT, get that MEAT, limited to 1 NFT per user, click
            the answer and then click next. When you get to the end of the
            questionnaire, you will get the NFT!
          </p>
        </div>
      </div>
      <Questionnaire />
    </div>
  );
};

export default LearnWeb3;
