// components/shared/Footer.tsx

"use client";
import Link from "next/link";
import React from "react";
import ScrollToTop from "./ScrollToTop";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Web3DaoLogo from "@/public/images/Web3Dao_Logo.png";
import Image from "next/image";

const iconsArray = [
  {
    iconName: (
      <BsTwitterX size={30} className="cursor-pointer hover:text-red-900" />
    ),
    path: "https://x.com/_Web3Dao_",
  },
  {
    iconName: (
      <FaFacebook size={30} className="cursor-pointer hover:text-red-900" />
    ),
    path: "https://www.facebook.com/axiombizsolutions",
  },
  {
    iconName: (
      <FaInstagram size={30} className="cursor-pointer hover:text-red-900" />
    ),
    path: "https://instagram.com/web3_dao",
  },
  {
    iconName: (
      <FaLinkedin size={30} className="cursor-pointer hover:text-red-900" />
    ),
    path: "https://www.linkedin.com/company/web3dao?originalSubdomain=za",
  },
  {
    iconName: (
      <FaTelegram size={30} className="cursor-pointer hover:text-red-900" />
    ),
    path: "https://t.me/+8oMarp3VyJllZWY8",
  },
  {
    iconName: (
      <FaDiscord size={30} className="cursor-pointer hover:text-red-900" />
    ),
    path: "https://discord.gg/RJZP2VbbUs",
  },
];

function Footer() {
  return (
    <footer
      className="relative bg-slate-200 pb-4 pt-12 text-black
      dark:bg-black dark:text-white"
    >
      <div className="text-center md:flex md:items-center md:justify-around">
        <div className="mb-10 sm:mb-0">
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src={Web3DaoLogo}
                height={45}
                width={45}
                alt="logo image"
              />
            </Link>
            <span className="ml-2 text-xl">Web3 DAO</span>
          </div>
          <p className="mt-2">Building innovative solutions for tomorrow.</p>
        </div>

        <ScrollToTop />

        <div className="gap-4 md:flex md:flex-col">
          <div className="mb-12 md:mb-0 md:flex md:flex-col">
            {/* Add additional column sections here */}
            <h2 className="mb-2 text-xl font-semibold">Contact us</h2>
            <p>Email:</p>
            <p className="text-red-900">caity@web3dao.digital</p>
            <p className="text-red-900">kyle@web3dao.digital</p>
          </div>

          <div className="mt-6 flex justify-center gap-6">
            {iconsArray.map((item) => (
              <Link
                key={item.path}
                target="_blank"
                rel="noopener noreferrer"
                href={item.path}
              >
                {item.iconName}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mt-10 flex flex-col border-t border-gray-700 pt-2
            text-center text-gray-500"
      >
        <p>&copy; {new Date().getFullYear()} Web3 Dao. All rights reserved.</p>
        <div>
          <a href="#" className="mr-2 hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:text-gray-400">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
