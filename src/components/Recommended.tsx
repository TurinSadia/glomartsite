"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const RecommendedSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true, // Enable autoplay
    speed: 500,
    slidesToShow: 3, // Showing 3 cards per slide
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024, // For medium screens (tablets)
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
        },
      },
      {
        breakpoint: 768, // For smaller screens (mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        },
      },
    ],
  };

  const recommendedData = [
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

    return (
      

 <section className="py-20 xl:py-32 bg-white">
      <div className="w-[90%] m-auto">
        <div className="mx-4">
          
          <h3 className="h3 max-w-lg">Recommended</h3>
        </div>
        </div>

    <div className="w-[90%] mx-auto">
      <Slider {...settings}>
        {recommendedData.map((property, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl mx-4" // Added margin for spacing between cards
          >
            {/* Image Section */}
            <div className="w-[100%] h-[50vh] relative overflow-hidden rounded-t-xl">
              <Image
                src={property.img}
                alt={property.name}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 hover:opacity-90"
              />
            </div>

            {/* Text Information Section */}
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
        ))}
      </Slider>
                </div>
                
    </section>
  );
};

export default RecommendedSlider;
