import Image from "next/image";
import React from "react";

function Section6() {
  return (
    <div className="grid grid-cols-1 gap-8 px-10 py-12 md:grid-cols-2 md:px-8">
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="py-4 text-3xl sm:text-4xl">
          <span className="mr-2 text-red-900">User Experience (UX)</span>
          <span>Is A Key Factor In The Success Of Any Digital Product.</span>
        </h3>

        <p className="mx-auto text-xl leading-8 text-gray-600 dark:text-gray-300">
          At Web3 Dao, we understand that user experience (UX) is a key factor
          in the success of any digital product. Our UI/UX design services are
          focused on creating intuitive and engaging user interfaces that can
          help your business improve customer satisfaction, increase engagement,
          and drive conversions.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/images/Image_4.jpg"
          alt="Web Development"
          width={700}
          height={700}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Section6;
