import React from "react";
import RobotImg from "@/public/images/robot.png";
import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Section1() {
  return (
    <div className="mb-4 flex flex-col-reverse px-4 sm:px-10 md:flex-row md:items-center md:px-20 lg:px-40">
      <div
        className={`flex flex-col items-center gap-y-4 text-center text-slate-800
        sm:text-left md:items-start dark:text-white ${roboto.className}`}
      >
        <div>
          <h1 className="py-4 text-4xl text-red-800 sm:text-5xl md:text-6xl">
            Welcome to Web3 DAO
          </h1>

          <span className="text-xl md:text-2xl">Your Partner for - </span>

          <span className="text-xl font-semibold text-red-900 md:text-2xl">
            Innovative Solutions
          </span>
        </div>

        <p className="w-full sm:w-3/4 md:w-[85%]">
          We help businesses like yours achieve their goals with cutting-edge
          web and software solutions.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block rounded bg-[#950101] px-6 py-3 text-lg text-white hover:bg-red-600"
        >
          Get Started Today
        </Link>
      </div>

      <div className="mt-8 sm:ml-8 sm:mt-0 md:flex">
        <Image
          src={RobotImg}
          alt="robot"
          layout="responsive"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
