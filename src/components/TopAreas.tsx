"use client";

import Image from "next/image";
import React from "react";

const TopAreas = () => {
  const areasData = [
    {
      img: "/afghanistan.jpg",
      title: "Area 1",
      description: "Description 1",
      extra: "Extra 1",
    },
    {
      img: "/germany.jpg",
      title: "Area 2",
      description: "Description 2",
      extra: "Extra 2",
    },
    {
      img: "/england.jpg",
      title: "Area 3",
      description: "Description 3",
      extra: "Extra 3",
    },
    {
      img: "/california.jpg",
      title: "Area 4",
      description: "Description 4",
      extra: "Extra 4",
    },
    {
      img: "/australia.jpg",
      title: "Area 5",
      description: "Description 5",
      extra: "Extra 5",
    },
    {
      img: "/england.jpg",
      title: "Area 6",
      description: "Description 6",
      extra: "Extra 6",
    },
    {
      img: "/australia.jpg",
      title: "Area 7",
      description: "Description 7",
      extra: "Extra 7",
    },
    {
      img: "/germany.jpg",
      title: "Area 8",
      description: "Description 8",
      extra: "Extra 8",
    },
  ];

  return (
    <div>
      <div className="py-10 md:pt-10">
        <div className="w-[90%] m-auto">
          <div className="mx-4">
            <h4 className="bold-18 text-[#9B7B31]">28 Results Available</h4>
            <h3 className="h3 max-w-lg">Top Areas</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-28">
        {areasData.map((area, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center border-[0.8px] border-[#BF9F56] p-6 rounded-lg"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
              <Image
                src={area.img}
                alt={area.title}
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
            <h6 className="text-lg font-bold mb-2">{area.title}</h6>
            <p className="text-sm text-gray-600 mb-2">{area.description}</p>
            <span className="text-xs text-gray-500">{area.extra}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAreas;
