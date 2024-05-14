"use client";
import Link from "next/link";
import React, { useEffect } from "react";

type ErrorProps = {
  error: any;
};

const Error: React.FC<ErrorProps> = ({ error }) => {
  useEffect(() => {
    // Effect logic here
  }, [error]);

  console.log(error);
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1>Oops! Something went wrong.</h1>
      <p>Please try reloading the page.</p>
      <Link
        href={"/"}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        Home
      </Link>
    </div>
  );
};

export default Error;
