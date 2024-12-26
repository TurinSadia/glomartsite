"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ResponsiveSlider: React.FC = () => {
  const settings = {
      dots: false,
      autoplay : true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slidesData = [
    {
      title: "Slide 1 Title",
      description: "This is the description for slide 1.",
      image: "/slide-1.webp",
    },
    {
      title: "Slide 2 Title",
      description: "This is the description for slide 2.",
      image: "/slide-2.webp",
    },
    {
      title: "Slide 3 Title",
      description: "This is the description for slide 3.",
      image: "/slide-3.jpg",
    },
    {
      title: "Slide 4 Title",
      description: "This is the description for slide 4.",
      image: "/slide-4.jpg",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="relative ">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center p-4">
              <h1 className="text-xl md:text-3xl font-bold mb-2">
                {slide.title}
              </h1>
              <p className="text-sm md:text-base">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default ResponsiveSlider;
