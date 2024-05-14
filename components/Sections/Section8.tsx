/* eslint-disable tailwindcss/no-custom-classname */

import React from "react";
import Link from "next/link";

export default function Section8() {
  return (
    <div className="mb-10 flex rounded-lg  px-8 py-10 dark:bg-slate-900">
      <div
        className="flex animate-fade-in-slide-up flex-col items-center justify-center 
            px-4 text-center"
      >
        <h2 className="my-5 text-4xl font-semibold ">
          Discover Our NFT Marketplace
        </h2>

        <p className="mx-4 mt-2 text-xl text-slate-800 dark:text-white">
          A curated collection of unique digital assets, art, and collectibles
          awaits you. Dive into the future of digital ownership with us.
        </p>

        <Link
          className="mt-8 rounded-lg bg-red-900 p-2 text-center
          text-white transition-transform duration-300 hover:scale-105"
          href="/about"
        >
          Enter NFT Marketplace
        </Link>
      </div>
    </div>
  );
}
