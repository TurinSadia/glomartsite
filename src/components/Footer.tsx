import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#404040] text-white py-20 mt-32">
      {/* First Row */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="bold-28 mb-4 text-[#B2A77C]">Areas</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400 regular-24  ">
                New Cairo
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 regular-24  ">
                New Capital City
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 regular-24  ">
                6th of October City
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 regular-24  ">
                Ras El Hekma
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="bold-28 mb-4 text-[#B2A77C]">Recommended</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400 regular-24  ">
                O West Orascom
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 regular-24  ">
                HAPTown
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 regular-24  ">
                Madinaty
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 regular-24  ">
                Telal Sokhna
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="bold-28 mb-4 text-[#B2A77C]">Latest Developers</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400 regular-24 ">
                Orascom Development Egypt
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 regular-24 ">
                Hassan Allam Properties
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 regular-24 ">
                Talaat Moustafa Group
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 regular-24 ">
                SODIC
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="bold-28 mb-4 text-[#B2A77C]">Top Searches</h3>
          <ul>
            <li>
              <a
                href="mailto:info@canvas.com"
                className="hover:text-gray-400 regular-24 "
              >
                Apartment for sale in Esse Resid
              </a>
            </li>
            <li>
              <a
                href="tel:+123456789"
                className="hover:text-gray-400 regular-24 "
              >
                Apartment for sale in Badya w..
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps"
                className="hover:text-gray-400 regular-24 "
              >
                esse residence for sale in Sar..
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex-row  container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center justify-between py-8">
        {/* Logo and Social Icons - Displayed as block */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo.png" // Use your logo here
            alt="Logo"
            width={200}
            height={200}
            className="mb-4"
          />
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              className="text-[#ABAA98] hover:text-gray-200"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-[#ABAA98] hover:text-gray-200"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="text-[#ABAA98] hover:text-gray-200"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-[#ABAA98] hover:text-gray-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://youtube.com"
              className="text-[#ABAA98] hover:text-gray-200"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        <div className="">
          <p className="text-[#ABAA98]">Download Our Application</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="w-32">
              <Image
                src="/app-store.svg" // Use App Store image
                alt="App Store"
                width={120}
                height={40}
              />
            </a>
            <a href="#" className="w-32">
              <Image
                src="/google-play.svg" // Use Google Play image
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
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-[#ABAA98]">© Copyright 2024 - Canvas</p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#ABAA98] hover:text-gray-400">
              Home
            </a>
            <a href="#" className="text-[#ABAA98] hover:text-gray-400">
              Rent
            </a>
            <a href="#" className="text-[#ABAA98] hover:text-gray-400">
              Sell
            </a>
            <a href="#" className="text-[#ABAA98] hover:text-gray-400">
              About
            </a>
            <a href="#" className="text-[#ABAA98] hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
