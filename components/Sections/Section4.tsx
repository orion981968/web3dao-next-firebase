import Image from "next/image";
import React from "react";

function Section4() {
  return (
    <div className="grid grid-cols-1 gap-8 px-10 py-12 md:grid-cols-2 md:px-8">
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-5 text-center text-3xl">
          <span className="text-red-900">Web Development</span> Services
          Encompass A Full-Stack Approach.
        </h3>

        <p className="text-center text-xl leading-8 text-gray-600 dark:text-gray-300">
          Our web development services encompass a full-stack approach to build
          robust web applications and online presence for businesses. Our team
          of web developers has experience with various development frameworks
          and keeps up-to-date with the latest trends and best practices.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/images/Image_2.jpg"
          alt="Web Development"
          width={700}
          height={700}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Section4;
