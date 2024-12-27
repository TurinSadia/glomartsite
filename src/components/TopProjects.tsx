"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function MultipleRows() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  const images = [
    "/slide-1.webp",
    "/slide-2.webp",
    "/slide-3.jpg",
    "/slide-4.jpg",
    "/slide-2.webp",
    "/slide-3.jpg",
    "/slide-4.jpg",
    "/slide-1.webp",
    "/slide-2.webp",
    "/slide-3.jpg",
    "/slide-4.jpg",
    "/slide-2.webp",
    "/slide-3.jpg",
    "/slide-2.webp",
    "/slide-3.jpg",
    "/slide-4.jpg",
    "/slide-2.webp",
    "/slide-3.jpg",
    "/slide-4.jpg",
    "/slide-4.jpg",
  ];

    return (
      <div className="py-32 overflow-x-hidden">
        <div className="py-10 md:py-10 ">
          <div className="w-[90%] m-auto">
            <div className="mx-0">
              <h4 className="bold-18 text-[#9B7B31]">16 Results Available</h4>
              <h3 className="h3 max-w-lg">Top Projects</h3>
            </div>
          </div>
        </div>
        <div className="slider-container px-24 ">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                {/* Card with Image */}
                <div className="relative bg-white  shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  {/* Image Section */}
                  <div className="w-full h-[250px] relative overflow-hidden ">
                    <Image
                      src={image}
                      alt={`Project Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-300 group-hover:opacity-80"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
}

export default MultipleRows;
