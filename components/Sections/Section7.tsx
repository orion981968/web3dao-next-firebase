import Image from "next/image";
import React from "react";

export default function Section2() {
  return (
    <>
      <h2 className="mb-4 text-center text-3xl text-[#950101] dark:text-white">
        Some Of Our Clients
      </h2>

      <div
        className="relative mb-10 flex w-full overflow-x-hidden 
     dark:bg-slate-900"
      >
        <div
          className="mt-5 flex flex-wrap justify-center whitespace-nowrap px-4 text-black md:animate-slide
          md:flex-nowrap md:px-0 dark:text-white"
        >
          <Image
            src="/images/Logo_1.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="md:w-8"></div>
          <Image
            src="/images/Logo_2.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="md:w-8"></div>
          <Image
            src="/images/Logo_3.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="md:w-8"></div>
          <Image
            src="/images/Logo_4.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="md:w-8"></div>
          <Image
            src="/images/Logo_5.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="md:w-8"></div>
          <Image
            src="/images/Logo_6.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="md:w-8"></div>
          <Image
            src="/images/Logo_7.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="md:w-8"></div>
          <Image
            src="/images/Logo_8.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="md:w-8"></div>
          <Image
            src="/images/Logo_9.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="md:w-8"></div>
          <Image
            src="/images/Logo_10.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="md:w-8"></div>
        </div>

        <div
          className="absolute top-0 mt-5 hidden
          animate-slide2 whitespace-nowrap text-black md:flex dark:text-white"
        >
          <Image
            src="/images/Logo_1.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="w-8"></div>
          <Image
            src="/images/Logo_2.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="w-8"></div>
          <Image
            src="/images/Logo_3.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="w-8"></div>
          <Image
            src="/images/Logo_4.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="w-8"></div>
          <Image
            src="/images/Logo_5.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="w-8"></div>
          <Image
            src="/images/Logo_6.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="w-8"></div>
          <Image
            src="/images/Logo_7.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="w-8"></div>
          <Image
            src="/images/Logo_8.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="w-8"></div>
          <Image
            src="/images/Logo_9.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="w-8"></div>
          <Image
            src="/images/Logo_10.png"
            alt="vargo logo"
            width={120}
            height={120}
          />
          <div className="w-8"></div>
        </div>
      </div>
    </>
  );
}
