import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// Team members data
const teamMembers = [
  {
    name: "Kyle Lloyd",
    title: "CEO / Lead Developer",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/web3dao-coding-school.appspot.com/o/kyle_avatar.PNG?alt=media&token=4506794b-5288-480e-83dd-8e5f2679be41",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/kyle-lloyd-talk-2-me-about-building-dapps-web-mobile-apps-8a9449b3/",
      twitter: "https://twitter.com/TheRealMaster_K",
      instagram: "https://instagram.com/kylelloydofficial",
    },
  },
  {
    name: "Cait Kelly",
    title: "Chief Operating Officer",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/web3dao-coding-school.appspot.com/o/cait_avatar.png?alt=media&token=9e398455-07aa-49db-b725-c398d49c4a43",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Kiara Tonkin",
    title: "Chief Marketing Officer",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/web3dao-coding-school.appspot.com/o/583.png?alt=media&token=974b21cc-a05c-4b1c-9c47-096996109cd8",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/kyle-lloyd-talk-2-me-about-building-dapps-web-mobile-apps-8a9449b3/",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
];

const TeamPage = () => (
  <div className="flex min-h-screen items-center justify-center py-12">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center">
        <h1 className="WalletModalProvider-800 mb-4 text-4xl font-bold">
          Meet the Team
        </h1>
        <p className="text-md  WalletModalProvider-600">
          With over 100 years of combined experience, our leadership team drives
          our mission forward.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-red-500  shadow"
          >
            <a
              href="#"
              className="block items-center justify-center overflow-hidden"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="h-56 w-full object-cover"
              />
            </a>
            <div className="p-6 text-center">
              {" "}
              {/* Adjusted for text centering */}
              <h5 className="WalletModalProvider-900 mb-2 text-lg  font-bold">
                {member.name}
              </h5>
              <p className="WalletModalProvider-700 mb-4  text-sm">
                {member.title}
              </p>
              <div className="flex justify-center space-x-4">
                {/* Social Icons */}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="text-indigo-500 hover:text-indigo-600"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    className="text-blue-400 hover:text-blue-500"
                  >
                    <FaTwitter className="h-6 w-6" />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    className="text-pink-600 hover:text-pink-700"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TeamPage;
