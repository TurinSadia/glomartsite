"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import PropertySearchSection from "./SearchSection";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ResponsiveSlider: React.FC = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slidesData = [
    { image: "/slide-1.webp" },
    { image: "/slide-2.webp" },
    { image: "/slide-3.jpg" },
    { image: "/slide-4.jpg" },
  ];

  const fixedText = {
    title: "Find Your New Home",
    description:
      "Search & compare among 5000+ properties and 500+ compounds or list your property for sale",
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed Text Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-6 md:p-12 z-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
          {fixedText.title}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl mb-8 text-center lg:text-left">
          {fixedText.description}
        </p>

        {/* Search Section */}
        <div className="w-full max-w-5xl">
          <PropertySearchSection />
        </div>
      </div>

      {/* Slider for Images */}
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ResponsiveSlider;
