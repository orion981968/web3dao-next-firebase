// app/page.tsx(Home Page)

import Section1 from "@/components/Sections/Section1";
import Section2 from "@/components/Sections/Section2";
import Section3 from "@/components/Sections/Section3";
import Section4 from "@/components/Sections/Section4";
import Section5 from "@/components/Sections/Section5";
import Section6 from "@/components/Sections/Section6";
import Section7 from "@/components/Sections/Section7";

import Roadmap from "../../app/(home)/roadmap/page";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Web3 Dao Agency",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Section1 />
      <Section2 />
      <br />
      <br />
      <Roadmap />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </main>
  );
}
