import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="px-4 py-10 transition-opacity duration-1000 ease-in-out sm:px-0">
      <div className="flex justify-center">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/web3dao-coding-school.appspot.com/o/Ethereum-Logo-PNG-HD-Image.png?alt=media&token=534f3455-b91f-4ae3-98b7-c1472caef525"
          alt="Web3 Coding School Logo"
          width={200}
          height={150}
          className="object-contain"
        />
      </div>
      <h1 className="mt-4 text-center text-2xl font-bold text-red-700 sm:text-4xl">
        Web3 Coding School: Your Gateway to Blockchain Mastery
      </h1>
    </header>
  );
};

export default Header;
