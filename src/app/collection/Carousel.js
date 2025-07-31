"use client";
import React, { useState } from "react";
import Image from "next/image";

import { ChevronRightRounded } from "@mui/icons-material";
import { ChevronLeftRounded } from "@mui/icons-material";

import style1 from "../assets/CollectionCut/style7.jpg";
import style2 from "../assets/CollectionCut/style2.png";
import style3 from "../assets/CollectionCut/style3.png";
import style4 from "../assets/CollectionCut/style4.jpg";
import style5 from "../assets/CollectionCut/style5.jpg";
import style6 from "../assets/CollectionCut/style6.jpeg";
import style7 from "../assets/CollectionCut/style8.jpeg";


const images = [style1, style2, style3, style4, style5, style6, style7];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;
  const slideWidth = 230 + 24 * 2;
  const containerWidth = visibleCount * slideWidth;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 > images.length - visibleCount ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? images.length - visibleCount : prev - 1
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full mx-auto">
      <button
        onClick={prevSlide}
        className="z-10 text-3xl text-black hover:text-gray-500 transition mx-2 cursor-pointer"
      >
        <ChevronLeftRounded style={{fontSize: "40px"}}/>
      </button>

      <div className="overflow-hidden" style={{ width: containerWidth }}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`,
          }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-[180px] h-[260px] rounded-[20px] overflow-hidden flex-shrink-0 mx-12"
            >
              <Image
                src={img}
                alt={`Image ${idx}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="z-10 text-3xl text-black hover:text-gray-500 transition mx-2 cursor-pointer"
      >
        <ChevronRightRounded style={{fontSize: "40px"}}/>
      </button>
    </div>
  );
}
