import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

// Define the types for footer sections
type FooterSection = {
  name: string;
  link: string;
};

type SocialLink = {
  platform: string;
  url: string;
};

type FooterData = {
  areas: FooterSection[];
  recommended: FooterSection[];
  developers: FooterSection[];
  topSearches: FooterSection[];
  socialLinks: SocialLink[];
};

const footerData: FooterData = {
  areas: [
    { name: "New Cairo", link: "#" },
    { name: "New Capital City", link: "#" },
    { name: "6th of October City", link: "#" },
    { name: "Ras El Hekma", link: "#" },
  ],
  recommended: [
    { name: "O West Orascom", link: "#" },
    { name: "HAPTown", link: "#" },
    { name: "Madinaty", link: "#" },
    { name: "Telal Sokhna", link: "#" },
  ],
  developers: [
    { name: "Orascom Development Egypt", link: "#" },
    { name: "Hassan Allam Properties", link: "#" },
    { name: "Talaat Moustafa Group", link: "#" },
    { name: "SODIC", link: "#" },
  ],
  topSearches: [
    {
      name: "Apartment for sale in Esse Resid",
      link: "mailto:info@canvas.com",
    },
    { name: "Apartment for sale in Badya", link: "tel:+123456789" },
    {
      name: "Esse residence for sale in Sar..",
      link: "https://www.google.com/maps",
    },
  ],
  socialLinks: [
    { platform: "facebook", url: "https://facebook.com" },
    { platform: "twitter", url: "https://twitter.com" },
    { platform: "instagram", url: "https://instagram.com" },
    { platform: "linkedin", url: "https://linkedin.com" },
    { platform: "youtube", url: "https://youtube.com" },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#404040] text-white py-20 mt-32">
      {/* First Row */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {["areas", "recommended", "developers", "topSearches"].map(
          (section, index) => (
            <div key={index} className="mb-6">
              <h3 className="bold-28 mb-4 text-[#B2A77C] text-center sm:text-left">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h3>
              <ul className="text-center sm:text-left">
                {Array.isArray(footerData[section as keyof FooterData]) &&
                  (
                    footerData[section as keyof FooterData] as FooterSection[]
                  ).map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.link}
                        className="hover:text-gray-400 regular-24"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          )
        )}
      </div>

      {/* Second Row */}
      <div className="w-[80%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 items-center justify-between py-8">
  {/* Logo and Social Icons */}
  <div className="flex flex-col items-start mb-6">
    <Image
      src="/logo.png"
      alt="Logo"
      width={200}
      height={200}
      className="mb-4"
    />
    <div className="flex justify-start space-x-6">
      {footerData.socialLinks.map((social, idx) => {
        const Icon =
          social.platform === "facebook"
            ? FaFacebook
            : social.platform === "twitter"
            ? FaTwitter
            : social.platform === "instagram"
            ? FaInstagram
            : social.platform === "linkedin"
            ? FaLinkedin
            : FaYoutube;

        return (
          <a
            key={idx}
            href={social.url}
            className="text-[#ABAA98] hover:text-gray-200"
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  </div>

  {/* Download App Section */}
  <div className="flex flex-col items-end mb-6">
    <p className="text-[#ABAA98]">Download Our Application</p>
    <div className="flex space-x-4 mt-10">
      <a href="#" className="w-32">
        <Image
          src="/app-store.svg"
          alt="App Store"
          width={120}
          height={40}
        />
      </a>
      <a href="#" className="w-32">
        <Image
          src="/google-play.svg"
          alt="Google Play"
          width={120}
          height={40}
        />
      </a>
    </div>
  </div>
</div>


      <div className="w-[80%] h-[0.5px] mx-auto bg-[#CCCCCC]"></div>

      {/* Third Row */}
      <div className="py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[#ABAA98] text-center sm:text-left">
            © Copyright 2024 - Canvas
          </p>
          <div className="flex space-x-6 justify-center sm:justify-start mt-4 sm:mt-0">
            {["Home", "Rent", "Sell", "About", "Contact"].map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="text-[#ABAA98] hover:text-gray-400"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
