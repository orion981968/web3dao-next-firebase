import React from "react";
import Image from "next/image";

type WhitePaperSection = {
  id: string;
  title: string;
  content: string[];
  imageUrl?: string;
};

const whitePaperSections: WhitePaperSection[] = [
  {
    id: "1",
    title: "Poseidon Pest Control: Introduction",
    content: [
      "This was made by a group of software engineers who have been on discord for a while and got tired of seeing people scammed as well their favorite servers get nuked. Our vision is to work on this continually and make it an official anti-virus for all servers on discord. We made sure to test thoroughly and tested it on real live servers with 1000s of members during the beta phase. Had enough of those pesky scammers raining on your Discord parade? Fear not, because Poseidon Pest Control is here to kick those troublemakers out and bring back the good vibes!",
    ],
  },
  {
    id: "2",
    title: "No More Impersonation",
    content: [
      "Poseidon ain't about that 'Admin/Mod name' imitation game in your Discord server. We're like the bouncers at the coolest virtual party—no fake VIP passes allowed!",
    ],
  },
  {
    id: "3",
    title: "Protecting Your Channels",
    content: [
      "Poseidon's got your back—no joining the group with sneaky names like 'announcements' to trick your peeps into thinking it's your official announcement channel. We're here to keep your community safe and sound.",
    ],
  },
  {
    id: "4",
    title: "Raid Prevention",
    content: [
      "Adios to those pesky raids! Poseidon's got the moves—when someone tries to flood your server with duplicate messages or raid the place, we kick into action. Messages? Deleted. Offender? Timed out. And a little note sent their way, gently suggesting they follow specific instructions if they've been hacked. If not? Well, let's just call it like it is—they're just a digital pest!",
    ],
  },
  {
    id: "5",
    title: "Preserving the Fun",
    content: [
      "Poseidon's all about the fun vibes, and we won't let those slimy scammers ruin the GIF party! While we're giving those links the boot to keep things safe, we're keeping the GIF feature alive and kicking. Because why should your community miss out on the joy of animated hilarity just because of a few bad apples? Poseidon's here to let the good times roll, one GIF at a time!",
    ],
  },
  {
    id: "6",
    title: "Rewarding Active Members",
    content: [
      "Poseidon knows how to treat its MVPs! For your active members dropping messages, we've got something special in store. Brace yourselves for random OG goodies or exclusive white-listing privileges. It's our way of saying, 'Hey, thanks for making waves in our community!'",
    ],
  },
  {
    id: "7",
    title: "Welcoming Newcomers",
    content: [
      "Poseidon's got your newbies covered! When a fresh face joins your community, we'll slide them a message letting them know a real, live human is on standby to answer any questions they have about the server. It's like a virtual welcome wagon, making sure they're in the loop about what's going on and what awesome things you've got to offer. And hey, if you're not vibing with this feature, no worries—you can easily switch it off. Because at Poseidon, we believe in keeping things as chill as the ocean breeze.",
    ],
  },
  {
    id: "8",
    title: "In Action",
    content: [
      "Check out Poseidon in action! We've got a nifty feature that shoots a message over to your newcomers, giving them the lowdown on what's up in the server. Think of it as Poseidon's way of rolling out the virtual welcome mat. And hey, if you're not feeling it, no biggie—just flip the switch to turn it off.",
    ],
  },
];

function PoseidonPestControl() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="pt-10">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/web3-dao-agency-articles.appspot.com/o/Poseidon_Logo_No_Background.png?alt=media&token=a4350f6b-5cb3-44a9-a11f-2f6bffc8b432"
          alt="Poseidon Pest Control Logo"
          width={500}
          height={300}
          className="h-auto max-w-full"
        />
      </div>
      <h1 className="mb-11 pt-10 text-center text-3xl font-bold text-blue-700 md:text-5xl">
        Poseidon Pest Control Discord Bot
      </h1>

      <div className="my-10 w-full max-w-6xl">
        <h1 className="mb-6 text-center text-2xl font-bold md:text-4xl">
          Documentation
        </h1>

        <div className="whitepaper-navigation mb-6">
          <ul className="flex flex-wrap justify-center gap-4">
            {whitePaperSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-red-500 hover:text-blue-700"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6 text-center text-blue-500">
          <p>(Click one of the above headings to jump to a section)</p>
        </div>

        {whitePaperSections.map((section) => (
          <div key={section.id} id={section.id} className="mb-8">
            <h2 className="mb-2 pt-5 text-2xl font-semibold text-blue-800">
              {section.title}
            </h2>
            <div className="border-l-4 border-blue-600 pl-4">
              {section.content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1 className="mb-6 text-center text-2xl font-bold text-blue-500 md:text-4xl">
          Give your new members a warm welcome
        </h1>
      </div>

      <div className="mx-auto max-w-4xl">
        <p className="text-base leading-relaxed">
          Check out Poseidon in action! We&apos;ve got a nifty feature that
          shoots a message over to your newcomers, giving them the lowdown on
          what&apos;s up in the server. Think of it as Poseidon&apos;s way of
          rolling out the virtual welcome mat. And hey, if you&apos;re not
          feeling it, no biggie—just flip the switch to turn it off.
        </p>
      </div>

      <div className="my-8">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/web3-dao-agency-articles.appspot.com/o/Poseidon%2Funnamed.jpg?alt=media&token=8fa90b46-0fbf-403e-a14d-3ba0e70b5d04"
          alt="Poseidon in action"
          width={500}
          height={500}
          className="h-auto max-w-full"
        />
      </div>

      <div className="w-full max-w-6xl px-4 py-8">
        <div className="mb-8">
          <h3 className="mb-4 text-center text-2xl font-semibold text-blue-500">
            Accounts &quot;Announcements&quot; Timeout
          </h3>
          <p>
            Behold! Witnessing the finesse, I conjured a pest account to
            demonstrate the sheer prowess of our bot. Accounts masquerading as
            &quot;announcements&quot; are swiftly ushered into a temporary
            timeout and messages are deleted. At Poseidon, we&apos;re not just
            defenders of your server; we&apos;re conductors of smooth seas,
            ensuring that disruptive elements are gently but firmly set adrift.
          </p>
          <div className="aspect-w-16 aspect-h-9 my-4 flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_B2tWVkrkv0?si=iUU3uv2NtBSgEa8h"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-center text-2xl font-semibold text-blue-500">
            Discord Channel Link Prevention
          </h3>
          <p>
            I deftly slipped a Discord channel link into the mix, only to have
            Poseidon flex its swift moves, instantly banishing the link from
            sight. At Poseidon, we&apos;re the unsung heroes of server serenity,
            ensuring no unwanted links muddy the waters. Your server&apos;s
            tranquility is our top priority. PS - Only Admins can send links.
          </p>
          <div className="aspect-w-16 aspect-h-9 my-4 flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mHUCDRtJYiI?si=nJz_a73cd-lKV3fo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-center text-2xl font-semibold text-blue-500">
            Preserving the Fun with GIFs
          </h3>
          <p>
            As pledged, Poseidon stays true to the fun! While we&apos;re on the
            lookout for trouble, we&apos;ve happily preserved the magic of GIFs.
            Poseidon understands that joy shouldn&apos;t be sacrificed just
            because a few rogue elements attempt to rain on the parade.
          </p>

          <div className="aspect-w-16 aspect-h-9 my-4 flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WG2HTtIyWDU?si=tmZ7c4hfjOX2rz2k"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-center text-2xl font-semibold text-blue-500">
            Prevent scammers from using your identity
          </h3>
          <p>
            And best of all, those cunning scammers will find themselves utterly
            thwarted! No longer will they possess the power to alter their
            identities to masquerade as the Community Moderators or Admins.
            Their deceitful messages shall be halted in their tracks, never to
            plague your community again! Add the roles &quot;Community
            Moderator&quot; and &quot;Owner&quot; to your server, and Poseidon
            will prevent anyone from trying to imitate you in messages.
          </p>
          <div className="aspect-w-16 aspect-h-9 my-4 flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4i3U-dZuCPU?si=xDu1K47FRN-b_4xh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoseidonPestControl;
