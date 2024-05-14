"use client";
import React, { useEffect } from "react";
import Head from "next/head";

function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-between overflow-hidden bg-slate-100 p-4 dark:bg-slate-800 md:p-24">
      <div className="flex justify-center">
        <div className="flex max-w-4xl flex-col">
          <div className="p-4 text-center text-3xl font-bold text-red-800 ">
            About Us
          </div>

          <div className="p-4 text-center text-5xl font-bold text-red-800 ">
            WHO WE ARE
          </div>
          <div className="text-red-800 dark:text-white">
            <p className="">
              Welcome to Web3 DAO, an agency based in Cape Town, South Africa,
              dedicated to providing custom web2 and web3 solutions that enable
              businesses to stand out in today&apos;s digital landscape. Our
              services range from graphic design, SEO, digital strategy, web
              development, 3D design, game development, NFT and Crypto
              development services, post-production, motion design, and content
              creation.
            </p>
            <p className="">
              We are committed to using the latest blockchain technology
              advancements to build innovative projects that meet the unique
              needs of our clients. At Web3 Dao, we pride ourselves on being at
              the forefront of this emerging field.
            </p>
            <p className="">
              We are pleased to expand our offerings by announcing the launch of
              our sister company, which specializes in using cutting-edge DEFI
              technology. This new venture complements our existing services and
              represents our commitment to staying at the forefront of
              innovation in the digital landscape. We are excited to provide our
              clients with even more comprehensive solutions that meet their
              unique needs.
            </p>
            <p className="">
              Web3 DAO&apos;s origins date back to a single visionary man with a
              passion for expanding the knowledge of others and creating unique
              web2/web3 projects. Today, we have grown into a thriving team and
              family of experts who are dedicated to bringing out the best in
              every individual to serve you and meet your every want and need.
            </p>
          </div>
          <div className="p-4 text-center text-5xl font-bold text-red-800 ">
            OUR PROMISE
          </div>
          <div className="text-red-800 dark:text-white ">
            <p className="">
              At Web3 DAO, our promise to you is simple - we will deliver
              high-quality, custom solutions that meet your unique business
              needs. Our team of experienced professionals leverages the latest
              technology and industry best practices to ensure that your project
              is completed on time, on budget, and to your satisfaction.
            </p>
            <p className="">
              We take pride in our ability to work closely with clients to
              understand their vision and goals, and then implement solutions
              that exceed their expectations. Whether you need a new website,
              custom software, or blockchain development services, we have the
              skills and experience to deliver results.
            </p>
            <p className="">
              Our promise to you extends beyond just delivering quality work -
              we also strive to provide exceptional customer service throughout
              the entire project. We value clear communication and transparency,
              and we are always available to answer any questions or concerns
              you may have.
            </p>
            <p className="">
              Choose Web3 DAO for your next project, and experience the
              difference that comes from working with a team that truly cares
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default AboutPage;
