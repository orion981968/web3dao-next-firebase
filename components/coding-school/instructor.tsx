import React, { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// Team members data
const teamMembers = [
  {
    name: "Kyle Lloyd",
    title: "Full Stack Developer / Instructor / CEO",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/web3dao-coding-school.appspot.com/o/IMG_2240.png?alt=media&token=cef8404a-05b2-44c3-b7cc-efc99fc9b75b",
    socials: {
      linkedin: "https://www.linkedin.com/in/kyle-lloyd-8a9449b3/",
      twitter: "https://twitter.com/TheRealMaster_K",
      instagram: "https://instagram.com/kylelloydofficial",
    },
    bio: "With a rich portfolio of over 300 projects, my journey in the tech world spans across diverse domains, from the glitz of Hollywood to the innovation hub of Silicon Valley. My expertise isn't confined to a single realm; I've navigated through the complexities of Virtual Reality (VR) and Augmented Reality (AR), crafted seamless experiences in mobile apps, and embraced the dynamic world of web development with proficiency in Next.js, React, and the MERN stack. The frontier of blockchain and Web3 isn't uncharted territory for me. I've delved into these cutting-edge technologies, understanding their nuances and leveraging their potential to create decentralized applications that redefine user experiences. As your instructor, I bring not just technical knowledge, but a wealth of real-world experience. You'll learn not only how to code, but how to think and solve problems like a seasoned developer. Join me on this journey to transform your curiosity into expertise and carve your niche in the ever-evolving tech landscape. Additionally, I offer to give an internship and help you get hired, ensuring you have the practical skills and guidance to succeed in the industry.",
  },
];

const Instructor = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex items-center justify-center py-6">
      <div className="container mx-auto max-w-6xl px-2">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Meet the Instructor</h1>
          <p className="text-md max-w-2xl">
            {expanded
              ? teamMembers[0].bio
              : `${teamMembers[0].bio.split(".")[0]}.`}
            <span
              onClick={toggleExpanded}
              className="cursor-pointer text-blue-500"
            >
              {expanded ? " Read less" : " Read more"}
            </span>
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-1">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-red-500 shadow"
            >
              <div className="block items-center justify-center overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={300} // Adjust as needed
                  height={120} // Adjust as needed
                  objectFit="contain"
                  style={{ width: "auto", height: "auto" }} // Add this line
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="mb-2 text-lg font-bold">{member.name}</h5>
                <p className="mb-4 text-sm">{member.title}</p>
                <div className="flex justify-center space-x-4">
                  {/* Social Icons */}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="text-indigo-500 hover:text-indigo-600"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaLinkedin className="h-6 w-6" alt="LinkedIn" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="text-blue-400 hover:text-blue-500"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaTwitter className="h-6 w-6" alt="Twitter" />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      className="text-pink-600 hover:text-pink-700"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaInstagram className="h-6 w-6" alt="Instagram" />
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
};

export default Instructor;
