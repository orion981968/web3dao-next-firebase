/* eslint-disable */

"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Web3DaoLogo from "@/public/images/Web3Dao_Logo.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { FaLightbulb } from "react-icons/fa";
import { DropMenuNav } from "./components/DropMenuNav";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { SearchBar } from "./components/SearchBar";
// Define our running shadow animation
const runningShadow = keyframes`
  0% { box-shadow: -100px 0 10px 1px red, 100px 0 10px 1px red; }
  50% { box-shadow: 0 0 10px 1px red, 0 0 10px 1px red; }
  100% { box-shadow: -100px 0 10px 1px red, 100px 0 10px 1px red; }
`;

// Define our Nav component
const Nav = styled.nav`
  animation: ${runningShadow} 2s infinite;
`;

export interface linkArrType {
  path: string;
  name: string;
}

const linkArr: linkArrType[] = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/crime-history", name: "Crime History" },
  { path: "/case-file", name: "Case Files" },
  { path: "/blog", name: "Blog" },
  { path: "/team", name: "Team" },
  { path: "/contact", name: "Contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Initialize theme based on user preference or system theme
  useEffect(() => {
    const userPreference = localStorage.getItem("theme");
    if (userPreference) {
      setTheme(userPreference);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
      localStorage.setItem("theme", systemTheme); // Store system theme as initial preference
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Persist theme change
  };

  return (
    <Nav className="  flex items-center  justify-between p-5">
      <div className="  flex flex-shrink-0 items-center justify-center ">
        <Link href="/">
          <div className="ml-auto flex items-center gap-4">
            <SearchBar />
            <div className=" ">
              <Image
                width="50"
                height="50"
                src={Web3DaoLogo}
                alt="logo image"
                layout="fixed"
              />
            </div>
          </div>
        </Link>
        <h2 className="  text-xl font-semibold tracking-tight">Web3 DAO</h2>
      </div>
      <div className="container -mt-[7px] flex justify-start ">
        <div className="flex-1  justify-start"></div>
        <div className="relative mx-2 flex  items-center justify-between">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme} // Add this line to call the toggleTheme function on click
            className=" rounded-full transition duration-300 ease-in-out focus:outline-none md:mr-4"
          >
            <FaLightbulb size={17} className="dark:text-yellow-500" />
          </button>
        </div>

        {/* Updated Links Container */}
        <div className=" hidden md:flex  md:items-center md:justify-center">
          {linkArr.map((item) => (
            <Link
              key={item.path}
              className={`px-2 py-1 ${
                pathname === `${item.path}` &&
                "font-bold text-rose-500 underline"
              }`}
              href={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <DropMenuNav linkArr={linkArr} />
    </Nav>
  );
};

export default Navbar;
