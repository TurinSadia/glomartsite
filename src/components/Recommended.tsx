"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaPhoneAlt, FaHeart, FaShareAlt, FaHouseUser } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Slider = dynamic(() => import("react-slick"), { ssr: false });



const FEATURE = [
  {
    img: "/slide-1.webp",
    name: "Luxury Villa",
    address: "123 Palm Street, California",
    sqFt: "3500 sq ft",
    description: "A beautiful luxury villa with sea view.",
    price: "1,200,000 EGP",
    phone: "123-456-7890",
  },
  {
    img: "/slide-2.webp",
    name: "Modern Apartment",
    address: "456 City Avenue, New York",
    sqFt: "1800 sq ft",
    description: "A sleek and modern apartment in the city center.",
    price: "850,000 EGP",
    phone: "987-654-3210",
  },
  {
    img: "/slide-3.jpg",
    name: "Country House",
    address: "789 Country Road, Texas",
    sqFt: "4200 sq ft",
    description: "A peaceful country house surrounded by nature.",
    price: "950,000 EGP",
    phone: "321-654-9870",
  },
];

const settings = {
  arrows: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1441, // Extra-large desktop
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1281, // Large desktop
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1025, // Small laptop or desktop
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 769, // Large tablet
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 601, // Small tablet
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481, // Small mobile
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 320, // Extra small mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CardSlider = () => {
  return (
    <div className="pt-12 pb-24 overflow-x-hidden px-20">
      <Slider {...settings}>
        {FEATURE.map((property, index) => (
          <div key={index} className="px-4">
            {/* Card Container */}
            <div className="bg-white w-[95%] mx-auto rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl relative">
              {/* Recommended Banner (Always Visible) */}
              <div className="z-10 absolute top-4 left-4 bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded-md">
                Recommended
              </div>

              {/* Image Section */}
              <div className="w-full h-[50vh] relative overflow-hidden rounded-t-xl">
                <Image
                  src={property.img}
                  alt={property.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 hover:opacity-90"
                />
              </div>

              {/* Top Right Icons (House, Share, Favourite) */}
              <div className="absolute top-4 right-4 flex space-x-3 z-10">
                <a
                  href="#"
                  className="bg-black text-white hover:bg-gray-800 p-2 rounded-full transition-all duration-200"
                  aria-label="House"
                >
                  <FaHouseUser size={20} />
                </a>
                <a
                  href="#"
                  className="bg-black text-white hover:bg-gray-800 p-2 rounded-full transition-all duration-200"
                  aria-label="Share"
                >
                  <FaShareAlt size={20} />
                </a>
                <a
                  href="#"
                  className="bg-black text-white hover:bg-gray-800 p-2 rounded-full transition-all duration-200"
                  aria-label="Favourite"
                >
                  <FaHeart size={20} />
                </a>
              </div>

              {/* Description Section */}
              <div className="p-6 flex flex-col justify-between space-y-4">
                <h2 className="text-2xl font-semibold text-gray-600">
                  {property.name}
                </h2>
                <p className="text-sm text-gray-600">{property.address}</p>
                <p className="text-sm text-gray-600">{property.sqFt}</p>
                <p className="text-sm text-gray-500">{property.description}</p>

                {/* Price and Contact Info (Phone, WhatsApp) */}
                <div className="flex justify-between items-center mt-4 space-x-4">
                  <span className="text-xl font-semibold text-gray-800">
                    {property.price}
                  </span>
                  <div className="flex space-x-4">
                    <a
                      href={`tel:${property.phone}`}
                      className="text-gray-600 hover:text-blue-600 transition-all duration-200"
                      aria-label="Call"
                    >
                      <FaPhoneAlt size={22} />
                    </a>
                    <a
                      href={`https://wa.me/${property.phone}`}
                      target="_blank"
                      className="text-green-600 hover:text-green-800 transition-all duration-200"
                      aria-label="WhatsApp"
                    >
                      <RiWhatsappFill size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
