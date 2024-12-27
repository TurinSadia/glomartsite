"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FEATURE } from "@/constants";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { CustomArrowProps } from "react-slick";

const Feature: React.FC = () => {
  const NextArrow: React.FC<CustomArrowProps> = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 right-0 lg:-top-40 lg:right-2 z-10 border border-[#9B7B31] text-[#9B7B31] hover:bg-primary cursor-pointer"
      >
        <RiArrowRightSLine />
      </div>
    );
  };

  const PrevArrow: React.FC<CustomArrowProps> = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="bg-[#9B7B31] text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 lg:-top-40 lg:right-20 z-10  border border-[#9B7B31] text-white hover:bg-primary cursor-pointer"
      >
        <RiArrowLeftSLine />
      </div>
    );
  };

  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  return (
    <section className="py-20 xl:py-32 bg-white">
      <div className="w-[90%] m-auto">
        <div className="mx-4">
          <h4 className="bold-18 text-[#9B7B31]">21 Results Available</h4>
          <h3 className="h3 max-w-lg">Top Most Demanded Spaces</h3>
        </div>
        {/* Container */}

        <div className="pt-12">
          <Slider {...settings}>
            {FEATURE.map((feature) => (
              <div className="px-4" key={feature.URL}>
                <FeatureItem
                  URL={feature.URL}
                  title={feature.title}
                  des={feature.des}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* View More Button */}
        <div className="flex justify-center pt-8">
          <Link
            href="/tour-packages"
            className="px-6 py-3 bg-[#9B7B31] text-white rounded-md text-lg font-medium hover:bg-[#675221] transition duration-300"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};
type FeatureItem = {
  URL: string;
  title: string;
  des: string;
};

const FeatureItem = ({ title, URL, des }: FeatureItem) => {
  return (
    <div>
      <Link href="/" className="overflow-hidden relative">
        <div>
          <Image
            src={URL} // Provide a valid URL or public asset path
            height={600}
            width={510}
            className="hover:scale-105 transition-all duration-700 overflow-hidden"
            alt="Description of the image" // Add alt text for accessibility
          />
        </div>
        <h4 className="capitalize regular-22 absolute top-6 left-0 bg-[#0C0C0C] bg-opacity-50 text-white px-4 py-4  group-hover:!pr-8 transition-all duration-300">
          {title}
        </h4>
        <p className="regular-18 absolute bottom-6 right-0 bg-[#0C0C0C] bg-opacity-45 text-white px-4 py-4 rounded-l-full group-hover:bg-[#675221] group-hover:!pr-8 transition-all duration-300">
          {des}
        </p>
      </Link>
    </div>
  );
};

export default Feature;
