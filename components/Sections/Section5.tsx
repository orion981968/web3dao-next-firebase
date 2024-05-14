import Image from "next/image";
import React from "react";

function Section5() {
  return (
    <div className="flex flex-col-reverse justify-center gap-8 px-10 py-12 md:flex-row md:px-8">
      <Image
        src="/images/Image_3.jpg"
        alt="Web Development"
        width={700}
        height={700}
        className="rounded-lg"
      />

      <div className="flex flex-col items-center justify-center">
        <div className="py-4 text-center text-3xl sm:text-4xl">
          <h3 className="mr-2 text-red-900">Software Architecture Services</h3>
          <span>To Help Businesses Develop Software Solutions.</span>
        </div>

        <p className="text-center text-xl leading-8 text-gray-600 dark:text-gray-300 ">
          Our software architecture services aim to help businesses design,
          develop, and implement efficient, scalable, and maintainable software
          solutions. Our team of software architects works collaboratively with
          clients to develop custom software architectures that support
          long-term goals and future growth.
        </p>
      </div>
    </div>
  );
}

export default Section5;
